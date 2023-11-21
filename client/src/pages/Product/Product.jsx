import './Product.scss'

import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BalanceIcon from '@mui/icons-material/Balance';
import { useState } from 'react'
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';

const Product = () => {
  const id = useParams().id;
  const[selectedImg, setSelectedImg] = useState('img')
  const[quantity, setQuantity] = useState(1)

  const {data, loading, error } = useFetch(
    `/products/${id}?populate=*`
  )

  return (
    <div className='product'>
      { loading ? 'loading' : (
      <>
      <div className="left">
        <div className="images">

          <img 
            src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} 
            alt="" 
            onClick={e => setSelectedImg('img')}
          />

          <img 
            src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} 
            alt="" 
            onClick={e => setSelectedImg('img2')}
          />

        {data?.attributes?.img3?.data?.attributes?.url && (
          <img
            src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + data?.attributes?.img3?.data?.attributes?.url}
            alt=""
            onClick={e => setSelectedImg('img3')}
          />)
        }

        </div>
        <div className="mainImg">
          <img src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + data?.attributes[selectedImg]?.data?.attributes?.url} alt="" />
        </div>
      </div>

      <div className="right">
        <h1> {data?.attributes?.title} </h1>
        <span className='price'> ${data?.attributes?.price} </span>
        <p> {data?.attributes?.description} </p>
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
      </>
      )}
    </div>
  )
}

export default Product