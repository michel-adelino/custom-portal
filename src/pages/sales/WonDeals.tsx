import ModulePage from '../ModulePage';
import { Trophy, DollarSign, Calendar, User, TrendingUp, Award } from 'lucide-react';
import { format } from 'date-fns';

const WonDeals = () => {
  const deals = [
    {
      id: 'DEAL-001',
      customer: 'ABC Corp',
      value: 15000,
      closedDate: new Date(2024, 0, 15),
      salesRep: 'John Sales',
      product: 'Enterprise Package',
      contractLength: '12 months',
      probability: 100,
    },
    {
      id: 'DEAL-002',
      customer: 'Tech Solutions',
      value: 40000,
      closedDate: new Date(2024, 0, 20),
      salesRep: 'Jane Manager',
      product: 'Premium Solution',
      contractLength: '24 months',
      probability: 100,
    },
    {
      id: 'DEAL-003',
      customer: 'Success Inc',
      value: 50000,
      closedDate: new Date(2024, 0, 18),
      salesRep: 'Bob Director',
      product: 'Custom Enterprise',
      contractLength: '36 months',
      probability: 100,
    },
    {
      id: 'DEAL-004',
      customer: 'Global Industries',
      value: 80000,
      closedDate: new Date(2024, 0, 25),
      salesRep: 'Alice VP',
      product: 'Enterprise Suite',
      contractLength: '24 months',
      probability: 100,
    },
  ];

  const totalValue = deals.reduce((sum, deal) => sum + deal.value, 0);
  const averageDeal = totalValue / deals.length;
  const thisMonth = deals.filter(d => d.closedDate.getMonth() === new Date().getMonth()).length;

  return (
    <ModulePage title="Won Deals" description="Successfully closed deals and sales wins">
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <Trophy className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">{deals.length}</div>
                <div className="text-sm text-slate-600">Total Won</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary-100 rounded-lg">
                <DollarSign className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">${(totalValue / 1000).toFixed(0)}k</div>
                <div className="text-sm text-slate-600">Total Value</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">${(averageDeal / 1000).toFixed(0)}k</div>
                <div className="text-sm text-slate-600">Avg Deal Size</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Calendar className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">{thisMonth}</div>
                <div className="text-sm text-slate-600">This Month</div>
              </div>
            </div>
          </div>
        </div>

        {/* Won Deals List */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Won Deals ({deals.length})</h2>
          <div className="space-y-4">
            {deals.map((deal) => (
              <div key={deal.id} className="p-6 border border-emerald-200 rounded-xl bg-emerald-50 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-emerald-100 rounded-lg">
                        <Award className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{deal.id}</h3>
                        <p className="text-sm text-slate-600 mt-1">{deal.customer}</p>
                      </div>
                    </div>
                    <div className="ml-12 space-y-2">
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>Sales Rep: {deal.salesRep}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>Closed: {format(deal.closedDate, 'MMM d, yyyy')}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <div>
                          <span className="font-semibold">Product:</span> {deal.product}
                        </div>
                        <div>
                          <span className="font-semibold">Contract:</span> {deal.contractLength}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">${deal.value.toLocaleString()}</div>
                    <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-xl text-xs font-semibold">
                      Won
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

export default WonDeals;

