import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface cartState {
    fav_list: any[];
}
  
const initialState: cartState = {
    fav_list: [],
};

// if(localStorage.getItem("favourite_list")===null){
//   fav_list = localStorage.getItem("favourite_list")
// }
// else {
  
// }
let test : any = Array([1,2,3,4,5])


export const favourite  = createSlice({
name: "cart",
  initialState,
  reducers: {
    locateItem: (state, ItemID) => {
        const id = ItemID.payload
        state.fav_list.map((list_id:number)=>{
          if(id==list_id){
            state.fav_list.splice(state.fav_list.indexOf(id),1)
          }
          else{
            state.fav_list.push(id)
          }
        })
        localStorage.setItem("Test",test)
        console.log(test)
    }
}});

// export reducer
export const { locateItem } = favourite.actions;
// export slice
export default favourite.reducer