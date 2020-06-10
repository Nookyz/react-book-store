import React from 'react'
import {connect} from 'react-redux'
import {addToCart, deleteById, deleteFromCard} from '../../store/actions/cart'
import './Cart.scss'

const Cart = (props) => {
  const {id, img, title, author, desc, price, totalPrice, quantity} = props
  const {addToCart, deleteById, deletedFromCard} = props
  const obj = {id, title, author, desc, price, img, totalPrice, quantity}

  const addHandler = () => addToCart(obj, id)
  const deleteCardHandler = () => {
    quantity === 1 ? deleteAllHandler() : deletedFromCard(id)
  }
  const deleteAllHandler = () => deleteById(id)

  return (
    
    <div key={id} className='cart'>

      <div className='cart-img'>
        <img src={img} alt='img' />
      </div>

      <div className='cart-desc'>
        <p className='cart-desc__title'>{title}</p>
        <p className='cart-desc__author'>{author}</p>
        <p className='cart-desc__desc'>{desc}</p>
      </div>

      <div className='cart-toggle'>
        
        <div className='cart-toggle__delete-all' onClick={() => deleteAllHandler()}>
          <span className="material-icons">
            clear
          </span>
        </div>

        <div className='cart-toggle__price'>
          <p>Price: {price}</p>
          <p>Total price: {totalPrice}</p>
        </div>
        
        <div className='cart-toggle__buttons-wrap'>

          <button 
          className='cart-toggle__buttons'
          onClick={() => deleteCardHandler()}
          >
            <span className="material-icons">
              remove
            </span>
          </button>

          <p className='cart-toggle__quantity'>{quantity}</p>

          <button className='cart-toggle__buttons' onClick={() => addHandler()}>
            <span className="material-icons">
              add
            </span>
          </button>

        </div>
      </div>
    </div>
        
  )
}

const mapDispatchToProps= (dispatch) => ({
  addToCart: (obj, id) => dispatch(addToCart(obj, id)),
  deleteById: id => dispatch(deleteById(id)),
  deletedFromCard: id => dispatch(deleteFromCard(id))
})

export default connect(null,mapDispatchToProps)(Cart)
