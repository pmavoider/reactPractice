

import { Col, Row } from "reactstrap"
import Partner from "./Partner"
import {SelectAllPartners} from "./PartnerSlice";
import { useSelector } from "react-redux";


const PartnerList = () => {
    const partners = useSelector(
        SelectAllPartners);

    return (
        <Col className="mt-4" >
            <Row>
                {partners.map((partner) => {
                    return (
                        <div md="5" className="d-flex mb-5" key={partner.id} >
                            <Partner partner={partner} />
                        </div>
                    )
                })}
            </Row>
        </Col>
    )
}
export default PartnerList; 