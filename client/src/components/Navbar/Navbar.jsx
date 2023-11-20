//import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { Link } from 'react-router-dom';
import './Navbar.scss'

function Navbar() {
  return (
    <div className="navbar">
        <div className="wrapper">
            <div className="left"> 
                <div className="item">
                    <Link className='link' to="/products/1"> Mujer </Link>
                </div>
                <div className="item">
                    <Link className='link' to="/products/2"> Hombre </Link>
                </div>
                <div className="item">
                    <Link className='link' to="/products/3"> Niños </Link>
                </div>
            </div>
            <div className="center"> 
                <Link className='link' to="/"> SESCOM </Link>
            </div>
            <div className="right"> 
                <div className="icons">
                    <SearchIcon/>
                    <PersonOutlineIcon/>
                    <FavoriteBorderOutlinedIcon/>
                    <div className="cartIcon">
                        <ShoppingCartOutlinedIcon/>
                        <span> 0 </span>
                    </div>
                    
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar