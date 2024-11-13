import bottomSlider2 from "../assets/img/bottomSlider2.png";

const SignUp = () => {
  return (
    <div className='container py-md-5'>
      <div className='row d-flex align-items-center'>
        <div className='col col-12 col-md-6'>
          <h2 className='fw-boldss my-3 w-75'>
            <span className='text-orange'>Sign-up</span>
            and be part of a regular stream of Digital Real Estate Investment
            Opportunities
          </h2>
          <div className='d-flex align-items-center gap-2'>
            <button className='btn btn-sm btn-dark fw-bold px-3 rounded-5 text-uppercase'>
              Sign up
            </button>
            <button className='btn btn-sm btn-dark fw-bold px-3 rounded-5 text-uppercase'>
              Invest now
            </button>
          </div>
        </div>
        <div className='col col-12 col-md-6'>
          <img src={bottomSlider2} width={450} alt='' />
        </div>
      </div>
    </div>
  );
};
export default SignUp;
