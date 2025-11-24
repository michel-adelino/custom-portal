import ModulePage from '../ModulePage';
import { Receipt, DollarSign, Calendar, User, Tag, Filter, TrendingUp } from 'lucide-react';
import { format } from 'date-fns';
import { useState } from 'react';

const Expenses = () => {
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const categories = ['all', 'Travel', 'Meals', 'Office', 'Software', 'Marketing', 'Other'];

  const expenses = [
    {
      id: 'EXP-001',
      description: 'Business trip to client site',
      amount: 850,
      category: 'Travel',
      status: 'approved',
      submittedBy: 'John Doe',
      submittedDate: new Date(2024, 0, 20),
      approvedDate: new Date(2024, 0, 22),
      receipt: true,
    },
    {
      id: 'EXP-002',
      description: 'Team lunch meeting',
      amount: 120,
      category: 'Meals',
      status: 'pending',
      submittedBy: 'Jane Smith',
      submittedDate: new Date(2024, 0, 25),
      receipt: true,
    },
    {
      id: 'EXP-003',
      description: 'Office supplies purchase',
      amount: 350,
      category: 'Office',
      status: 'approved',
      submittedBy: 'Bob Johnson',
      submittedDate: new Date(2024, 0, 18),
      approvedDate: new Date(2024, 0, 19),
      receipt: true,
    },
    {
      id: 'EXP-004',
      description: 'Software subscription renewal',
      amount: 1200,
      category: 'Software',
      status: 'approved',
      submittedBy: 'Alice Williams',
      submittedDate: new Date(2024, 0, 15),
      approvedDate: new Date(2024, 0, 16),
      receipt: false,
    },
    {
      id: 'EXP-005',
      description: 'Marketing campaign materials',
      amount: 650,
      category: 'Marketing',
      status: 'pending',
      submittedBy: 'Charlie Brown',
      submittedDate: new Date(2024, 0, 26),
      receipt: true,
    },
  ];

  const filteredExpenses = expenses.filter(expense => {
    const categoryMatch = filterCategory === 'all' || expense.category === filterCategory;
    const statusMatch = filterStatus === 'all' || expense.status === filterStatus;
    return categoryMatch && statusMatch;
  });

  const stats = {
    total: expenses.reduce((sum, e) => sum + e.amount, 0),
    approved: expenses.filter(e => e.status === 'approved').reduce((sum, e) => sum + e.amount, 0),
    pending: expenses.filter(e => e.status === 'pending').reduce((sum, e) => sum + e.amount, 0),
    thisMonth: expenses.filter(e => e.submittedDate.getMonth() === new Date().getMonth()).reduce((sum, e) => sum + e.amount, 0),
  };

  return (
    <ModulePage title="Expenses" description="Track and manage business expenses">
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary-100 rounded-lg">
                <DollarSign className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">${stats.total.toLocaleString()}</div>
                <div className="text-sm text-slate-600">Total Expenses</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">${stats.approved.toLocaleString()}</div>
                <div className="text-sm text-slate-600">Approved</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Calendar className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">${stats.pending.toLocaleString()}</div>
                <div className="text-sm text-slate-600">Pending</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">${stats.thisMonth.toLocaleString()}</div>
                <div className="text-sm text-slate-600">This Month</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="card">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-slate-600" />
              <span className="text-sm font-medium text-slate-700">Category:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    filterCategory === cat
                      ? 'bg-primary-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-700">Status:</span>
              {['all', 'approved', 'pending'].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    filterStatus === status
                      ? 'bg-primary-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Expenses List */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">All Expenses ({filteredExpenses.length})</h2>
          <div className="space-y-4">
            {filteredExpenses.map((expense) => (
              <div key={expense.id} className="p-6 border border-slate-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <Receipt className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{expense.id}</h3>
                        <p className="text-sm text-slate-600 mt-1">{expense.description}</p>
                      </div>
                    </div>
                    <div className="ml-12 flex items-center gap-4 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Tag className="w-4 h-4" />
                        <span className="font-semibold">{expense.category}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{expense.submittedBy}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Submitted: {format(expense.submittedDate, 'MMM d, yyyy')}</span>
                      </div>
                      {expense.approvedDate && (
                        <div className="flex items-center gap-2 text-emerald-600">
                          <span>Approved: {format(expense.approvedDate, 'MMM d, yyyy')}</span>
                        </div>
                      )}
                      {expense.receipt && (
                        <div className="flex items-center gap-2 text-primary-600">
                          <Receipt className="w-4 h-4" />
                          <span className="font-semibold">Receipt attached</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    <div className="text-2xl font-bold text-slate-900">${expense.amount.toLocaleString()}</div>
                    <span className={`px-4 py-2 rounded-xl text-xs font-semibold ${
                      expense.status === 'approved' ? 'bg-emerald-100 text-emerald-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {expense.status}
                    </span>
                  </div>
                </div>
                {expense.status === 'pending' && (
                  <div className="flex gap-2 ml-12">
                    <button className="px-4 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all text-sm font-semibold">
                      Approve
                    </button>
                    <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-all text-sm font-semibold">
                      View Details
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModulePage>
  );
};

export default Expenses;

