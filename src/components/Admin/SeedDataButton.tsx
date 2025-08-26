import React, { useState } from 'react';
import { Database, CheckCircle, AlertCircle } from 'lucide-react';
import { seedDatabase } from '../../utils/seedData';

const SeedDataButton: React.FC = () => {
  const [isSeeding, setIsSeeding] = useState(false);
  const [seedStatus, setSeedStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSeedDatabase = async () => {
    setIsSeeding(true);
    setSeedStatus('idle');
    
    try {
      await seedDatabase();
      setSeedStatus('success');
    } catch (error) {
      console.error('Seeding failed:', error);
      setSeedStatus('error');
    } finally {
      setIsSeeding(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
      <div className="flex items-center space-x-3 mb-4">
        <Database className="w-6 h-6 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">Database Setup</h3>
      </div>
      
      <p className="text-gray-600 mb-4">
        Initialize your Firebase database with sample products and demo accounts.
      </p>

      <button
        onClick={handleSeedDatabase}
        disabled={isSeeding}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 cursor-pointer flex items-center space-x-2"
      >
        <Database className="w-4 h-4" />
        <span>{isSeeding ? 'Seeding Database...' : 'Seed Database'}</span>
      </button>

      {seedStatus === 'success' && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <span className="text-green-700">Database seeded successfully!</span>
        </div>
      )}

      {seedStatus === 'error' && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
          <AlertCircle className="w-5 h-5 text-red-600" />
          <span className="text-red-700">Failed to seed database. Check console for details.</span>
        </div>
      )}

      <div className="mt-4 text-sm text-gray-500">
        <p><strong>Demo Accounts:</strong></p>
        <p>User: user@demo.com / password123</p>
        <p>Admin: admin@demo.com / admin123</p>
      </div>
    </div>
  );
};

export default SeedDataButton;