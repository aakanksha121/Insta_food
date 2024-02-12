import { useState } from 'react';

import logo from '../Assets/images/logo.jpg';



function LogInForm() {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [user,setUser]=useState('');

    return (
        <div>
            {/* <main className="grid  grid-rows-1  items-center lg:grid-cols-2 w-full  h-screen m-auto font-PTSans"> */}
                {/* <section className=" hidden h-full lg:block max-h-screen  rounded-lg bg-[#FBFBFB]">
                    <img src={load} alt="" class="w-full h-full  object-cover" />
                </section> */}
                <div className="flex items-center justify-center w-full  px-5">
                    <section className="px-7 py-10 rounded-md shadow-md bg-white/[0.7] flex flex-col gap-6 w-full max-w-lg">
                        <a href="/">
                            <div className="flex justify-center">
                                {/* <img src={logo} alt="" className='w-24 h-24 ' />  */}
                            <img src="https://i.pinimg.com/280x280_RS/77/58/00/7758003568eaaf9667f2ba3b81146e5b.jpg" className='w-24 h-24 rounded-full' alt="" /> 
                                </div>
                               
                        </a>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-3xl font-bold mb-3 ">Login to your account</h1>
                            <form action="" class="flex flex-col gap-3">
                                <label class="flex flex-col font-medium text-lg">Email<input type="email" class="border rounded-md p-1.5 shadow-sm" value={email}
                                onChange={(e)=>setEmail(e.target.value)}/></label>
                                <label class="flex flex-col font-medium text-lg">Password<input type="password" class="border rounded-md p-1.5 shadow-sm" value={password} onChange={(e)=>setPassword(e.target.value)}/></label>
                                <div class="w-full py-2   flex flex-col gap-4 items-center ">
                                    {/* <button class="btn-primary w-2/3 text-lg text-center bg-[#8f949a] py-3 rounded-md hover:bg-[#b5b7ba] transition duration-500" disabled="" >Login</button> */}
                                    <button class="btn-primary w-2/3 text-lg text-center bg-[#fbeaf1] py-3 rounded-md hover:bg-[#f48eb8] transition duration-500" disabled="" >Login</button>
                                    <button class="btn-secondary w-2/3 text-sm md:text-base text-center border border-black-500 py-3 rounded-md hover:bg-pink-700 hover:text-white transition duration-500">Login as a Guest</button>
                                    <a class="underline text-gray-600" href="/signup">Create New Account</a>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            {/* </main> */}
        </div>
    )
}

export default LogInForm;
