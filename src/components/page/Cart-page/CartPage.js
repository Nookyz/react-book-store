import React from 'react'
import './CartPage.scss'
import Cart from '../../Cart/Cart'
import {connect} from 'react-redux'

const CartPage = (props) => {
  const {items, total} = props
  
  return (
    <div className='cart-container'>
      <h1>Сумма: {total}</h1>
      {items.length ? 
        items.map(item => (
          <Cart
          key={item.id}
          id={item.id}
          img={item.img} 
          title={item.title}
          author={item.author}
          desc={item.desc}
          price={item.price}
          totalPrice={item.totalPrice} 
          quantity={item.quantity}
          />
        ))
        
      :
      <h1>Корзина пустая</h1>
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  items: state.cart.items,
  total: state.cart.total
})

export default connect(mapStateToProps,null)(CartPage)
