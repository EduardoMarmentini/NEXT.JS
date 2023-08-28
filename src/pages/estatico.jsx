export function getStaticProps(){
    return {
        props : {
            number : Math.random()
        }
    }
}


export default function estatico(props){
    return (
        <div>
            <span>Aleatorio: {props.number}</span>
        </div>
    )
}

