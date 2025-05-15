// import React from 'react'

import { useState } from "react";

const Login = () => {
  const [state, setState] = useState('sign up');

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (event) => {
   event.preventDefault();
  }

  return (
    <form className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 text-sm rounded-xl shadow-lg text-zinc-600:">
        <p className="text-2xl font-semibold">{state === 'sign up' ?'Create Account' : 'Login'}</p>
        <p>Please {state === 'sign up' ? 'Sign up':'Log in'} to book appointment</p>
        {
          state === 'sign up' && <div className="w-full ">
          <p>Full Name</p>
          <input className="border border-zinc-300 rounded p-2 mt-1 w-full" type="text" onChange={(e)=>setName(e.target.name)} value={name}/>
        </div>
        }

        
        <div className="w-full">
          <p>E-mail</p>
          <input className="border border-zinc-300 rounded p-2 mt-1 w-full"  type="text" onChange={(e)=>setEmail(e.target.name)} value={email}/>
        </div>
        <div className="w-full">
          <p>Password</p>
          <input className="border border-zinc-300 rounded p-2 mt-1 w-full"  type="password" onChange={(e)=>setPassword(e.target.password)} value={password}/>
        </div>
        <button className="bg-primary text-white w-full py-2 rounded-md text-base">{state === "sign up" ? 'Create Account':'Login'}</button>
        {
          state === 'sign up' 
          ? <p>Already have an account? <span onClick={()=>setState('login')} className="text-primary underline cursor-pointer">Login here</span></p> 
          : <p>Create a new account?<span onClick={()=>setState('sign up')} className="text-primary underline cursor-pointer" >click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login