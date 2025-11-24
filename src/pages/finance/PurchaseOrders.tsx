import ModulePage from '../ModulePage';
import { FileText, DollarSign, Calendar, CheckCircle2, Clock, Building2, Package } from 'lucide-react';
import { format } from 'date-fns';
import { useState } from 'react';

const PurchaseOrders = () => {
  const [filterStatus, setFilterStatus] = useState('all');

  const purchaseOrders = [
    {
      id: 'PO-001',
      vendor: 'Material Supplier A',
      amount: 15000,
      status: 'approved',
      orderDate: new Date(2024, 0, 20),
      expectedDelivery: new Date(2024, 1, 5),
      items: 5,
      category: 'Materials',
      approvedBy: 'Finance Manager',
    },
    {
      id: 'PO-002',
      vendor: 'Equipment Co',
      amount: 35000,
      status: 'pending',
      orderDate: new Date(2024, 0, 25),
      expectedDelivery: new Date(2024, 1, 15),
      items: 3,
      category: 'Equipment',
    },
    {
      id: 'PO-003',
      vendor: 'Office Supplies Ltd',
      amount: 2500,
      status: 'approved',
      orderDate: new Date(2024, 0, 22),
      expectedDelivery: new Date(2024, 1, 1),
      items: 12,
      category: 'Supplies',
      approvedBy: 'Operations Manager',
    },
    {
      id: 'PO-004',
      vendor: 'Software Solutions',
      amount: 12000,
      status: 'pending',
      orderDate: new Date(2024, 0, 27),
      expectedDelivery: new Date(2024, 1, 10),
      items: 2,
      category: 'Software',
    },
  ];

  const filteredPOs = filterStatus === 'all' 
    ? purchaseOrders 
    : purchaseOrders.filter(po => po.status === filterStatus);

  const stats = {
    total: purchaseOrders.reduce((sum, po) => sum + po.amount, 0),
    approved: purchaseOrders.filter(po => po.status === 'approved').reduce((sum, po) => sum + po.amount, 0),
    pending: purchaseOrders.filter(po => po.status === 'pending').reduce((sum, po) => sum + po.amount, 0),
    count: purchaseOrders.length,
  };

  return (
    <ModulePage title="Purchase Orders (Financial)" description="Financial purchase orders and procurement">
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary-100 rounded-lg">
                <FileText className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">{stats.count}</div>
                <div className="text-sm text-slate-600">Total POs</div>
              </div>
            </div>
          </div>
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
              <div className="p-2 bg-emerald-100 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">${(stats.approved / 1000).toFixed(0)}k</div>
                <div className="text-sm text-slate-600">Approved</div>
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
        </div>

        {/* Filters */}
        <div className="card">
          <div className="flex gap-2">
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

        {/* Purchase Orders List */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">All Purchase Orders ({filteredPOs.length})</h2>
          <div className="space-y-4">
            {filteredPOs.map((po) => (
              <div key={po.id} className="p-6 border border-slate-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <Package className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{po.id}</h3>
                        <div className="flex items-center gap-3 mt-1">
                          <div className="flex items-center gap-1 text-sm text-slate-600">
                            <Building2 className="w-4 h-4" />
                            {po.vendor}
                          </div>
                          <span className="text-sm text-slate-500">•</span>
                          <span className="text-sm font-medium text-primary-600">{po.category}</span>
                        </div>
                      </div>
                    </div>
                    <div className="ml-12 flex items-center gap-4 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Package className="w-4 h-4" />
                        <span>{po.items} items</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Ordered: {format(po.orderDate, 'MMM d, yyyy')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Expected: {format(po.expectedDelivery, 'MMM d, yyyy')}</span>
                      </div>
                      {po.approvedBy && (
                        <div className="flex items-center gap-2 text-emerald-600">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Approved by: {po.approvedBy}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    <div className="text-2xl font-bold text-slate-900">${po.amount.toLocaleString()}</div>
                    <span className={`px-4 py-2 rounded-xl text-xs font-semibold ${
                      po.status === 'approved' ? 'bg-emerald-100 text-emerald-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {po.status}
                    </span>
                  </div>
                </div>
                {po.status === 'pending' && (
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

export default PurchaseOrders;

