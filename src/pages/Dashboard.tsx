import { useAuth } from '../context/AuthContext';
import { useCallLog } from '../context/CallLogContext';
import { 
  TrendingUp, DollarSign, Calendar, Factory, 
  Users, Target, Phone, MessageSquare 
} from 'lucide-react';
import { format } from 'date-fns';

const Dashboard = () => {
  const { user } = useAuth();
  const { getAllLogs, getLogsByUser } = useCallLog();
  const allLogs = getAllLogs();
  const userLogs = user ? getLogsByUser(user.id) : [];
  const recentLogs = allLogs.slice(-5).reverse();

  const stats = [
    { label: 'Active Leads', value: '24', icon: TrendingUp, color: 'text-blue-600' },
    { label: 'Revenue (MTD)', value: '$45,230', icon: DollarSign, color: 'text-green-600' },
    { label: 'Scheduled Jobs', value: '18', icon: Calendar, color: 'text-purple-600' },
    { label: 'Production Items', value: '12', icon: Factory, color: 'text-orange-600' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
          {user?.role === 'owner' ? 'Owner Dashboard' : `${user?.department} Dashboard`}
        </h1>
        <p className="text-slate-600 mt-2 text-lg">
          Welcome back, {user?.name}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">{stat.label}</p>
                  <p className="text-3xl font-bold text-slate-900 mt-2">{stat.value}</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Calls & SMS */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">
            Recent Calls & SMS
          </h2>
          <div className="space-y-3">
            {recentLogs.length > 0 ? (
              recentLogs.map((log) => (
                <div key={log.id} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                  <div className={`p-2 rounded-lg ${log.type === 'call' ? 'bg-blue-100' : 'bg-emerald-100'}`}>
                    {log.type === 'call' ? (
                      <Phone className="w-4 h-4 text-blue-600" />
                    ) : (
                      <MessageSquare className="w-4 h-4 text-emerald-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-900">
                      {log.contactName || log.phoneNumber}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {log.type === 'call' ? 'Call' : 'SMS'} • {format(log.timestamp, 'MMM d, h:mm a')}
                      {log.duration && ` • ${Math.floor(log.duration / 60)}m ${log.duration % 60}s`}
                    </p>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">{log.userName}</span>
                </div>
              ))
            ) : (
              <p className="text-sm text-slate-500 text-center py-8">
                No calls or SMS yet
              </p>
            )}
          </div>
        </div>

        {/* My Activity */}
        {user && (
          <div className="card">
            <h2 className="text-lg font-bold text-slate-900 mb-6">
              My Recent Activity
            </h2>
            <div className="space-y-3">
              {userLogs.length > 0 ? (
                userLogs.slice(-5).reverse().map((log) => (
                  <div key={log.id} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                    <div className={`p-2 rounded-lg ${log.type === 'call' ? 'bg-blue-100' : 'bg-emerald-100'}`}>
                      {log.type === 'call' ? (
                        <Phone className="w-4 h-4 text-blue-600" />
                      ) : (
                        <MessageSquare className="w-4 h-4 text-emerald-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-slate-900">
                        {log.contactName || log.phoneNumber}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {log.type === 'call' ? 'Call' : 'SMS'} • {format(log.timestamp, 'MMM d, h:mm a')}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-500 text-center py-8">
                  No activity yet
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="card">
        <h2 className="text-lg font-bold text-slate-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="p-5 bg-primary-50 hover:bg-primary-100 rounded-xl text-center transition-all duration-200 hover:scale-105">
            <Users className="w-6 h-6 text-primary-600 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-900">New Lead</p>
          </button>
          <button className="p-5 bg-emerald-50 hover:bg-emerald-100 rounded-xl text-center transition-all duration-200 hover:scale-105">
            <Calendar className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-900">Schedule Job</p>
          </button>
          <button className="p-5 bg-purple-50 hover:bg-purple-100 rounded-xl text-center transition-all duration-200 hover:scale-105">
            <DollarSign className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-900">Create Invoice</p>
          </button>
          <button className="p-5 bg-orange-50 hover:bg-orange-100 rounded-xl text-center transition-all duration-200 hover:scale-105">
            <Target className="w-6 h-6 text-orange-600 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-900">Add KPI</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

