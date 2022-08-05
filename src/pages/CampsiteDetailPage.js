import {Row, Container} from "reactstrap"
import {useParams} from "react-router-dom"
import { selectCampsiteById } from "../features/campsites/CampsitesSlice"
import CampsiteDetail from "../features/campsites/CampsiteDetail"
import CommentsList from "../features/comments/CommentsList";
import Subheader from "../components/SubHeader";
import SubHeader from "../components/SubHeader";
import {useSelector} from "react-redux"

const CampsiteDetailPage = () =>{
    const {campsiteId} = useParams();
    const campsite = useSelector(selectCampsiteById(campsiteId))
    console.log("campsite" , campsite)
    return(
        <Container >
            <SubHeader current={campsite.name} detail={true} />
            <Row>
                <CampsiteDetail campsite={campsite} />
                <CommentsList campsiteId = {campsiteId} />
            </Row>
        </Container>

    )
}
export default CampsiteDetailPage;