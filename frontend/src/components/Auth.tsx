import { ChangeEvent, useState } from "react"
import { Link , useNavigate } from "react-router-dom"
import axios from "axios";

import { SignupInput } from "@saurabh-tailor/medium-common";
import { BACKEND_URL } from "../config";


const Auth = ({type}:{type:"Signup" | "SignIn"}) => {
    const [postInputs, setpostInputs] = useState <SignupInput> ({
        username:"",
        name:"",
        password:""
    })

    const navigate = useNavigate()

    const sendRequest = async ()=>{
       try {
            const {data} = await axios.post(`${BACKEND_URL}/api/v1/user/${type ==="Signup"?"signup":"signin"}` , postInputs)
            localStorage.setItem("token" , data)
            navigate("/blogs")
       } catch (error) {
        
       }
        }
  return (
    <div className="h-screen flex justify-center flex-col" >
       <div className="flex justify-center text-center flex-col  " >
            <div className="text-3xl font-bold mb-2  " >
                Create An Account
            </div>
            <div className="text-slate-500 " >
               {type=="SignIn" ? "Dont Have An Account? ":" Already Have an Account ? "}
                <Link className="underline" to={type=="SignIn"? "/signup":"/signin"} >
                    {type=="SignIn"? "Signup":"Login"}
                </Link>
            </div>
           <div className=" m-auto flex  flex-col  " >
            {type==="Signup"?  <LabelledInput label="Name" placeholder="Enter Your Name" onChange={(e)=>{
                    setpostInputs((prev)=>({...prev,name:e.target.value}))
                }} /> : null }
                <LabelledInput label="Username" placeholder="Enter Your Username" onChange={(e)=>{
                    setpostInputs((prev)=>({...prev,username:e.target.value}))
                }} />
                <LabelledInput label="Password" type="password" placeholder="Enter Your Password" onChange={(e)=>{
                    setpostInputs((prev)=>({...prev,password:e.target.value}))
                }} />
                <button onClick={sendRequest} type="button" className=" w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type=="SignIn"? "SignIn" :"Signup"}</button>

           </div>
       </div>
    </div>
  )
}

interface LabelledInputType{
    label:string,
    placeholder:string
    onChange:(e:ChangeEvent<HTMLInputElement>)=> void
    type?:string
}

function LabelledInput({label , placeholder , onChange , type}:LabelledInputType) {
    return <div>
        <label   className="block mb-2 text-sm font-medium text-gray-900  text-left"> {label} </label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   mb-5" placeholder={placeholder} required />
    </div>
}

export default Auth