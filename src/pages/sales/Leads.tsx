import ModulePage from '../ModulePage';
import { Building2, Phone, Mail, Calendar, User, DollarSign, Filter } from 'lucide-react';
import { format } from 'date-fns';
import { useState } from 'react';

const Leads = () => {
  const [filterStatus, setFilterStatus] = useState('all');

  const leads = [
    { 
      id: 1, 
      name: 'ABC Corp', 
      contact: 'John Smith',
      email: 'john@abccorp.com',
      phone: '+1-555-0101',
      status: 'new', 
      value: 15000, 
      source: 'Website',
      createdDate: new Date(2024, 0, 26),
      lastContact: null,
      notes: 'Interested in enterprise solution',
    },
    { 
      id: 2, 
      name: 'XYZ Ltd', 
      contact: 'Sarah Johnson',
      email: 'sarah@xyzltd.com',
      phone: '+1-555-0102',
      status: 'contacted', 
      value: 25000, 
      source: 'Referral',
      createdDate: new Date(2024, 0, 20),
      lastContact: new Date(2024, 0, 24),
      notes: 'Follow-up scheduled for next week',
    },
    { 
      id: 3, 
      name: 'Tech Solutions', 
      contact: 'Mike Chen',
      email: 'mike@techsol.com',
      phone: '+1-555-0103',
      status: 'qualified', 
      value: 40000, 
      source: 'Trade Show',
      createdDate: new Date(2024, 0, 15),
      lastContact: new Date(2024, 0, 25),
      notes: 'Ready to move forward, waiting for proposal',
    },
    { 
      id: 4, 
      name: 'Global Industries', 
      contact: 'Emily Davis',
      email: 'emily@globalind.com',
      phone: '+1-555-0104',
      status: 'new', 
      value: 60000, 
      source: 'Website',
      createdDate: new Date(2024, 0, 27),
      lastContact: null,
      notes: 'Large enterprise opportunity',
    },
  ];

  const filteredLeads = filterStatus === 'all' 
    ? leads 
    : leads.filter(lead => lead.status === filterStatus);

  const stats = {
    total: leads.length,
    new: leads.filter(l => l.status === 'new').length,
    contacted: leads.filter(l => l.status === 'contacted').length,
    qualified: leads.filter(l => l.status === 'qualified').length,
    totalValue: leads.reduce((sum, l) => sum + l.value, 0),
  };

  return (
    <ModulePage title="Leads" description="Manage and track sales leads">
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="card">
            <div className="text-2xl font-bold text-slate-900">{stats.total}</div>
            <div className="text-sm text-slate-600 mt-1">Total Leads</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-blue-600">{stats.new}</div>
            <div className="text-sm text-slate-600 mt-1">New</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-yellow-600">{stats.contacted}</div>
            <div className="text-sm text-slate-600 mt-1">Contacted</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-emerald-600">{stats.qualified}</div>
            <div className="text-sm text-slate-600 mt-1">Qualified</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-primary-600">${(stats.totalValue / 1000).toFixed(0)}k</div>
            <div className="text-sm text-slate-600 mt-1">Total Value</div>
          </div>
        </div>

        {/* Filters */}
        <div className="card">
          <div className="flex items-center gap-3">
            <Filter className="w-5 h-5 text-slate-600" />
            <div className="flex gap-2">
              {['all', 'new', 'contacted', 'qualified'].map((status) => (
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

        {/* Leads List */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">All Leads ({filteredLeads.length})</h2>
          <div className="space-y-4">
            {filteredLeads.map((lead) => (
              <div key={lead.id} className="p-6 border border-slate-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <Building2 className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{lead.name}</h3>
                        <div className="flex items-center gap-3 mt-1">
                          <div className="flex items-center gap-1 text-sm text-slate-600">
                            <User className="w-4 h-4" />
                            {lead.contact}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-slate-600">
                            <Mail className="w-4 h-4" />
                            {lead.email}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-slate-600">
                            <Phone className="w-4 h-4" />
                            {lead.phone}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ml-12 space-y-2">
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4" />
                          <span className="font-semibold text-slate-900">${lead.value.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Source:</span>
                          <span>{lead.source}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>Created: {format(lead.createdDate, 'MMM d, yyyy')}</span>
                        </div>
                        {lead.lastContact && (
                          <div className="flex items-center gap-2">
                            <span>Last Contact: {format(lead.lastContact, 'MMM d, yyyy')}</span>
                          </div>
                        )}
                      </div>
                      {lead.notes && (
                        <p className="text-sm text-slate-700 bg-slate-50 p-3 rounded-lg">{lead.notes}</p>
                      )}
                    </div>
                  </div>
                  <span className={`px-4 py-2 rounded-xl text-xs font-semibold ${
                    lead.status === 'new' ? 'bg-blue-100 text-blue-700' :
                    lead.status === 'contacted' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-emerald-100 text-emerald-700'
                  }`}>
                    {lead.status}
                  </span>
                </div>
                <div className="flex gap-2 ml-12">
                  <button className="px-4 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all text-sm font-semibold flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call
                  </button>
                  <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-all text-sm font-semibold">
                    View Details
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

export default Leads;

