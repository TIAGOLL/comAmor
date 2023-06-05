import { Div } from './style'

function ContainerCard(props) {
    return (
        <Div>
            {props.children}
        </Div>
    )
}

export default ContainerCard;