import ModulePage from '../ModulePage';
import { Package, Calendar, Truck, CheckCircle2, Building2, MapPin } from 'lucide-react';
import { format } from 'date-fns';
import { useState } from 'react';

const SupplyJobs = () => {
  const [filterStatus, setFilterStatus] = useState('all');

  const supplyJobs = [
    {
      id: 'SUP-001',
      customer: 'ABC Corp',
      orderNumber: 'ORD-12345',
      scheduledDate: new Date(2024, 1, 4),
      status: 'scheduled',
      items: [
        { name: 'Component A', quantity: 10 },
        { name: 'Component B', quantity: 5 },
        { name: 'Accessory Pack', quantity: 2 },
      ],
      totalValue: 8500,
      deliveryAddress: '123 Main St, City, State 12345',
      contact: 'John Smith',
      phone: '+1-555-0101',
      deliveryMethod: 'Standard Shipping',
    },
    {
      id: 'SUP-002',
      customer: 'Tech Solutions',
      orderNumber: 'ORD-12346',
      scheduledDate: new Date(2024, 1, 6),
      status: 'in-transit',
      items: [
        { name: 'System Unit', quantity: 3 },
        { name: 'Cable Set', quantity: 3 },
      ],
      totalValue: 12000,
      deliveryAddress: '456 Tech Ave, City, State 12345',
      contact: 'Mike Chen',
      phone: '+1-555-0102',
      deliveryMethod: 'Express Shipping',
      trackingNumber: 'TRACK-789456',
    },
    {
      id: 'SUP-003',
      customer: 'XYZ Ltd',
      orderNumber: 'ORD-12344',
      scheduledDate: new Date(2024, 1, 2),
      status: 'delivered',
      items: [
        { name: 'Premium Package', quantity: 1 },
      ],
      totalValue: 15000,
      deliveryAddress: '789 Business Blvd, City, State 12345',
      contact: 'Sarah Johnson',
      phone: '+1-555-0103',
      deliveryMethod: 'Standard Shipping',
      deliveredDate: new Date(2024, 1, 2),
    },
  ];

  const filteredJobs = filterStatus === 'all' 
    ? supplyJobs 
    : supplyJobs.filter(job => job.status === filterStatus);

  const stats = {
    total: supplyJobs.length,
    scheduled: supplyJobs.filter(j => j.status === 'scheduled').length,
    inTransit: supplyJobs.filter(j => j.status === 'in-transit').length,
    delivered: supplyJobs.filter(j => j.status === 'delivered').length,
    totalValue: supplyJobs.reduce((sum, j) => sum + j.totalValue, 0),
  };

  return (
    <ModulePage title="Supply Only Jobs" description="Supply-only job management and delivery tracking">
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="card">
            <div className="text-2xl font-bold text-slate-900">{stats.total}</div>
            <div className="text-sm text-slate-600 mt-1">Total Orders</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-blue-600">{stats.scheduled}</div>
            <div className="text-sm text-slate-600 mt-1">Scheduled</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-yellow-600">{stats.inTransit}</div>
            <div className="text-sm text-slate-600 mt-1">In Transit</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-emerald-600">{stats.delivered}</div>
            <div className="text-sm text-slate-600 mt-1">Delivered</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-primary-600">${(stats.totalValue / 1000).toFixed(0)}k</div>
            <div className="text-sm text-slate-600 mt-1">Total Value</div>
          </div>
        </div>

        {/* Filters */}
        <div className="card">
          <div className="flex gap-2">
            {['all', 'scheduled', 'in-transit', 'delivered'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  filterStatus === status
                    ? 'bg-primary-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Supply Jobs List */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Supply Orders ({filteredJobs.length})</h2>
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div key={job.id} className="p-6 border border-slate-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <Package className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{job.id}</h3>
                        <div className="flex items-center gap-3 mt-1">
                          <div className="flex items-center gap-1 text-sm text-slate-600">
                            <Building2 className="w-4 h-4" />
                            {job.customer}
                          </div>
                          <span className="text-sm text-slate-500">•</span>
                          <span className="text-sm text-slate-600">Order: {job.orderNumber}</span>
                        </div>
                      </div>
                    </div>
                    <div className="ml-12 space-y-3">
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>Scheduled: {format(job.scheduledDate, 'MMM d, yyyy')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Truck className="w-4 h-4" />
                          <span>{job.deliveryMethod}</span>
                        </div>
                        {job.trackingNumber && (
                          <div className="flex items-center gap-2 text-primary-600">
                            <span className="font-semibold">Tracking: {job.trackingNumber}</span>
                          </div>
                        )}
                      </div>
                      <div className="p-3 bg-slate-50 rounded-lg">
                        <div className="text-sm font-semibold text-slate-900 mb-2">Items:</div>
                        <div className="space-y-1">
                          {job.items.map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between text-sm text-slate-700">
                              <span>{item.name}</span>
                              <span className="font-semibold">Qty: {item.quantity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{job.deliveryAddress}</span>
                        </div>
                        <div>
                          <span className="font-semibold">Contact:</span> {job.contact} • {job.phone}
                        </div>
                      </div>
                      {job.deliveredDate && (
                        <div className="flex items-center gap-2 text-sm text-emerald-600">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Delivered: {format(job.deliveredDate, 'MMM d, yyyy')}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    <div className="text-2xl font-bold text-slate-900">${job.totalValue.toLocaleString()}</div>
                    <span className={`px-4 py-2 rounded-xl text-xs font-semibold ${
                      job.status === 'delivered' ? 'bg-emerald-100 text-emerald-700' :
                      job.status === 'in-transit' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {job.status.replace('-', ' ')}
                    </span>
                  </div>
                </div>
                {job.status !== 'delivered' && (
                  <div className="flex gap-2 ml-12">
                    {job.status === 'scheduled' && (
                      <button className="px-4 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all text-sm font-semibold">
                        Ship Order
                      </button>
                    )}
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

export default SupplyJobs;

