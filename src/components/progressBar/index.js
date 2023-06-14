import { useEffect, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { Div } from './style';


export default function BarraProgresso(props) {

    const [progressPorcent, setProgressPorcent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgressPorcent((prevState) => (prevState + 10))
        }, props.delay);

        return () => clearInterval(interval)
    }, [])


    return (
        <>
            <Div>
                <ProgressBar animated now={progressPorcent} className={props.className}></ProgressBar>
            </Div>
        </>
    )
}

