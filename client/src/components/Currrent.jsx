import banner1 from "../assets/img/BPLIO Banner Image.png";
import banner2 from "../assets/img/KHHIO Banner Image.png";
import banner3 from "../assets/img/MUMSUBHI Banner Image.png";

const Currrent = () => {
  return (
    <div className='container py-md-5'>
      <h2 className='fw-bold text-center my-md-5'>
        Current Inverstment Opportunity
      </h2>
      <div class='card border border-black my-5'>
        <div class='card-body'>
          <div
            id='carouselExampleAutoplaying'
            class='carousel slide'
            data-bs-ride='carousel'
          >
            <div class='carousel-indicators'>
              <button
                type='button'
                data-bs-target='#carouselExampleAutoplaying'
                data-bs-slide-to='0'
                class='active bg-black'
                aria-current='true'
                aria-label='Slide 1'
              ></button>
              <button
                type='button'
                data-bs-target='#carouselExampleAutoplaying'
                data-bs-slide-to='1'
                aria-label='Slide 2'
                className='bg-black'
              ></button>
              <button
                type='button'
                data-bs-target='#carouselExampleAutoplaying'
                data-bs-slide-to='2'
                aria-label='Slide 3'
                className='bg-black'
              ></button>
            </div>
            <div class='carousel-inner p-md-5'>
              <div class='carousel-item active'>
                <h4 className='fw-boldss text-center'>
                  Bangalore Prime Land Investment Opportunity
                </h4>
                <img src={banner1} class='d-block w-100' alt='...' />
                <div className='d-flex justify-content-center mt-3'>
                  <button className='btn btn-sm btn-dark text-uppercase rounded-5 px-3 fw-bold'>
                    Invest Now
                  </button>
                </div>
              </div>
              <div class='carousel-item'>
                <h4 className='fw-boldss text-center'>
                  Kerala Holiday Homes Investment Opportunity
                </h4>
                <img src={banner2} class='d-block w-100' alt='...' />
                <div className='d-flex justify-content-center mt-3'>
                  <button className='btn btn-sm btn-dark text-uppercase rounded-5 px-3 fw-bold'>
                    Invest Now
                  </button>
                </div>
              </div>
              <div class='carousel-item'>
                <h4 className='fw-boldss text-center'>
                  Mumbai Suburban Housing Investment Opportunity
                </h4>
                <img src={banner3} class='d-block w-100' alt='...' />
                <div className='d-flex justify-content-center mt-3'>
                  <button className='btn btn-sm btn-dark text-uppercase rounded-5 px-3 fw-bold'>
                    Invest Now
                  </button>
                </div>
              </div>
            </div>
            <button
              class='carousel-control-prev'
              type='button'
              data-bs-target='#carouselExampleAutoplaying'
              data-bs-slide='prev'
            >
              <span
                class='carousel-control-prev-icon'
                aria-hidden='true'
              ></span>
              <span class='visually-hidden'>Previous</span>
            </button>
            <button
              class='carousel-control-next'
              type='button'
              data-bs-target='#carouselExampleAutoplaying'
              data-bs-slide='next'
            >
              <span
                class='carousel-control-next-icon'
                aria-hidden='true'
              ></span>
              <span class='visually-hidden'>Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Currrent;
