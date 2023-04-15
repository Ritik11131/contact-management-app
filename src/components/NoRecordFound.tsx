import React from 'react';

;const NoRecordFound = () => {
  return (
    <div className="sm:ml-64 flex p-8 flex-col items-center justify-center h-screen bg-gray-100">
      <svg className="w-24 h-24 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
      <h1 className="mt-4 text-2xl font-medium text-gray-900">No records found</h1>
      <p className="mt-2 text-gray-600">Sorry, we couldn't find any records.</p>
    </div>
  );
}

export default NoRecordFound;
