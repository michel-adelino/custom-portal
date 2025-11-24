import ModulePage from '../ModulePage';
import { FileText, Search, Filter, Calendar, User, Download, Eye, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { format } from 'date-fns';

const SOPs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = ['all', 'Operations', 'Sales', 'Finance', 'HR', 'IT', 'Quality', 'Safety'];

  const sops = [
    {
      id: 'SOP-001',
      title: 'Customer Service Protocol',
      department: 'Sales',
      description: 'Standard procedures for handling customer inquiries, complaints, and service requests',
      owner: 'Customer Service Manager',
      lastUpdated: new Date(2024, 0, 20),
      version: '3.2',
      status: 'active',
      pages: 15,
      tags: ['customer service', 'protocol', 'communication'],
    },
    {
      id: 'SOP-002',
      title: 'Data Backup and Recovery',
      department: 'IT',
      description: 'Procedures for regular data backups and disaster recovery protocols',
      owner: 'IT Manager',
      lastUpdated: new Date(2024, 0, 18),
      version: '2.5',
      status: 'active',
      pages: 12,
      tags: ['IT', 'backup', 'security'],
    },
    {
      id: 'SOP-003',
      title: 'Workplace Safety Guidelines',
      department: 'Safety',
      description: 'Comprehensive safety procedures and guidelines for workplace operations',
      owner: 'Safety Officer',
      lastUpdated: new Date(2024, 0, 22),
      version: '4.0',
      status: 'active',
      pages: 25,
      tags: ['safety', 'compliance', 'guidelines'],
    },
    {
      id: 'SOP-004',
      title: 'Expense Approval Process',
      department: 'Finance',
      description: 'Standard procedures for submitting and approving business expenses',
      owner: 'Finance Manager',
      lastUpdated: new Date(2024, 0, 15),
      version: '2.1',
      status: 'active',
      pages: 8,
      tags: ['expenses', 'approval', 'finance'],
    },
    {
      id: 'SOP-005',
      title: 'Quality Control Inspection',
      department: 'Quality',
      description: 'Detailed procedures for quality control inspections and testing',
      owner: 'Quality Manager',
      lastUpdated: new Date(2024, 0, 19),
      version: '3.1',
      status: 'active',
      pages: 18,
      tags: ['quality', 'inspection', 'testing'],
    },
    {
      id: 'SOP-006',
      title: 'Employee Performance Review',
      department: 'HR',
      description: 'Standard procedures for conducting employee performance reviews',
      owner: 'HR Director',
      lastUpdated: new Date(2024, 0, 17),
      version: '2.8',
      status: 'active',
      pages: 10,
      tags: ['HR', 'performance', 'reviews'],
    },
  ];

  const filteredSOPs = sops.filter(sop => {
    const matchesSearch = sop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         sop.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = selectedDepartment === 'all' || sop.department === selectedDepartment;
    return matchesSearch && matchesDept;
  });

  return (
    <ModulePage title="Standard Operating Procedures (SOPs)" description="Company SOPs, guidelines, and standard procedures">
      <div className="space-y-6">
        {/* Search and Filters */}
        <div className="card">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search SOPs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    selectedDepartment === dept
                      ? 'bg-primary-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {dept.charAt(0).toUpperCase() + dept.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* SOPs List */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">All SOPs ({filteredSOPs.length})</h2>
          <div className="space-y-4">
            {filteredSOPs.map((sop) => (
              <div key={sop.id} className="p-6 border border-slate-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <FileText className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-bold text-slate-900">{sop.title}</h3>
                          <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-lg text-xs font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            {sop.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-sm font-medium text-primary-600">{sop.department}</span>
                          <span className="text-sm text-slate-500">v{sop.version}</span>
                          <div className="flex items-center gap-1 text-sm text-slate-500">
                            <User className="w-4 h-4" />
                            {sop.owner}
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 ml-12 mb-3">{sop.description}</p>
                    <div className="ml-12 flex items-center gap-4 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        <span>{sop.pages} pages</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Updated: {format(sop.lastUpdated, 'MMM d, yyyy')}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-12 mt-3">
                      {sop.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 ml-12">
                  <button className="px-4 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all text-sm font-semibold flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    View SOP
                  </button>
                  <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-all text-sm font-semibold flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download
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

export default SOPs;

