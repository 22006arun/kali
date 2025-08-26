import React from 'react';
import { Settings, Database, Shield, Rocket } from 'lucide-react';
import SeedDataButton from '../components/Admin/SeedDataButton';

const SetupPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Firebase Setup Guide</h1>
            <p className="text-gray-600">Get your M.K. Athiban Crackers store up and running</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Setup Instructions */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center space-x-3 mb-4">
                <Rocket className="w-6 h-6 text-orange-600" />
                <h2 className="text-xl font-semibold text-gray-900">Quick Setup</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-orange-600 text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Create Firebase Project</h3>
                    <p className="text-gray-600 text-sm">Go to Firebase Console and create a new project named "mk-athiban-crackers"</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-orange-600 text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Enable Authentication</h3>
                    <p className="text-gray-600 text-sm">Enable Email/Password authentication in Firebase Auth</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-orange-600 text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Create Firestore Database</h3>
                    <p className="text-gray-600 text-sm">Set up Firestore in test mode for development</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-orange-600 text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Update Configuration</h3>
                    <p className="text-gray-600 text-sm">Replace the config in src/config/firebase.ts with your Firebase config</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-blue-800">Demo Accounts</span>
                </div>
                <div className="text-sm text-blue-700 space-y-1">
                  <p><strong>User:</strong> user@demo.com / password123</p>
                  <p><strong>Admin:</strong> admin@demo.com / admin123</p>
                </div>
              </div>
            </div>

            {/* Database Seeding */}
            <SeedDataButton />
          </div>

          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <div className="flex items-center space-x-2 mb-3">
              <Database className="w-5 h-5 text-yellow-600" />
              <h3 className="font-medium text-yellow-800">Important Notes</h3>
            </div>
            <ul className="text-sm text-yellow-700 space-y-2">
              <li>• Make sure to update your Firebase configuration before seeding the database</li>
              <li>• The demo accounts will be created automatically when you seed the database</li>
              <li>• For production, change Firebase rules to secure mode</li>
              <li>• Consider setting up Firebase Storage for product images</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupPage;