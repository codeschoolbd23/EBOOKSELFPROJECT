import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from "../../../assets/logo1.png";
import { useNavigate } from "react-router-dom";
// import Search from '../../../Utilities/search/Search';
const Navbar = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const success = e.target.page.value;
    console.log("Input Value:", success); 
    if (success.trim() !== "") { 
      navigate("/search", { state: { query: success } });
    } 
    else {
      // alert("অনুগ্রহ করে কিছু লিখুন!");
      navigate("/", { state: { query: success } });
    }
  };  
  const classCSS = "dropdown-content menu bg-fuchsia-500 z-1 w-fit p-2";
  return (
    <div className="relative aura aura-rainbow rounded-none w-full bg-primary">
      <div className="bg-primary text-primary-content shadow-sm w-full">
        <div className="collapse-title navbar">
          <div className="navbar-start">
            <Link
              to="/"
              className="bg-primary text-xl flex items-center gap-1 font-bold"
            >
              <img src={logo1} alt="Logo" className="h-16 w-20" />
              <span className="text-amber-400">ই-বুক</span>
              <span className="text-2xl font-extrabold text-fuchsia-400">
                //
              </span>
              <span className="text-green-300">সেলফ</span>
            </Link>
          </div>
          <div className="navbar-center text-2xl text-pink-200">
            <form onSubmit={handleSubmit}>
              <input
                // onChange={handleSubmit}
                type="text"
                name="page"
                className="input text-black"
                placeholder="Enter book name"
              />
            </form>
          </div>
          <div className="navbar-end flex text-2xl text-pink-200">
            <ul className="menu menu-horizontal flex-nowrap">
              <li>
                <Link to="/academic">একাডেমিক বই</Link>
              </li>
              
              <li className="dropdown dropdown-center">
                <Link to="/job" tabIndex={0} role="button">
                  জব
                </Link>
                <ul tabIndex={-1} className={classCSS}>
                  <li>
                    <Link to="/job">বিসিএস</Link>
                  </li>
                  <li>
                    <Link to="/job">ব্যাংক</Link>
                  </li>
                  <li>
                    <Link to="/job">শিক্ষক নিবন্ধন</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown dropdown-center">
                <Link to="/other" tabIndex={0} role="button">
                  অন্যান্য
                </Link>
                <ul tabIndex={-1} className={classCSS}>
                  <li>
                    <Link to="/other">হেলথ</Link>
                  </li>
                  <li>
                    <Link to="/other">হসপিটাল</Link>
                  </li>
                  <li>
                    <Link to="/other">রোগ</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Link to="/aichat" className="absolute right-0 top-100 bottom-0 flex btn btn-outline">
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-warning hover:chat-bubble-primary w-20">
            ASK Me?
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;