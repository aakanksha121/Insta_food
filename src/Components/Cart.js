

function Cart() {
  return (
    <div className="flex flex-col items-center justify-center mt-24">
       <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="" className="h-[200px] w-[200px]" />
       <div className="text-center mt-4">
       <h1 className="font-bold text-lg">Your cart is Empty</h1>
       <h2>You haven't added anything in your cart</h2>
       </div>
    <h2 className="px-14 pt-6 my-2  text-center text-slate-500">Good food is always cooking! Go ahead, add some yummy items from the menu.</h2> 
    </div>
  )
}

export default Cart;
