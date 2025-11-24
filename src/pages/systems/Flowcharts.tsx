import ModulePage from '../ModulePage';
import { GitBranch, Filter, Eye, Download, Share2 } from 'lucide-react';
import { useState } from 'react';

const Flowcharts = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Operations', 'Sales', 'Finance', 'HR', 'IT'];

  const flowcharts = [
    {
      id: 'FLOW-001',
      name: 'Order Processing Flowchart',
      category: 'Operations',
      description: 'Visual representation of the complete order processing workflow',
      lastUpdated: '2024-01-20',
      views: 145,
      nodes: 15,
      connections: 18,
    },
    {
      id: 'FLOW-002',
      name: 'Customer Onboarding Flow',
      category: 'Sales',
      description: 'Step-by-step visual guide for customer onboarding process',
      lastUpdated: '2024-01-18',
      views: 98,
      nodes: 10,
      connections: 12,
    },
    {
      id: 'FLOW-003',
      name: 'Invoice Approval Workflow',
      category: 'Finance',
      description: 'Approval workflow for invoice processing and payment authorization',
      lastUpdated: '2024-01-22',
      views: 112,
      nodes: 8,
      connections: 10,
    },
    {
      id: 'FLOW-004',
      name: 'Employee Hiring Process',
      category: 'HR',
      description: 'Complete hiring process flowchart from job posting to onboarding',
      lastUpdated: '2024-01-15',
      views: 87,
      nodes: 12,
      connections: 14,
    },
    {
      id: 'FLOW-005',
      name: 'IT Incident Resolution',
      category: 'IT',
      description: 'IT support ticket resolution process flowchart',
      lastUpdated: '2024-01-25',
      views: 134,
      nodes: 9,
      connections: 11,
    },
  ];

  const filteredFlowcharts = selectedCategory === 'all' 
    ? flowcharts 
    : flowcharts.filter(f => f.category === selectedCategory);

  return (
    <ModulePage title="Flowcharts" description="Visual process flowcharts and workflow diagrams">
      <div className="space-y-6">
        {/* Filters */}
        <div className="card">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-slate-600" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Flowcharts Grid */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">All Flowcharts ({filteredFlowcharts.length})</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFlowcharts.map((flowchart) => (
              <div key={flowchart.id} className="p-6 border border-slate-200 rounded-xl hover:border-primary-300 hover:shadow-lg transition-all cursor-pointer group">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary-100 rounded-xl group-hover:bg-primary-200 transition-colors">
                    <GitBranch className="w-6 h-6 text-primary-600" />
                  </div>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-semibold">
                    {flowchart.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {flowchart.name}
                </h3>
                <p className="text-sm text-slate-600 mb-4">{flowchart.description}</p>
                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{flowchart.views} views</span>
                  </div>
                  <span>{flowchart.nodes} nodes</span>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all text-sm font-semibold flex items-center justify-center gap-2">
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                  <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-all">
                    <Download className="w-4 h-4" />
                  </button>
                  <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-all">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModulePage>
  );
};

export default Flowcharts;

