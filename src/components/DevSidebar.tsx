'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { 
  ChevronLeft,
  ChevronRight,
  Monitor,
  FileCode,
  Users,
  FileText,
  Coins,
  Github,
  GitPullRequest,
  ExternalLink,
  BookOpen,
  History,
  CheckCircle,
  ListTodo,
  Briefcase,
  Terminal,
  Package,
  Download,
  Upload,
  Lock,
  Unlock,
  Activity,
  Clock,
  Palette
} from 'lucide-react';
import '../styles/DevSidebar.css';

export default function DevSidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('devSidebarCollapsed');
      // Default to collapsed (closed) for first-time visitors
      return saved !== null ? saved === 'true' : true;
    }
    return true;
  });
  const [issueCount, setIssueCount] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('devSidebarCollapsed', isCollapsed.toString());
    }
  }, [isCollapsed]);

  // Fetch GitHub issues count
  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/bitcoin-apps-suite/bitcoin-paint/issues?state=open');
        const data = await response.json();
        setIssueCount(Array.isArray(data) ? data.length : 0);
      } catch (error) {
        console.error('Error fetching issues:', error);
        setIssueCount(0);
      }
    };
    fetchIssues();
  }, []);

  const menuItems: Array<{
    path?: string;
    icon?: any;
    label?: string;
    badge?: string;
    divider?: boolean;
    section?: string;
    external?: boolean;
  }> = [
    // Token & Grants at top
    { path: '/token', icon: Coins, label: '$BPAINT', badge: 'NEW' },
    { path: '/grants', icon: Palette, label: 'ART GRANTS' },
    { path: '/gallery', icon: FileText, label: 'GALLERY', badge: 'FEATURED' },
    
    // Artists Section
    { divider: true },
    { section: 'ARTISTS' },
    { path: '/artist/commission', icon: Briefcase, label: 'Commission Work' },
    { path: '/bitcoin-paint/exchange', icon: Download, label: 'Sell Artwork', badge: '24' },
    { path: '/tutorials', icon: BookOpen, label: 'Painting Guides' },
    
    // Collectors Section
    { divider: true },
    { section: 'COLLECTORS' },
    { path: '/bitcoin-paint/exchange', icon: Coins, label: 'Buy NFT Art' },
    { path: '/collections', icon: Package, label: 'Browse Collections', badge: '156' },
    { path: '/auctions', icon: Clock, label: 'Live Auctions' },
    
    // Developers Section
    { divider: true },
    { section: 'DEVELOPERS' },
    { path: '/developer/tools', icon: Terminal, label: 'Brush SDK' },
    { path: '/contracts', icon: ListTodo, label: 'Find Work', badge: issueCount > 0 ? String(issueCount) : '0' },
    { path: '/contributions', icon: Users, label: 'Contributors', badge: '3' },
    
    // System
    { divider: true },
    { path: '/api', icon: Package, label: 'API Reference' },
    { path: 'https://github.com/bitcoin-apps-suite/bitcoin-paint', icon: Github, label: 'GitHub', external: true },
    { path: '/changelog', icon: History, label: 'Changelog' },
    { path: '/status', icon: Activity, label: 'Status', badge: 'OK' }
  ];

  const stats = {
    totalTokens: '1,000,000,000',
    distributed: '0',
    artists: '1',
    openTasks: issueCount || 0
  };

  return (
    <div className={`dev-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="dev-sidebar-header">
        {!isCollapsed && (
          <div className="dev-sidebar-title">
            <Palette className="dev-sidebar-logo" />
            <span>Artists Hub</span>
          </div>
        )}
        <button 
          className="dev-sidebar-toggle"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <nav className="dev-sidebar-nav">
        {menuItems.map((item, index) => {
          if (item.divider) {
            return <div key={index} className="dev-sidebar-divider" />;
          }

          if (item.section) {
            return !isCollapsed ? (
              <div key={index} className="dev-sidebar-section">
                {item.section}
              </div>
            ) : null;
          }

          const Icon = item.icon;
          const isActive = pathname === item.path;

          if (item.external) {
            return (
              <a
                key={`${item.path}-${index}`}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className={`dev-sidebar-item ${isActive ? 'active' : ''}`}
                title={isCollapsed ? item.label : undefined}
              >
                <Icon size={20} />
                {!isCollapsed && (
                  <>
                    <span className="dev-sidebar-label">{item.label}</span>
                    {item.badge && <span className="dev-sidebar-badge">{item.badge}</span>}
                  </>
                )}
              </a>
            );
          }

          return (
            <a
              key={`${item.path}-${index}`}
              href={item.path || '/'}
              className={`dev-sidebar-item ${isActive ? 'active' : ''}`}
              title={isCollapsed ? item.label : undefined}
            >
              <Icon size={20} />
              {!isCollapsed && (
                <>
                  <span className="dev-sidebar-label">{item.label}</span>
                  {item.badge && <span className="dev-sidebar-badge">{item.badge}</span>}
                </>
              )}
            </a>
          );
        })}
      </nav>

      {/* Stats section */}
      {!isCollapsed && (
        <div className="dev-sidebar-stats">
          <h4>$BPAINT Stats</h4>
          <div className="dev-stat">
            <span className="dev-stat-label">Total Tokens</span>
            <span className="dev-stat-value">{stats.totalTokens}</span>
          </div>
          <div className="dev-stat">
            <span className="dev-stat-label">Distributed</span>
            <span className="dev-stat-value">{stats.distributed}</span>
          </div>
          <div className="dev-stat">
            <span className="dev-stat-label">Artists</span>
            <span className="dev-stat-value">{stats.artists}</span>
          </div>
          <div className="dev-stat">
            <span className="dev-stat-label">Open Tasks</span>
            <span className="dev-stat-value">{stats.openTasks}</span>
          </div>
        </div>
      )}

      {/* Footer CTA */}
      {!isCollapsed && (
        <div className="dev-sidebar-footer">
          <div className="dev-sidebar-cta">
            <p>Join Paint Development</p>
            <a 
              href="https://github.com/bitcoin-apps-suite/bitcoin-paint" 
              target="_blank" 
              rel="noopener noreferrer"
              className="dev-sidebar-cta-button"
            >
              Start Contributing
            </a>
          </div>
        </div>
      )}
    </div>
  );
}