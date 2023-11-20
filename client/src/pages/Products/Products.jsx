import './Products.scss'

import Proof1 from '../../../public/img/prueba1.png'
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

const Products = () => {

  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort,setSort] = useState(null)
  

  return (
    <div className='products'>
      <div className="left">
        <div className="filteritem">
          <h2> Product Category</h2>
          <div className="inputItem">
            <input type="checkbox" id='1' value={1} />
            <label htmlFor="1"> Shoes </label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='2' value={2} />
            <label htmlFor="2"> Kit </label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='3' value={3} />
            <label htmlFor="3"> DVR </label>
          </div>
        </div>
        <div className="filteritem">
          <h2> Filter by Price</h2>
          <div className="inputItem">
            <span> 0 </span>
            <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)} />
            <span> {maxPrice} </span>
          </div>
        </div>
        <div className="filteritem">
          <h2> Sort by </h2>
          <div className="inputITem">
            <input type="radio" id='asc' value='asc' name='price' onChange={e => setSort('asc')} />
            <label htmlFor="asc"> Price (Lowest fisrt) </label>
          </div>
          <div className="inputITem">
            <input type="radio" id='desc' value='desc' name='price' onChange={e => setSort('desc')} />
            <label htmlFor="desc"> Price (Highest fisrt) </label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className='catImg' src={Proof1} alt="" />
        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products