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
  RotateCcw,
  Eraser,
  Type,
  Undo,
  Redo
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
  const [color, setColor] = useState('#DC2626');
  const [brushSize, setBrushSize] = useState(5);
  const [paths, setPaths] = useState<DrawingPath[]>([]);
  const [currentPath, setCurrentPath] = useState<Point[]>([]);
  const [history, setHistory] = useState<DrawingPath[][]>([]);
  const [historyStep, setHistoryStep] = useState(0);
  const [brushOpacity, setBrushOpacity] = useState(1);
  const [isDragOver, setIsDragOver] = useState(false);

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
    if (currentPath.length > 0) {
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

      if (tool === 'circle' && currentPath.length === 2) {
        // Draw preview circle
        const tempPoints = generateCircle(currentPath[0], currentPath[1]);
        ctx.moveTo(tempPoints[0].x, tempPoints[0].y);
        for (let i = 1; i < tempPoints.length; i++) {
          ctx.lineTo(tempPoints[i].x, tempPoints[i].y);
        }
      } else if (tool === 'rect' && currentPath.length === 2) {
        // Draw preview rectangle
        const tempPoints = generateRectangle(currentPath[0], currentPath[1]);
        ctx.moveTo(tempPoints[0].x, tempPoints[0].y);
        for (let i = 1; i < tempPoints.length; i++) {
          ctx.lineTo(tempPoints[i].x, tempPoints[i].y);
        }
      } else if (tool === 'line' && currentPath.length === 2) {
        // Draw preview line
        ctx.moveTo(currentPath[0].x, currentPath[0].y);
        ctx.lineTo(currentPath[1].x, currentPath[1].y);
      } else if (currentPath.length > 1) {
        // Draw freehand path
        ctx.moveTo(currentPath[0].x, currentPath[0].y);
        for (let i = 1; i < currentPath.length; i++) {
          ctx.lineTo(currentPath[i].x, currentPath[i].y);
        }
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

  // Generate circle points
  const generateCircle = (start: Point, end: Point): Point[] => {
    const centerX = start.x;
    const centerY = start.y;
    const radius = Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
    
    const points: Point[] = [];
    const segments = Math.max(32, Math.floor(radius * 0.5));
    
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * 2 * Math.PI;
      points.push({
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle)
      });
    }
    
    return points;
  };

  // Generate rectangle points
  const generateRectangle = (start: Point, end: Point): Point[] => {
    return [
      { x: start.x, y: start.y },
      { x: end.x, y: start.y },
      { x: end.x, y: end.y },
      { x: start.x, y: end.y },
      { x: start.x, y: start.y } // Close the rectangle
    ];
  };

  // Mouse handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const pos = getMousePos(e);
    setIsDrawing(true);
    
    if (tool === 'brush' || tool === 'eraser') {
      setCurrentPath([pos]);
    } else {
      // For shapes, store starting point
      setCurrentPath([pos]);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    
    const pos = getMousePos(e);
    
    if (tool === 'brush' || tool === 'eraser') {
      // Freehand drawing
      setCurrentPath(prev => [...prev, pos]);
    } else if (tool === 'line' || tool === 'circle' || tool === 'rect') {
      // For shapes, only store start and current point
      setCurrentPath(prev => [prev[0], pos]);
    }
  };

  const handleMouseUp = () => {
    if (isDrawing && currentPath.length > 0) {
      let finalPoints = [...currentPath];
      
      // Generate shape points if needed
      if (tool === 'circle' && currentPath.length === 2) {
        finalPoints = generateCircle(currentPath[0], currentPath[1]);
      } else if (tool === 'rect' && currentPath.length === 2) {
        finalPoints = generateRectangle(currentPath[0], currentPath[1]);
      }

      const newPath: DrawingPath = {
        points: finalPoints,
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
    <div className="flex flex-col bg-gray-900 rounded-lg overflow-hidden shadow-2xl h-full mb-28">
      {/* Canvas - MOVED TO TOP */}
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
    </div>
  );
};

export default FallbackCanvas;