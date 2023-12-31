import React, { useMemo } from "react";
import s from "./header.module.scss"
// link
import Link from 'next/link'
// images
import Image from 'next/image'
import Heart from "@/assets/img/heart.svg"
import Bell from "@/assets/img/notification.svg"
import Settings from "@/assets/img/setting-2.svg"
import User from "@/assets/img/frame.svg"
import Search from "@/assets/img/search-normal.svg"
import Filter from "@/assets/img/filter.svg"
// redux 
import { useSelector } from "react-redux";



const header = () => {
  const favList = useSelector((state: any) => state.favourite.fav_list);

  const isActive = useMemo(() => {
    if (favList[0]) {
      return true;
    } else {
      return false;
    }
  }, [favList]);
  return (
    <header className={s.header}>
      <Link className={s.header__logo} href={"/"}>
        <h1>Morent</h1>
      </Link>
      <div>
        <input className={s.header__search} type="search" />
        <Image className={s.header__searchIcon} src={Search} alt='Search-icon'></Image>
        <Image className={s.header__filterIcon} src={Filter} alt='Filter-icon'></Image>
      </div>
      <nav className={s.header__nav}>
        <ul>
          <li className={s.fav}>
            <Link href={"/favourite"}>
              <div className={isActive ? `${s.active}` : ""}></div>
              <Image src={Heart} alt='heart-icon'></Image>
            </Link>
          </li>
          <li className={s.notif}>
            <Link href={"/zaglushka"}>
              <Image src={Bell} alt='Bell-icon'></Image>
            </Link>
          </li>
          <li className={s.setting}>
            <Link href={"/zaglushka"}>
              <Image src={Settings} alt='Settings-icon'></Image>
            </Link>
          </li>
          <li className={s.user}>
            <Link href={"/zaglushka"}>
              <Image className={s.header__nav_userImg} src={User} alt='Profile-icon'></Image>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default header
