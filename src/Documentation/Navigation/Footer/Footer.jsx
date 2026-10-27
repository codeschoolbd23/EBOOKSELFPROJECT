import React from "react";
import logo1 from "../../../assets/logo1.png";
import { Link } from "react-router";
const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal text-primary px-15 pt-20 pb-5">
      <nav className="mask mask-diamond w-48 h-48 bg-black">
        <div className="px-10 pt-12">
          <Link to="/">
            <div className="flex flex-col items-center justify-center">
              <h6>
                <span className="text-amber-400 text-xl">ই-বুক</span>
                <span className="text-fuchsia-400">//</span>
                <span className="text-green-300 text-xl">সেলফ</span>
              </h6>
              <img className="h-30 w-40" alt="Diamond CSS mask" src={logo1} />
            </div>
          </Link>
        </div>
      </nav>
      <nav>
        <h6 className="footer-title">শিক্ষাপ্রতিষ্ঠান</h6>
        <Link to="/school" className="link link-hover">
          বিদ্যালয়
        </Link>
        <Link to="/college" className="link link-hover">
          কলেজ
        </Link>
        <Link to="/university" className="link link-hover">
          বিশ্ববিদ্যালয়
        </Link>
        <Link className="link link-hover">ডিপ্লোমা</Link>
      </nav>
      <nav>
        <h6 className="footer-title">যোগাযোগ</h6>
        <Link to="/about" className="link link-hover">আমাদের সম্পর্ক</Link>
        <Link className="link link-hover">যোগাযোগ মাধ্যম</Link>
        <Link className="link link-hover">জব</Link>
        <Link className="link link-hover">অন্যান্য</Link>
      </nav>
      <nav>
        <h6 className="footer-title">ব্লগসাইট</h6>
        <Link className="link link-hover">সরকারি সেবা</Link>
        <Link className="link link-hover">জিগাসা</Link>
        <Link className="link link-hover">জব</Link>
        <Link className="link link-hover">অন্যান্য</Link>
      </nav>
    </footer>
  );
};

export default Footer;
