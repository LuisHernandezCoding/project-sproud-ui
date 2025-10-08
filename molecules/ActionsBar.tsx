import React from 'react';

export default function ActionsBar(): React.ReactElement {
  return (
    <div className="flex items-center space-x-3">
      <button className="px-4 py-2 border border-neutral-200 rounded-lg hover:bg-neutral-50 flex items-center space-x-2">Filter</button>
      <button className="px-4 py-2 border border-neutral-200 rounded-lg hover:bg-neutral-50 flex items-center space-x-2">View</button>
      <button className="px-4 py-2 bg-neutral-100 rounded-lg flex items-center space-x-2">List</button>
    </div>
  );
}
