import React from 'react'
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.authentication);

  return (
    <div className='navbar'>
      <span className="logo">Advocate Solutions</span>
      <div className="user">
        <img src={currentUser?.photoURL} alt="" />
        <span>{currentUser?.displayName}</span>
        {/* <button onClick={()=>signOut(auth)}>logout</button> */}
      </div>
    </div>
  )
}

export default Navbar