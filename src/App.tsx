import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { CallLogProvider } from './context/CallLogContext';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

// Organisation pages
import Vision from './pages/organisation/Vision';
import Mission from './pages/organisation/Mission';
import Roadmap from './pages/organisation/Roadmap';
import ThreeYearPlan from './pages/organisation/ThreeYearPlan';
import FiveYearPlan from './pages/organisation/FiveYearPlan';
import LeadershipMeetings from './pages/organisation/LeadershipMeetings';
import OneOnOneMeetings from './pages/organisation/OneOnOneMeetings';
import Onboarding from './pages/organisation/Onboarding';
import Training from './pages/organisation/Training';

// Systems & Processes pages
import KnowledgeCentre from './pages/systems/KnowledgeCentre';
import ProcessLibrary from './pages/systems/ProcessLibrary';
import Flowcharts from './pages/systems/Flowcharts';
import SOPs from './pages/systems/SOPs';
import IssueTracking from './pages/systems/IssueTracking';
import ContinuousImprovements from './pages/systems/ContinuousImprovements';

// Sales pages
import Leads from './pages/sales/Leads';
import Quotes from './pages/sales/Quotes';
import Pipeline from './pages/sales/Pipeline';
import FollowUps from './pages/sales/FollowUps';
import WonDeals from './pages/sales/WonDeals';
import LostDeals from './pages/sales/LostDeals';

// Finance pages
import Invoices from './pages/finance/Invoices';
import Bills from './pages/finance/Bills';
import Expenses from './pages/finance/Expenses';
import PurchaseOrders from './pages/finance/PurchaseOrders';
import Cashflow from './pages/finance/Cashflow';
import UpcomingPayments from './pages/finance/UpcomingPayments';

// Scheduling pages
import JobScheduling from './pages/scheduling/JobScheduling';
import InstallJobs from './pages/scheduling/InstallJobs';
import SupplyJobs from './pages/scheduling/SupplyJobs';
import CustomerCommunications from './pages/scheduling/CustomerCommunications';
import InternalNotes from './pages/scheduling/InternalNotes';
import SchedulingFollowUps from './pages/scheduling/SchedulingFollowUps';

// Production pages
import Queue from './pages/production/Queue';
import Status from './pages/production/Status';
import MaterialOrders from './pages/production/MaterialOrders';
import StockLevels from './pages/production/StockLevels';
import Inventory from './pages/production/Inventory';
import LowStockAlerts from './pages/production/LowStockAlerts';

// Marketing pages
import ContentCalendar from './pages/marketing/ContentCalendar';
import Campaigns from './pages/marketing/Campaigns';
import SocialMedia from './pages/marketing/SocialMedia';
import Engagement from './pages/marketing/Engagement';

// Performance pages
import KPIs from './pages/performance/KPIs';
import Todos from './pages/performance/Todos';
import Reviews from './pages/performance/Reviews';
import GrowthPlans from './pages/performance/GrowthPlans';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <CallLogProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="/dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />

              {/* Organisation routes */}
              <Route path="organisation/vision" element={<Vision />} />
              <Route path="organisation/mission" element={<Mission />} />
              <Route path="organisation/roadmap" element={<Roadmap />} />
              <Route path="organisation/3-year-plan" element={<ThreeYearPlan />} />
              <Route path="organisation/5-year-plan" element={<FiveYearPlan />} />
              <Route path="organisation/leadership-meetings" element={<LeadershipMeetings />} />
              <Route path="organisation/1-on-1-meetings" element={<OneOnOneMeetings />} />
              <Route path="organisation/onboarding" element={<Onboarding />} />
              <Route path="organisation/training" element={<Training />} />

              {/* Systems & Processes routes */}
              <Route path="systems/knowledge-centre" element={<KnowledgeCentre />} />
              <Route path="systems/process-library" element={<ProcessLibrary />} />
              <Route path="systems/flowcharts" element={<Flowcharts />} />
              <Route path="systems/sops" element={<SOPs />} />
              <Route path="systems/issue-tracking" element={<IssueTracking />} />
              <Route path="systems/continuous-improvements" element={<ContinuousImprovements />} />

              {/* Sales routes */}
              <Route path="sales/leads" element={<Leads />} />
              <Route path="sales/quotes" element={<Quotes />} />
              <Route path="sales/pipeline" element={<Pipeline />} />
              <Route path="sales/follow-ups" element={<FollowUps />} />
              <Route path="sales/won-deals" element={<WonDeals />} />
              <Route path="sales/lost-deals" element={<LostDeals />} />

              {/* Finance routes */}
              <Route path="finance/invoices" element={<Invoices />} />
              <Route path="finance/bills" element={<Bills />} />
              <Route path="finance/expenses" element={<Expenses />} />
              <Route path="finance/purchase-orders" element={<PurchaseOrders />} />
              <Route path="finance/cashflow" element={<Cashflow />} />
              <Route path="finance/upcoming-payments" element={<UpcomingPayments />} />

              {/* Scheduling routes */}
              <Route path="scheduling/job-scheduling" element={<JobScheduling />} />
              <Route path="scheduling/install-jobs" element={<InstallJobs />} />
              <Route path="scheduling/supply-jobs" element={<SupplyJobs />} />
              <Route path="scheduling/customer-communications" element={<CustomerCommunications />} />
              <Route path="scheduling/internal-notes" element={<InternalNotes />} />
              <Route path="scheduling/follow-ups" element={<SchedulingFollowUps />} />

              {/* Production routes */}
              <Route path="production/queue" element={<Queue />} />
              <Route path="production/status" element={<Status />} />
              <Route path="production/material-orders" element={<MaterialOrders />} />
              <Route path="production/stock-levels" element={<StockLevels />} />
              <Route path="production/inventory" element={<Inventory />} />
              <Route path="production/low-stock-alerts" element={<LowStockAlerts />} />

              {/* Marketing routes */}
              <Route path="marketing/content-calendar" element={<ContentCalendar />} />
              <Route path="marketing/campaigns" element={<Campaigns />} />
              <Route path="marketing/social-media" element={<SocialMedia />} />
              <Route path="marketing/engagement" element={<Engagement />} />

              {/* Performance routes */}
              <Route path="performance/kpis" element={<KPIs />} />
              <Route path="performance/todos" element={<Todos />} />
              <Route path="performance/reviews" element={<Reviews />} />
              <Route path="performance/growth-plans" element={<GrowthPlans />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CallLogProvider>
    </AuthProvider>
  );
}

export default App;

