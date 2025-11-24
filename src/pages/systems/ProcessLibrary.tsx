import ModulePage from '../ModulePage';
import { FileText, Search, Filter, Calendar, User, Tag, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { format } from 'date-fns';

const ProcessLibrary = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Operations', 'Sales', 'Finance', 'HR', 'IT', 'Quality'];

  const processes = [
    {
      id: 'PROC-001',
      name: 'Order Fulfillment Process',
      category: 'Operations',
      description: 'Complete workflow for processing and fulfilling customer orders from receipt to delivery',
      owner: 'Operations Team',
      lastUpdated: new Date(2024, 0, 20),
      version: '2.1',
      steps: 12,
      tags: ['orders', 'fulfillment', 'shipping'],
    },
    {
      id: 'PROC-002',
      name: 'Customer Onboarding Process',
      category: 'Sales',
      description: 'Step-by-step process for onboarding new customers and setting up accounts',
      owner: 'Sales Team',
      lastUpdated: new Date(2024, 0, 18),
      version: '1.5',
      steps: 8,
      tags: ['onboarding', 'customers', 'setup'],
    },
    {
      id: 'PROC-003',
      name: 'Invoice Processing',
      category: 'Finance',
      description: 'Standard process for creating, sending, and tracking customer invoices',
      owner: 'Finance Team',
      lastUpdated: new Date(2024, 0, 22),
      version: '3.0',
      steps: 6,
      tags: ['invoices', 'billing', 'payments'],
    },
    {
      id: 'PROC-004',
      name: 'Employee Recruitment',
      category: 'HR',
      description: 'End-to-end recruitment process from job posting to offer acceptance',
      owner: 'HR Department',
      lastUpdated: new Date(2024, 0, 15),
      version: '2.3',
      steps: 10,
      tags: ['recruitment', 'hiring', 'HR'],
    },
    {
      id: 'PROC-005',
      name: 'IT Support Ticket Resolution',
      category: 'IT',
      description: 'Process for handling and resolving IT support tickets efficiently',
      owner: 'IT Department',
      lastUpdated: new Date(2024, 0, 25),
      version: '1.8',
      steps: 7,
      tags: ['IT', 'support', 'tickets'],
    },
    {
      id: 'PROC-006',
      name: 'Quality Control Inspection',
      category: 'Quality',
      description: 'Quality control process for inspecting products before shipment',
      owner: 'Quality Team',
      lastUpdated: new Date(2024, 0, 19),
      version: '2.0',
      steps: 5,
      tags: ['quality', 'inspection', 'control'],
    },
  ];

  const filteredProcesses = processes.filter(process => {
    const matchesSearch = process.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         process.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || process.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <ModulePage title="Process Library" description="Documented business processes and workflows">
      <div className="space-y-6">
        {/* Search and Filters */}
        <div className="card">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search processes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
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
        </div>

        {/* Processes List */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">All Processes ({filteredProcesses.length})</h2>
          <div className="space-y-4">
            {filteredProcesses.map((process) => (
              <div key={process.id} className="p-6 border border-slate-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <BookOpen className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{process.name}</h3>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-sm font-medium text-primary-600">{process.category}</span>
                          <span className="text-sm text-slate-500">v{process.version}</span>
                          <div className="flex items-center gap-1 text-sm text-slate-500">
                            <User className="w-4 h-4" />
                            {process.owner}
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 ml-12 mb-3">{process.description}</p>
                    <div className="ml-12 flex items-center gap-4 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        <span>{process.steps} steps</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Updated: {format(process.lastUpdated, 'MMM d, yyyy')}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-12 mt-3">
                      {process.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <button className="ml-12 mt-4 px-4 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all text-sm font-semibold">
                  View Process Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModulePage>
  );
};

export default ProcessLibrary;

