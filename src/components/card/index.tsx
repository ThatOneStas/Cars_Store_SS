import React, { useMemo } from "react";
import s from "../card/card.module.scss";
// link
import Link from "next/link";
// images
import Image from "next/image";
import Location from "@/assets/img/Location.png";
import Test from "@/assets/img(products)/land-rover_range-rover-evoque__525771031f(1).png";
import Heart from "@/assets/img/heart_card.svg";
// redux
import { useSelector, useDispatch } from "react-redux";
import { changeFavoriteList } from "@/redux/features/favourite";
// product list
import Products_json from "@/modules/server/products/products.json";
import { CardItem } from "@/interfaces";

interface Props {
  product_data: CardItem;
}

const card = ({ product_data }: Props) => {
  const dispatch = useDispatch();
  const favList = useSelector((state: any) => state.favourite.fav_list);

  const isFav = useMemo(() => {
    if (favList.indexOf(product_data.id) >= 0) {
      return true;
    } else {
      return false;
    }
  }, [favList]);

  return (
    <div className={s.card}>
      <Image
        className={s.card__img}
        src={product_data.photos[0]}
        alt="product-photo"
        width={10}
        height={10}
        unoptimized
      ></Image>
      <div className={s.card__line}></div>
      <div className={s.card__info}>
        <h1>{product_data.name}</h1>
        <div className={s.card__info_location}>
          <Image src={Location} alt="location-icon"></Image>
          <p>{product_data.location}</p>
        </div>
        <h2>{product_data.run ? `${product_data.run} km.` : "No run."}</h2>
        <span>{product_data.price} $</span>
      </div>
      <div className={s.card__detail}>
        {/* <Link href={{ pathname: "/product/", query: { object: JSON.stringify(product_data) } }}>Detail</Link> */}
        <Link href={`/product/${product_data.id}`}>Detail</Link>
        <Image
          onClick={() => dispatch(changeFavoriteList(product_data.id))}
          src={Heart}
          alt="heart-icon"
          className={isFav ? "active" : ""}
        ></Image>
      </div>
    </div>
  );
};

export default card;
