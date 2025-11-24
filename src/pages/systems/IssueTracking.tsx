import ModulePage from '../ModulePage';
import { AlertCircle, Clock, CheckCircle2, User, Calendar, Filter } from 'lucide-react';
import { useState } from 'react';
import { format } from 'date-fns';

const IssueTracking = () => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');

  const issues = [
    { 
      id: 1, 
      title: 'System Performance Issue', 
      description: 'System experiencing slow response times during peak hours',
      status: 'open', 
      priority: 'high', 
      assignedTo: 'IT Team',
      reporter: 'John Doe',
      createdDate: new Date(2024, 0, 25),
      dueDate: new Date(2024, 0, 30),
      tags: ['system', 'performance', 'urgent'],
    },
    { 
      id: 2, 
      title: 'Process Improvement Suggestion', 
      description: 'Proposal to streamline the order fulfillment process',
      status: 'in-progress', 
      priority: 'medium', 
      assignedTo: 'Operations',
      reporter: 'Jane Smith',
      createdDate: new Date(2024, 0, 20),
      dueDate: new Date(2024, 1, 5),
      tags: ['process', 'improvement'],
    },
    { 
      id: 3, 
      title: 'Documentation Update Needed', 
      description: 'User manual needs updating for new feature release',
      status: 'resolved', 
      priority: 'low', 
      assignedTo: 'Admin',
      reporter: 'Bob Johnson',
      createdDate: new Date(2024, 0, 15),
      resolvedDate: new Date(2024, 0, 22),
      tags: ['documentation'],
    },
    { 
      id: 4, 
      title: 'Security Vulnerability Found', 
      description: 'Potential security issue identified in authentication module',
      status: 'open', 
      priority: 'high', 
      assignedTo: 'Security Team',
      reporter: 'Alice Williams',
      createdDate: new Date(2024, 0, 26),
      dueDate: new Date(2024, 0, 28),
      tags: ['security', 'urgent'],
    },
  ];

  const filteredIssues = issues.filter(issue => {
    const statusMatch = filterStatus === 'all' || issue.status === filterStatus;
    const priorityMatch = filterPriority === 'all' || issue.priority === filterPriority;
    return statusMatch && priorityMatch;
  });

  const stats = {
    open: issues.filter(i => i.status === 'open').length,
    inProgress: issues.filter(i => i.status === 'in-progress').length,
    resolved: issues.filter(i => i.status === 'resolved').length,
    high: issues.filter(i => i.priority === 'high').length,
  };

  return (
    <ModulePage title="Issue Tracking" description="Track, manage, and resolve issues and improvements">
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <AlertCircle className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">{stats.open}</div>
                <div className="text-sm text-slate-600">Open</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Clock className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">{stats.inProgress}</div>
                <div className="text-sm text-slate-600">In Progress</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">{stats.resolved}</div>
                <div className="text-sm text-slate-600">Resolved</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-100 rounded-lg">
                <AlertCircle className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">{stats.high}</div>
                <div className="text-sm text-slate-600">High Priority</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="card">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-slate-600" />
            <h3 className="font-bold text-slate-900">Filters</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <div>
              <label className="text-sm font-medium text-slate-700 mb-1 block">Status</label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
              >
                <option value="all">All</option>
                <option value="open">Open</option>
                <option value="in-progress">In Progress</option>
                <option value="resolved">Resolved</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 mb-1 block">Priority</label>
              <select
                value={filterPriority}
                onChange={(e) => setFilterPriority(e.target.value)}
                className="px-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
              >
                <option value="all">All</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Issues List */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Issues ({filteredIssues.length})</h2>
          <div className="space-y-4">
            {filteredIssues.map((issue) => (
              <div key={issue.id} className="p-6 border border-slate-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg ${
                        issue.priority === 'high' ? 'bg-red-100' :
                        issue.priority === 'medium' ? 'bg-yellow-100' :
                        'bg-green-100'
                      }`}>
                        <AlertCircle className={`w-5 h-5 ${
                          issue.priority === 'high' ? 'text-red-600' :
                          issue.priority === 'medium' ? 'text-yellow-600' :
                          'text-green-600'
                        }`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{issue.title}</h3>
                        <p className="text-sm text-slate-600 mt-1">{issue.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 ml-12">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span className="font-medium">Assigned: {issue.assignedTo}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>Reporter: {issue.reporter}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Created: {format(issue.createdDate, 'MMM d, yyyy')}</span>
                      </div>
                      {issue.dueDate && (
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>Due: {format(issue.dueDate, 'MMM d, yyyy')}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-3 ml-12">
                      {issue.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className={`px-4 py-2 rounded-xl text-xs font-semibold ${
                      issue.priority === 'high' ? 'bg-red-100 text-red-700' :
                      issue.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {issue.priority}
                    </span>
                    <span className={`px-4 py-2 rounded-xl text-xs font-semibold ${
                      issue.status === 'open' ? 'bg-blue-100 text-blue-700' :
                      issue.status === 'in-progress' ? 'bg-purple-100 text-purple-700' :
                      'bg-emerald-100 text-emerald-700'
                    }`}>
                      {issue.status.replace('-', ' ')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModulePage>
  );
};

export default IssueTracking;

