import React, { useState } from 'react';
import './addCart.css'
import Frames from './frame';
import { Link } from "react-router-dom";

function AddCart() {
    const [value, setValue] = useState(0);
    const limit = 0;
    const freeShippingThreshold = 300;
  
    

   
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  

  const handleInputChange = (event) => {
    const newValue = parseInt(event.target.value);
    setLoading(true);
    setValue(newValue);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const handleAddCartClick = () => {
    setShowModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000); // Simulate some delay for the loader
  };


  return (
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content modal-move-ac">
      <div class="modal-header">
        <h6 class="modal-title" id="exampleModalLabel">Shopping cart</h6>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      
      <div class="frame-container">
      <iframe class="responsive-iframe" src="">
        
      </iframe>
    </div>


      <div class="modal-body">
      {loading ? (
                  <div className="loader"></div>
                ) : (
                  <p></p>
                )}
      <div style={{ padding: '20px' }} >
      <input
      className="range-input"
        type="range"
        min={limit}
        max={300} // Adjust max as needed
        value={value}
        onChange={handleInputChange}
      />
      {value >= freeShippingThreshold && <p>Congratulations! Dropshipping is free.</p>}
    </div>
    <div className='icons-div-addcart'>
      <div className='icons-inner-div-ac'>
      <img src='https://tse1.mm.bing.net/th?id=OIP.AjfjSayzcp_zt2mWUdjKRgHaHa&pid=Api&rs=1&c=1&qlt=95&w=121&h=121'  className='same-icons-addcart' />
      </div>
      <div className='icons-inner-div-ac'>
      <img src='https://tse1.mm.bing.net/th?id=OIP.zYQanFc-XnreAsooTXxYbAHaHy&pid=Api&P=0&h=180' className='same-icons-addcart' />
      </div>
      <div className='icons-inner-div-ac'>
      <img src='https://tse2.mm.bing.net/th?id=OIP.hu-GUg_Q67kR_HwM66DBJgHaHa&pid=Api&P=0&h=180' className='same-icons-addcart' />
      </div>
      <div className='icons-inner-div-ac'>
      <img src='https://tse1.mm.bing.net/th?id=OIP.VGwrMhj-fRjUh5Bw6rEDVAHaHa&pid=Api&rs=1&c=1&qlt=95&w=103&h=103' className='same-icons-addcart'  />
      </div>
    </div>
      </div>
      <p><span className='subtatoal-ac'>Subtotal:</span><span className='span-value-ac'> ${value}</span></p>
      <div className="btn-addCart-div">
      <Link to="/view-cart" className="link-tag">
        <button type="button" class="btn btn-light btn-view-ac" >View Cart</button>
        </Link><br/>
        <button type="button" class="btn btn-dark btn-addcart-ac">Add Cart</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default AddCart;