import ModulePage from '../ModulePage';
import { XCircle, DollarSign, Calendar, User, AlertCircle, FileText } from 'lucide-react';
import { format } from 'date-fns';

const LostDeals = () => {
  const deals = [
    {
      id: 'DEAL-L001',
      customer: 'Competitor Corp',
      value: 20000,
      lostDate: new Date(2024, 0, 10),
      salesRep: 'John Sales',
      reason: 'Price too high',
      competitor: 'Competitor A',
      stage: 'Proposal',
      notes: 'Customer chose competitor due to lower pricing',
    },
    {
      id: 'DEAL-L002',
      customer: 'Budget Limited Inc',
      value: 15000,
      lostDate: new Date(2024, 0, 18),
      salesRep: 'Jane Manager',
      reason: 'Budget constraints',
      competitor: null,
      stage: 'Qualification',
      notes: 'Customer postponed purchase due to budget cuts',
    },
    {
      id: 'DEAL-L003',
      customer: 'Timing Issues Ltd',
      value: 30000,
      lostDate: new Date(2024, 0, 22),
      salesRep: 'Bob Director',
      reason: 'Timing not right',
      competitor: null,
      stage: 'Negotiation',
      notes: 'Customer decided to wait until next quarter',
    },
  ];

  const totalLostValue = deals.reduce((sum, deal) => sum + deal.value, 0);
  const reasons = [...new Set(deals.map(d => d.reason))];

  return (
    <ModulePage title="Lost Deals" description="Deals that were not closed - learn from losses">
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-100 rounded-lg">
                <XCircle className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">{deals.length}</div>
                <div className="text-sm text-slate-600">Lost Deals</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <DollarSign className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">${(totalLostValue / 1000).toFixed(0)}k</div>
                <div className="text-sm text-slate-600">Lost Value</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <AlertCircle className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">{reasons.length}</div>
                <div className="text-sm text-slate-600">Loss Reasons</div>
              </div>
            </div>
          </div>
        </div>

        {/* Loss Reasons Analysis */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Loss Reasons</h2>
          <div className="space-y-2">
            {reasons.map((reason) => {
              const count = deals.filter(d => d.reason === reason).length;
              return (
                <div key={reason} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                  <span className="font-medium text-slate-900">{reason}</span>
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-lg text-sm font-semibold">
                    {count} deal{count > 1 ? 's' : ''}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Lost Deals List */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Lost Deals ({deals.length})</h2>
          <div className="space-y-4">
            {deals.map((deal) => (
              <div key={deal.id} className="p-6 border border-red-200 rounded-xl bg-red-50 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-red-100 rounded-lg">
                        <XCircle className="w-5 h-5 text-red-600" />
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
                          <span>Lost: {format(deal.lostDate, 'MMM d, yyyy')}</span>
                        </div>
                        <div>
                          <span className="font-semibold">Stage:</span> {deal.stage}
                        </div>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-red-200">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertCircle className="w-4 h-4 text-red-600" />
                          <span className="font-semibold text-slate-900">Reason: {deal.reason}</span>
                        </div>
                        {deal.competitor && (
                          <div className="text-sm text-slate-600 mb-1">
                            Lost to: <span className="font-semibold">{deal.competitor}</span>
                          </div>
                        )}
                        <p className="text-sm text-slate-700 mt-2">{deal.notes}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-600 mb-2">${deal.value.toLocaleString()}</div>
                    <span className="px-4 py-2 bg-red-100 text-red-700 rounded-xl text-xs font-semibold">
                      Lost
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

export default LostDeals;

