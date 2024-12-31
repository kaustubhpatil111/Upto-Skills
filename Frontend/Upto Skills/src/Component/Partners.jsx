
import "./Partners.css"; 

const partners = [
  { name: "HCL", logo: "https://via.placeholder.com/100" },
  { name: "Tech Mahindra", logo: "https://via.placeholder.com/100" },
  { name: "Accenture", logo: "https://via.placeholder.com/100" },
  { name: "Capgemini", logo: "https://via.placeholder.com/100" },
  { name: "Mu Sigma", logo: "https://via.placeholder.com/100" },
  { name: "IBM", logo: "https://via.placeholder.com/100" },
];

const icons = [
  { name: "Icon1", logo: "https://via.placeholder.com/60" },
  { name: "Icon2", logo: "https://via.placeholder.com/60" },
  { name: "Icon3", logo: "https://via.placeholder.com/60" },
  { name: "Icon4", logo: "https://via.placeholder.com/60" },
  { name: "Icon5", logo: "https://via.placeholder.com/60" },
  { name: "Icon6", logo: "https://via.placeholder.com/60" },
];

function Partners() {
  return
   (
    <div className="Partners">
      
      <section className="partners-section">
        <h2>Partners</h2>
        <p>
          Powering payments for partners around the world. Our partners create
          innovative platforms for merchants that trust Payme to process their
          payments.
        </p>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-item">
              <img src={partner.logo} alt={partner.name} />
              <p>{partner.name}</p> 
            </div>
          ))}
        </div>
      </section>

      <section className="icons-section">
        <h2>Icons</h2> 
        <div className="icons-grid">
          {icons.map((icon, index) => (
            <div key={index} className="icon-item">
              <img src={icon.logo} alt={icon.name} />
              <p>{icon.name}</p> 
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Partners;