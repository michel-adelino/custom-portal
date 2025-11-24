import ModulePage from '../ModulePage';
import { TrendingUp, Lightbulb, CheckCircle2, Clock, User, Calendar, Target } from 'lucide-react';
import { useState } from 'react';
import { format } from 'date-fns';

const ContinuousImprovements = () => {
  const [filterStatus, setFilterStatus] = useState('all');

  const improvements = [
    {
      id: 'IMP-001',
      title: 'Automate Invoice Processing',
      description: 'Implement automated invoice processing to reduce manual work and processing time by 60%',
      category: 'Process Automation',
      status: 'implemented',
      submittedBy: 'Finance Team',
      submittedDate: new Date(2024, 0, 10),
      implementedDate: new Date(2024, 0, 25),
      impact: 'high',
      estimatedSavings: '$15,000/year',
      department: 'Finance',
    },
    {
      id: 'IMP-002',
      title: 'Customer Portal Enhancement',
      description: 'Add self-service features to customer portal to reduce support tickets by 40%',
      category: 'Customer Experience',
      status: 'in-progress',
      submittedBy: 'Customer Success',
      submittedDate: new Date(2024, 0, 15),
      targetDate: new Date(2024, 2, 1),
      impact: 'high',
      estimatedSavings: '40% ticket reduction',
      department: 'Customer Success',
    },
    {
      id: 'IMP-003',
      title: 'Inventory Management System Upgrade',
      description: 'Upgrade inventory system with real-time tracking and automated reordering',
      category: 'Technology',
      status: 'planned',
      submittedBy: 'Operations Team',
      submittedDate: new Date(2024, 0, 20),
      targetDate: new Date(2024, 3, 1),
      impact: 'medium',
      estimatedSavings: '30% inventory reduction',
      department: 'Operations',
    },
    {
      id: 'IMP-004',
      title: 'Employee Training Platform',
      description: 'Implement online training platform to improve onboarding and skill development',
      category: 'HR & Development',
      status: 'in-progress',
      submittedBy: 'HR Department',
      submittedDate: new Date(2024, 0, 12),
      targetDate: new Date(2024, 2, 15),
      impact: 'medium',
      estimatedSavings: '50% faster onboarding',
      department: 'HR',
    },
    {
      id: 'IMP-005',
      title: 'Quality Control Automation',
      description: 'Automate quality control checks using AI-powered inspection systems',
      category: 'Process Automation',
      status: 'planned',
      submittedBy: 'Quality Team',
      submittedDate: new Date(2024, 0, 22),
      targetDate: new Date(2024, 4, 1),
      impact: 'high',
      estimatedSavings: '25% defect reduction',
      department: 'Quality',
    },
  ];

  const filteredImprovements = filterStatus === 'all' 
    ? improvements 
    : improvements.filter(imp => imp.status === filterStatus);

  const stats = {
    total: improvements.length,
    implemented: improvements.filter(i => i.status === 'implemented').length,
    inProgress: improvements.filter(i => i.status === 'in-progress').length,
    planned: improvements.filter(i => i.status === 'planned').length,
  };

  return (
    <ModulePage title="Continuous Improvements" description="Track improvement initiatives and process enhancements">
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary-100 rounded-lg">
                <Lightbulb className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">{stats.total}</div>
                <div className="text-sm text-slate-600">Total Ideas</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">{stats.implemented}</div>
                <div className="text-sm text-slate-600">Implemented</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Clock className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">{stats.inProgress}</div>
                <div className="text-sm text-slate-600">In Progress</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Target className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">{stats.planned}</div>
                <div className="text-sm text-slate-600">Planned</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="card">
          <div className="flex gap-2">
            {['all', 'implemented', 'in-progress', 'planned'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  filterStatus === status
                    ? 'bg-primary-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Improvements List */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Improvement Initiatives ({filteredImprovements.length})</h2>
          <div className="space-y-4">
            {filteredImprovements.map((improvement) => (
              <div key={improvement.id} className="p-6 border border-slate-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{improvement.title}</h3>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-sm font-medium text-primary-600">{improvement.category}</span>
                          <span className="text-sm text-slate-500">•</span>
                          <span className="text-sm text-slate-500">{improvement.department}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 ml-12 mb-3">{improvement.description}</p>
                    <div className="ml-12 flex items-center gap-4 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>By: {improvement.submittedBy}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Submitted: {format(improvement.submittedDate, 'MMM d, yyyy')}</span>
                      </div>
                      {improvement.implementedDate && (
                        <div className="flex items-center gap-2 text-emerald-600">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Implemented: {format(improvement.implementedDate, 'MMM d, yyyy')}</span>
                        </div>
                      )}
                      {improvement.targetDate && (
                        <div className="flex items-center gap-2">
                          <Target className="w-4 h-4" />
                          <span>Target: {format(improvement.targetDate, 'MMM d, yyyy')}</span>
                        </div>
                      )}
                    </div>
                    <div className="ml-12 mt-3 flex items-center gap-4">
                      <div className="px-3 py-1 bg-slate-100 rounded-lg">
                        <span className="text-sm font-semibold text-slate-700">Impact: </span>
                        <span className={`text-sm font-bold ${
                          improvement.impact === 'high' ? 'text-red-600' :
                          improvement.impact === 'medium' ? 'text-yellow-600' :
                          'text-green-600'
                        }`}>
                          {improvement.impact.toUpperCase()}
                        </span>
                      </div>
                      <div className="px-3 py-1 bg-emerald-50 rounded-lg">
                        <span className="text-sm font-semibold text-emerald-700">Savings: {improvement.estimatedSavings}</span>
                      </div>
                    </div>
                  </div>
                  <span className={`px-4 py-2 rounded-xl text-xs font-semibold ${
                    improvement.status === 'implemented' ? 'bg-emerald-100 text-emerald-700' :
                    improvement.status === 'in-progress' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {improvement.status.replace('-', ' ')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModulePage>
  );
};

export default ContinuousImprovements;

