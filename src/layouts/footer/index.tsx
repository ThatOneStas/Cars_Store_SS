import React, { useEffect } from "react";
import s from "./footer.module.scss";
// link
import Link from 'next/link'
// images
import Image from 'next/image'

const Footer = () => {
  return (
    <>
      <footer className={s.footer}>
        <div className={s.footer__main}>
          <div className={s.footer__main_logo}>
            <Link href={"/"}><h1>Morent</h1></Link>
            <h2>
              Our vision is to provide convenience and help increase your sales business.
            </h2>
          </div>
          <div className={`${s.footer__main_box} ${s.about}`}>
            <h1>About</h1>
            <ul>
              <li><Link href={"/"}>How it works</Link></li>
              <li><Link href={"/"}>Featured</Link></li>
              <li><Link href={"/"}>Partnership</Link></li>
              <li><Link href={"/"}>Bussiness Relation</Link></li>
            </ul>
          </div>
          <div className={`${s.footer__main_box} ${s.community}`}>
            <h1>Community</h1>
            <ul>
              <li><Link href={"/"}>Events</Link></li>
              <li><Link href={"/"}>Blog</Link></li>
              <li><Link href={"/"}>Podcast</Link></li>
              <li><Link href={"/"}>Invite a friend</Link></li>
            </ul>
          </div>
          <div className={`${s.footer__main_box} ${s.socials}`}>
            <h1>Socials</h1>
            <ul>
              <li><Link href={"/"}>Discord</Link></li>
              <li><Link href={"/"}>Instagram</Link></li>
              <li><Link href={"/"}>Twitter</Link></li>
              <li><Link href={"/"}>Facebook</Link></li>
            </ul>
          </div>
        </div>
        <div className={s.footer__line}></div>
        <div className={s.footer__sub}>
          <h2>©2022 MORENT. All rights reserved</h2>
          <Link href={"/"}><h2>Privacy & Policy</h2></Link>
          <Link href={"/"}><h2>Terms & Condition</h2></Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;