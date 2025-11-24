import { Phone, MessageSquare, LogOut, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCallLog } from '../context/CallLogContext';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { addCallLog } = useCallLog();
  const [showCallModal, setShowCallModal] = useState(false);
  const [showSMSModal, setShowSMSModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [contactName, setContactName] = useState('');
  const [smsMessage, setSmsMessage] = useState('');

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleCall = () => {
    if (!phoneNumber) return;
    
    // Simulate call
    const duration = Math.floor(Math.random() * 300) + 30; // 30-330 seconds
    
    addCallLog({
      type: 'call',
      phoneNumber,
      contactName: contactName || undefined,
      direction: 'outgoing',
      duration,
      notes: `Call initiated from portal`,
    });

    alert(`Calling ${phoneNumber}... (Simulated - Duration: ${duration}s)`);
    setShowCallModal(false);
    setPhoneNumber('');
    setContactName('');
  };

  const handleSMS = () => {
    if (!phoneNumber || !smsMessage) return;

    addCallLog({
      type: 'sms',
      phoneNumber,
      contactName: contactName || undefined,
      direction: 'outgoing',
      notes: `SMS: ${smsMessage}`,
    });

    alert(`SMS sent to ${phoneNumber}... (Simulated)`);
    setShowSMSModal(false);
    setPhoneNumber('');
    setContactName('');
    setSmsMessage('');
  };

  return (
    <>
      <header className="h-16 bg-white/80 backdrop-blur-lg border-b border-slate-200/60 fixed top-0 left-72 right-0 z-10 flex items-center justify-between px-8">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-semibold text-slate-900">Staff Portal</h2>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowCallModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all duration-200 shadow-sm hover:shadow-md font-medium text-sm"
          >
            <Phone className="w-4 h-4" />
            <span>Call</span>
          </button>
          
          <button
            onClick={() => setShowSMSModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-all duration-200 shadow-sm hover:shadow-md font-medium text-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>SMS</span>
          </button>

          <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-200">
            <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-primary-600" />
            </div>
            <span className="text-sm font-medium text-slate-700">{user?.name}</span>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-all duration-200 font-medium text-sm"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* Call Modal */}
      {showCallModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Make a Call</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Contact Name (Optional)
                </label>
                <input
                  type="text"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
                  placeholder="+1234567890"
                  required
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleCall}
                className="flex-1 px-4 py-2.5 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all duration-200 font-medium shadow-sm"
              >
                Call
              </button>
              <button
                onClick={() => {
                  setShowCallModal(false);
                  setPhoneNumber('');
                  setContactName('');
                }}
                className="flex-1 px-4 py-2.5 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-all duration-200 font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SMS Modal */}
      {showSMSModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Send SMS</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Contact Name (Optional)
                </label>
                <input
                  type="text"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
                  placeholder="+1234567890"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  value={smsMessage}
                  onChange={(e) => setSmsMessage(e.target.value)}
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none resize-none"
                  placeholder="Type your message..."
                  rows={4}
                  required
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSMS}
                className="flex-1 px-4 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-all duration-200 font-medium shadow-sm"
              >
                Send SMS
              </button>
              <button
                onClick={() => {
                  setShowSMSModal(false);
                  setPhoneNumber('');
                  setContactName('');
                  setSmsMessage('');
                }}
                className="flex-1 px-4 py-2.5 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-all duration-200 font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

