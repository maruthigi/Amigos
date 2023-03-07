import { Cart } from "./cart"
import { data } from "./data"
export const Catagory=()=>{
   
    return(
        <>
<div className="row">
{
    data.map((item)=>
    <div className="col-md-4">
        <div className="card" style={{width:"14rcm"}}>
            <img className="card-img-top" src={item.img} alt="card img loading"></img>
            <div>
                <center>
                    <h3 className="card-title">{item.name}</h3>
                    <p className="card-text">{item.price}</p>
                   <button className="btn-btn-primary">Addcart</button>
                </center>
                </div>
            </div>
    </div>
    )
}

</div>

        </>
    )
}