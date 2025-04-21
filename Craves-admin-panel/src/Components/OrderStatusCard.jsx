import React from 'react'

function OrderStatusCard() {
  return (
    <div className='h-[75px] w-[350px] flex items-center justify-between px-2 my-2 rounded-2xl bg-white shadow-md'>
        <img height={50} width={50} src='https://th.bing.com/th/id/R.44d10945c0a134e5d18b403a2d4eca7c?rik=AO60awUclc7mXw&riu=http%3a%2f%2fassets.epicurious.com%2fphotos%2f57c5c6d9cf9e9ad43de2d96e%2fmaster%2fpass%2fthe-ultimate-hamburger.jpg&ehk=ovkmWw5FEuB86jZ%2fN9Gt9ATrG2oovgVkW0CHny4no8E%3d&risl=&pid=ImgRaw&r=0' alt='food' />
        <div>
            <p className='text-xs font-semibold'>Order Id #43432</p>
            <p className='text-sm text-gray-500'>12:04 (12 sep 2024)</p>
        </div>
        <p className='text-xl font-medium'>₹190</p>

    </div>
  )
}

export default OrderStatusCard