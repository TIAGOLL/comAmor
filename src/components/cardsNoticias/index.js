import { Button, Card } from 'react-bootstrap'
import ContainerCard from '../containerCard';


function CardsNoticias(props) {
    return (
        <Card>
            <Card.Img src={props.img} width={'220px'} height={'170px'} />
            <Card.Body style={{ padding: '10px' }}>
                <Card.Title style={{ color: 'white', webkitboxorient: 'vertical', webkitlineclamp: '2', overflow: 'hidden;', textOverflow: 'ellipsis;' }}>
                    {props.tittle}
                </Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
                <Button variant="primary" style={{ padding: '5px', fontWeight: '500' }}>
                    {props.btnText}
                </Button>
            </Card.Body>
        </Card>
    )
}

export default CardsNoticias;