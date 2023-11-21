import './FeaturedProducts.scss'
import useFetch from '../../hooks/useFetch';
import Card from '../Card/Card'


const FeaturedProducts = ({type}) => {

    const {data, loading, error} = useFetch(
        `/products?populate=*&[filters][type][$eq]=${type}`
        );


  return (
    <div className='FeaturedProducts'>
        <div className="top">
            <h1> {type} products </h1>
            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta omnis nulla, dolor aliquid possimus officiis, cupiditate adipisci sint nobis ratione vel! Asperiores ad delectus cumque omnis nemo provident veniam. Cum!</p>
        </div>
        <div className="bottom">
            {error ? 'algo salio mal' : (loading ? 'loading' :
            data?.map(item=>(
                <Card item={item} key={item.id} />
            )))}
        </div>
    </div>
  )
}

export default FeaturedProducts