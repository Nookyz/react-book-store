import React from 'react'
import './Card.scss'
import {connect} from 'react-redux'
import {addToCart} from '../../store/actions/cart'


const Card = (props) => {
  const {id, title, author, desc, price, img} = props
  const {addToCart} = props

  const obj = {id, title, author, desc, price, img}

  const addToCartHandler = () => addToCart(obj, id)

  return (
    <div className='card'>

      <div className='card-img' >
        <img src={img} alt='img' />
      </div>

      <div className='card-desc'>
        <p className='card-desc__title'>{title}</p>
        <p className='card-desc__author'>Автор: {author}</p>
        <p className='card-desc__desc'>{desc}</p>
        <p className='card-desc__price'>Price: {price}</p>
      </div>

      <div className='card-footer'>
        <button onClick={() => addToCartHandler()}>Buy</button>
      </div>
      
      
    </div>
  )
}

const mapDispatchToProps= (dispatch) => ({
  addToCart: (obj, id) => dispatch(addToCart(obj, id))
})

export default connect(null,mapDispatchToProps)(Card)
