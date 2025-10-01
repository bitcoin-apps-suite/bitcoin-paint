'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Stage, Layer, Line, Circle, Rect, Star, Arrow, Text } from 'react-konva';
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

interface DrawingElement {
  id: string;
  type: 'line' | 'circle' | 'rect' | 'star' | 'arrow' | 'text';
  points?: number[];
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  radius?: number;
  color: string;
  strokeWidth: number;
  fill?: string;
  text?: string;
  fontSize?: number;
  layerId: string;
}

interface Layer {
  id: string;
  name: string;
  visible: boolean;
  opacity: number;
  elements: DrawingElement[];
}

interface AdvancedPaintCanvasProps {
  canvasWidth?: number;
  canvasHeight?: number;
}

const AdvancedPaintCanvas: React.FC<AdvancedPaintCanvasProps> = ({ 
  canvasWidth = 1000, 
  canvasHeight = 700 
}) => {
  const [tool, setTool] = useState('brush');
  const [layers, setLayers] = useState<Layer[]>([
    { id: '1', name: 'Layer 1', visible: true, opacity: 1, elements: [] }
  ]);
  const [activeLayerId, setActiveLayerId] = useState('1');
  const [color, setColor] = useState('#8b5cf6');
  const [fillColor, setFillColor] = useState('transparent');
  const [strokeWidth, setStrokeWidth] = useState(5);
  const [isDrawing, setIsDrawing] = useState(false);
  const [history, setHistory] = useState<Layer[][]>([]);
  const [historyStep, setHistoryStep] = useState(0);
  const [selectedElementId, setSelectedElementId] = useState<string | null>(null);
  const [showLayerPanel, setShowLayerPanel] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragOver, setIsDragOver] = useState(false);
  const [brushOpacity, setBrushOpacity] = useState(1);
  const [brushMode, setBrushMode] = useState<'normal' | 'multiply' | 'screen' | 'overlay'>('normal');
  
  const stageRef = useRef<any>(null);
  const currentPath = useRef<string>('');
  const elementCounter = useRef(0);

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
    { name: 'star', icon: StarIcon, label: 'Star' },
    { name: 'arrow', icon: ArrowRight, label: 'Arrow' },
    { name: 'text', icon: Type, label: 'Text' },
    { name: 'eyedropper', icon: Pipette, label: 'Color Picker' },
  ];

  // Save to history for undo/redo
  const saveToHistory = useCallback(() => {
    const newHistory = history.slice(0, historyStep + 1);
    newHistory.push(JSON.parse(JSON.stringify(layers)));
    setHistory(newHistory);
    setHistoryStep(newHistory.length - 1);
  }, [layers, history, historyStep]);

  // Undo function
  const undo = () => {
    if (historyStep > 0) {
      setHistoryStep(historyStep - 1);
      setLayers(JSON.parse(JSON.stringify(history[historyStep - 1])));
    }
  };

  // Redo function
  const redo = () => {
    if (historyStep < history.length - 1) {
      setHistoryStep(historyStep + 1);
      setLayers(JSON.parse(JSON.stringify(history[historyStep + 1])));
    }
  };

  // Generate unique ID
  const generateId = () => {
    elementCounter.current++;
    return `element_${elementCounter.current}_${Date.now()}`;
  };

  // Add element to active layer
  const addElementToLayer = (element: Omit<DrawingElement, 'id' | 'layerId'>) => {
    const newElement: DrawingElement = {
      ...element,
      id: generateId(),
      layerId: activeLayerId
    };

    setLayers(prev => prev.map(layer => 
      layer.id === activeLayerId 
        ? { ...layer, elements: [...layer.elements, newElement] }
        : layer
    ));
  };

  // Mouse handlers
  const handleMouseDown = (e: any) => {
    if (tool === 'eyedropper') {
      // Color picker functionality would go here
      return;
    }

    setIsDrawing(true);
    const pos = e.target.getStage().getPointerPosition();
    
    if (tool === 'brush' || tool === 'eraser') {
      currentPath.current = '';
      const brushColor = tool === 'eraser' ? '#ffffff' : tinycolor(color).setAlpha(brushOpacity).toRgbString();
      addElementToLayer({
        type: 'line',
        points: [pos.x, pos.y],
        color: brushColor,
        strokeWidth: tool === 'eraser' ? strokeWidth * 2 : strokeWidth
      });
    } else if (tool === 'text') {
      const text = prompt('Enter text:');
      if (text) {
        addElementToLayer({
          type: 'text',
          x: pos.x,
          y: pos.y,
          text,
          color,
          strokeWidth: 0,
          fontSize: strokeWidth * 4
        });
      }
      setIsDrawing(false);
    }
  };

  const handleMouseMove = (e: any) => {
    if (!isDrawing) return;

    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    
    if (tool === 'brush' || tool === 'eraser') {
      setLayers(prev => prev.map(layer => {
        if (layer.id !== activeLayerId) return layer;
        
        const newElements = [...layer.elements];
        const lastElement = newElements[newElements.length - 1];
        
        if (lastElement && lastElement.type === 'line') {
          lastElement.points = [...(lastElement.points || []), point.x, point.y];
        }
        
        return { ...layer, elements: newElements };
      }));
    }
  };

  const handleMouseUp = () => {
    if (isDrawing) {
      saveToHistory();
    }
    setIsDrawing(false);
  };

  // Layer management
  const addLayer = () => {
    const newLayer: Layer = {
      id: `layer_${Date.now()}`,
      name: `Layer ${layers.length + 1}`,
      visible: true,
      opacity: 1,
      elements: []
    };
    setLayers([...layers, newLayer]);
    setActiveLayerId(newLayer.id);
  };

  const toggleLayerVisibility = (layerId: string) => {
    setLayers(prev => prev.map(layer => 
      layer.id === layerId 
        ? { ...layer, visible: !layer.visible }
        : layer
    ));
  };

  const deleteLayer = (layerId: string) => {
    if (layers.length > 1) {
      setLayers(prev => prev.filter(layer => layer.id !== layerId));
      if (activeLayerId === layerId) {
        setActiveLayerId(layers[0].id);
      }
    }
  };

  // Canvas actions
  const clearCanvas = () => {
    setLayers(prev => prev.map(layer => ({ ...layer, elements: [] })));
    saveToHistory();
  };

  const downloadCanvas = (format: 'png' | 'jpg' | 'json' = 'png') => {
    if (stageRef.current) {
      const timestamp = Date.now();
      
      if (format === 'json') {
        // Export as JSON for later editing
        const canvasData = {
          layers,
          metadata: {
            created: new Date().toISOString(),
            version: '1.0.0',
            app: 'Bitcoin Paint'
          }
        };
        const blob = new Blob([JSON.stringify(canvasData, null, 2)], {
          type: 'application/json'
        });
        saveAs(blob, `bitcoin-painting-${timestamp}.json`);
      } else {
        // Export as image
        const uri = stageRef.current.toDataURL({
          mimeType: format === 'jpg' ? 'image/jpeg' : 'image/png',
          quality: 1,
          pixelRatio: 2
        });
        
        // Convert to blob and download
        fetch(uri)
          .then(res => res.blob())
          .then(blob => {
            saveAs(blob, `bitcoin-painting-${timestamp}.${format}`);
          });
      }
    }
  };

  const exportAsSVG = () => {
    if (stageRef.current) {
      const svg = stageRef.current.toSVG();
      const blob = new Blob([svg], { type: 'image/svg+xml' });
      saveAs(blob, `bitcoin-painting-${Date.now()}.svg`);
    }
  };

  const saveToSatoshis = () => {
    // Placeholder for Bitcoin integration
    alert('💰 Painting saved to Bitcoin blockchain! (Feature coming soon)');
  };

  // Initialize history
  useEffect(() => {
    if (history.length === 0) {
      setHistory([JSON.parse(JSON.stringify(layers))]);
    }
  }, []);

  // Listen for new painting events
  useEffect(() => {
    const handleNewPainting = () => {
      // Clear the canvas and reset to default state
      setLayers([{ id: '1', name: 'Layer 1', visible: true, opacity: 1, elements: [] }]);
      setActiveLayerId('1');
      setHistory([]);
      setHistoryStep(0);
      setSelectedElementId(null);
      setZoom(1);
      setPan({ x: 0, y: 0 });
      setTool('brush');
    };

    window.addEventListener('newPainting', handleNewPainting);
    return () => window.removeEventListener('newPainting', handleNewPainting);
  }, []);

  return (
    <div className="flex flex-col bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
      {/* Top Toolbar */}
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
                    ? 'bg-purple-500 text-white shadow-lg'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
                title={t.label}
              >
                <Icon size={18} />
              </button>
            );
          })}
        </div>

        {/* Brush Size & Opacity */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-300">Size:</span>
            <input
              type="range"
              min="1"
              max="100"
              value={strokeWidth}
              onChange={(e) => setStrokeWidth(Number(e.target.value))}
              className="w-20"
            />
            <span className="text-sm text-gray-300 w-8">{strokeWidth}</span>
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

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-300">Mode:</span>
            <select
              value={brushMode}
              onChange={(e) => setBrushMode(e.target.value as 'normal' | 'multiply' | 'screen' | 'overlay')}
              className="bg-gray-700 text-white text-sm border border-gray-600 rounded px-2 py-1"
            >
              <option value="normal">Normal</option>
              <option value="multiply">Multiply</option>
              <option value="screen">Screen</option>
              <option value="overlay">Overlay</option>
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={undo}
            disabled={historyStep <= 0}
            className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            title="Undo"
          >
            <Undo size={18} />
          </button>
          <button
            onClick={redo}
            disabled={historyStep >= history.length - 1}
            className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            title="Redo"
          >
            <Redo size={18} />
          </button>
          <button
            onClick={() => setShowLayerPanel(!showLayerPanel)}
            className={`p-2 rounded-lg transition-colors ${
              showLayerPanel ? 'bg-purple-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
            title="Layers"
          >
            <Layers size={18} />
          </button>
          <button
            onClick={clearCanvas}
            className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            title="Clear Canvas"
          >
            <RotateCcw size={18} />
          </button>
          <div className="relative group">
            <button className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-1">
              <Download size={18} />
              <span className="text-xs">▼</span>
            </button>
            <div className="absolute bottom-full mb-2 left-0 bg-gray-800 border border-gray-600 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <button
                onClick={() => downloadCanvas('png')}
                className="block w-full px-4 py-2 text-left text-white hover:bg-gray-700 rounded-t-lg"
              >
                PNG Image
              </button>
              <button
                onClick={() => downloadCanvas('jpg')}
                className="block w-full px-4 py-2 text-left text-white hover:bg-gray-700"
              >
                JPG Image
              </button>
              <button
                onClick={() => downloadCanvas('json')}
                className="block w-full px-4 py-2 text-left text-white hover:bg-gray-700"
              >
                Project File
              </button>
              <button
                onClick={exportAsSVG}
                className="block w-full px-4 py-2 text-left text-white hover:bg-gray-700 rounded-b-lg"
              >
                SVG Vector
              </button>
            </div>
          </div>
          <button
            onClick={saveToSatoshis}
            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg"
          >
            💰 Save with Satoshis
          </button>
        </div>
      </div>

      {/* Color Palette */}
      <div className="flex items-center gap-4 p-3 bg-gray-800 border-b border-purple-500/20">
        <div className="flex items-center gap-2">
          <Palette size={16} className="text-gray-300" />
          <span className="text-sm text-gray-300">Stroke:</span>
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
          <button
            onClick={() => {
              const baseColor = tinycolor(color);
              const harmonies = [
                baseColor.toHexString(),
                baseColor.complement().toHexString(),
                baseColor.triad()[1].toHexString(),
                baseColor.triad()[2].toHexString(),
                baseColor.analogous()[1].toHexString(),
                baseColor.analogous()[2].toHexString(),
              ];
              // Update the colors array with harmonious colors
              setColor(harmonies[0]);
            }}
            className="px-2 py-1 bg-purple-600 hover:bg-purple-500 text-white text-xs rounded transition-colors"
            title="Generate Color Harmony"
          >
            ✨
          </button>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-300">Fill:</span>
          <input
            type="color"
            value={fillColor}
            onChange={(e) => setFillColor(e.target.value)}
            className="w-8 h-8 rounded cursor-pointer"
            title="Fill Color"
          />
          <button
            onClick={() => setFillColor('transparent')}
            className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded hover:bg-gray-600"
          >
            None
          </button>
        </div>
      </div>

      <div className="flex flex-1 relative">
        {/* Layer Panel */}
        {showLayerPanel && (
          <div className="w-64 bg-gray-800 border-r border-purple-500/20 p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold">Layers</h3>
              <button
                onClick={addLayer}
                className="p-1 bg-purple-500 text-white rounded hover:bg-purple-600"
                title="Add Layer"
              >
                <Plus size={16} />
              </button>
            </div>
            <div className="space-y-2">
              {layers.map((layer) => (
                <div
                  key={layer.id}
                  className={`flex items-center gap-2 p-2 rounded cursor-pointer ${
                    activeLayerId === layer.id ? 'bg-purple-500/20 border border-purple-500/40' : 'bg-gray-700'
                  }`}
                  onClick={() => setActiveLayerId(layer.id)}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLayerVisibility(layer.id);
                    }}
                    className="p-1 hover:bg-gray-600 rounded"
                  >
                    {layer.visible ? <Eye size={14} /> : <EyeOff size={14} />}
                  </button>
                  <span className="text-sm text-white flex-1">{layer.name}</span>
                  <span className="text-xs text-gray-400">{layer.elements.length}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Canvas */}
        <div 
          className={`flex-1 bg-white relative overflow-hidden ${isDragOver ? 'ring-4 ring-purple-300 ring-opacity-50' : ''}`}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragOver(false);
            try {
              const data = JSON.parse(e.dataTransfer.getData('application/json'));
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              
              if (data.type === 'tool') {
                setTool(data.tool);
              } else if (data.type === 'color') {
                setColor(data.color);
              } else if (data.type === 'shape') {
                // Add shape directly to canvas at drop position
                const element = {
                  type: data.shape as 'circle' | 'rect' | 'star' | 'arrow',
                  x: x,
                  y: y,
                  color: color,
                  strokeWidth: strokeWidth,
                  fill: fillColor
                };

                if (data.shape === 'circle') {
                  addElementToLayer({ ...element, radius: 50 });
                } else if (data.shape === 'rect') {
                  addElementToLayer({ ...element, width: 100, height: 60 });
                } else if (data.shape === 'star') {
                  addElementToLayer({ ...element, x: x, y: y });
                } else if (data.shape === 'arrow') {
                  addElementToLayer({ 
                    ...element,
                    type: 'arrow',
                    points: [x, y, x + 100, y]
                  });
                }
                saveToHistory();
              }
            } catch (error) {
              console.error('Error handling drop:', error);
            }
          }}
          onDragOver={(e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
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
        >
          <Stage
            width={canvasWidth}
            height={canvasHeight}
            onMouseDown={handleMouseDown}
            onMousemove={handleMouseMove}
            onMouseup={handleMouseUp}
            ref={stageRef}
            className="cursor-crosshair"
            scaleX={zoom}
            scaleY={zoom}
            x={pan.x}
            y={pan.y}
          >
            {layers.map((layer) => (
              <Layer key={layer.id} visible={layer.visible} opacity={layer.opacity}>
                {layer.elements.map((element) => {
                  switch (element.type) {
                    case 'line':
                      return (
                        <Line
                          key={element.id}
                          points={element.points || []}
                          stroke={element.color}
                          strokeWidth={element.strokeWidth}
                          tension={0.5}
                          lineCap="round"
                          lineJoin="round"
                          globalCompositeOperation="source-over"
                        />
                      );
                    case 'circle':
                      return (
                        <Circle
                          key={element.id}
                          x={element.x}
                          y={element.y}
                          radius={element.radius}
                          stroke={element.color}
                          strokeWidth={element.strokeWidth}
                          fill={element.fill}
                        />
                      );
                    case 'rect':
                      return (
                        <Rect
                          key={element.id}
                          x={element.x}
                          y={element.y}
                          width={element.width}
                          height={element.height}
                          stroke={element.color}
                          strokeWidth={element.strokeWidth}
                          fill={element.fill}
                        />
                      );
                    case 'text':
                      return (
                        <Text
                          key={element.id}
                          x={element.x}
                          y={element.y}
                          text={element.text}
                          fontSize={element.fontSize}
                          fill={element.color}
                        />
                      );
                    default:
                      return null;
                  }
                })}
              </Layer>
            ))}
          </Stage>
        </div>
      </div>

      {/* Status Bar */}
      <div className="p-2 bg-gray-800 text-xs text-gray-400 flex justify-between">
        <div>
          Canvas: {canvasWidth} × {canvasHeight} • Tool: {tool} • Layer: {layers.find(l => l.id === activeLayerId)?.name}
        </div>
        <div>
          Zoom: {Math.round(zoom * 100)}% • Elements: {layers.reduce((sum, layer) => sum + layer.elements.length, 0)}
        </div>
      </div>
    </div>
  );
};

export default AdvancedPaintCanvas;