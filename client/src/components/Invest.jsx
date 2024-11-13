import React, { useState } from "react";
import Earn_icon from "../assets/svg/earnPeriodic.svg";
import Long_icon from "../assets/svg/longTerm.svg";

const Invest = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className='container py-md-5'>
      <div className='row mx-auto my-auto'>
        <div className='col col-12 col-lg-6 text-center text-lg-start'>
          <h1 className='text-blue fw-bolds'>
            Invest in Real Estate <br />
            <span className='text-orange'>1 SQFT at a time!</span>
          </h1>
          <p className='fw-lighter'>STARTING WITH ₹10,000 ONWARDS</p>
          <div className='d-flex my-5 flex-wrap justify-content-center justify-content-lg-start'>
            <div className='d-flex align-items-center gap-5'>
              <img src={Earn_icon} width={80} />
              <p className='fw-lighter'>
                Earn Periodic <br /> Income
              </p>
            </div>
            <div className='d-flex align-items-center gap-4'>
              <img src={Long_icon} width={140} />
              <p className='fw-lighter'>
                Long Term <br /> Capital Appreciation
              </p>
            </div>
          </div>
          <div className='d-flex gap-3 justify-content-center justify-content-lg-start'>
            <button className='btn text-white bg-orange text-uppercase rounded-5 btn-sm px-3 fw-bold'>
              sign up
            </button>
            <button className='btn text-white bg-blue text-uppercase btn-sm rounded-5 px-3 fw-bold'>
              know more
            </button>
          </div>
        </div>
        <div className='col col-12 col-lg-6 mt-5 mt-lg-0'>
          <div className='card bg-blue rounded-3'>
            <div className='card-body'>
              <h4 className='card-title text-center fw-bolds text-white my-3'>
                TradeX (Beta) <br /> Buy Now
              </h4>
              <div className='dropdown'>
                <a
                  className='btn btn-secondary dropdown-toggle btn-sm w-100 text-start border-white bg-orange fw-bold overflow-hidden'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Bangalore Prime Land Investment Opportunity
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Action
                    </a>
                  </li>
                </ul>
              </div>
              <div className='d-flex justify-content-between mt-4 mx-3'>
                <p className='text-white fw-bold'>Quantity</p>
                <div>
                  <span
                    className='bg-orange text-white p-2 rounded-2'
                    onClick={decrementQuantity}
                    style={{ cursor: "pointer", userSelect: "none" }}
                  >
                    -
                  </span>
                  <span className='text-white p-2'>{quantity}</span>
                  <span
                    className='bg-orange text-white p-2 rounded-2'
                    onClick={incrementQuantity}
                    style={{ cursor: "pointer", userSelect: "none" }}
                  >
                    +
                  </span>
                </div>
              </div>
              <div className='d-flex justify-content-between'>
                <span className='d-flex align-items-center gap-2 mx-3'>
                  <input type='radio' name='' id='' />
                  <p className='text-white pt-3'>Daily Market Price</p>
                </span>
                <p className='pt-3 text-white'>
                  $ 7736.37 <sub className='fw-lighter'>/Alt.sqft</sub>
                </p>
              </div>
              <div className='d-flex justify-content-between'>
                <span className='d-flex align-items-center gap-2 mx-3'>
                  <input type='radio' name='' id='' />
                  <p className='text-white pt-3'>Limit Price</p>
                </span>
                <div className='pt-3 bg-light px-3 rounded-3 btn btn-sm'>
                  $ 7736.37 <sub className='fw-lighter'>/Alt.sqft</sub>
                </div>
              </div>
              <div className='dropdown'>
                <button
                  className='btn text-white dropdown-toggle border-orange w-100 mt-4 text-start d-flex align-items-center justify-content-between p-4 overflow-hidden'
                  type='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  <span>
                    <span className='fw-bolds'>Purchase Consideration</span>
                    (Incl.Fees & <br /> Other Levies)
                  </span>
                  <span>$8091.99</span>
                </button>
                <ul className='dropdown-menu'>
                  <li>
                    <a className='dropdown-item active' href='#'>
                      Action
                    </a>
                  </li>
                </ul>
              </div>
              <div className='text-white mx-3 mt-4'>
                <p className='fw-bolds'>Virtual Bank Wallet Balance: ₹ 0</p>
                <p className='fw-light'>
                  Since the DMP differs on a daily basis, a Volatility margin of
                  3% is included in your trade value. Refund shall be processed
                  after your order's settlement.
                </p>
              </div>
              <div className='d-flex justify-content-center'>
                <button className='bg-orange text-white rounded-5 px-3 text-uppercase border-0 btn btn-sm fw-bold my-3'>
                  buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Invest;
