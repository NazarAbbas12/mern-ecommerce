import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';
import { FiShoppingCart } from 'react-icons/fi';
import { FiMenu } from 'react-icons/fi';
import { FiChevronLeft } from 'react-icons/fi';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {

    const [visible, setVisible] = useState(false)

    const {setShowSearch, getCartCount} = useContext(ShopContext);

  return (
    <div className='flex items-center justify-between py-1 font-medium'>
        <Link to='/'>            
            <img src={logo} alt="" />
        </Link>

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

            <NavLink to='/' className='flex flex-col items-center gap-1'> 
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/collection' className='flex flex-col items-center gap-1'> 
                <p>COLLECTION</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'> 
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'> 
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
        </ul>

        <div className='flex items-center gap-6'>
                <FiSearch onClick={()=>setShowSearch(true)} className='w-5 cursor-pointer'/>

                <div className='group relative'>

                    <Link to='/login'>                   
                        <FiUser className='w-5 cursor-pointer'/>
                    </Link>


                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            <p className='cursor-pointer hover:text-black'>My Profile</p>
                            <p className='cursor-pointer hover:text-black'>Orders</p>
                            <p className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>
                </div>
                <Link to='/cart' className='relative'>
                    <FiShoppingCart className="w-5 min-win-5" />
                    <p className='absolute -right-1.25 -bottom-1.25 w-3 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>
                <FiMenu onClick={()=>setVisible(true)} className="w-5 cursor-pointer sm:hidden" />
        </div>



        {/*Side bar for small screens*/}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible? 'w-full':'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>            
                    <FiChevronLeft className="h-4" />
                    <p>Back</p>
                </div>
                <div onClick={()=>setVisible(false)} className='flex flex-col'>
                    <NavLink className='py-2 pl-6 border' to='/'>HOME</NavLink>              
                    <NavLink className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
                    <NavLink className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                    <NavLink className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar