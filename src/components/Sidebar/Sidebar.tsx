import React from 'react'
import Home from '../../pages/Home'
import Guests from '../../pages/Guests'
import Pricing from '../../pages/Pricing'
import Reception from '../../pages/Reception'
import Rooms from '../../pages/Rooms'
import Transactions from '../../pages/Transactions'

function Sidebar() {
  return (
    <div className='w-2/10'>
      <Home/>
      <Guests/>
      <Pricing/>
      <Reception/>
      <Rooms/>
      <Transactions/>
    </div>
  )
}

export default Sidebar
