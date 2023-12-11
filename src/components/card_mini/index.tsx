import React from 'react'
import s from "../card_mini/card_mini.module.scss"
// link
import Link from 'next/link'
// images
import Image from 'next/image'
// product list
import Products_json from "@/modules/server/products/products_all.json"
// interface
import { CardItem } from "@/interfaces";


interface Props {
  product_data: CardItem;
}

const card = ({product_data} : Props) => {
  return (
    <div className={s.card}>
      <Link href={`/product/${product_data.id}`}><Image
        className={s.card__img}
        src={product_data.photos[0]}
        alt="product-photo"
        width={10}
        height={10}
        unoptimized
      ></Image></Link>
      <div className={s.card__info}>
            <h1>{product_data.name}</h1>
            <span>{product_data.price} $</span>
        </div>
        <div className={s.card__detail}>
          <Link href={`/product/${product_data.id}`}>Detail</Link>
        </div>
    </div>
  )
}

export default card