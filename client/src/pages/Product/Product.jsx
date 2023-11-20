import './Product.scss'

import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BalanceIcon from '@mui/icons-material/Balance';

import product1 from '../../../public/img/product1.png'
import product2 from '../../../public/img/product2.png'
import product3 from '../../../public/img/product3.png'
import { useState } from 'react'

const Product = () => {

  const[selectedImg, setSelectedImg] = useState(0)

  const[quantity, setQuantity] = useState(1)

  const images = [
    product1,
    product2,
    product3
  ]

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e => setSelectedImg(0)}/>
          <img src={images[1]} alt="" onClick={e => setSelectedImg(1)}/>
          <img src={images[2]} alt="" onClick={e => setSelectedImg(2)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1> Title </h1>
        <span className='price'> $300 </span>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis aperiam inventore minima deserunt iusto mollitia illo in similique consectetur quod porro vel expedita magnam non eius adipisci, harum esse soluta?</p>
        <div className="quantity">
          <button onClick={() => setQuantity( (prev) => prev === 1 ? 1 : prev - 1 )}> - </button>
          {quantity}
          <button onClick={() => setQuantity( (prev) => prev + 1) }> + </button>
        </div>

        <button className='add'>
          <AddShoppingCartOutlinedIcon/> Añadir al carro
        </button>

        <div className="links">
          <div className="item">
            <FavoriteBorderOutlinedIcon/> Añadir a favoritos
          </div>
          <div className="item">
            <BalanceIcon/> Comparar
          </div>
        </div>

        <div className="info">
          <span>Vendedor: Polo</span>
          <span>Product Type: Sticker</span>
        </div>

        <hr />
        
        <div className="info">
          <span>Descripcion</span>
          <hr />
          <span> informacion Adicional</span>
        </div>
 
      </div>
    </div>
  )
}

export default Product