import ModulePage from '../ModulePage';
import { useCallLog } from '../../context/CallLogContext';
import { format } from 'date-fns';
import { Phone, MessageSquare, Search, User, Clock } from 'lucide-react';
import { useState } from 'react';

const CustomerCommunications = () => {
  const { getAllLogs } = useCallLog();
  const logs = getAllLogs();
  const [filterType, setFilterType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLogs = logs.filter(log => {
    const typeMatch = filterType === 'all' || log.type === filterType;
    const searchMatch = !searchQuery || 
      (log.contactName && log.contactName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      log.phoneNumber.includes(searchQuery);
    return typeMatch && searchMatch;
  });

  const stats = {
    total: logs.length,
    calls: logs.filter(l => l.type === 'call').length,
    sms: logs.filter(l => l.type === 'sms').length,
    totalDuration: logs.filter(l => l.duration).reduce((sum, l) => sum + (l.duration || 0), 0),
  };

  return (
    <ModulePage title="Customer Communications" description="All customer communication history and logs">
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="card">
            <div className="text-2xl font-bold text-slate-900">{stats.total}</div>
            <div className="text-sm text-slate-600 mt-1">Total Communications</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-blue-600">{stats.calls}</div>
            <div className="text-sm text-slate-600 mt-1">Calls</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-emerald-600">{stats.sms}</div>
            <div className="text-sm text-slate-600 mt-1">SMS</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-primary-600">{Math.floor(stats.totalDuration / 60)}m</div>
            <div className="text-sm text-slate-600 mt-1">Total Call Time</div>
          </div>
        </div>

        {/* Filters */}
        <div className="card">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search by name or phone..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
              />
            </div>
            <div className="flex gap-2">
              {['all', 'call', 'sms'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    filterType === type
                      ? 'bg-primary-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Communications List */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">All Communications ({filteredLogs.length})</h2>
          <div className="space-y-4">
            {filteredLogs.length > 0 ? (
              filteredLogs.map((log) => (
                <div key={log.id} className="p-6 border border-slate-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${
                      log.type === 'call' ? 'bg-blue-100' : 'bg-emerald-100'
                    }`}>
                      {log.type === 'call' ? (
                        <Phone className="w-6 h-6 text-blue-600" />
                      ) : (
                        <MessageSquare className="w-6 h-6 text-emerald-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-slate-900">
                          {log.contactName || log.phoneNumber}
                        </h3>
                        <span className="text-sm text-slate-500">
                          {format(log.timestamp, 'MMM d, yyyy h:mm a')}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                        <span className="font-semibold">{log.type === 'call' ? 'Phone Call' : 'SMS'}</span>
                        <span>•</span>
                        <span className="capitalize">{log.direction}</span>
                        {log.duration && (
                          <>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{Math.floor(log.duration / 60)}m {log.duration % 60}s</span>
                            </div>
                          </>
                        )}
                      </div>
                      {log.notes && (
                        <p className="text-sm text-slate-700 bg-slate-50 p-3 rounded-lg mb-2">{log.notes}</p>
                      )}
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <User className="w-4 h-4" />
                        <span>By: {log.userName}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <MessageSquare className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                <p className="text-slate-500">No communications found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </ModulePage>
  );
};

export default CustomerCommunications;

