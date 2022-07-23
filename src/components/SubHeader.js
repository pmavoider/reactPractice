import {Col, Row, Bradcrumb, BreadcrumbItem, Breadcrumb} from "reactstrap"
import {Link} from "react-router-dom"

const SubHeader = ({current, detail}) => {
    return(
        <Row>
            <Col>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/">Home</Link>
                    </BreadcrumbItem>
                    {detail &&(
                    <BreadcrumbItem>
                        <Link to="/directory">Directory</Link>
                    </BreadcrumbItem>
                    )}
                    <BreadcrumbItem active>{current}</BreadcrumbItem>
                </Breadcrumb>
                <h2>{current}</h2>
            </Col>
        </Row>
    )
}
export default SubHeader;