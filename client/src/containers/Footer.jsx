import footer_log from "../assets/svg/footerlogo.svg";
import facebook_icon from "../assets/svg/facebook1.svg";
import instagram_icon from "../assets/svg/instagram1.svg";
import linkedin_icon from "../assets/svg/linkedin1.svg";
import Xlogo_icon from "../assets/svg/Xlogo.svg";
import rightArrow_icon from "../assets/svg/rightarrow.svg";

const Footer = () => {
  return (
    <div className='bg-blue'>
      <div className='row container mx-auto py-5'>
        <div className='col col-12 col-md-6 col-lg-4 text-center text-md-start'>
          <img src={footer_log} alt='footer_logo' width={150} />
          <p className='text-white pt-2 fw-lighter'>
            #778/A, Chinnaswamy Chambers,
            <br /> 12th Cross, Double Road, Indiranagar 2nd Stage, Bengaluru
            560038, Karnataka, India.
          </p>
          <div>
            <p className='text-white fw-lighter'>
              +91 99864 34404 <br />
              reachus@altdrx.com
            </p>
            <span className='d-flex gap-3 justify-content-center justify-content-md-start'>
              <img src={facebook_icon} alt='facebook' />
              <img src={instagram_icon} alt='instagram' />
              <img src={linkedin_icon} alt='linkedin' />
              <img src={Xlogo_icon} alt='Xlogo' />
            </span>
          </div>
        </div>
        <div className='col col col-12 col-md-6 col-lg-4 text-center text-md-start mt-5 mt-md-0'>
          <ul class='list-group list-unstyled gap-3'>
            <li class='list-item text-white'>Home</li>
            <li class='list-item text-white'>Opportunities</li>
            <li class='list-item text-white'>Terms & Conditions</li>
            <li class='list-item text-white'>FAQs</li>
            <li class='list-item text-white'>Privacy Policy</li>
            <li class='list-item text-white'>Contact Us</li>
            <li class='list-item text-white'>BLogs</li>
          </ul>
        </div>
        <div className='col col col-12 col-md-6 col-lg-4'>
          <form className='mt-5 mt-md-0'>
            <ul class='list-group'>
              <li class='list-group-item bg-orange d-flex justify-content-between border-0'>
                <p className='my-auto fw-bold text-white'>
                  JOIN OUR MAILING LIST
                </p>
                <span>
                  <img src={rightArrow_icon} width={12} />
                </span>
              </li>
              <li class='list-group-item py-3'>
                <label className='fw-bold pe-5' htmlFor='email'>
                  Email:
                </label>
                <input
                  type='email'
                  id='email'
                  className='border-0 w-auto'
                  placeholder='abcd@example.com'
                />
              </li>
              <li class='list-group-item py-3'>
                <label className='fw-bold pe-5' htmlFor='subject'>
                  Subject:
                </label>
                <input
                  type='text'
                  id='subject'
                  className='border-0 w-auto'
                  placeholder="I don't want to miss out?"
                />
              </li>
              <li class='list-group-item py-3 text-end'>
                <button className='btn btn-dark btn-sm text-uppercase rounded-5 px-3 fw-semibold'>
                  subscribe
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className='text-center text-white text-uppercase py-5 fw-bold'>
        COPYRIGHT 2024, Alt DRX. ALL RIGHTS RESERVED
      </div>
    </div>
  );
};
export default Footer;
