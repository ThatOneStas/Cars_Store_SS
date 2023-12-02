import React from 'react'
import s from "../filter/filter.module.scss"
// link
import Link from 'next/link'
// images
import Image from 'next/image'
import Swap from "@/assets/img/Swap.svg"

const filter = () => {
  return (
    <div className={s.filter}>
        <div className={s.filter__box}>
            <div className={s.filter__box_toggle}>
                <input type="radio" name="radio"/>
                <label>Pick - Up</label>
            </div>
            <div className={s.filter__box_row}>
                <div className={s.filter__box_row_select}>
                    <h2>Locations</h2>
                    <select name="" id="">
                        <option value="0" disabled selected>Select your city</option>
                        <option value="1">test</option>
                        <option value="2">test</option>
                        <option value="3">test</option>
                    </select>
                </div>
                <div className={s.filter__box_row_line}></div>
                <div className={s.filter__box_row_select}>
                    <h2>Date</h2>
                    <select name="" id="">
                        <option value="0" disabled selected>Select your Date</option>
                        <option value="1">test</option>
                        <option value="2">test</option>
                        <option value="3">test</option>
                    </select>
                </div>
                <div className={s.filter__box_row_line}></div>
                <div className={s.filter__box_row_select}>
                    <h2>Time</h2>
                    <select name="" id="">
                        <option value="0" disabled selected>Select your Time</option>
                        <option value="1">test</option>
                        <option value="2">test</option>
                        <option value="3">test</option>
                    </select>
                </div>
            </div>
        </div>
        <button className={s.filter__btn}><Image src={Swap} alt='swap-icon'></Image></button>
        <div className={s.filter__box}>
            <div className={s.filter__box_toggle}>
                <input type="radio" name="radio"/>
                <label>Drop - Off</label>
            </div>
            <div className={s.filter__box_row}>
                <div className={s.filter__box_row_select}>
                    <h2>Locations</h2>
                    <select name="" id="">
                        <option value="0" disabled selected>Select your city</option>
                        <option value="1">test</option>
                        <option value="2">test</option>
                        <option value="3">test</option>
                    </select>
                </div>
                <div className={s.filter__box_row_line}></div>
                <div className={s.filter__box_row_select}>
                    <h2>Date</h2>
                    <select name="" id="">
                        <option value="0" disabled selected>Select your Date</option>
                        <option value="1">test</option>
                        <option value="2">test</option>
                        <option value="3">test</option>
                    </select>
                </div>
                <div className={s.filter__box_row_line}></div>
                <div className={s.filter__box_row_select}>
                    <h2>Time</h2>
                    <select name="" id="">
                        <option value="0" disabled selected>Select your Time</option>
                        <option value="1">test</option>
                        <option value="2">test</option>
                        <option value="3">test</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default filter