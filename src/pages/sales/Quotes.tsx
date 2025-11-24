import ModulePage from '../ModulePage';
import { FileText, Calendar, Clock, Send, Download } from 'lucide-react';
import { format } from 'date-fns';

const Quotes = () => {
  const quotes = [
    {
      id: 'QT-001',
      customer: 'ABC Corp',
      amount: 15000,
      status: 'sent',
      createdDate: new Date(2024, 0, 25),
      validUntil: new Date(2024, 1, 25),
      items: 3,
      contact: 'John Smith',
    },
    {
      id: 'QT-002',
      customer: 'Tech Solutions',
      amount: 40000,
      status: 'accepted',
      createdDate: new Date(2024, 0, 20),
      validUntil: new Date(2024, 1, 20),
      items: 5,
      contact: 'Mike Chen',
      acceptedDate: new Date(2024, 0, 24),
    },
    {
      id: 'QT-003',
      customer: 'XYZ Ltd',
      amount: 25000,
      status: 'pending',
      createdDate: new Date(2024, 0, 27),
      validUntil: new Date(2024, 1, 27),
      items: 4,
      contact: 'Sarah Johnson',
    },
  ];

  const stats = {
    total: quotes.length,
    sent: quotes.filter(q => q.status === 'sent').length,
    accepted: quotes.filter(q => q.status === 'accepted').length,
    pending: quotes.filter(q => q.status === 'pending').length,
    totalValue: quotes.reduce((sum, q) => sum + q.amount, 0),
  };

  return (
    <ModulePage title="Quotes" description="Sales quotes and estimates">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="card">
            <div className="text-2xl font-bold text-slate-900">{stats.total}</div>
            <div className="text-sm text-slate-600 mt-1">Total Quotes</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-blue-600">{stats.sent}</div>
            <div className="text-sm text-slate-600 mt-1">Sent</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-emerald-600">{stats.accepted}</div>
            <div className="text-sm text-slate-600 mt-1">Accepted</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-primary-600">${(stats.totalValue / 1000).toFixed(0)}k</div>
            <div className="text-sm text-slate-600 mt-1">Total Value</div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">All Quotes</h2>
          <div className="space-y-4">
            {quotes.map((quote) => (
              <div key={quote.id} className="p-6 border border-slate-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <FileText className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{quote.id}</h3>
                        <p className="text-sm text-slate-600 mt-1">{quote.customer} • {quote.contact}</p>
                      </div>
                    </div>
                    <div className="ml-12 flex items-center gap-4 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Created: {format(quote.createdDate, 'MMM d, yyyy')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>Valid until: {format(quote.validUntil, 'MMM d, yyyy')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>{quote.items} items</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    <div className="text-2xl font-bold text-slate-900">${quote.amount.toLocaleString()}</div>
                    <span className={`px-4 py-2 rounded-xl text-xs font-semibold ${
                      quote.status === 'sent' ? 'bg-blue-100 text-blue-700' :
                      quote.status === 'accepted' ? 'bg-emerald-100 text-emerald-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {quote.status}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 ml-12">
                  <button className="px-4 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all text-sm font-semibold flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send
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

export default Quotes;

