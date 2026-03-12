'use client';

import { Key } from 'lucide-react';

export default function Home() {
  const envVars: Record<string, string | undefined> = {
    'NEXT_PUBLIC_APP_NAME': process.env.NEXT_PUBLIC_APP_NAME,
    'NEXT_PUBLIC_API_URL': process.env.NEXT_PUBLIC_API_URL,
    'NEXT_PUBLIC_APP_VERSION': process.env.NEXT_PUBLIC_APP_VERSION,
    'NEXT_PUBLIC_SUPABASE_URL': process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-supabase-url.supabase.co',
    'NEXT_PUBLIC_SUPABASE_ANON_KEY': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'QaWaz....x12aOp==',
    'NEXT_PUBLIC_ENVIRONMENT': process.env.NEXT_PUBLIC_ENVIRONMENT || 'Production',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <Key className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">Environment Variables</h1>
          </div>

          <p className="text-gray-600 mb-8">
            Displaying all available Next.js environment variables
          </p>

          <div className="space-y-4">
            {Object.entries(envVars).map(([key, value]) => (
              <div key={key} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-blue-600">{key}</span>
                  <code className="text-sm bg-gray-50 p-3 rounded border border-gray-200 break-all text-gray-800">
                    {value || 'Not set'}
                  </code>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> Only environment variables prefixed with <code className="bg-blue-100 px-2 py-1 rounded">NEXT_PUBLIC_</code> are exposed to the client-side code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
