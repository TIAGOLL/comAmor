import { Button, Card } from 'react-bootstrap'


function CardsNoticias(props) {
    return (
        <Card style={{ border: 'none', boxShadow: '1px 1px 10px #3e3f3f' }}>
            <Card.Img src={props.img} width={'220px'} height={'170px'} />
            <Card.Body style={{ padding: '10px' }}>
                <Card.Title className='text-light' style={{ webkitboxorient: 'vertical', webkitlineclamp: '2', overflow: 'hidden;', textOverflow: 'ellipsis', fontSize: '15px'}}>
                    {props.tittle}
                </Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
                <Button variant="success" style={{ padding: '5px', fontWeight: '500' }}>
                    {props.btnText}
                </Button>
            </Card.Body>
        </Card>
    )
}

export default CardsNoticias;