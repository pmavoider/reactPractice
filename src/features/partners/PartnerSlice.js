import {PARTNERS} from "../../app/shared/PARTNERS"

export const SelectAllPartners = () =>{
    return PARTNERS;
}

export const selectFeaturedPartner = () => {
    return PARTNERS.find((partner) => partner.featured)
}