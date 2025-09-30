'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Stage, Layer, Line, Circle, Rect } from 'react-konva';
import { 
  Brush,
  Circle as CircleIcon,
  Square,
  Minus,
  Download,
  Upload,
  RotateCcw,
  Palette,
  Eraser
} from 'lucide-react';

interface Point {
  x: number;
  y: number;
}

interface DrawingLine {
  tool: string;
  points: number[];
  color: string;
  strokeWidth: number;
}

interface PaintCanvasProps {
  canvasWidth?: number;
  canvasHeight?: number;
}

const PaintCanvas: React.FC<PaintCanvasProps> = ({ 
  canvasWidth = 800, 
  canvasHeight = 600 
}) => {
  const [tool, setTool] = useState('pen');
  const [lines, setLines] = useState<DrawingLine[]>([]);
  const [color, setColor] = useState('#8b5cf6');
  const [strokeWidth, setStrokeWidth] = useState(5);
  const [isDrawing, setIsDrawing] = useState(false);
  const stageRef = useRef<any>(null);

  const colors = [
    '#8b5cf6', // Purple
    '#c084fc', // Light purple
    '#e5e7eb', // Silver
    '#000000', // Black
    '#ffffff', // White
    '#ef4444', // Red
    '#22c55e', // Green
    '#3b82f6', // Blue
    '#f59e0b', // Yellow
    '#f97316', // Orange
    '#ec4899', // Pink
    '#14b8a6', // Teal
  ];

  const tools = [
    { name: 'pen', icon: Brush, label: 'Brush' },
    { name: 'eraser', icon: Eraser, label: 'Eraser' },
    { name: 'circle', icon: CircleIcon, label: 'Circle' },
    { name: 'rect', icon: Square, label: 'Rectangle' },
    { name: 'line', icon: Minus, label: 'Line' },
  ];

  const handleMouseDown = (e: any) => {
    setIsDrawing(true);
    const pos = e.target.getStage().getPointerPosition();
    
    if (tool === 'pen' || tool === 'eraser') {
      setLines([...lines, { 
        tool, 
        points: [pos.x, pos.y], 
        color: tool === 'eraser' ? '#ffffff' : color,
        strokeWidth: tool === 'eraser' ? strokeWidth * 2 : strokeWidth
      }]);
    }
  };

  const handleMouseMove = (e: any) => {
    if (!isDrawing) return;

    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    
    if (tool === 'pen' || tool === 'eraser') {
      let lastLine = lines[lines.length - 1];
      lastLine.points = lastLine.points.concat([point.x, point.y]);
      
      lines.splice(lines.length - 1, 1, lastLine);
      setLines(lines.concat());
    }
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    setLines([]);
  };

  const downloadCanvas = () => {
    if (stageRef.current) {
      const uri = stageRef.current.toDataURL();
      const link = document.createElement('a');
      link.download = `bitcoin-painting-${Date.now()}.png`;
      link.href = uri;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const saveToSatoshis = () => {
    // Placeholder for saving with satoshis
    alert('Saving painting with satoshis... (Feature coming soon!)');
  };

  return (
    <div className="flex flex-col bg-gray-900 rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center justify-between p-4 bg-gray-800 border-b border-purple-500/20">
        {/* Tools */}
        <div className="flex items-center gap-2">
          {tools.map((t) => {
            const Icon = t.icon;
            return (
              <button
                key={t.name}
                onClick={() => setTool(t.name)}
                className={`p-2 rounded-lg transition-all ${
                  tool === t.name
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
                title={t.label}
              >
                <Icon size={18} />
              </button>
            );
          })}
        </div>

        {/* Stroke Width */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-300">Size:</span>
          <input
            type="range"
            min="1"
            max="50"
            value={strokeWidth}
            onChange={(e) => setStrokeWidth(Number(e.target.value))}
            className="w-20"
          />
          <span className="text-sm text-gray-300 w-8">{strokeWidth}</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={clearCanvas}
            className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            title="Clear Canvas"
          >
            <RotateCcw size={18} />
          </button>
          <button
            onClick={downloadCanvas}
            className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            title="Download PNG"
          >
            <Download size={18} />
          </button>
          <button
            onClick={saveToSatoshis}
            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all"
          >
            💰 Save with Satoshis
          </button>
        </div>
      </div>

      {/* Color Palette */}
      <div className="flex items-center gap-2 p-3 bg-gray-800 border-b border-purple-500/20">
        <Palette size={16} className="text-gray-300" />
        <div className="flex gap-2">
          {colors.map((c) => (
            <button
              key={c}
              onClick={() => setColor(c)}
              className={`w-8 h-8 rounded-full border-2 transition-all ${
                color === c ? 'border-white scale-110' : 'border-gray-600'
              }`}
              style={{ backgroundColor: c }}
              title={c}
            />
          ))}
        </div>
        <div className="ml-4 flex items-center gap-2">
          <span className="text-sm text-gray-300">Custom:</span>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-8 h-8 rounded cursor-pointer"
          />
        </div>
      </div>

      {/* Canvas */}
      <div className="flex-1 bg-white relative overflow-hidden">
        <Stage
          width={canvasWidth}
          height={canvasHeight}
          onMouseDown={handleMouseDown}
          onMousemove={handleMouseMove}
          onMouseup={handleMouseUp}
          ref={stageRef}
          className="cursor-crosshair"
        >
          <Layer>
            {lines.map((line, i) => (
              <Line
                key={i}
                points={line.points}
                stroke={line.color}
                strokeWidth={line.strokeWidth}
                tension={0.5}
                lineCap="round"
                lineJoin="round"
                globalCompositeOperation={
                  line.tool === 'eraser' ? 'destination-out' : 'source-over'
                }
              />
            ))}
          </Layer>
        </Stage>
      </div>

      {/* Canvas Info */}
      <div className="p-2 bg-gray-800 text-xs text-gray-400 text-center">
        Canvas: {canvasWidth} × {canvasHeight} • Tool: {tool} • Color: {color} • Size: {strokeWidth}px
      </div>
    </div>
  );
};

export default PaintCanvas;