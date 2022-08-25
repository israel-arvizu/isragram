import React, {useState, useRef, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from '../searchbar';
import NavDropDown from './NavDropDown';
import './UserNavBar.css'

function UserNavBar({user}) {
    const [dropDown, setDropDown] = useState(false)
    const ref = useRef()
    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if(dropDown && ref.current && !ref.current.contains(e.target)){
                setDropDown(false)
            }
        }
        document.addEventListener("click", checkIfClickedOutside);
        return () => {
            document.removeEventListener("click", checkIfClickedOutside);
        }
    }, [dropDown])

    return (
        <div className='nav-bar-container'>
            <div className='nav-bar-content'>
                <a id='logo-nav-bar-container' href='/home'>
                    <img id='nav-logo-image' src='/static/instaflick-updatedLogo.png' alt='logo'/>
                </a>
                <div id='nav-bar-search-container'>
                    <SearchBar />
                </div>
                <nav id='nav-bar-buttons-container'>
                    <NavLink to='/home' style={{color: 'black'}}>
                        <i class="fa-solid fa-house fa-fw" style={{marginRight: '10px', marginLeft: '10px', fontSize: "25px"}}></i>
                    </NavLink>
                    <a href='/posts/new' style={{color: 'black'}}>
                        <i class="fa-regular fa-square-plus fa-fw" style={{marginRight: '10px', marginLeft: '10px', fontSize: "27px"}}></i>
                    </a>
                    <div onClick={() => setDropDown(!dropDown)} ref={ref} className="nav-bar-image-container">
                        <img src={user.profile_picture} id='nav-bar-user-picture' alt='Profile Picture'/>
                        {dropDown && <NavDropDown user={user}/>}
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default UserNavBar;
