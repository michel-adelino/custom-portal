import ModulePage from '../ModulePage';
import { FileText, DollarSign, Calendar, CheckCircle2, Clock, AlertCircle, Download, Eye } from 'lucide-react';
import { format } from 'date-fns';
import { useState } from 'react';

const Invoices = () => {
  const [filterStatus, setFilterStatus] = useState('all');

  const invoices = [
    { 
      id: 'INV-001', 
      customer: 'ABC Corp', 
      amount: 5000, 
      status: 'paid', 
      date: new Date(2024, 0, 15),
      dueDate: new Date(2024, 0, 15),
      paidDate: new Date(2024, 0, 14),
      items: 3,
    },
    { 
      id: 'INV-002', 
      customer: 'XYZ Ltd', 
      amount: 8500, 
      status: 'pending', 
      date: new Date(2024, 0, 20),
      dueDate: new Date(2024, 1, 20),
      items: 5,
    },
    { 
      id: 'INV-003', 
      customer: 'Tech Solutions', 
      amount: 12000, 
      status: 'overdue', 
      date: new Date(2024, 0, 10),
      dueDate: new Date(2024, 0, 10),
      items: 4,
    },
    { 
      id: 'INV-004', 
      customer: 'Global Industries', 
      amount: 25000, 
      status: 'paid', 
      date: new Date(2024, 0, 18),
      dueDate: new Date(2024, 0, 18),
      paidDate: new Date(2024, 0, 17),
      items: 8,
    },
  ];

  const filteredInvoices = filterStatus === 'all' 
    ? invoices 
    : invoices.filter(inv => inv.status === filterStatus);

  const stats = {
    total: invoices.reduce((sum, inv) => sum + inv.amount, 0),
    paid: invoices.filter(inv => inv.status === 'paid').reduce((sum, inv) => sum + inv.amount, 0),
    pending: invoices.filter(inv => inv.status === 'pending').reduce((sum, inv) => sum + inv.amount, 0),
    overdue: invoices.filter(inv => inv.status === 'overdue').reduce((sum, inv) => sum + inv.amount, 0),
  };

  return (
    <ModulePage title="Invoices" description="Manage customer invoices and payments">
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
                <div className="text-sm text-slate-600">Total</div>
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

        {/* Invoices List */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">All Invoices ({filteredInvoices.length})</h2>
          <div className="space-y-4">
            {filteredInvoices.map((invoice) => (
              <div key={invoice.id} className="p-6 border border-slate-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <FileText className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{invoice.id}</h3>
                        <p className="text-sm text-slate-600 mt-1">{invoice.customer}</p>
                      </div>
                    </div>
                    <div className="ml-12 flex items-center gap-4 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Date: {format(invoice.date, 'MMM d, yyyy')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Due: {format(invoice.dueDate, 'MMM d, yyyy')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>{invoice.items} items</span>
                      </div>
                      {invoice.paidDate && (
                        <div className="flex items-center gap-2 text-emerald-600">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Paid: {format(invoice.paidDate, 'MMM d, yyyy')}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-slate-900">${invoice.amount.toLocaleString()}</div>
                    </div>
                    <span className={`px-4 py-2 rounded-xl text-xs font-semibold ${
                      invoice.status === 'paid' ? 'bg-emerald-100 text-emerald-700' :
                      invoice.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {invoice.status}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 ml-12">
                  <button className="px-4 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all text-sm font-semibold flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                  <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-all text-sm font-semibold flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModulePage>
  );
};

export default Invoices;

