import ModulePage from '../ModulePage';
import { TrendingUp, DollarSign, Calendar } from 'lucide-react';

const Pipeline = () => {
  const stages = [
    {
      name: 'Prospecting',
      deals: [
        { id: 1, name: 'ABC Corp', value: 15000, probability: 20, days: 5 },
        { id: 2, name: 'Global Industries', value: 60000, probability: 15, days: 2 },
      ],
      total: 75000,
    },
    {
      name: 'Qualification',
      deals: [
        { id: 3, name: 'XYZ Ltd', value: 25000, probability: 40, days: 8 },
      ],
      total: 25000,
    },
    {
      name: 'Proposal',
      deals: [
        { id: 4, name: 'Tech Solutions', value: 40000, probability: 60, days: 12 },
      ],
      total: 40000,
    },
    {
      name: 'Negotiation',
      deals: [
        { id: 5, name: 'Enterprise Co', value: 80000, probability: 75, days: 15 },
      ],
      total: 80000,
    },
    {
      name: 'Closed Won',
      deals: [
        { id: 6, name: 'Success Inc', value: 50000, probability: 100, days: 0 },
      ],
      total: 50000,
    },
  ];

  const totalPipeline = stages.reduce((sum, stage) => sum + stage.total, 0);
  const weightedValue = stages.reduce((sum, stage) => 
    sum + stage.deals.reduce((dealSum, deal) => dealSum + (deal.value * deal.probability / 100), 0), 0
  );

  return (
    <ModulePage title="Pipeline" description="Sales pipeline visualization and deal tracking">
      <div className="space-y-6">
        {/* Pipeline Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-primary-100 rounded-lg">
                <DollarSign className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">${(totalPipeline / 1000).toFixed(0)}k</div>
                <div className="text-sm text-slate-600">Total Pipeline</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">${(weightedValue / 1000).toFixed(0)}k</div>
                <div className="text-sm text-slate-600">Weighted Value</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">{stages.reduce((sum, s) => sum + s.deals.length, 0)}</div>
                <div className="text-sm text-slate-600">Active Deals</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pipeline Stages */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Sales Pipeline</h2>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {stages.map((stage, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-900">{stage.name}</h3>
                  <span className="text-sm font-semibold text-primary-600">${(stage.total / 1000).toFixed(0)}k</span>
                </div>
                <div className="space-y-3">
                  {stage.deals.map((deal) => (
                    <div key={deal.id} className="bg-white p-4 rounded-xl border border-slate-200 hover:border-primary-300 hover:shadow-md transition-all cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-slate-900">{deal.name}</h4>
                        <span className="text-xs font-semibold text-slate-600">{deal.probability}%</span>
                      </div>
                      <div className="text-sm font-bold text-primary-600 mb-2">${deal.value.toLocaleString()}</div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-primary-600 h-2 rounded-full"
                          style={{ width: `${deal.probability}%` }}
                        />
                      </div>
                      {deal.days > 0 && (
                        <div className="text-xs text-slate-500 mt-2">{deal.days} days in stage</div>
                      )}
                    </div>
                  ))}
                  {stage.deals.length === 0 && (
                    <div className="text-center py-8 text-slate-400 text-sm">No deals</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModulePage>
  );
};

export default Pipeline;

