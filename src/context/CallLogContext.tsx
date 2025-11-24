import React, { createContext, useContext, useState, useEffect } from 'react';
import { CallLog } from '../types';
import { useAuth } from './AuthContext';

interface CallLogContextType {
  logs: CallLog[];
  addCallLog: (log: Omit<CallLog, 'id' | 'timestamp' | 'userId' | 'userName'>) => void;
  getLogsByUser: (userId: string) => CallLog[];
  getAllLogs: () => CallLog[];
}

const CallLogContext = createContext<CallLogContextType | undefined>(undefined);

export const CallLogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [logs, setLogs] = useState<CallLog[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    // Load logs from localStorage
    const storedLogs = localStorage.getItem('callLogs');
    if (storedLogs) {
      const parsedLogs = JSON.parse(storedLogs).map((log: any) => ({
        ...log,
        timestamp: new Date(log.timestamp),
      }));
      setLogs(parsedLogs);
    }
  }, []);

  const addCallLog = (logData: Omit<CallLog, 'id' | 'timestamp' | 'userId' | 'userName'>) => {
    if (!user) return;

    const newLog: CallLog = {
      ...logData,
      id: Date.now().toString(),
      timestamp: new Date(),
      userId: user.id,
      userName: user.name,
    };

    const updatedLogs = [...logs, newLog];
    setLogs(updatedLogs);
    localStorage.setItem('callLogs', JSON.stringify(updatedLogs));
  };

  const getLogsByUser = (userId: string) => {
    return logs.filter(log => log.userId === userId);
  };

  const getAllLogs = () => {
    return logs;
  };

  return (
    <CallLogContext.Provider value={{ logs, addCallLog, getLogsByUser, getAllLogs }}>
      {children}
    </CallLogContext.Provider>
  );
};

export const useCallLog = () => {
  const context = useContext(CallLogContext);
  if (context === undefined) {
    throw new Error('useCallLog must be used within a CallLogProvider');
  }
  return context;
};

