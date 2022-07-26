import React from 'react'
import {useState} from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import {Link, useNavigate} from'react-router-dom'
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import {toast} from 'react-toastify'
import OAuth from '../components/OAuth'

function SignIn() {
const [showPaasword, setShowPassword] = useState(false)
const navigate = useNavigate()
const [formData, setFormData] = useState({
    email: '',
    password: ''
})

const onSubmit = async(e) => {
    e.preventDefault()
    try {
        const auth = getAuth()
    const userCredentials = await signInWithEmailAndPassword(auth, email, password)
    if(userCredentials.user){navigate ('/')}
        
    } 
    catch (error) {
        toast.error('Bad user credentials')
    }
    

}


const {email, password} = formData

const OnChange = (e) => {
    setFormData((prevState)=>({...prevState,
    [e.target.id] : e.target.value}))
}

  return (
    <>
    <div className='pageContainer'>
        <header>
            <p className='pageHeader'>Welcome Back!</p>
        </header>
        <form onSubmit={onSubmit}>
            <input
            type='email'
            className='emailInput'
            placeholder= 'Email'
            id= 'email'
            value={email}
            onChange={OnChange}/>
            
            <div className="passwordInputDiv">
            <input
            type={showPaasword ? 'text' : 'password' }
            className='emailInput'
            placeholder= 'Password'
            id= 'password'
            value={password}
            onChange={OnChange}/>
            <img src={visibilityIcon} alt='' className='showPassword' onClick={
                ()=>{setShowPassword((prevState)=> !prevState)}
            }
            />
            </div>
            
            <Link to='/forgot-password'
            className='forgotPasswordLink'>Forgot Password</Link>
            
            <div className="signInBar">
                <p className="signInText">Sign In</p>
                <button className="signInButton">
                    <ArrowRightIcon fill='#fff' width='34px' height='34px'/>
                </button>
            </div>
        </form>

        <OAuth/>
        <Link to='/signup' className='registerLink'>Sign-up Instead</Link>
  </div>
    </>
    
  )
}

export default SignIn
