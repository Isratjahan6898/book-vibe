import { NavLink } from "react-router-dom";


const Navbar = () => {

    const links = <>
      <li><NavLink to="/">Home</NavLink></li> 
       
      <li><NavLink to="/listed">Listed Books</NavLink></li> 
      <li><NavLink to="/read">Read to Pages</NavLink></li> 
    
    </>
    return (
        <div className="mx-[50px] lg:mx-[100px] mt-[40px]">
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box  w-52">

        {links}
        {/* <li><a>Item 1</a></li>
       
        <li><a>Item 3</a></li> */}
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl font-bold">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
      {/* <li><a>Item 1</a></li>
      
      <li><a>Item 3</a></li> */}

      { links}
    </ul>
  </div>
  <div className="  lg:navbar-end mt-[150px] ml-[-60px] lg:ml[1px] lg:mt-[0px]">
    <a className="btn mr-[20px] bg-[#23BE0A] font-bold text-white">Sign Up</a>
    <a className="btn bg-[#59C6D2] font-bold text-white ">Sign In</a>
  </div>
</div>
            
        </div>
    );
};

export default Navbar;