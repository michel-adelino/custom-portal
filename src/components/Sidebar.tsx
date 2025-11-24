import { Link, useLocation } from 'react-router-dom';
import { 
  Building2, Settings, TrendingUp, DollarSign, Calendar, 
  Factory, Megaphone, Target, ChevronRight, ChevronDown 
} from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

interface NavItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  path?: string;
  children?: Omit<NavItem, 'icon' | 'children'>[];
}

const navigation: NavItem[] = [
  {
    id: 'org',
    label: 'Organisation',
    icon: <Building2 className="w-5 h-5" />,
    children: [
      { id: 'vision', label: 'Company Vision', path: '/organisation/vision' },
      { id: 'mission', label: 'Mission & Values', path: '/organisation/mission' },
      { id: 'roadmap', label: 'Business Roadmap', path: '/organisation/roadmap' },
      { id: '3year', label: '3 Year Plan', path: '/organisation/3-year-plan' },
      { id: '5year', label: '5 Year Plan', path: '/organisation/5-year-plan' },
      { id: 'leadership', label: 'Leadership Meetings', path: '/organisation/leadership-meetings' },
      { id: '1on1', label: '1:1 Meetings', path: '/organisation/1-on-1-meetings' },
      { id: 'onboarding', label: 'Onboarding', path: '/organisation/onboarding' },
      { id: 'training', label: 'Training & Development', path: '/organisation/training' },
    ],
  },
  {
    id: 'systems',
    label: 'Systems & Processes',
    icon: <Settings className="w-5 h-5" />,
    children: [
      { id: 'knowledge', label: 'Knowledge Centre', path: '/systems/knowledge-centre' },
      { id: 'process', label: 'Process Library', path: '/systems/process-library' },
      { id: 'flowcharts', label: 'Flowcharts', path: '/systems/flowcharts' },
      { id: 'sop', label: 'Standard Operating Procedures (SOPs)', path: '/systems/sops' },
      { id: 'issues', label: 'Issue Tracking', path: '/systems/issue-tracking' },
      { id: 'improvements', label: 'Continuous Improvements', path: '/systems/continuous-improvements' },
    ],
  },
  {
    id: 'sales',
    label: 'Sales (CRM)',
    icon: <TrendingUp className="w-5 h-5" />,
    children: [
      { id: 'leads', label: 'Leads', path: '/sales/leads' },
      { id: 'quotes', label: 'Quotes', path: '/sales/quotes' },
      { id: 'pipeline', label: 'Pipeline', path: '/sales/pipeline' },
      { id: 'followups', label: 'Follow Ups', path: '/sales/follow-ups' },
      { id: 'won', label: 'Won Deals', path: '/sales/won-deals' },
      { id: 'lost', label: 'Lost Deals', path: '/sales/lost-deals' },
    ],
  },
  {
    id: 'finance',
    label: 'Finance',
    icon: <DollarSign className="w-5 h-5" />,
    children: [
      { id: 'invoices', label: 'Invoices', path: '/finance/invoices' },
      { id: 'bills', label: 'Bills', path: '/finance/bills' },
      { id: 'expenses', label: 'Expenses', path: '/finance/expenses' },
      { id: 'po-financial', label: 'Purchase Orders (Financial)', path: '/finance/purchase-orders' },
      { id: 'cashflow', label: 'Cashflow', path: '/finance/cashflow' },
      { id: 'payments', label: 'Upcoming Payments', path: '/finance/upcoming-payments' },
    ],
  },
  {
    id: 'scheduling',
    label: 'Scheduling & Communications',
    icon: <Calendar className="w-5 h-5" />,
    children: [
      { id: 'job-scheduling', label: 'Job Scheduling', path: '/scheduling/job-scheduling' },
      { id: 'install-jobs', label: 'Install Jobs', path: '/scheduling/install-jobs' },
      { id: 'supply-jobs', label: 'Supply Only Jobs', path: '/scheduling/supply-jobs' },
      { id: 'customer-comms', label: 'Customer Communications', path: '/scheduling/customer-communications' },
      { id: 'internal-notes', label: 'Internal Notes', path: '/scheduling/internal-notes' },
      { id: 'followups', label: 'Follow Ups', path: '/scheduling/follow-ups' },
    ],
  },
  {
    id: 'production',
    label: 'Production',
    icon: <Factory className="w-5 h-5" />,
    children: [
      { id: 'queue', label: 'Production Queue', path: '/production/queue' },
      { id: 'status', label: 'Manufacturing Status', path: '/production/status' },
      { id: 'material-po', label: 'Material Purchase Orders', path: '/production/material-orders' },
      { id: 'stock', label: 'Stock Levels', path: '/production/stock-levels' },
      { id: 'inventory', label: 'Inventory Tracking', path: '/production/inventory' },
      { id: 'alerts', label: 'Low Stock Alerts', path: '/production/low-stock-alerts' },
    ],
  },
  {
    id: 'marketing',
    label: 'Marketing',
    icon: <Megaphone className="w-5 h-5" />,
    children: [
      { id: 'calendar', label: 'Content Calendar', path: '/marketing/content-calendar' },
      { id: 'campaigns', label: 'Campaign Planning', path: '/marketing/campaigns' },
      { id: 'social', label: 'Social Media', path: '/marketing/social-media' },
      { id: 'engagement', label: 'Engagement Tracking', path: '/marketing/engagement' },
    ],
  },
  {
    id: 'performance',
    label: 'Individual Performance',
    icon: <Target className="w-5 h-5" />,
    children: [
      { id: 'kpis', label: 'Personal KPIs', path: '/performance/kpis' },
      { id: 'todos', label: 'To-Do Lists', path: '/performance/todos' },
      { id: 'reviews', label: 'Performance Reviews', path: '/performance/reviews' },
      { id: 'growth', label: 'Growth Plans', path: '/performance/growth-plans' },
    ],
  },
];

const Sidebar = () => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>(['org']);
  const { user } = useAuth();

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const isActive = (path?: string) => {
    if (!path) return false;
    return location.pathname === path;
  };

  const isParentActive = (item: NavItem) => {
    if (item.path && isActive(item.path)) return true;
    return item.children?.some(child => isActive(child.path)) || false;
  };

  return (
    <div className="w-72 bg-white border-r border-slate-200/60 h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-6 border-b border-slate-200/60">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
          Staff Portal
        </h1>
        {user && (
          <p className="text-sm text-slate-500 mt-2 font-medium">{user.name}</p>
        )}
      </div>
      
      <nav className="p-4 space-y-1">
        <Link
          to="/dashboard"
          className={`sidebar-link ${isActive('/dashboard') ? 'active' : ''}`}
        >
          <Target className="w-4 h-4" />
          <span>Dashboard</span>
        </Link>

        {navigation.map((item) => {
          const isExpanded = expandedItems.includes(item.id);
          const hasActiveChild = isParentActive(item);

          return (
            <div key={item.id}>
              <button
                onClick={() => toggleExpanded(item.id)}
                className={`sidebar-link w-full justify-between ${hasActiveChild ? 'active' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-slate-500">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                {item.children && (
                  <span className="text-slate-400">
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </span>
                )}
              </button>
              
              {item.children && isExpanded && (
                <div className="ml-4 mt-2 space-y-1 border-l-2 border-slate-100 pl-4">
                  {item.children.map((child) => (
                    <Link
                      key={child.id}
                      to={child.path || '#'}
                      className={`block px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary-600 rounded-lg transition-all duration-200 ${
                        isActive(child.path) ? 'bg-primary-50 text-primary-600 font-semibold' : ''
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;

