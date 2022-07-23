

import { Col } from "reactstrap"
import Partner from "./Partner"
import {SelectAllPartners} from "./PartnerSlice";
import {Link} from "react-router-dom"

const PartnerList = ({}) => {
    const partners = SelectAllPartners();

    return (
        <Col className="mt-4" >
            {partners.map((partner) => {
                return (
                    <div md="5" className="d-flex mb-5" key={partner.id} >
                        <Partner partner={partner} />
                    </div>
                )
            })}
        </Col>
    )
}
export default PartnerList; 