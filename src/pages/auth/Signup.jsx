import { useContext, useState } from 'react'
import style from "./Signup.module.css"
import { Link, useNavigate, useLocation } from 'react-router-dom'
import {auth} from "../../utils/Firebase"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import {DataContext} from "../../components/DataProvider/DataProvider"
import { PropagateLoader } from 'react-spinners'
import {Type} from '../../utils/Utility'




function Signup() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState({
    signin: false,
    signup: false
  })
  const [error, setError] = useState("")
  const [password, setPassword] = useState("")
  const [ {user}, dispatch] = useContext(DataContext)
  console.log(user)
  const usenavegation = useNavigate()
  const navstatedata = useLocation();
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    if(e.target.name === 'signin') {
      setLoading({...loading, signin: true})
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          dispatch({
            type: Type.SetUser,
            user: userCredential.user
          });
          setLoading({...loading, signin: false})
          usenavegation(navstatedata?.state?.redirect || "/")
        })
        .catch((error) => {
          setError(error.message);
          setLoading({...loading, signin: false})
        });
    }else{
      setLoading({...loading, signup: true})
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          dispatch({
            type: Type.SetUser,
            user: userCredential.user
          });
          setLoading({...loading, signup: false})
          usenavegation(navstatedata?.state?.redirect || "/")
        })
        .catch((error) => {
          setError(error.message);
          setLoading({...loading, signup: false})
        });
    }

  }
  

  return (
    <div className={style.cont}>
      <Link to="/">
      <img src='https://images.seeklogo.com/logo-png/29/1/amazon-logo-png_seeklogo-291390.png' alt='logo'/>
      </Link>
      <div className={style.sign}>
      <h1>sign </h1>
      <small style={{color:'red', padding: '5px', textAlign:'center'}}>{navstatedata?.state?.msg}</small>
      <form >
        <div>
        <label htmlFor="email">Email</label>
        <input onChange={(e)=>setEmail(e.target.value)}  value={email} type="email" id="email" placeholder='Email' required />
        </div>
        <div>
        <label htmlFor="password">password</label>
        <input value={password} onChange={(e)=>setPassword(e.target.value)}   type="password" id="password" placeholder='Password' required />
        </div>
        <button name='signin'  className={style.signinbtn} onClick={handleSubmit} >{loading.signin?(<PropagateLoader />): ("Sign In")}</button>
      </form>
      <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
      <button name='signup' type='submit' onClick={handleSubmit} className={style.create} >{loading.signup?(<PropagateLoader />): ("Create New Amazon Account")}</button>
      {error && <p style={{color:"red", padding:'12px'}}>{error}</p>}
      </div>
    </div>
  )
}

export default Signup
