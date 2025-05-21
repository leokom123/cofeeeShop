import React, {useState} from 'react'
import {FaShoppingCart} from "react-icons/fa";
import Order from './Order.js'

const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  return (<div>
    {props.orders.map(el => (
     <Order onDelete={props.onDelete} key={el.id} item={el} />
                ))}
      <p className='summa'>Сheck sum:{summa}$</p>
  </div>)
}

const showNothing = () => {
  return (<div className='empty'>
    <h2> Товаров нет</h2>
  </div>)
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)

  return (
    
    <header>
      <div>
          <span className='logo'>Coffee Shop</span>
          <ul className='nav'>
              <li>About</li>
              <li>FAQ</li>
              <li>Contacts</li>
          </ul>
          <FaShoppingCart onClick={() => setCartOpen(!cartOpen)}className={`shop-cart-button ${cartOpen ? 'active' : ''}`}/>

          {cartOpen && (
            <div className='shop-cart'>
                {props.orders.length > 0 ?
                  showOrders(props) : showNothing()}
            </div>
          )}
      </div>
      <div className='presentation'></div>
    </header>
  )
}
