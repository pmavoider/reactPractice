import {Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";

const CampsiteCard = () =>{
    const {id, image, name} = campsite
    return (
        <Card >
            <CardImg
                width ='100%'
                src={campsite.image}
                alt={campsite.image} />
            <CardImgOverlay>
            <CardTitle>{props.campsite.name}</CardTitle> </CardImgOverlay>
        </Card>
    )
}
export default CampsiteCard;