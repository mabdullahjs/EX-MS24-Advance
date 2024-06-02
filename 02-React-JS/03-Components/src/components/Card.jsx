

function Card(props) {

    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={props.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{props.title}</h2>
                    <p>{props.description.slice(0 , 50)}...</p>
                    <p className="text-2xl">Rs:{props.price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card