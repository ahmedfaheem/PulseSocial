import React from 'react'

export default function ValidationMessage({ field }) {
  return (<>
     {field && <p className="text-red-500 text-sm mt-1">{field?.message}</p>}
     </>
  )
}
