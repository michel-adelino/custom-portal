import ModulePage from '../ModulePage';
import { Calendar, DollarSign, AlertCircle, Clock, Building2 } from 'lucide-react';
import { format } from 'date-fns';

const UpcomingPayments = () => {
  const payments = [
    {
      id: 'PAY-001',
      type: 'Bill',
      vendor: 'Cloud Services Inc',
      amount: 5000,
      dueDate: new Date(2024, 1, 5),
      status: 'upcoming',
      category: 'Software Subscription',
      daysUntil: 5,
    },
    {
      id: 'PAY-002',
      type: 'Invoice',
      vendor: 'Marketing Agency',
      amount: 8000,
      dueDate: new Date(2024, 1, 10),
      status: 'upcoming',
      category: 'Marketing Services',
      daysUntil: 10,
    },
    {
      id: 'PAY-003',
      type: 'Salary',
      vendor: 'Payroll',
      amount: 45000,
      dueDate: new Date(2024, 1, 1),
      status: 'due-today',
      category: 'Payroll',
      daysUntil: 0,
    },
    {
      id: 'PAY-004',
      type: 'Bill',
      vendor: 'Office Rent',
      amount: 5000,
      dueDate: new Date(2024, 1, 15),
      status: 'upcoming',
      category: 'Rent',
      daysUntil: 15,
    },
    {
      id: 'PAY-005',
      type: 'Bill',
      vendor: 'Utilities Company',
      amount: 1200,
      dueDate: new Date(2024, 0, 31),
      status: 'overdue',
      category: 'Utilities',
      daysUntil: -1,
    },
  ];

  const stats = {
    total: payments.reduce((sum, p) => sum + p.amount, 0),
    dueToday: payments.filter(p => p.status === 'due-today').reduce((sum, p) => sum + p.amount, 0),
    upcoming: payments.filter(p => p.status === 'upcoming').reduce((sum, p) => sum + p.amount, 0),
    overdue: payments.filter(p => p.status === 'overdue').reduce((sum, p) => sum + p.amount, 0),
  };

  const sortedPayments = [...payments].sort((a, b) => {
    if (a.status === 'overdue') return -1;
    if (b.status === 'overdue') return 1;
    if (a.status === 'due-today') return -1;
    if (b.status === 'due-today') return 1;
    return a.daysUntil - b.daysUntil;
  });

  return (
    <ModulePage title="Upcoming Payments" description="Scheduled payments, reminders, and payment tracking">
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary-100 rounded-lg">
                <DollarSign className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">${(stats.total / 1000).toFixed(0)}k</div>
                <div className="text-sm text-slate-600">Total Due</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-100 rounded-lg">
                <AlertCircle className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">${(stats.overdue / 1000).toFixed(0)}k</div>
                <div className="text-sm text-slate-600">Overdue</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Clock className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">${(stats.dueToday / 1000).toFixed(0)}k</div>
                <div className="text-sm text-slate-600">Due Today</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">${(stats.upcoming / 1000).toFixed(0)}k</div>
                <div className="text-sm text-slate-600">Upcoming</div>
              </div>
            </div>
          </div>
        </div>

        {/* Payments List */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">All Payments ({payments.length})</h2>
          <div className="space-y-4">
            {sortedPayments.map((payment) => (
              <div key={payment.id} className={`p-6 border rounded-xl transition-all ${
                payment.status === 'overdue' ? 'border-red-300 bg-red-50' :
                payment.status === 'due-today' ? 'border-yellow-300 bg-yellow-50' :
                'border-slate-200 hover:border-primary-300 hover:shadow-md'
              }`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg ${
                        payment.status === 'overdue' ? 'bg-red-100' :
                        payment.status === 'due-today' ? 'bg-yellow-100' :
                        'bg-primary-100'
                      }`}>
                        <Calendar className={`w-5 h-5 ${
                          payment.status === 'overdue' ? 'text-red-600' :
                          payment.status === 'due-today' ? 'text-yellow-600' :
                          'text-primary-600'
                        }`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{payment.id}</h3>
                        <div className="flex items-center gap-3 mt-1">
                          <div className="flex items-center gap-1 text-sm text-slate-600">
                            <Building2 className="w-4 h-4" />
                            {payment.vendor}
                          </div>
                          <span className="text-sm text-slate-500">•</span>
                          <span className="text-sm text-slate-600">{payment.category}</span>
                          <span className="text-sm text-slate-500">•</span>
                          <span className="text-sm font-medium text-primary-600">{payment.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className="ml-12 flex items-center gap-4 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Due: {format(payment.dueDate, 'MMM d, yyyy')}</span>
                      </div>
                      {payment.daysUntil === 0 && (
                        <div className="flex items-center gap-2 text-yellow-600 font-semibold">
                          <AlertCircle className="w-4 h-4" />
                          <span>Due Today!</span>
                        </div>
                      )}
                      {payment.daysUntil < 0 && (
                        <div className="flex items-center gap-2 text-red-600 font-semibold">
                          <AlertCircle className="w-4 h-4" />
                          <span>Overdue by {Math.abs(payment.daysUntil)} day{Math.abs(payment.daysUntil) > 1 ? 's' : ''}</span>
                        </div>
                      )}
                      {payment.daysUntil > 0 && (
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{payment.daysUntil} day{payment.daysUntil > 1 ? 's' : ''} until due</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    <div className="text-2xl font-bold text-slate-900">${payment.amount.toLocaleString()}</div>
                    <span className={`px-4 py-2 rounded-xl text-xs font-semibold ${
                      payment.status === 'overdue' ? 'bg-red-100 text-red-700' :
                      payment.status === 'due-today' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {payment.status === 'due-today' ? 'Due Today' : payment.status}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 ml-12">
                  <button className="px-4 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all text-sm font-semibold">
                    Pay Now
                  </button>
                  <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-all text-sm font-semibold">
                    View Details
                  </button>
                  {payment.status === 'upcoming' && (
                    <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-all text-sm font-semibold">
                      Set Reminder
                    </button>
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

export default UpcomingPayments;

