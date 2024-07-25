import React from 'react'
import { useContext, useState } from 'react'
import Mycontext from './Mycontext'

const Cards = ({ product, ind }) => {
  let { count, setcount } = useContext(Mycontext);
  let [outCart, setOutCart] = useState(true);
  return (
    <>
      <div className="card my-3 col-lg-3 col-md-3 col-sm-6 col-xl-3 position-realtive " style={{width:"20em"}}>
        <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..." />
        <div className="position-absolute  rounded-1 text-white m-2 top-0 end-0 col-2 bg-black">sale</div>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className='mb-0' > {product.rating ? (
            <>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
            </>
          )
            : ("")}</p>
          <p className="card-text mt-0 mb-5"><span style={{ textDecoration: "line-through" }}>{product.MRP}</span>{product.SalesPrice}</p>
          {
            outCart ? <button className=' w-100 bottom-0 start-0 position-absolute btn btn-primary' onClick={() => {
              setcount(count => count + 1);
              setOutCart(false);
            }}>Add to Cart</button> : <button className='bottom-0 start-0 position-absolute w-100 btn btn-danger' onClick={() => {
              setcount(count => count > 0 ? count - 1 : "");
              setOutCart(true)
            }}>Remove from Cart</button>
          }
        </div>
      </div>
    </>
  )
}

export default Cards