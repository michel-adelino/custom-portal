import ModulePage from '../ModulePage';
import { TrendingUp, TrendingDown, DollarSign, Calendar, ArrowUp, ArrowDown } from 'lucide-react';

const Cashflow = () => {
  const monthlyData = [
    { month: 'Oct 2023', income: 45000, expenses: 32000, net: 13000 },
    { month: 'Nov 2023', income: 52000, expenses: 35000, net: 17000 },
    { month: 'Dec 2023', income: 48000, expenses: 38000, net: 10000 },
    { month: 'Jan 2024', income: 55000, expenses: 34000, net: 21000 },
    { month: 'Feb 2024', income: 58000, expenses: 36000, net: 22000 },
  ];

  const upcoming = [
    { type: 'income', description: 'Invoice INV-002 Payment', amount: 8500, date: '2024-02-20' },
    { type: 'income', description: 'Invoice INV-004 Payment', amount: 25000, date: '2024-02-18' },
    { type: 'expense', description: 'Office Rent', amount: 5000, date: '2024-02-15' },
    { type: 'expense', description: 'Payroll', amount: 25000, date: '2024-02-28' },
  ];

  const currentMonth = monthlyData[monthlyData.length - 1];
  const previousMonth = monthlyData[monthlyData.length - 2];
  const incomeChange = ((currentMonth.income - previousMonth.income) / previousMonth.income * 100).toFixed(1);
  const expenseChange = ((currentMonth.expenses - previousMonth.expenses) / previousMonth.expenses * 100).toFixed(1);

  const totalIncome = monthlyData.reduce((sum, m) => sum + m.income, 0);
  const totalExpenses = monthlyData.reduce((sum, m) => sum + m.expenses, 0);
  const totalNet = totalIncome - totalExpenses;

  return (
    <ModulePage title="Cashflow" description="Cashflow analysis, forecasting, and financial insights">
      <div className="space-y-6">
        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-slate-600">Total Income</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">${(totalIncome / 1000).toFixed(0)}k</p>
              </div>
              <div className="p-3 bg-emerald-100 rounded-xl">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <ArrowUp className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-600 font-semibold">+{incomeChange}%</span>
              <span className="text-slate-600">vs last month</span>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-slate-600">Total Expenses</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">${(totalExpenses / 1000).toFixed(0)}k</p>
              </div>
              <div className="p-3 bg-red-100 rounded-xl">
                <TrendingDown className="w-6 h-6 text-red-600" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <ArrowUp className="w-4 h-4 text-red-600" />
              <span className="text-red-600 font-semibold">+{expenseChange}%</span>
              <span className="text-slate-600">vs last month</span>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-slate-600">Net Cashflow</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">${(totalNet / 1000).toFixed(0)}k</p>
              </div>
              <div className="p-3 bg-primary-100 rounded-xl">
                <DollarSign className="w-6 h-6 text-primary-600" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className={`font-semibold ${totalNet > 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                {totalNet > 0 ? 'Positive' : 'Negative'}
              </span>
            </div>
          </div>
        </div>

        {/* Monthly Trend */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Monthly Cashflow Trend</h2>
          <div className="space-y-4">
            {monthlyData.map((month, index) => {
              const maxValue = Math.max(...monthlyData.map(m => Math.max(m.income, m.expenses)));
              return (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-900">{month.month}</span>
                    <span className={`text-sm font-bold ${month.net > 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                      ${month.net.toLocaleString()}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-20 text-xs text-slate-600">Income</div>
                      <div className="flex-1 bg-slate-200 rounded-full h-4 relative">
                        <div
                          className="bg-emerald-600 h-4 rounded-full"
                          style={{ width: `${(month.income / maxValue) * 100}%` }}
                        />
                        <span className="absolute right-2 top-0.5 text-xs font-semibold text-white">
                          ${(month.income / 1000).toFixed(0)}k
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-20 text-xs text-slate-600">Expenses</div>
                      <div className="flex-1 bg-slate-200 rounded-full h-4 relative">
                        <div
                          className="bg-red-600 h-4 rounded-full"
                          style={{ width: `${(month.expenses / maxValue) * 100}%` }}
                        />
                        <span className="absolute right-2 top-0.5 text-xs font-semibold text-white">
                          ${(month.expenses / 1000).toFixed(0)}k
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Upcoming Transactions */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Upcoming Transactions</h2>
          <div className="space-y-3">
            {upcoming.map((item, index) => (
              <div key={index} className="p-4 border border-slate-200 rounded-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {item.type === 'income' ? (
                      <div className="p-2 bg-emerald-100 rounded-lg">
                        <ArrowDown className="w-5 h-5 text-emerald-600 rotate-180" />
                      </div>
                    ) : (
                      <div className="p-2 bg-red-100 rounded-lg">
                        <ArrowUp className="w-5 h-5 text-red-600" />
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-slate-900">{item.description}</p>
                      <div className="flex items-center gap-2 text-sm text-slate-600 mt-1">
                        <Calendar className="w-4 h-4" />
                        {item.date}
                      </div>
                    </div>
                  </div>
                  <span className={`text-lg font-bold ${
                    item.type === 'income' ? 'text-emerald-600' : 'text-red-600'
                  }`}>
                    {item.type === 'income' ? '+' : '-'}${item.amount.toLocaleString()}
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

export default Cashflow;

