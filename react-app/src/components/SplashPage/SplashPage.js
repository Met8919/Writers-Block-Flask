
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import logo from '../images/logo.PNG'

import './SplashPage.css'
import OpenModalMenuItem from '../SideNavBar/OpenModalMenuItem'
import { useRef, useState } from 'react';
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";

export default function SplashPage() {
    

    const ulRef = useRef();
    const [showMenu, setShowMenu] = useState(false);
    const closeMenu = () => setShowMenu(false);
    
    const history = useHistory()
    const toHome = () => {
        history.push('/')
    }
    // const closeMenu = (e) => {
    //     if (!ulRef.current.contains(e.target)) {
    //       setShowMenu(false);
    //     }
    //   };


    return (


        <div className='splash-container'>
            <img onClick={toHome} alt='icon' className='splash-image' src={logo}></img>
            <p>Welcome to Writer's Block. Create read and share short stories.</p>
          
                <div className='login-signup-container button-55'>

                <OpenModalMenuItem
                  className='nav-row'
                  itemText='Login'
                  onItemClick={closeMenu}
                  modalComponent={<LoginFormModal />} 
                  />
                </div>
              
                <div className='login-signup-container button-55'>

                  <OpenModalMenuItem
                  className='nav-row'
                  itemText='Sign Up'
                  onItemClick={closeMenu}
                  modalComponent={<SignupFormModal />} 
                />
                </div>


      
            
              
        </div>
    )



}