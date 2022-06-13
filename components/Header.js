import stylesHeader from "../styles/header.module.css";
import React from "react";
import Image from "next/image";
import Search from '../assets/svg/search'

function Header() {
  return (
    <div className={stylesHeader.header}>
      <div className={stylesHeader.wrapper}>
        <Image
          src="/logo.png"
          alt="logo"
          layout="fill"
          className={stylesHeader.logo__nav}
        />
      </div>
      <div className={stylesHeader.header__wrapper}>
        <nav className={stylesHeader.nav}>
          <div className={stylesHeader.nav__item}>
            <div className={stylesHeader.nav__link}>Cryptocurrencies</div>
            <div className={stylesHeader.badge}></div>
          </div>

          <div className={stylesHeader.nav__item}>
            <div className={stylesHeader.nav__link}>Exchanges</div>
            <div className={stylesHeader.badge}></div>
          </div>

          <div className={stylesHeader.nav__item}>
            <div className={stylesHeader.nav__link}>NFT</div>
            <div className={stylesHeader.badge}></div>
          </div>

          <div className={stylesHeader.nav__item}>
            <div className={stylesHeader.nav__link}>Cryptown</div>
            <div className={stylesHeader.badge}></div>
          </div>

          <div className={stylesHeader.nav__item}>
            <div className={stylesHeader.nav__link}>Portfolio</div>
            <div className={stylesHeader.badge}></div>
          </div>

          <div className={stylesHeader.nav__item}>
            <div className={stylesHeader.nav__link}>Watchlist</div>
            <div className={stylesHeader.badge}></div>
          </div>

          <div className={stylesHeader.nav__item}>
            <div className={stylesHeader.nav__link}>Products</div>
            <div className={stylesHeader.badge}></div>
          </div>
          <div className={stylesHeader.nav__item}>
            <div className={stylesHeader.nav__link}>Learn</div>
            <div className={stylesHeader.badge}></div>
          </div>
        </nav>
        <div className='flex items-center'>
          {/* <ConnectButton/> */}
          <div className={stylesHeader.input__container}>
            <Search />
            <input className={stylesHeader.input} placeholder='Search' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
