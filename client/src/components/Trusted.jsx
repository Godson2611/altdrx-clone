import icic_logo from "../assets/img/icici.png";
import ey_logo from "../assets/img/eylogo.png";
import induslaw_logo from "../assets/img/induslaw.png";
import knight_logo from "../assets/img/knight.png";
import ksk_logo from "../assets/img/ksk.jpg";
import mitcoin_logo from "../assets/img/mitcoin.png";
import orbis_logo from "../assets/img/orbis.png";
import kayess_logo from "../assets/img/partner.png";

const Trusted = () => {
  return (
    <div className='container py-5'>
      <h1 className='fw-boldss text-center'>Trusted Partners</h1>
      <div className='d-flex pt-5 flex-wrap gap-5 justify-content-center align-items-center'>
        <div className='d-flex flex-column text-center gap-4'>
          <img src={icic_logo} width={200} alt='' />
          <p>Banking Partner</p>
        </div>
        <div className='d-flex flex-column text-center gap-4'>
          <img src={ey_logo} width={200} alt='' />
          <p>Tax Advisor</p>
        </div>
        <div className='d-flex flex-column text-center gap-4'>
          <img src={induslaw_logo} width={200} alt='' />
          <p>Legal Advisor</p>
        </div>
        <div className='d-flex flex-column text-center gap-4'>
          <img src={mitcoin_logo} width={200} alt='' />
          <p>Alt DRX Master Escrow Agent</p>
        </div>
      </div>
      <div className='d-flex pt-5 flex-wrap gap-5 justify-content-center align-items-center'>
        <div className='d-flex flex-column text-center gap-4'>
          <img src={orbis_logo} width={200} alt='' />
          <p>SPV Escrow Agent & Administrator</p>
        </div>
        <div className='d-flex flex-column text-center gap-4'>
          <img src={kayess_logo} width={200} alt='' />
          <p>Financial & Secretarial Governance</p>
        </div>
        <div className='d-flex flex-column text-center gap-4'>
          <img src={knight_logo} width={200} alt='' />
          <p>Micro-Market & Price Due Diligence Partner</p>
        </div>
        <div className='d-flex flex-column text-center gap-4'>
          <img src={ksk_logo} width={200} alt='' />
          <p>Property Title Due Diligence Partner</p>
        </div>
      </div>
    </div>
  );
};
export default Trusted;
