'use client';

import { useState, useEffect } from 'react';
import {
  Palette,
  Store,
  Image,
  TrendingUp,
  Plus,
  Upload,
  FolderOpen,
  Clock,
  Star,
  Brush,
  Users,
  Settings,
  HardDrive,
  User,
  LogOut,
  ChevronRight,
  ChevronDown,
  Search,
  Grid,
  Frame,
  Sparkles,
  Circle,
  Square,
  Minus,
  ArrowRight,
  Type,
  Eraser,
  Pipette,
  Star as StarIcon,
} from 'lucide-react';

interface PaintSidebarProps {
  currentView: string;
  onViewChange: (view: 'studio' | 'marketplace' | 'gallery' | 'exchange') => void;
  onAuthRequired: () => void;
}

export default function PaintSidebar({ currentView, onViewChange, onAuthRequired }: PaintSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(['studio', 'gallery']);
  const [searchQuery, setSearchQuery] = useState('');
  const [storageUsed, setStorageUsed] = useState(0);
  const [storageTotal] = useState(10737418240); // 10GB in bytes

  useEffect(() => {
    // Load storage info from localStorage
    const savedProjects = localStorage.getItem('paintProjects');
    if (savedProjects) {
      const size = new Blob([savedProjects]).size;
      setStorageUsed(size);
    }
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
    );
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const menuItems = [
    {
      id: 'studio',
      label: 'Paint Studio',
      icon: Palette,
      view: 'studio' as const,
      children: [
        { label: 'New Painting', icon: Plus, action: 'new' },
        { label: 'Recent Projects', icon: Clock, action: 'recent' },
        { label: 'Templates', icon: Grid, action: 'templates' },
        { label: 'AI Tools', icon: Sparkles, action: 'ai' },
      ],
    },
    {
      id: 'marketplace',
      label: 'Marketplace',
      icon: Store,
      view: 'marketplace' as const,
      children: [
        { label: 'Browse Paintings', icon: Image, action: 'browse' },
        { label: 'Trending', icon: TrendingUp, action: 'trending' },
        { label: 'New Drops', icon: Sparkles, action: 'new' },
        { label: 'Artists', icon: Users, action: 'artists' },
      ],
    },
    {
      id: 'gallery',
      label: 'Paint Gallery',
      icon: Frame,
      view: 'gallery' as const,
      children: [
        { label: 'My Collection', icon: Image, action: 'collection' },
        { label: 'Created Paintings', icon: Brush, action: 'created' },
        { label: 'Favorites', icon: Star, action: 'favorites' },
        { label: 'Upload Painting', icon: Upload, action: 'upload' },
      ],
    },
    {
      id: 'exchange',
      label: 'Paint Exchange',
      icon: TrendingUp,
      view: 'exchange' as const,
      children: [
        { label: '$bPaint Token', icon: TrendingUp, action: 'token' },
        { label: 'Trade History', icon: Clock, action: 'history' },
        { label: 'Analytics', icon: TrendingUp, action: 'analytics' },
      ],
    },
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Search Bar */}
      <div style={{ padding: '16px' }}>
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(139, 92, 246, 0.1)',
            borderRadius: '8px',
            padding: '8px 12px',
            border: '1px solid rgba(139, 92, 246, 0.2)',
          }}
        >
          <Search size={16} style={{ color: '#8b5cf6', marginRight: '8px' }} />
          <input
            type="text"
            placeholder="Search paintings..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'white',
              fontSize: '14px',
            }}
          />
        </div>
      </div>

      {/* Paint Tools Section */}
      {currentView === 'studio' && (
        <div style={{ padding: '0 16px', marginBottom: '16px' }}>
          <h3 style={{ 
            color: '#8b5cf6', 
            fontSize: '14px', 
            fontWeight: '600', 
            marginBottom: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <Brush size={16} />
            Paint Tools
          </h3>
          
          {/* Tool Buttons */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '8px',
            marginBottom: '16px'
          }}>
            {[
              { name: 'brush', icon: Brush, label: 'Brush' },
              { name: 'eraser', icon: Eraser, label: 'Eraser' },
              { name: 'line', icon: Minus, label: 'Line' },
              { name: 'circle', icon: Circle, label: 'Circle' },
              { name: 'rect', icon: Square, label: 'Rectangle' },
              { name: 'star', icon: StarIcon, label: 'Star' },
              { name: 'arrow', icon: ArrowRight, label: 'Arrow' },
              { name: 'text', icon: Type, label: 'Text' },
              { name: 'eyedropper', icon: Pipette, label: 'Picker' },
            ].map((tool) => (
              <div
                key={tool.name}
                draggable
                onDragStart={(e) => {
                  e.dataTransfer.setData('application/json', JSON.stringify({
                    type: 'tool',
                    tool: tool.name
                  }));
                  e.currentTarget.style.cursor = 'grabbing';
                }}
                onDragEnd={(e) => {
                  e.currentTarget.style.cursor = 'grab';
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '8px',
                  background: 'rgba(139, 92, 246, 0.1)',
                  border: '1px solid rgba(139, 92, 246, 0.2)',
                  borderRadius: '8px',
                  cursor: 'grab',
                  transition: 'all 0.2s',
                  minHeight: '60px',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(139, 92, 246, 0.2)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <tool.icon size={16} color="#8b5cf6" />
                <span style={{ 
                  fontSize: '10px', 
                  color: '#ccc', 
                  marginTop: '4px',
                  textAlign: 'center'
                }}>
                  {tool.label}
                </span>
              </div>
            ))}
          </div>

          {/* Color Palette */}
          <h4 style={{ 
            color: '#8b5cf6', 
            fontSize: '12px', 
            fontWeight: '600', 
            marginBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <Palette size={14} />
            Colors
          </h4>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(5, 1fr)', 
            gap: '6px',
            marginBottom: '16px'
          }}>
            {[
              '#8b5cf6', '#c084fc', '#e5e7eb', '#000000', '#ffffff',
              '#ef4444', '#22c55e', '#3b82f6', '#f59e0b', '#f97316',
              '#ec4899', '#14b8a6', '#6366f1', '#84cc16', '#f43f5e'
            ].map((color) => (
              <div
                key={color}
                draggable
                onDragStart={(e) => {
                  e.dataTransfer.setData('application/json', JSON.stringify({
                    type: 'color',
                    color: color
                  }));
                  e.currentTarget.style.cursor = 'grabbing';
                }}
                onDragEnd={(e) => {
                  e.currentTarget.style.cursor = 'grab';
                }}
                style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: color,
                  border: color === '#ffffff' ? '1px solid rgba(139, 92, 246, 0.3)' : '1px solid transparent',
                  borderRadius: '4px',
                  cursor: 'grab',
                  transition: 'transform 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
            ))}
          </div>

          {/* Quick Shapes */}
          <h4 style={{ 
            color: '#8b5cf6', 
            fontSize: '12px', 
            fontWeight: '600', 
            marginBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <Grid size={14} />
            Quick Shapes
          </h4>
          <div style={{ 
            display: 'flex', 
            gap: '8px',
            marginBottom: '16px',
            flexWrap: 'wrap'
          }}>
            {[
              { shape: 'circle', icon: Circle, label: 'Circle' },
              { shape: 'rect', icon: Square, label: 'Square' },
              { shape: 'star', icon: StarIcon, label: 'Star' },
              { shape: 'arrow', icon: ArrowRight, label: 'Arrow' },
            ].map((shape) => (
              <div
                key={shape.shape}
                draggable
                onDragStart={(e) => {
                  e.dataTransfer.setData('application/json', JSON.stringify({
                    type: 'shape',
                    shape: shape.shape
                  }));
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '6px 10px',
                  background: 'rgba(139, 92, 246, 0.1)',
                  border: '1px solid rgba(139, 92, 246, 0.2)',
                  borderRadius: '6px',
                  cursor: 'grab',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(139, 92, 246, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
                }}
              >
                <shape.icon size={12} color="#8b5cf6" />
                <span style={{ fontSize: '10px', color: '#ccc' }}>
                  {shape.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Menu Items */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '0 16px' }}>
        {menuItems.map((item) => (
          <div key={item.id} style={{ marginBottom: '16px' }}>
            <button
              onClick={() => {
                onViewChange(item.view);
                toggleSection(item.id);
              }}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 12px',
                background: currentView === item.view ? 'rgba(139, 92, 246, 0.2)' : 'transparent',
                border: 'none',
                borderRadius: '8px',
                color: currentView === item.view ? '#8b5cf6' : '#ccc',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                if (currentView !== item.view) {
                  e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (currentView !== item.view) {
                  e.currentTarget.style.background = 'transparent';
                }
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <item.icon size={18} />
                <span style={{ fontSize: '14px', fontWeight: 500 }}>{item.label}</span>
              </div>
              {expandedSections.includes(item.id) ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </button>

            {/* Submenu */}
            {expandedSections.includes(item.id) && (
              <div style={{ marginTop: '4px', paddingLeft: '12px' }}>
                {item.children.map((child, index) => (
                  <button
                    key={index}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 12px',
                      background: 'transparent',
                      border: 'none',
                      color: '#999',
                      cursor: 'pointer',
                      fontSize: '13px',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#8b5cf6';
                      e.currentTarget.style.background = 'rgba(139, 92, 246, 0.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#999';
                      e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    <child.icon size={14} />
                    <span>{child.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div style={{ padding: '16px', borderTop: '1px solid rgba(139, 92, 246, 0.2)' }}>
        {/* Storage Info */}
        <div style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <HardDrive size={14} style={{ color: '#8b5cf6' }} />
              <span style={{ fontSize: '12px', color: '#999' }}>Storage</span>
            </div>
            <span style={{ fontSize: '12px', color: '#999' }}>
              {formatBytes(storageUsed)} / {formatBytes(storageTotal)}
            </span>
          </div>
          <div
            style={{
              height: '4px',
              background: 'rgba(139, 92, 246, 0.1)',
              borderRadius: '2px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${(storageUsed / storageTotal) * 100}%`,
                background: 'linear-gradient(90deg, #8b5cf6, #c084fc)',
                transition: 'width 0.3s',
              }}
            />
          </div>
        </div>

        {/* User Section */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={onAuthRequired}
            style={{
              flex: 1,
              padding: '8px',
              background: 'rgba(139, 92, 246, 0.1)',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              borderRadius: '8px',
              color: '#8b5cf6',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              fontSize: '13px',
            }}
          >
            <User size={14} />
            Account
          </button>
          <button
            style={{
              padding: '8px',
              background: 'rgba(139, 92, 246, 0.1)',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              borderRadius: '8px',
              color: '#8b5cf6',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Settings size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}