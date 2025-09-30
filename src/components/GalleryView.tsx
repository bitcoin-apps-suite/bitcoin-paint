'use client';

import { useState } from 'react';
import {
  Image,
  Upload,
  Download,
  Share2,
  Heart,
  Edit,
  Trash2,
  Plus,
  Grid,
  List,
  Filter,
  FolderOpen,
  Star,
  Clock,
  Eye,
} from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  type: 'created' | 'collected' | 'favorited';
  date: string;
  size: string;
  likes: number;
  views: number;
  price?: number;
}

export default function GalleryView() {
  const [activeTab, setActiveTab] = useState<'created' | 'collected' | 'favorites'>('created');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  // Mock gallery items
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Sunset Dreams',
      type: 'created',
      date: '2025-09-28',
      size: '2048x2048',
      likes: 45,
      views: 230,
      price: 0.08,
    },
    {
      id: 2,
      title: 'Abstract Thoughts',
      type: 'created',
      date: '2025-09-25',
      size: '1920x1080',
      likes: 67,
      views: 456,
      price: 0.12,
    },
    {
      id: 3,
      title: 'Digital Nature',
      type: 'collected',
      date: '2025-09-20',
      size: '3000x3000',
      likes: 189,
      views: 890,
      price: 0.15,
    },
    {
      id: 4,
      title: 'Crypto Vision',
      type: 'favorited',
      date: '2025-09-18',
      size: '2560x1440',
      likes: 234,
      views: 1205,
    },
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (activeTab === 'created') return item.type === 'created';
    if (activeTab === 'collected') return item.type === 'collected';
    if (activeTab === 'favorites') return item.type === 'favorited';
    return true;
  });

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#0a0a0a' }}>
      {/* Header */}
      <div
        style={{
          padding: '24px',
          background: 'linear-gradient(180deg, #1a1a1a 0%, #141414 100%)',
          borderBottom: '1px solid rgba(255, 107, 0, 0.2)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>
              My Art Gallery
            </h1>
            <p style={{ color: '#999' }}>
              Manage your digital art collection and creations
            </p>
          </div>
          <button
            style={{
              padding: '12px 24px',
              background: 'linear-gradient(135deg, #ff6b00, #ff8c42)',
              border: 'none',
              borderRadius: '12px',
              color: 'white',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Upload size={20} />
            Upload Artwork
          </button>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '24px', marginBottom: '20px' }}>
          <button
            onClick={() => setActiveTab('created')}
            style={{
              padding: '8px 0',
              background: 'none',
              border: 'none',
              borderBottom: activeTab === 'created' ? '2px solid #ff6b00' : '2px solid transparent',
              color: activeTab === 'created' ? '#ff6b00' : '#999',
              fontSize: '16px',
              fontWeight: activeTab === 'created' ? 600 : 400,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            My Creations
          </button>
          <button
            onClick={() => setActiveTab('collected')}
            style={{
              padding: '8px 0',
              background: 'none',
              border: 'none',
              borderBottom: activeTab === 'collected' ? '2px solid #ff6b00' : '2px solid transparent',
              color: activeTab === 'collected' ? '#ff6b00' : '#999',
              fontSize: '16px',
              fontWeight: activeTab === 'collected' ? 600 : 400,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            Collected Art
          </button>
          <button
            onClick={() => setActiveTab('favorites')}
            style={{
              padding: '8px 0',
              background: 'none',
              border: 'none',
              borderBottom: activeTab === 'favorites' ? '2px solid #ff6b00' : '2px solid transparent',
              color: activeTab === 'favorites' ? '#ff6b00' : '#999',
              fontSize: '16px',
              fontWeight: activeTab === 'favorites' ? 600 : 400,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            Favorites
          </button>
        </div>

        {/* Toolbar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              style={{
                padding: '8px 16px',
                background: 'rgba(255, 107, 0, 0.1)',
                border: '1px solid rgba(255, 107, 0, 0.2)',
                borderRadius: '8px',
                color: '#ff6b00',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '14px',
              }}
            >
              <Filter size={16} />
              Filter
            </button>
            <select
              style={{
                padding: '8px 16px',
                background: 'rgba(255, 107, 0, 0.1)',
                border: '1px solid rgba(255, 107, 0, 0.2)',
                borderRadius: '8px',
                color: '#ff6b00',
                cursor: 'pointer',
                outline: 'none',
                fontSize: '14px',
              }}
            >
              <option>Sort by Date</option>
              <option>Sort by Name</option>
              <option>Sort by Likes</option>
              <option>Sort by Views</option>
            </select>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => setViewMode('grid')}
              style={{
                padding: '8px',
                background: viewMode === 'grid' ? 'rgba(255, 107, 0, 0.2)' : 'rgba(255, 107, 0, 0.1)',
                border: '1px solid rgba(255, 107, 0, 0.3)',
                borderRadius: '8px',
                color: '#ff6b00',
                cursor: 'pointer',
              }}
            >
              <Grid size={18} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              style={{
                padding: '8px',
                background: viewMode === 'list' ? 'rgba(255, 107, 0, 0.2)' : 'rgba(255, 107, 0, 0.1)',
                border: '1px solid rgba(255, 107, 0, 0.3)',
                borderRadius: '8px',
                color: '#ff6b00',
                cursor: 'pointer',
              }}
            >
              <List size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
        {filteredItems.length === 0 ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '400px',
              color: '#666',
            }}
          >
            <FolderOpen size={64} style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>No artworks yet</h3>
            <p style={{ marginBottom: '20px' }}>Start creating or collecting digital art</p>
            <button
              style={{
                padding: '10px 20px',
                background: 'linear-gradient(135deg, #ff6b00, #ff8c42)',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              {activeTab === 'created' ? 'Create Artwork' : 'Browse Marketplace'}
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '20px',
            }}
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                style={{
                  background: 'linear-gradient(180deg, #1a1a1a 0%, #141414 100%)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: selectedItems.includes(item.id) ? '2px solid #ff6b00' : '1px solid rgba(255, 107, 0, 0.2)',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
                onClick={() => {
                  setSelectedItems((prev) =>
                    prev.includes(item.id) ? prev.filter((id) => id !== item.id) : [...prev, item.id]
                  );
                }}
              >
                {/* Artwork Preview */}
                <div
                  style={{
                    height: '200px',
                    background: `linear-gradient(135deg, #ff6b00, #ff8c42)`,
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Image size={48} color="white" />
                  {selectedItems.includes(item.id) && (
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(255, 107, 0, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          background: '#ff6b00',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        ✓
                      </div>
                    </div>
                  )}
                </div>

                {/* Item Details */}
                <div style={{ padding: '16px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'white', marginBottom: '8px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '12px', color: '#666', marginBottom: '12px' }}>
                    {item.size} • {item.date}
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Heart size={14} color="#999" />
                        <span style={{ fontSize: '12px', color: '#999' }}>{item.likes}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Eye size={14} color="#999" />
                        <span style={{ fontSize: '12px', color: '#999' }}>{item.views}</span>
                      </div>
                    </div>
                    {item.price && (
                      <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#ff6b00' }}>
                        {item.price} BTC
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      style={{
                        flex: 1,
                        padding: '6px',
                        background: 'rgba(255, 107, 0, 0.1)',
                        border: '1px solid rgba(255, 107, 0, 0.2)',
                        borderRadius: '6px',
                        color: '#ff6b00',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <Edit size={14} />
                    </button>
                    <button
                      style={{
                        flex: 1,
                        padding: '6px',
                        background: 'rgba(255, 107, 0, 0.1)',
                        border: '1px solid rgba(255, 107, 0, 0.2)',
                        borderRadius: '6px',
                        color: '#ff6b00',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <Share2 size={14} />
                    </button>
                    <button
                      style={{
                        flex: 1,
                        padding: '6px',
                        background: 'rgba(255, 107, 0, 0.1)',
                        border: '1px solid rgba(255, 107, 0, 0.2)',
                        borderRadius: '6px',
                        color: '#ff6b00',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <Download size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {filteredItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  background: 'linear-gradient(180deg, #1a1a1a 0%, #141414 100%)',
                  borderRadius: '12px',
                  border: selectedItems.includes(item.id) ? '2px solid #ff6b00' : '1px solid rgba(255, 107, 0, 0.2)',
                  padding: '16px',
                  gap: '16px',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  setSelectedItems((prev) =>
                    prev.includes(item.id) ? prev.filter((id) => id !== item.id) : [...prev, item.id]
                  );
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    background: `linear-gradient(135deg, #ff6b00, #ff8c42)`,
                    borderRadius: '8px',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Image size={32} color="white" />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'white', marginBottom: '4px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#666' }}>
                    {item.size} • {item.date}
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Heart size={16} color="#999" />
                      <span style={{ fontSize: '14px', color: '#999' }}>{item.likes}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Eye size={16} color="#999" />
                      <span style={{ fontSize: '14px', color: '#999' }}>{item.views}</span>
                    </div>
                  </div>
                  {item.price && (
                    <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#ff6b00' }}>
                      {item.price} BTC
                    </span>
                  )}
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      style={{
                        padding: '8px',
                        background: 'rgba(255, 107, 0, 0.1)',
                        border: '1px solid rgba(255, 107, 0, 0.2)',
                        borderRadius: '6px',
                        color: '#ff6b00',
                        cursor: 'pointer',
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      style={{
                        padding: '8px',
                        background: 'rgba(255, 107, 0, 0.1)',
                        border: '1px solid rgba(255, 107, 0, 0.2)',
                        borderRadius: '6px',
                        color: '#ff6b00',
                        cursor: 'pointer',
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <Download size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Action Bar */}
      {selectedItems.length > 0 && (
        <div
          style={{
            padding: '16px 24px',
            background: 'linear-gradient(180deg, #1a1a1a 0%, #141414 100%)',
            borderTop: '1px solid rgba(255, 107, 0, 0.2)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span style={{ color: '#ff6b00', fontWeight: 600 }}>
            {selectedItems.length} item{selectedItems.length !== 1 ? 's' : ''} selected
          </span>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              style={{
                padding: '8px 16px',
                background: 'rgba(255, 107, 0, 0.1)',
                border: '1px solid rgba(255, 107, 0, 0.2)',
                borderRadius: '8px',
                color: '#ff6b00',
                cursor: 'pointer',
              }}
            >
              Share Selected
            </button>
            <button
              style={{
                padding: '8px 16px',
                background: 'rgba(255, 107, 0, 0.1)',
                border: '1px solid rgba(255, 107, 0, 0.2)',
                borderRadius: '8px',
                color: '#ff6b00',
                cursor: 'pointer',
              }}
            >
              Download Selected
            </button>
            <button
              style={{
                padding: '8px 16px',
                background: 'rgba(255, 0, 0, 0.1)',
                border: '1px solid rgba(255, 0, 0, 0.2)',
                borderRadius: '8px',
                color: '#ff4444',
                cursor: 'pointer',
              }}
            >
              Delete Selected
            </button>
          </div>
        </div>
      )}
    </div>
  );
}