import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {BsCart4} from 'react-icons/bs'
import { getCartItems } from "@/utils/carditems";


function Header() {

  const [cart,setCart]=useState(0);
  useEffect(()=>
  {
setInterval(()=>{
  const cartItems=getCartItems();
  setCart(cartItems.length)

},1000)
},[])


  return (
    <>
      <nav className="navbar navbar-top-bg text-white d-none d-md-block">
        <div className="container-md">
          <i className="nav-item navbar-nav">Get upto 80% Discount till the End of this Month</i>
          <div className="dropdown p-0">
            <span className="dropdown-toggle" type='button' data-bs-toggle="dropdown" aria-expanded='false'>My Account
            </span>
        <ul className="dropdown-menu">
            <li ><Link className="dropdown-item" href="#" >Register</Link></li>
           <li><Link className="dropdown-item" href="#" >Login</Link></li>
        </ul>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-bg text-white">
        <div className="container-md">
          <Link href="/" className="navbar-brand">
            <Image src="/images/download.jpg" width={120} height={50} alt="nwg logo"/>
          </Link>
          
          <Link href="/cart" className="nav-item nav-link d-flex gap-1 align-item-center text-white">
            <span className="p-1 rounded-circle bg-danger">
              <BsCart4 size={25} className="pb-1 "/>
            </span>
             {
             } Products
          </Link>
          
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg  shadow-sm mb-1 rounded container px-2">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <div className="navbar-nav">
      <Link href="/" className=" nav-item nav-link actice" >Home</Link>
      <Link href="/about" className=" nav-item nav-link actice" >About</Link>
      <Link href="/support" className=" nav-item nav-link actice" >Support</Link>
    
    </div>
  </div>
</nav>
    </>
  );
} 

export default Header;
