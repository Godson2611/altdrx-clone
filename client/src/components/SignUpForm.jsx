const SignUpForm = () => {
  return (
    <div className='container py-md-5'>
      <div className='row'>
        <div className='col col-md-6 col-12'>
          <form className='bg-blue mx-5'>
            <h1 className='text-orange text-uppercase fw-semibold text-center p-5'>
              Sign up
            </h1>
            <div className='px-5 pb-5 d-flex flex-column gap-3'>
              <input
                class='form-control border-0 rounded-0 p-3'
                type='text'
                placeholder='First Name'
              ></input>
              <input
                class='form-control border-0 rounded-0 p-3'
                type='text'
                placeholder='Last Name'
              ></input>
              <input
                class='form-control border-0 rounded-0 p-3'
                type='number'
                placeholder='Mobile Number'
              ></input>
              <input
                class='form-control border-0 rounded-0 p-3'
                type='email'
                placeholder='Email Id'
              ></input>
              <select
                class='form-select border-0 rounded-0 p-3'
                aria-label='Default select example'
              >
                <option selected>Residential Status</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select>
              <div className='d-flex'>
                <input type='checkbox' name='agree' id='agree' />
                <p className='pt-3 ps-2 text-white'>
                  I Agree to{" "}
                  <a href='#' className='text-white'>
                    Terms and Conditions
                  </a>
                </p>
              </div>
              <div className='d-flex justify-content-center'>
                <button className='text-white border-0 btn rounded-5 px-3 text-uppercase fw-bold bg-dark-blue'>
                  Verify
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className='col col-md-6 col-12 mx-auto text-center text-md-start mb-5'>
          <h1 className='text-orange fw-boldss display-3'>
            Start <br /> Investing in ALT.SQFT
          </h1>
          <h1 className='text-blue py-3'>
            Tradeable Digital Assets <br /> powered by Real Estate
          </h1>
          <div className='d-flex justify-content-center justify-content-md-start'>
            <button className='btn btn-sm bg-blue text-white fw-bold px-3 rounded-5 text-uppercase'>
              Invest Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUpForm;
