import React from 'react'
import style from "./header.module.scss"
// link
import Link from 'next/link'
// images
import Image from 'next/image'


const header = () => {
  return (
    <header className={style.header}>
      <Link href={'/'}>Home</Link>
      <Link href={'/favourite'}>Fav</Link>
      <Link href={'/cta'}>cta</Link>
    </header>
  )
}

export default header
