import { useEffect } from "react"

const Card = ({color , title , description , textColor}) => {
    // useEffect(()=>{
    //     console.log('card component mounted')
    // } , [])
    return (
        <>
            <div style={{
                border: '2px solid black',
                padding: '2rem',
                margin: '2rem',
                backgroundColor: color,
                color: textColor ? textColor : 'black'
            }}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </>
    )
}

export default Card