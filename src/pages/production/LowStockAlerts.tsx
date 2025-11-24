import ModulePage from '../ModulePage';
import { AlertTriangle, Package, TrendingDown, ShoppingCart, Clock } from 'lucide-react';

const LowStockAlerts = () => {
  const lowStockItems = [
    {
      id: 'MAT-002',
      name: 'Material B',
      currentStock: 150,
      minStock: 200,
      maxStock: 800,
      unit: 'units',
      status: 'low',
      daysUntilOut: 5,
      location: 'Warehouse B',
      lastOrdered: '2024-01-15',
      reorderQty: 500,
      estimatedCost: 10000,
    },
    {
      id: 'MAT-004',
      name: 'Raw Material Y',
      currentStock: 80,
      minStock: 100,
      maxStock: 500,
      unit: 'kg',
      status: 'critical',
      daysUntilOut: 2,
      location: 'Warehouse C',
      lastOrdered: '2024-01-10',
      reorderQty: 300,
      estimatedCost: 7500,
    },
    {
      id: 'MAT-006',
      name: 'Component Z',
      currentStock: 45,
      minStock: 50,
      maxStock: 200,
      unit: 'pieces',
      status: 'critical',
      daysUntilOut: 1,
      location: 'Warehouse A',
      lastOrdered: '2024-01-08',
      reorderQty: 150,
      estimatedCost: 4500,
    },
    {
      id: 'MAT-008',
      name: 'Specialty Material',
      currentStock: 120,
      minStock: 150,
      maxStock: 400,
      unit: 'units',
      status: 'low',
      daysUntilOut: 8,
      location: 'Warehouse B',
      lastOrdered: '2024-01-20',
      reorderQty: 250,
      estimatedCost: 6000,
    },
  ];

  const criticalItems = lowStockItems.filter(item => item.status === 'critical');
  const lowItems = lowStockItems.filter(item => item.status === 'low');
  const totalReorderCost = lowStockItems.reduce((sum, item) => sum + item.estimatedCost, 0);

  return (
    <ModulePage title="Low Stock Alerts" description="Items running low on stock - reorder alerts">
      <div className="space-y-6">
        {/* Alert Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="card bg-red-50 border-red-200">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-100 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">{criticalItems.length}</div>
                <div className="text-sm text-red-700">Critical Alerts</div>
              </div>
            </div>
          </div>
          <div className="card bg-yellow-50 border-yellow-200">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-600">{lowItems.length}</div>
                <div className="text-sm text-yellow-700">Low Stock</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary-100 rounded-lg">
                <Package className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">{lowStockItems.length}</div>
                <div className="text-sm text-slate-600">Total Alerts</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <ShoppingCart className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">${(totalReorderCost / 1000).toFixed(0)}k</div>
                <div className="text-sm text-slate-600">Reorder Cost</div>
              </div>
            </div>
          </div>
        </div>

        {/* Critical Alerts */}
        {criticalItems.length > 0 && (
          <div className="card bg-red-50 border-red-200">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <h2 className="text-lg font-bold text-red-900">Critical Stock Alerts</h2>
            </div>
            <div className="space-y-4">
              {criticalItems.map((item) => (
                <div key={item.id} className="p-6 bg-white border-2 border-red-300 rounded-xl">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-red-100 rounded-lg">
                          <AlertTriangle className="w-5 h-5 text-red-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                          <p className="text-sm text-slate-600 mt-1">{item.id} • {item.location}</p>
                        </div>
                      </div>
                      <div className="ml-12 space-y-2">
                        <div className="flex items-center gap-6 text-sm">
                          <div>
                            <span className="font-semibold text-red-600">Current:</span> {item.currentStock} {item.unit}
                          </div>
                          <div>
                            <span className="font-semibold">Minimum:</span> {item.minStock} {item.unit}
                          </div>
                          <div className="flex items-center gap-2 text-red-600 font-semibold">
                            <Clock className="w-4 h-4" />
                            <span>{item.daysUntilOut} day{item.daysUntilOut > 1 ? 's' : ''} until out of stock!</span>
                          </div>
                        </div>
                        <div className="p-3 bg-red-50 rounded-lg">
                          <div className="text-sm font-semibold text-red-900 mb-1">Recommended Reorder:</div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-700">{item.reorderQty} {item.unit}</span>
                            <span className="text-sm font-bold text-slate-900">${item.estimatedCost.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="px-4 py-2 bg-red-100 text-red-700 rounded-xl text-xs font-semibold">
                      CRITICAL
                    </span>
                  </div>
                  <div className="flex gap-2 ml-12">
                    <button className="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all text-sm font-semibold flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4" />
                      Reorder Now
                    </button>
                    <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-all text-sm font-semibold">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Low Stock Items */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Low Stock Items ({lowStockItems.length})</h2>
          <div className="space-y-4">
            {lowStockItems.map((item) => (
              <div key={item.id} className={`p-6 border rounded-xl transition-all ${
                item.status === 'critical' ? 'border-red-300 bg-red-50' : 'border-yellow-300 bg-yellow-50'
              }`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg ${
                        item.status === 'critical' ? 'bg-red-100' : 'bg-yellow-100'
                      }`}>
                        <Package className={`w-5 h-5 ${
                          item.status === 'critical' ? 'text-red-600' : 'text-yellow-600'
                        }`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                        <p className="text-sm text-slate-600 mt-1">{item.id} • {item.location}</p>
                      </div>
                    </div>
                    <div className="ml-12 space-y-2">
                      <div className="flex items-center gap-6 text-sm text-slate-600">
                        <div>
                          <span className="font-semibold">Current Stock:</span> {item.currentStock} {item.unit}
                        </div>
                        <div>
                          <span className="font-semibold">Min Required:</span> {item.minStock} {item.unit}
                        </div>
                        <div>
                          <span className="font-semibold">Max Stock:</span> {item.maxStock} {item.unit}
                        </div>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full ${
                            item.status === 'critical' ? 'bg-red-600' : 'bg-yellow-600'
                          }`}
                          style={{ width: `${(item.currentStock / item.maxStock) * 100}%` }}
                        />
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-2 text-slate-600">
                          <Clock className="w-4 h-4" />
                          <span>Last Ordered: {item.lastOrdered}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <TrendingDown className="w-4 h-4 text-red-600" />
                          <span className="font-semibold text-red-600">{item.daysUntilOut} day{item.daysUntilOut > 1 ? 's' : ''} until out</span>
                        </div>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-slate-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-semibold text-slate-900">Recommended Reorder</div>
                            <div className="text-sm text-slate-600">{item.reorderQty} {item.unit}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-slate-600">Estimated Cost</div>
                            <div className="text-lg font-bold text-slate-900">${item.estimatedCost.toLocaleString()}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className={`px-4 py-2 rounded-xl text-xs font-semibold ${
                    item.status === 'critical' ? 'bg-red-100 text-red-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {item.status.toUpperCase()}
                  </span>
                </div>
                <div className="flex gap-2 ml-12">
                  <button className="px-4 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all text-sm font-semibold flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Create Purchase Order
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

export default LowStockAlerts;

