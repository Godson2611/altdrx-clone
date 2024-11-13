import collect_icon from "../assets/svg/collect-rental-income.svg";
import earn_icon from "../assets/svg/Earn-longterm-gains.svg";
import start_icon from "../assets/svg/Start-small.svg";
import diversify_icon from "../assets/svg/Diversity-investments.svg";
import click_icon from "../assets/svg/Click-to-sell.svg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const WhyInvest = () => {
  const items = [
    <div className='cards'>
      <img src={collect_icon} alt='' width={150} />
      <h5 className='text-orange fw-boldss pt-4'>
        Collect <br /> Rental Income
      </h5>
      <p className='fw-lighter'>
        Earn consistent rental income from your ALT.SQFT
      </p>
    </div>,

    <div className='cards'>
      <img src={earn_icon} alt='' width={150} />
      <h5 className='text-orange fw-boldss pt-4'>
        Earn Long Term <br /> Gains
      </h5>
      <p className='fw-lighter'>
        Watch your ALT.SQFT Real Estate investments appreciate over time
      </p>
    </div>,
    <div className='cards'>
      <img src={start_icon} alt='' width={150} />
      <h5 className='text-orange fw-boldss pt-4'>Start Small!</h5>
      <p className='fw-lighter'>
        Start investing in real estate with as little as Rs. 10,000
      </p>
    </div>,
    <div className='cards'>
      <img src={diversify_icon} alt='' width={150} />
      <h5 className='text-orange fw-boldss pt-4'>
        Diversify <br /> Investmentse
      </h5>
      <p className='fw-lighter'>
        Your ALT.SQFT gives you the benefit of a diversified portfolio of
        properties
      </p>
    </div>,
    <div className='cards'>
      <img src={click_icon} alt='' width={150} />
      <h5 className='text-orange fw-boldss pt-4'>Click to Sell</h5>
      <p className='fw-lighter'>
        Easy to Buy and Sell ALT.SQFT whenever you want!
      </p>
    </div>,
  ];
  return (
    <div className='container py-md-5'>
      <h1 className='text-orange display-1 fw-boldss text-center text-md-start'>
        Why invest with Alt DRX?
      </h1>
      <h5 className='text-blue fw-boldss text-center text-md-start'>
        WE ENABLE YOU TO INVEST IN REAL ESTATE 1 SQFT AT A TIME
      </h5>
      <div className='card_container d-none d-md-flex gap-5 mt-5 mb-4 flex-lg-nowrap flex-wrap'>
        {items.map((item, index) => (
          <div className='w-25' key={index}>
            {item}
          </div>
        ))}
      </div>
      <div className='d-block d-md-none mt-5 mb-4 text-center -5'>
        <AliceCarousel
          items={items}
          autoPlay
          autoPlayInterval={2000}
          infinite
          disableDotsControls
          disableButtonsControls
          responsive={{
            0: { items: 1 },
            600: { items: 2 },
          }}
        />
      </div>
      <div className='d-flex justify-content-center justify-content-md-start'>
        <button className='bg-orange btn border-0 text-white fw-bold rounded-5 btn-sm px-3 text-uppercase mb-5'>
          start investing
        </button>
      </div>
    </div>
  );
};
export default WhyInvest;
