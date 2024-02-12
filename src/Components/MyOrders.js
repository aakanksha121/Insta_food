import React from 'react'

function MyOrders() {
  return (
    <>
      <div className='mb-12  w-5/6 mx-auto'>
        <section>
          <div className='text-xl font-semibold py-5'>Active orders</div>
          <img className='w-28 mb-1' src="https://b.zmtcdn.com/webFrontend/96a9a259cfa3dd8e260d65d1f135ab941581004545.png" alt="" />
          <div className='text-lg'>You have no active orders.</div>
          </section>

          <section>
            <div className='text-xl font-semibold py-5'>Past orders</div>
            <img className='w-28 mb-1' src="https://b.zmtcdn.com/webFrontend/96a9a259cfa3dd8e260d65d1f135ab941581004545.png" alt="" />
            <div className='text-lg'>Oops, looks like you haven't placed any orders yet.</div>
            </section>

            {/* <section>
              <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_262/empty-orders-image_acrbbw" alt="" />
            </section> */}
            </div>
              
             
    </>
  )
}

export default MyOrders
