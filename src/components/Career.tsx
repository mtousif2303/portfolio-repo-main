import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer – SAP Hybris</h4>
                <h5>Reliance Industries</h5>
              </div>
              <h3>2016</h3>
            </div>
            <p>
              Developed storefront controllers, SOLR value providers, and gift
              card functionality for Reliance Digital — one of India's largest
              B2C e-commerce platforms. Built REST APIs and customised HMC.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Consultant – SAP Commerce</h4>
                <h5>IBM</h5>
              </div>
              <h3>2018</h3>
            </div>
            <p>
              Delivered cXML/SAP Ariba integration and B2B punchout portal for
              SMS Equipment. Implemented cart and PDP API performance fixes and
              BackOffice migration for Koopman B2C.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DC Senior Consultant – SAP Commerce</h4>
                <h5>Deloitte USI</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Led S/4HANA RFC integrations for Perkins Engine, refactoring Order
              History response from 60s to 20s. Delivered payment APIs, SAP CRM
              onboarding and CAT config management portal across 3 global clients.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SAP Commerce Lead & Product Owner</h4>
                <h5>Virgin Megastore</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Leading SAP Commerce Cloud platform strategy and product ownership
              for the MENA region. Delivered Checkout.com payment integration,
              custom Promotion Engine rules, and end-to-end feature delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
