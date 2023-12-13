import React from 'react'
import Head from 'next/head'
import s from './product.module.scss'
// components
import Filter from '@/components/filter'
import Card from "@/components/card"
// link
import Link from 'next/link'
// images
import Image from 'next/image'
// product list
import Products_json_all from "@/modules/server/products/products_all.json"
import Marks from "@/modules/server/products/marks.json"


export default function Home() {
  
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={s.main}>
        <Filter></Filter>
        <section className={s.filter}>
          <input type="text" />
          <select name="" id="">
            <option value="All">All</option>
            {
              Marks.map((obj:any)=>{
                return(
                  <option value={obj.mark}>{obj.mark}</option>
                )
              })
            }
          </select>
        </section>
        <section className={s.list}>
          <div className={s.list__top}>
            <h1>Popular</h1>
            <Link href={"/"}>Popular</Link>
          </div>
          {
            Products_json_all.length > 0 ? <div className={s.list__items}>{Products_json_all.map((product:any)=>{
              return(
                <Card key={product.id} product_data={product}></Card>
              )
            })}</div> : <div className={s.list__error}>No products yet.</div>
          }
          <div className={s.list__bottom}>
            <h2>{Products_json_all.length ? `${Products_json_all.length} Cars` : `Zero`}</h2>
          </div>
        </section>
      </main>
    </>
  )
}