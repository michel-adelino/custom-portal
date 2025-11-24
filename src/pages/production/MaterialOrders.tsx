import ModulePage from '../ModulePage';
import { Package, Calendar, Truck, CheckCircle2, Clock, Building2, DollarSign } from 'lucide-react';
import { format } from 'date-fns';
import { useState } from 'react';

const MaterialOrders = () => {
  const [filterStatus, setFilterStatus] = useState('all');

  const materialOrders = [
    {
      id: 'MAT-PO-001',
      supplier: 'Material Supplier A',
      amount: 25000,
      status: 'ordered',
      orderDate: new Date(2024, 0, 20),
      expectedDelivery: new Date(2024, 1, 5),
      items: [
        { name: 'Raw Material X', quantity: 500, unit: 'kg' },
        { name: 'Component Y', quantity: 200, unit: 'units' },
      ],
      category: 'Raw Materials',
    },
    {
      id: 'MAT-PO-002',
      supplier: 'Component Supplier B',
      amount: 18000,
      status: 'in-transit',
      orderDate: new Date(2024, 0, 18),
      expectedDelivery: new Date(2024, 1, 2),
      items: [
        { name: 'Electronic Components', quantity: 1000, unit: 'pieces' },
      ],
      category: 'Components',
      trackingNumber: 'TRACK-123456',
    },
    {
      id: 'MAT-PO-003',
      supplier: 'Material Supplier C',
      amount: 32000,
      status: 'delivered',
      orderDate: new Date(2024, 0, 15),
      expectedDelivery: new Date(2024, 0, 25),
      items: [
        { name: 'Steel Sheets', quantity: 100, unit: 'sheets' },
        { name: 'Fasteners', quantity: 5000, unit: 'pieces' },
      ],
      category: 'Materials',
      deliveredDate: new Date(2024, 0, 24),
    },
    {
      id: 'MAT-PO-004',
      supplier: 'Specialty Materials Co',
      amount: 15000,
      status: 'pending',
      orderDate: new Date(2024, 0, 27),
      expectedDelivery: new Date(2024, 1, 10),
      items: [
        { name: 'Special Coating', quantity: 50, unit: 'liters' },
      ],
      category: 'Specialty',
    },
  ];

  const filteredOrders = filterStatus === 'all' 
    ? materialOrders 
    : materialOrders.filter(order => order.status === filterStatus);

  const stats = {
    total: materialOrders.reduce((sum, o) => sum + o.amount, 0),
    ordered: materialOrders.filter(o => o.status === 'ordered').reduce((sum, o) => sum + o.amount, 0),
    inTransit: materialOrders.filter(o => o.status === 'in-transit').reduce((sum, o) => sum + o.amount, 0),
    delivered: materialOrders.filter(o => o.status === 'delivered').reduce((sum, o) => sum + o.amount, 0),
  };

  return (
    <ModulePage title="Material Purchase Orders" description="Material procurement orders and tracking">
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
                <div className="text-sm text-slate-600">Total Value</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Package className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">${(stats.ordered / 1000).toFixed(0)}k</div>
                <div className="text-sm text-slate-600">Ordered</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Truck className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">${(stats.inTransit / 1000).toFixed(0)}k</div>
                <div className="text-sm text-slate-600">In Transit</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">${(stats.delivered / 1000).toFixed(0)}k</div>
                <div className="text-sm text-slate-600">Delivered</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="card">
          <div className="flex gap-2">
            {['all', 'pending', 'ordered', 'in-transit', 'delivered'].map((status) => (
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

        {/* Orders List */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Material Orders ({filteredOrders.length})</h2>
          <div className="space-y-4">
            {filteredOrders.map((order) => (
              <div key={order.id} className="p-6 border border-slate-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <Package className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{order.id}</h3>
                        <div className="flex items-center gap-3 mt-1">
                          <div className="flex items-center gap-1 text-sm text-slate-600">
                            <Building2 className="w-4 h-4" />
                            {order.supplier}
                          </div>
                          <span className="text-sm text-slate-500">•</span>
                          <span className="text-sm font-medium text-primary-600">{order.category}</span>
                        </div>
                      </div>
                    </div>
                    <div className="ml-12 space-y-3">
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>Ordered: {format(order.orderDate, 'MMM d, yyyy')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Truck className="w-4 h-4" />
                          <span>Expected: {format(order.expectedDelivery, 'MMM d, yyyy')}</span>
                        </div>
                        {order.trackingNumber && (
                          <div className="flex items-center gap-2 text-primary-600">
                            <span className="font-semibold">Tracking: {order.trackingNumber}</span>
                          </div>
                        )}
                        {order.deliveredDate && (
                          <div className="flex items-center gap-2 text-emerald-600">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Delivered: {format(order.deliveredDate, 'MMM d, yyyy')}</span>
                          </div>
                        )}
                      </div>
                      <div className="p-3 bg-slate-50 rounded-lg">
                        <div className="text-sm font-semibold text-slate-900 mb-2">Order Items:</div>
                        <div className="space-y-1">
                          {order.items.map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between text-sm text-slate-700">
                              <span>{item.name}</span>
                              <span className="font-semibold">{item.quantity} {item.unit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    <div className="text-2xl font-bold text-slate-900">${order.amount.toLocaleString()}</div>
                    <span className={`px-4 py-2 rounded-xl text-xs font-semibold ${
                      order.status === 'delivered' ? 'bg-emerald-100 text-emerald-700' :
                      order.status === 'in-transit' ? 'bg-yellow-100 text-yellow-700' :
                      order.status === 'ordered' ? 'bg-blue-100 text-blue-700' :
                      'bg-slate-100 text-slate-700'
                    }`}>
                      {order.status.replace('-', ' ')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModulePage>
  );
};

export default MaterialOrders;

