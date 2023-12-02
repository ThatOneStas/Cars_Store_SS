import React from 'react'
import s from "../card/card.module.scss"
// link
import Link from 'next/link'
// images
import Image from 'next/image'
import Location from "@/assets/img/Location.png"
import Test from "@/assets/img(products)/land-rover_range-rover-evoque__525771031f(1).png"
// product list
import Products_json from "@/modules/server/products/products.json"

interface Props {
    product_data:{
      name:string,
      img:string,
      location:string,
      price:number,
      run:number,
      id:number
    }
}

const card = ({product_data} : Props) => {
  return (
    <div className={s.card}>
        <Image className={s.card__img} src={Test} alt=""></Image>
        <div className={s.card__line}></div>
        <div className={s.card__info}>
            <h1>{product_data.name}</h1>
            <div className={s.card__info_location}>
                <Image src={Location} alt='location-icon'></Image>
                <p>{product_data.location}</p>
            </div>
            <h2>
              {
                product_data.run ? `${product_data.run} km.` : "No run."
              }
              </h2>
            <span>{product_data.price} $</span>
        </div>
    </div>
  )
}

export default card