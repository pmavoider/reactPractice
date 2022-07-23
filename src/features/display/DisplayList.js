import {Col, Row} from "reactstrap"
import DisplayCard from "./DisplayCard"
import { selectFeaturedCampsite } from "../campsites/CampsitesSlice"
import { selectFeaturedPromotion } from "../promotions/PromotionsSlice"
import {selectFeaturedPartner} from "../partners/PartnerSlice"


const DisplayList = () => {
    const items = [selectFeaturedCampsite(), selectFeaturedPromotion(), selectFeaturedPartner()]

    return(
        <Row>
            {items.map((item, idx) => {
                return(
                    <Col md className="m-1" key={idx}>
                        <DisplayCard item={item} />
                    </Col>

                )
            })}
        </Row>
    )
}
export default DisplayList;