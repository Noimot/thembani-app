import React from 'react'

function Chart({ children, title }) {
  return (
    <div className="min-w-0 p-4 bg-green-50 rounded-lg shadow-xs">
      <p className="mb-4 font-semibold text-gray-800">{title}</p>
      {children}
    </div>
  )
}

export default Chart
