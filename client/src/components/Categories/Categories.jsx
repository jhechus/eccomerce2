import './Categories.scss'
import { Link } from 'react-router-dom'

import category1 from '../../../public/img/category1.png'
import category2 from '../../../public/img/category2.png'
import category3 from '../../../public/img/category3.png'
import category4 from '../../../public/img/category4.png'
import category5 from '../../../public/img/category5.png'
import category6 from '../../../public/img/category6.png'

const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src={category1} alt="" />
                <button>
                    <Link className='link' to='/products/1'> Venta </Link>
                </button>
            </div>
            <div className="row">
            <img src={category2} alt="" />
                <button>
                    <Link className='link' to='/products/1'> Mujes </Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
            <img src={category3} alt="" />
                <button>
                    <Link className='link' to='/products/1'> Accesorios </Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src={category4} alt="" />
                <button>
                    <Link className='link' to='/products/1'> Kit </Link>
                </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src={category5} alt="" />
                <button>
                    <Link className='link' to='/products/1'> Camaras </Link>
                </button>
                    </div>
                </div>
            </div>
            <div className="row">
            <img src={category6} alt="" />
                <button>
                    <Link className='link' to='/products/1'> Computo </Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Categories