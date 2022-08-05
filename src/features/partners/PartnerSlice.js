import {PARTNERS} from "../../app/shared/PARTNERS"
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    partnersArray: PARTNERS
};

const partnersSlice = createSlice({
    name:"partner" , 
    initialState
});

export const partnerReducer = partnersSlice.reducer;

export const SelectAllPartners = (state) =>{
    return state.partners.partnersArray;
}

export const selectFeaturedPartner = (state) => {
    return state.partners.partnersArray.find((partner) => partner.featured)
}