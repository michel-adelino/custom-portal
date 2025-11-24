import ModulePage from '../ModulePage';
import { FileText, DollarSign, Calendar, CheckCircle2, Clock, AlertCircle, Building2 } from 'lucide-react';
import { format } from 'date-fns';
import { useState } from 'react';

const Bills = () => {
  const [filterStatus, setFilterStatus] = useState('all');

  const bills = [
    {
      id: 'BILL-001',
      vendor: 'Office Supplies Co',
      amount: 2500,
      status: 'paid',
      dueDate: new Date(2024, 0, 15),
      paidDate: new Date(2024, 0, 14),
      category: 'Office Supplies',
      invoiceNumber: 'INV-V-001',
    },
    {
      id: 'BILL-002',
      vendor: 'Cloud Services Inc',
      amount: 5000,
      status: 'pending',
      dueDate: new Date(2024, 1, 5),
      category: 'Software',
      invoiceNumber: 'INV-V-002',
    },
    {
      id: 'BILL-003',
      vendor: 'Marketing Agency',
      amount: 8000,
      status: 'pending',
      dueDate: new Date(2024, 1, 10),
      category: 'Marketing',
      invoiceNumber: 'INV-V-003',
    },
    {
      id: 'BILL-004',
      vendor: 'Utilities Company',
      amount: 1200,
      status: 'overdue',
      dueDate: new Date(2024, 0, 20),
      category: 'Utilities',
      invoiceNumber: 'INV-V-004',
    },
  ];

  const filteredBills = filterStatus === 'all' 
    ? bills 
    : bills.filter(bill => bill.status === filterStatus);

  const stats = {
    total: bills.reduce((sum, b) => sum + b.amount, 0),
    paid: bills.filter(b => b.status === 'paid').reduce((sum, b) => sum + b.amount, 0),
    pending: bills.filter(b => b.status === 'pending').reduce((sum, b) => sum + b.amount, 0),
    overdue: bills.filter(b => b.status === 'overdue').reduce((sum, b) => sum + b.amount, 0),
  };

  return (
    <ModulePage title="Bills" description="Manage vendor bills and payments">
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
                <div className="text-sm text-slate-600">Total Bills</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">${(stats.paid / 1000).toFixed(0)}k</div>
                <div className="text-sm text-slate-600">Paid</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Clock className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">${(stats.pending / 1000).toFixed(0)}k</div>
                <div className="text-sm text-slate-600">Pending</div>
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
        </div>

        {/* Filters */}
        <div className="card">
          <div className="flex gap-2">
            {['all', 'paid', 'pending', 'overdue'].map((status) => (
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

        {/* Bills List */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">All Bills ({filteredBills.length})</h2>
          <div className="space-y-4">
            {filteredBills.map((bill) => (
              <div key={bill.id} className="p-6 border border-slate-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <FileText className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{bill.id}</h3>
                        <div className="flex items-center gap-3 mt-1">
                          <div className="flex items-center gap-1 text-sm text-slate-600">
                            <Building2 className="w-4 h-4" />
                            {bill.vendor}
                          </div>
                          <span className="text-sm text-slate-500">•</span>
                          <span className="text-sm text-slate-600">{bill.category}</span>
                        </div>
                      </div>
                    </div>
                    <div className="ml-12 flex items-center gap-4 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        <span>Invoice: {bill.invoiceNumber}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Due: {format(bill.dueDate, 'MMM d, yyyy')}</span>
                      </div>
                      {bill.paidDate && (
                        <div className="flex items-center gap-2 text-emerald-600">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Paid: {format(bill.paidDate, 'MMM d, yyyy')}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    <div className="text-2xl font-bold text-slate-900">${bill.amount.toLocaleString()}</div>
                    <span className={`px-4 py-2 rounded-xl text-xs font-semibold ${
                      bill.status === 'paid' ? 'bg-emerald-100 text-emerald-700' :
                      bill.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {bill.status}
                    </span>
                  </div>
                </div>
                {bill.status !== 'paid' && (
                  <div className="flex gap-2 ml-12">
                    <button className="px-4 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all text-sm font-semibold">
                      Pay Now
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

export default Bills;

