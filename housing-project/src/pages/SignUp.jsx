import React from 'react'
import {useState} from 'react'
import {getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import {Link, useNavigate} from'react-router-dom'
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import {db} from '../firebase.config'
import {toast} from 'react-toastify'
import OAuth from '../components/OAuth'


function SignUp() {
const [showPassword, setShowPassword] = useState(false)

const navigate = useNavigate()
const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
})

const {email, password, name} = formData

const OnChange = (e) => {
    setFormData((prevState)=>({
        ...prevState,
    [e.target.id] : e.target.value,
}))
}

const onSubmit = async (e)=> {
    e.preventDefault()
    
    try {
        const auth = getAuth()

        const userCredentials = await createUserWithEmailAndPassword(auth, email,password)

        const user =  userCredentials.user

        updateProfile(auth.currentUser,{
            displayName: name,
        })

        const FormDataCopy = { ...formData }
         delete FormDataCopy.password
        FormDataCopy.timestamp = serverTimestamp()

    await setDoc(doc(db, 'users', user.uid), FormDataCopy)


            navigate('/')
        }
         catch (error) {
            toast.error('Sorry something went wrong with your registration')
    }
}

  return (
    <>
    <div className='pageContainer'>
        <header>
            <p className='pageHeader'>Welcome Back!</p>
        </header>

        <form onSubmit={onSubmit}>
        <input
            type='text'
            className='nameInput'
            placeholder= 'Name'
            value={name}
            id= 'name'
            onChange={OnChange}/>

            <input
            type='email'
            className='emailInput'
            placeholder= 'Email'
            id= 'email'
            value={email}
            onChange={OnChange}/>
            <div className="passwordInputDiv">

            <input
            type={showPassword ? 'text' : 'password' }
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
            <div className="signUpBar">
                <p className="signUpText">Sign Up</p>
                <button className="signUpButton" type="submit">
                    <ArrowRightIcon fill='#fff' width='34px' height='34px' navigate
                     />
                </button>'
            </div>
        </form>
        <OAuth/>

        <Link to='/signin' >Sign in Instead</Link>
  </div>
    </>
    
  )
}

export default SignUp
