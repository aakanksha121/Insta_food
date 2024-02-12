import loader from '../Assets/images/loader.gif';

function Shimmer() {
  return (
    <div className='flex flex-col items-center h-screen justify-center '>
      {/* <img src={load} alt="" /> */}
      <img src={loader} alt="" />
      <span>Loading...</span>
    </div>
  )
}

export default Shimmer
