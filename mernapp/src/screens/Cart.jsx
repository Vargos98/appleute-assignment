import React from 'react'

export default function Cart() {
  
    return (
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-8">
              <h2>Your Cart</h2>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://source.unsplash.com/random/600x400/?curry"
                      alt="Product"
                      className="img-fluid rounded-start"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Product Name</h5>
                      <p className="card-text">Price:</p>
                      <p className="card-text">Quantity: 2</p>
                      <button className="btn btn-danger">Remove</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Additional items can be added here */}
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Cart Summary</h5>
                  <p>Total Items: 2</p>
                  <p>Total Price: " "</p>
                  <button className="btn btn-primary">Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

}
