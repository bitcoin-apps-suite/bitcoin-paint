'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import tinycolor from 'tinycolor2';
import { saveAs } from 'file-saver';
import { 
  Brush,
  Circle as CircleIcon,
  Square,
  Minus,
  Download,
  Upload,
  RotateCcw,
  Palette,
  Eraser,
  Type,
  Star as StarIcon,
  ArrowRight,
  Undo,
  Redo,
  Layers,
  Save,
  Eye,
  EyeOff,
  Plus,
  Settings,
  Pipette
} from 'lucide-react';

interface Point {
  x: number;
  y: number;
}

interface DrawingPath {
  points: Point[];
  color: string;
  width: number;
  tool: string;
}

interface FallbackCanvasProps {
  canvasWidth?: number;
  canvasHeight?: number;
}

const FallbackCanvas: React.FC<FallbackCanvasProps> = ({ 
  canvasWidth = 1000, 
  canvasHeight = 700 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState('brush');
  const [color, setColor] = useState('#8b5cf6');
  const [brushSize, setBrushSize] = useState(5);
  const [paths, setPaths] = useState<DrawingPath[]>([]);
  const [currentPath, setCurrentPath] = useState<Point[]>([]);
  const [history, setHistory] = useState<DrawingPath[][]>([]);
  const [historyStep, setHistoryStep] = useState(0);
  const [brushOpacity, setBrushOpacity] = useState(1);
  const [isDragOver, setIsDragOver] = useState(false);

  const colors = [
    '#8b5cf6', '#c084fc', '#e5e7eb', '#000000', '#ffffff',
    '#ef4444', '#22c55e', '#3b82f6', '#f59e0b', '#f97316',
    '#ec4899', '#14b8a6', '#6366f1', '#84cc16', '#f43f5e'
  ];

  const tools = [
    { name: 'brush', icon: Brush, label: 'Brush' },
    { name: 'eraser', icon: Eraser, label: 'Eraser' },
    { name: 'line', icon: Minus, label: 'Line' },
    { name: 'circle', icon: CircleIcon, label: 'Circle' },
    { name: 'rect', icon: Square, label: 'Rectangle' },
    { name: 'text', icon: Type, label: 'Text' },
  ];

  // Clear canvas and redraw
  const redraw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw all paths
    paths.forEach(path => {
      if (path.points.length < 2) return;

      ctx.strokeStyle = path.color;
      ctx.lineWidth = path.width;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      if (path.tool === 'eraser') {
        ctx.globalCompositeOperation = 'destination-out';
      } else {
        ctx.globalCompositeOperation = 'source-over';
      }

      ctx.beginPath();
      ctx.moveTo(path.points[0].x, path.points[0].y);

      for (let i = 1; i < path.points.length; i++) {
        ctx.lineTo(path.points[i].x, path.points[i].y);
      }

      ctx.stroke();
    });

    // Draw current path
    if (currentPath.length > 1) {
      ctx.strokeStyle = tool === 'eraser' ? '#ffffff' : tinycolor(color).setAlpha(brushOpacity).toRgbString();
      ctx.lineWidth = tool === 'eraser' ? brushSize * 2 : brushSize;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      if (tool === 'eraser') {
        ctx.globalCompositeOperation = 'destination-out';
      } else {
        ctx.globalCompositeOperation = 'source-over';
      }

      ctx.beginPath();
      ctx.moveTo(currentPath[0].x, currentPath[0].y);

      for (let i = 1; i < currentPath.length; i++) {
        ctx.lineTo(currentPath[i].x, currentPath[i].y);
      }

      ctx.stroke();
    }
  }, [paths, currentPath, tool, color, brushSize, brushOpacity]);

  // Save to history
  const saveToHistory = useCallback(() => {
    const newHistory = history.slice(0, historyStep + 1);
    newHistory.push([...paths]);
    setHistory(newHistory);
    setHistoryStep(newHistory.length - 1);
  }, [paths, history, historyStep]);

  // Undo
  const undo = () => {
    if (historyStep > 0) {
      setHistoryStep(historyStep - 1);
      setPaths([...history[historyStep - 1]]);
    }
  };

  // Redo
  const redo = () => {
    if (historyStep < history.length - 1) {
      setHistoryStep(historyStep + 1);
      setPaths([...history[historyStep + 1]]);
    }
  };

  // Clear canvas
  const clearCanvas = () => {
    setPaths([]);
    setCurrentPath([]);
    saveToHistory();
  };

  // Download canvas
  const downloadCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.toBlob((blob) => {
      if (blob) {
        saveAs(blob, `bitcoin-painting-${Date.now()}.png`);
      }
    });
  };

  // Get mouse position
  const getMousePos = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  // Mouse handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const pos = getMousePos(e);
    setIsDrawing(true);
    setCurrentPath([pos]);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    
    const pos = getMousePos(e);
    setCurrentPath(prev => [...prev, pos]);
  };

  const handleMouseUp = () => {
    if (isDrawing && currentPath.length > 0) {
      const newPath: DrawingPath = {
        points: [...currentPath],
        color: tool === 'eraser' ? '#ffffff' : tinycolor(color).setAlpha(brushOpacity).toRgbString(),
        width: tool === 'eraser' ? brushSize * 2 : brushSize,
        tool
      };

      setPaths(prev => [...prev, newPath]);
      setCurrentPath([]);
      saveToHistory();
    }
    setIsDrawing(false);
  };

  // Handle drop events
  const handleDrop = (e: React.DragEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    
    try {
      const data = JSON.parse(e.dataTransfer.getData('application/json'));
      
      if (data.type === 'tool') {
        setTool(data.tool);
      } else if (data.type === 'color') {
        setColor(data.color);
      }
    } catch (error) {
      console.error('Error handling drop:', error);
    }
  };

  // Listen for new painting events
  useEffect(() => {
    const handleNewPainting = () => {
      clearCanvas();
    };

    window.addEventListener('newPainting', handleNewPainting);
    return () => window.removeEventListener('newPainting', handleNewPainting);
  }, []);

  // Redraw when paths change
  useEffect(() => {
    redraw();
  }, [redraw]);

  return (
    <div className="flex flex-col bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
      {/* Top Toolbar */}
      <div className="flex items-center justify-between p-4 bg-gray-800 border-b border-purple-500/20">
        {/* Tools */}
        <div className="flex items-center gap-2">
          {tools.map((t) => {
            const IconComponent = t.icon;
            return (
              <button
                key={t.name}
                onClick={() => setTool(t.name)}
                className={`p-2 rounded-lg transition-all ${
                  tool === t.name
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
                title={t.label}
              >
                <IconComponent size={18} />
              </button>
            );
          })}
        </div>

        {/* Brush Settings */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-300">Size:</span>
            <input
              type="range"
              min="1"
              max="50"
              value={brushSize}
              onChange={(e) => setBrushSize(Number(e.target.value))}
              className="w-20"
            />
            <span className="text-sm text-gray-300 w-8">{brushSize}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-300">Opacity:</span>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.1"
              value={brushOpacity}
              onChange={(e) => setBrushOpacity(Number(e.target.value))}
              className="w-20"
            />
            <span className="text-sm text-gray-300 w-8">{Math.round(brushOpacity * 100)}%</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={undo}
            disabled={historyStep <= 0}
            className="p-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            title="Undo"
          >
            <Undo size={18} />
          </button>
          <button
            onClick={redo}
            disabled={historyStep >= history.length - 1}
            className="p-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            title="Redo"
          >
            <Redo size={18} />
          </button>
          <button
            onClick={clearCanvas}
            className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            title="Clear Canvas"
          >
            <RotateCcw size={18} />
          </button>
          <button
            onClick={downloadCanvas}
            className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            title="Download"
          >
            <Download size={18} />
          </button>
        </div>
      </div>

      {/* Color Palette */}
      <div className="flex items-center gap-4 p-3 bg-gray-800 border-b border-purple-500/20">
        <div className="flex items-center gap-2">
          <Palette size={16} className="text-gray-300" />
          <span className="text-sm text-gray-300">Color:</span>
          <div className="flex gap-2">
            {colors.map((c) => (
              <button
                key={c}
                onClick={() => setColor(c)}
                className={`w-8 h-8 rounded-full border-2 transition-all ${
                  color === c ? 'border-white scale-110 shadow-lg' : 'border-gray-600'
                }`}
                style={{ backgroundColor: c }}
                title={c}
              />
            ))}
          </div>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-8 h-8 rounded cursor-pointer"
            title="Custom Color"
          />
        </div>
      </div>

      {/* Canvas */}
      <div className="flex-1 bg-white relative overflow-hidden flex items-center justify-center">
        <canvas
          ref={canvasRef}
          width={canvasWidth}
          height={canvasHeight}
          className={`border-2 border-gray-300 cursor-crosshair ${isDragOver ? 'border-purple-400 border-4' : ''}`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onDrop={handleDrop}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragOver(true);
          }}
          onDragEnter={(e) => {
            e.preventDefault();
            setIsDragOver(true);
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            setIsDragOver(false);
          }}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            background: 'white'
          }}
        />
      </div>

      {/* Status Bar */}
      <div className="p-2 bg-gray-800 text-xs text-gray-400 flex justify-between">
        <span>Tool: {tool} | Size: {brushSize}px | Opacity: {Math.round(brushOpacity * 100)}%</span>
        <span>Canvas: {canvasWidth}x{canvasHeight}</span>
      </div>
    </div>
  );
};

export default FallbackCanvas;