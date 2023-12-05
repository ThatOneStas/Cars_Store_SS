import React from 'react'
import s from "../card_mini/card_mini.module.scss"
// link
import Link from 'next/link'
// images
import Image from 'next/image'
import Location from "@/assets/img/Location.png"
import Test from "@/assets/img(products)/land-rover_range-rover-evoque__525771031f(1).png"
import Heart from "@/assets/img/heart_card.svg"
// product list
import Products_json from "@/modules/server/products/products.json"

interface Props {
  product_data:{
    name:string,
    photos:[{
      main:string,
      second:string,
      third:string
    }],
    location:string,
    mark:string,
    price:number,
    run:number,
    id:number
  }
}

const card = ({product_data} : Props) => {
  return (
    <div className={s.card}>
        <Image className={s.card__img} src={Test} alt="product-photo"></Image>
        <div className={s.card__info}>
            <h1>{product_data.name}</h1>
            <span>{product_data.price} $</span>
        </div>
        <div className={s.card__detail}>
          <Link href={`/product/${product_data}`}>Detail</Link>
        </div>
    </div>
  )
}

export default card