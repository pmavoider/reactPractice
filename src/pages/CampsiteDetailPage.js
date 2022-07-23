import {Row, Container} from "reactstrap"
import {useParams} from "react-router-dom"
import { selectCampsiteById } from "../features/campsites/CampsitesSlice"
import CampsiteDetail from "../features/campsites/CampsiteDetail"
import CommentsList from "../features/comments/CommentsList";

const CampsiteDetailPage = () =>{
    const {campsiteId} = useParams();
    const campsite = selectCampsiteById(campsiteId)
    return(
        <Container >
            <Row>
                <CampsiteDetail campsite={campsite} />
                <CommentsList campsiteId = {campsiteId} />
            </Row>
        </Container>

    )
}
export default CampsiteDetailPage;