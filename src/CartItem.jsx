import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let totalCost = cart.quantity * cart.cost;
   
  };

  const handleContinueShopping = (e) => {
    setShowCart(false);
  };

  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity(item.quantity));
    if(item.quantity > 0){
        item.quantity++;
    }
  };

  const handleDecrement = (item) => {
   dispatch(updateQuantity(item.quantity));
   if(item.quantity > 0){
    item.quantity--;
   }else if(item.quantity == 0){
    dispatch(removeItem(item))
   }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  const handleIncrementCart = (index) => {
    dispatch(handleIncrement(index));
  };

  const handleDecrementCart = (index) => {
    dispatch(handleDecrement(index));
  };

  const handleRemoveCartItem = index => {
    dispatch(handleRemove(index));
  };

  const getItems = () => {
    const items = [];
    Items.forEach((item) => {
        if(item.quantity > 0){
            items.push({...item, type: "Air Purifying Plants"});
        }else if (item.quantity > 0 && !items.some((i) => i.name === item.name && i.type === "Aromatic Fragrant Plants")){
            items.push({...item, type: "Aromatic Fragrant Plants"})
        }else if (item.quantity > 0 && !items.some((i) => i.name === item.name && i.type === "Insect Repellent Plants")){
            items.push({...item, type: "Insect Repellent Plants"})
        }else if (item.quantity > 0 && !items.some((i) => i.name === item.name && i.type === "Medicinal Plants")){
            items.push({...item, type: "Medicinal Plants"})
        }else if (item.quantity > 0 && !items.some((i) => i.name === item.name && i.type === "Low Maintenance Plants")){
            items.push({...item, type: "Low Maintenance Plants"})
        }
    });
    return items;
  }

  const item = getItems(item.quantity);

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    let totalCost = 0;
    if(item.category === "Air Purifying Plants"){
        items.forEach((item) => {
            totalCost += item.cost * item.quantity;
        })
    }
    else if(item.category === "Aromatic Fragrant Plants"){
        items.forEach((item) => {
            totalCost += item.cost * item.quantity;
        })
    }
    else if(item.category === "Insect Repellent Plants"){
        items.forEach((item) => {
            totalCost += item.cost * item.quantity;
        })
    }
    else if(item.category === "Medicinal Plants"){
        items.forEach((item) => {
            totalCost += item.cost * item.quantity;
        })
    }
    else if(item.category === "Low Maintenance Plants"){
        items.forEach((item) => {
            totalCost += item.cost * item.quantity;
        })
    }
    return totalCost;
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1">Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


