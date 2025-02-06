import React, { useEffect } from 'react'

const BasicEffect = () => {
  useEffect(() => {
    console.log('useEffect called');
  },[]);
  return (
    <div>BasicEffect check logs</div>
  )
}

export default BasicEffect