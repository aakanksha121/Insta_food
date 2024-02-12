

function Favourites() {
  return (
    <>  
      <section className="text-5xl m-14 text-[#555454]">My Favourites</section>


    <section className="flex flex-col items-center">
        <img  className='w-44 h-44' src="https://micro-assets.foodora.com/img/no-favorites-fp.svg" alt="No Favorites found"/>
        <div className="text-2xl font-semibold mt-4">No Favourites Saved</div>
        <div className="text-xl mt-1">You’ll see all your favorites here, to make ordering even faster. Just look for the</div>

        <div className="bg-slate-200 rounded-full p-1 mt-1.5 " >
        ❤
            </div>
           </section>
           </>

  )
}

export default Favourites;
