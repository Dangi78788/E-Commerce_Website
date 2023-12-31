import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
// import {toast} from 'react-toastify'
import axios from 'axios';
import {useNavigate}from 'react-router-dom'
import toast from 'react-hot-toast';
import "../../styles/AuthStyles.css";




const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");

    const navigate = useNavigate()

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
        const res =await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,
        {name,email,password,phone,address,answer}
        );
        if(res&&res.data.success){
            toast.success("res.data&&res.data.success")
            navigate("/login");
        }
        else{
            toast.success(res.data.message)
        }
    } catch (error) {
        console.log(error)
        toast.error("something")
    }
  }
  

  return (
    <Layout title="Register - Ecommer App">
    <div className="form-container">
       
<form onSubmit={handleSubmit}>
<h4 className="title">REGISTER FORM</h4>
  <div className="mb-3">
    <input type="test"
     value={name}
     onChange={(e)=>setName(e.target.value)}
    className="form-control" id="exampleInputEmail1" 
    placeholder="Enter your name" 
    required/>
    
 
  </div>
  <div className="mb-3">
    <input type="email" 
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    className="form-control" id="exampleInputEmail1" 
     placeholder="Enter your email"
     required  />
 
  </div>

  <div className="mb-3">
    <input type="password"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    className="form-control" id="exampleInputPassword1"
     placeholder="Enter your password" 
     required />
  </div>
 
  <div className="mb-3">
    <input type="test" 
    value={phone}
    onChange={(e)=>setPhone(e.target.value)}
    className="form-control" id="exampleInputEmail1" 
     placeholder="Enter your phone" 
     required />
 
  </div>
  <div className="mb-3">
    <input type="test"
    value={address}
    onChange={(e)=>setAddress(e.target.value)}
    className="form-control" id="exampleInputEmail1" 
     placeholder="Enter your address" 
     required />
 
  </div>
  <div className="mb-3">
    <input type="test"
    value={answer}
    onChange={(e)=>setAnswer(e.target.value)}
    className="form-control" id="exampleInputEmail1" 
     placeholder="what is your fav sport name " 
     required />
 
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

        </div>
    </Layout>
  );
};

export default Register;