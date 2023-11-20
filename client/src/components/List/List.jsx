import './List.scss'
import Card from '../Card/Card'

import featured1 from '../../../public/img/Featured1.png'
import featured2 from '../../../public/img/Featured2.png'
import featured3 from '../../../public/img/Featured3.png'
import featured4 from '../../../public/img/Featured4.png'
import featured1_5 from '../../../public/img/featured1_5.png'
import featured2_5 from '../../../public/img/featured2_5.png'


const List = () => {

    const data = [
        {
            id:1,
            img: featured1,
            img2: featured1_5,
            title: 'titulo 1',
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id:2,
            img: featured2,
            img2: featured2_5,
            title: 'titulo 2',
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id:3,
            img: featured3,
            title: 'titulo 3',
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id:4,
            img: featured4,
            title: 'titulo 4',
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
    ]

  return (
    <div className='list'>
        {data?.map(item => (
            <Card item={item} key={item.id} />
        ))}
    </div>
  )
}

export default List