import ModulePage from '../ModulePage';
import { Factory, CheckCircle2, Clock, AlertCircle, TrendingUp, Package, Target } from 'lucide-react';

const Status = () => {
  const productionLines = [
    {
      id: 'LINE-001',
      name: 'Production Line A',
      status: 'running',
      currentJob: 'JOB-002',
      efficiency: 92,
      output: 45,
      target: 50,
      unit: 'units/hour',
      issues: 0,
    },
    {
      id: 'LINE-002',
      name: 'Production Line B',
      status: 'running',
      currentJob: 'JOB-003',
      efficiency: 88,
      output: 42,
      target: 48,
      unit: 'units/hour',
      issues: 1,
    },
    {
      id: 'LINE-003',
      name: 'Production Line C',
      status: 'maintenance',
      currentJob: null,
      efficiency: 0,
      output: 0,
      target: 40,
      unit: 'units/hour',
      issues: 0,
      maintenanceEnd: '2024-02-01 14:00',
    },
    {
      id: 'LINE-004',
      name: 'Production Line D',
      status: 'running',
      currentJob: 'JOB-004',
      efficiency: 95,
      output: 38,
      target: 40,
      unit: 'units/hour',
      issues: 0,
    },
  ];

  const overallStats = {
    running: productionLines.filter(l => l.status === 'running').length,
    total: productionLines.length,
    totalOutput: productionLines.reduce((sum, l) => sum + l.output, 0),
    totalTarget: productionLines.reduce((sum, l) => sum + l.target, 0),
    avgEfficiency: productionLines.filter(l => l.status === 'running').reduce((sum, l) => sum + l.efficiency, 0) / 
                   productionLines.filter(l => l.status === 'running').length || 0,
  };

  return (
    <ModulePage title="Manufacturing Status" description="Current manufacturing status and production line monitoring">
      <div className="space-y-6">
        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <Factory className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">{overallStats.running}/{overallStats.total}</div>
                <div className="text-sm text-slate-600">Lines Running</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary-100 rounded-lg">
                <Package className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">{overallStats.totalOutput}</div>
                <div className="text-sm text-slate-600">Current Output/hr</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">{overallStats.avgEfficiency.toFixed(0)}%</div>
                <div className="text-sm text-slate-600">Avg Efficiency</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Target className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">{overallStats.totalTarget}</div>
                <div className="text-sm text-slate-600">Target Output/hr</div>
              </div>
            </div>
          </div>
        </div>

        {/* Production Lines */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Production Lines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {productionLines.map((line) => (
              <div key={line.id} className="p-6 border border-slate-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg ${
                        line.status === 'running' ? 'bg-emerald-100' :
                        line.status === 'maintenance' ? 'bg-yellow-100' :
                        'bg-red-100'
                      }`}>
                        <Factory className={`w-5 h-5 ${
                          line.status === 'running' ? 'text-emerald-600' :
                          line.status === 'maintenance' ? 'text-yellow-600' :
                          'text-red-600'
                        }`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{line.name}</h3>
                        {line.currentJob && (
                          <p className="text-sm text-slate-600 mt-1">Job: {line.currentJob}</p>
                        )}
                      </div>
                    </div>
                    {line.status === 'running' && (
                      <div className="ml-12 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-slate-600">Output</span>
                          <span className="text-lg font-bold text-slate-900">{line.output} {line.unit}</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-3">
                          <div
                            className={`h-3 rounded-full ${
                              line.efficiency >= 90 ? 'bg-emerald-600' :
                              line.efficiency >= 75 ? 'bg-blue-600' :
                              'bg-yellow-600'
                            }`}
                            style={{ width: `${line.efficiency}%` }}
                          />
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Efficiency: {line.efficiency}%</span>
                          <span className="text-slate-600">Target: {line.target} {line.unit}</span>
                        </div>
                        {line.issues > 0 && (
                          <div className="flex items-center gap-2 text-sm text-red-600">
                            <AlertCircle className="w-4 h-4" />
                            <span>{line.issues} issue{line.issues > 1 ? 's' : ''} reported</span>
                          </div>
                        )}
                      </div>
                    )}
                    {line.status === 'maintenance' && (
                      <div className="ml-12">
                        <div className="flex items-center gap-2 text-sm text-yellow-600 mb-2">
                          <Clock className="w-4 h-4" />
                          <span>Under Maintenance</span>
                        </div>
                        {line.maintenanceEnd && (
                          <p className="text-sm text-slate-600">Expected completion: {line.maintenanceEnd}</p>
                        )}
                      </div>
                    )}
                  </div>
                  <span className={`px-4 py-2 rounded-xl text-xs font-semibold ${
                    line.status === 'running' ? 'bg-emerald-100 text-emerald-700' :
                    line.status === 'maintenance' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {line.status}
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

export default Status;

