import React, { Component } from 'react';
 
class Navbar extends Component {
    render(){
        return (
            <section className="site-nav">
               <img className="site-nav__logo" src="https://cdn.shoplo.com/0304/s/8/assets/logo.png?980" alt="logo"/>
               <div className="site-nav__right">
                   <nav className="site-nav__menu">
                        <div  className="hover-this"><a className="sizeButt" href="https://kokafeat.com/" target="_blank" rel="noopener noreferrer"><span className="navButt">Shop</span></a></div>
                        <div  className="hover-this"><a className="sizeButt" href="https://www.youtube.com/user/KokaBeatsTV" target="_blank" rel="noopener noreferrer"><span className="navButt">Youtube</span></a></div>
                   </nav>
               </div>
            </section>
        );
    }
}
 
export default Navbar;

