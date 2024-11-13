import bottomSlider1 from "../assets/img/bottomSlider1.png";

const RealAssets = () => {
  return (
    <div className='container py-md-5'>
      <div className='row d-flex align-items-center'>
        <div className='col col-12 col-md-6'>
          <h2 className='fw-boldss'>
            Real assets, <br /> owned digitally!
          </h2>
          <p className='fw-light w-75'>
            Invest in high quality real estate assets with Alt. Buy, sell, trade
            as little as 1 SQFT at a time whenever you want to!
          </p>
          <div className='d-flex align-items-center gap-2'>
            <button className='btn btn-sm btn-dark fw-bold px-3 rounded-5 text-uppercase'>
              Invest Now
            </button>
            <button className='btn btn-sm btn-dark fw-bold px-3 rounded-5 text-uppercase'>
              Know More
            </button>
          </div>
        </div>
        <div className='col col-12 col-md-6'>
          <img src={bottomSlider1} width={450} alt='' />
        </div>
      </div>
    </div>
  );
};
export default RealAssets;
