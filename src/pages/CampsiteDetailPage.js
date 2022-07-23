import {Row, Container} from "reactstrap"
import {useParams} from "react-router-dom"
import { selectCampsiteById } from "../features/campsites/CampsitesSlice"
import CampsiteDetail from "../features/campsites/CampsiteDetail"

const CampsiteDetailPage = () =>{
    const {campsiteId} = useParams();
    const campsite = selectCampsiteById(campsiteId)
    return(
        <Container >
            <Row>
                <CampsiteDetail campsite={campsite} />
            </Row>
        </Container>

    )
}
export default CampsiteDetailPage;