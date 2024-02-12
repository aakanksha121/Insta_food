import { useState } from 'react';
import logo from '../Assets/images/logo.jpg';

function SignUpForm() {
    const [username,setUsername]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [confPass,setConfPass]=useState();

    return (
        <div className="flex items-center justify-center w-full px-5">
            <section class="px-10 py-10 rounded-md shadow-md bg-white/[0.7] flex flex-col  gap-6 w-full max-w-lg">
                <a href="/">
                    <div class="font-monoton text-3xl hover:text-red-800 cursor-pointer text-center transition">
                        <div className="flex justify-center">
                            {/* <img src={logo} alt="" className='w-24 h-24 ' /> */}

                            <img src="https://i.pinimg.com/280x280_RS/77/58/00/7758003568eaaf9667f2ba3b81146e5b.jpg" className='w-24 h-24 rounded-full' alt="" /> 
                        </div>
                    </div>
                </a>
                <div class="flex flex-col gap-2 ">
                    <h1 class="text-4xl font-bold mb-3">Sign up</h1>
                    <form action="" class="flex flex-col gap-4 py-5">

                        <label class="flex flex-col">
                            <input type="text" required="" placeholder="Username" class="border rounded-md p-1.5 shadow-sm" value={username} onChange={(e)=>setUsername(e.target.value)} />
                            </label>

                        <label class="flex flex-col"><input type="email" required="" placeholder="Email" class="border rounded-md p-1.5 shadow-sm" value={email} onChange={(e)=>setEmail(e.target.value)} /></label>

                        <label class="flex flex-col relative">
                            <input required="" placeholder="Password" type="password" class="border rounded-md p-1.5 shadow-sm" value={password} onChange={(e)=>setPassword(e.target.value)} />
                            <span class="absolute right-2 top-3 cursor-pointer">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs><clipPath><path fill="none" d="M124-288l388-672 388 672H124z" clip-rule="evenodd"></path></clipPath></defs><path d="M508 624a112 112 0 0 0 112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 0 0-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 0 0 0 11.31L155.25 889a8 8 0 0 0 11.31 0l712.16-712.12a8 8 0 0 0 0-11.32zM332 512a176 176 0 0 1 258.88-155.28l-48.62 48.62a112.08 112.08 0 0 0-140.92 140.92l-48.62 48.62A175.09 175.09 0 0 1 332 512z"></path><path d="M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 0 1 445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5z"></path></svg>
                            </span>
                        </label>

                        <label class="flex flex-col relative">
                            <input required="" placeholder="Confirm Password" type="password" class="border rounded-md p-1.5 shadow-sm" value={confPass} onChange={(e)=>setConfPass(e.target.value)} />
                            <span class="absolute right-2 top-3 cursor-pointer"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs><clipPath><path fill="none" d="M124-288l388-672 388 672H124z" clip-rule="evenodd"></path></clipPath></defs><path d="M508 624a112 112 0 0 0 112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 0 0-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 0 0 0 11.31L155.25 889a8 8 0 0 0 11.31 0l712.16-712.12a8 8 0 0 0 0-11.32zM332 512a176 176 0 0 1 258.88-155.28l-48.62 48.62a112.08 112.08 0 0 0-140.92 140.92l-48.62 48.62A175.09 175.09 0 0 1 332 512z"></path><path d="M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 0 1 445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5z"></path></svg></span><p class="pt-1 invisible">Password Mismatch</p></label><div class="w-full py-2   flex flex-col gap-4 items-center">
                                <button type="submit" class="btn-primary w-2/3 text-lg text-center bg-[#fbeaf1] py-3 rounded-md hover:bg-[#f48eb8] transition duration-500" disabled="">Create Account</button>
                                <p class="text-gray-600 text-sm">Already have an account? <a class="underline text-base " href="/login">Login</a></p></div></form></div></section>
        </div>
    )
}

export default SignUpForm;
