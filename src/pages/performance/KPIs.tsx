import ModulePage from '../ModulePage';
import { Target, TrendingUp, TrendingDown, AlertCircle, CheckCircle2 } from 'lucide-react';

const KPIs = () => {
  const kpis = [
    { 
      id: 1, 
      name: 'Sales Target', 
      current: 85, 
      target: 100, 
      unit: '%',
      trend: '+5%',
      trendUp: true,
      description: 'Monthly sales target achievement',
    },
    { 
      id: 2, 
      name: 'Customer Satisfaction', 
      current: 4.5, 
      target: 5.0, 
      unit: '/5.0',
      trend: '+0.2',
      trendUp: true,
      description: 'Average customer satisfaction rating',
    },
    { 
      id: 3, 
      name: 'Projects Completed', 
      current: 12, 
      target: 15, 
      unit: '',
      trend: '+2',
      trendUp: true,
      description: 'Number of projects completed this quarter',
    },
    { 
      id: 4, 
      name: 'Response Time', 
      current: 2.5, 
      target: 2.0, 
      unit: ' hours',
      trend: '-0.3',
      trendUp: true,
      description: 'Average response time to customer inquiries',
    },
    { 
      id: 5, 
      name: 'Training Hours', 
      current: 24, 
      target: 30, 
      unit: ' hours',
      trend: '+4',
      trendUp: true,
      description: 'Training hours completed this quarter',
    },
  ];

  const overallPerformance = kpis.reduce((sum, kpi) => {
    const percentage = (kpi.current / kpi.target) * 100;
    return sum + Math.min(percentage, 100);
  }, 0) / kpis.length;

  return (
    <ModulePage title="Personal KPIs" description="Track your key performance indicators and goals">
      <div className="space-y-6">
        {/* Overall Performance */}
        <div className="card bg-gradient-to-r from-primary-50 to-blue-50 border-primary-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-1">Overall Performance</h2>
              <p className="text-sm text-slate-600">Average KPI achievement</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-primary-600">{overallPerformance.toFixed(1)}%</div>
            </div>
          </div>
          <div className="mt-4 w-full bg-slate-200 rounded-full h-4">
            <div
              className="bg-primary-600 h-4 rounded-full transition-all"
              style={{ width: `${overallPerformance}%` }}
            />
          </div>
        </div>

        {/* Individual KPIs */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Key Performance Indicators</h2>
          <div className="space-y-6">
            {kpis.map((kpi) => {
              const percentage = (kpi.current / kpi.target) * 100;
              const isOnTrack = percentage >= 75;
              
              return (
                <div key={kpi.id} className="p-6 border border-slate-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-primary-100 rounded-lg">
                          <Target className="w-5 h-5 text-primary-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900">{kpi.name}</h3>
                          <p className="text-sm text-slate-600 mt-1">{kpi.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-slate-900 mb-1">
                        {kpi.current}{kpi.unit}
                      </div>
                      <div className="text-sm text-slate-600">of {kpi.target}{kpi.unit}</div>
                      <div className={`flex items-center gap-1 text-sm mt-2 ${
                        kpi.trendUp ? 'text-emerald-600' : 'text-red-600'
                      }`}>
                        {kpi.trendUp ? (
                          <TrendingUp className="w-4 h-4" />
                        ) : (
                          <TrendingDown className="w-4 h-4" />
                        )}
                        <span className="font-semibold">{kpi.trend}</span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-12">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-600">Progress</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-900">{percentage.toFixed(1)}%</span>
                        {isOnTrack ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-yellow-600" />
                        )}
                      </div>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-4">
                      <div
                        className={`h-4 rounded-full transition-all ${
                          percentage >= 100 ? 'bg-emerald-600' :
                          percentage >= 75 ? 'bg-blue-600' :
                          percentage >= 50 ? 'bg-yellow-600' :
                          'bg-red-600'
                        }`}
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ModulePage>
  );
};

export default KPIs;

