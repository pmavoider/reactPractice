import {Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";

const CampsiteCard = () =>{
    return (
        <Card >
            <CardImg
                width ='100%'
                src={props.campsite.image}
                alt={props.campsite.image} />
            <CardImgOverlay>
            <CardTitle>{props.campsite.name}</CardTitle> </CardImgOverlay>
        </Card>
    )
}
export default CampsiteCard;