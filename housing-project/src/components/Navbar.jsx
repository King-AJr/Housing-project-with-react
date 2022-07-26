import React from 'react'
import {useNavigate,useLocation} from 'react-router-dom'
import {ReactComponent as ExploreIcon} from '../assets/svg/exploreIcon.svg'
import {ReactComponent as OfferIcon} from '../assets/svg/offerIcon.svg'
import {ReactComponent as PersonOutlineIcon} from '../assets/svg/personOutlineIcon.svg'



function Navbar() {
const navigate = useNavigate();
const location = useLocation
const RouteCheck = (route) => {
    if (route === location.pathname){
        return true
    }
}


  return (
    <footer className='navbar'>
        <nav className='navbarNav'>
            <ul className='navbarListItems'>
                <li className='navbarListItem'>
                    <ExploreIcon fill={RouteCheck('/') ? '#2c2c2c' : '#8f8f8f'}
                    width='36px' height='36px' onClick={()=> navigate('/')}
                    />
                </li>
                <li className='navbarListItem'>
                    <OfferIcon fill={RouteCheck('/offer') ? '#2c2c2c' : '#8f8f8f'}
                    width='36px' height='36px' onClick={()=> navigate('/offers')}
                    />
                </li>
                <li className='navbarListItem'>
                    <PersonOutlineIcon fill={RouteCheck('/profile') ? '#2c2c2c' : '#8f8f8f'}
                    width='36px' height='36px' onClick={()=> navigate('/profile')}
                    />
                </li>
            </ul>
        </nav>
    </footer>
  )
}

export default Navbar
