

export default  function Feature({featureIcon, title, description }) {
  return (
    <div className="feature">
      <div className="feature-container">
        <img src={featureIcon} alt="" className="feature-icon"/>
        <div>
        <p className="feature-title">{title}</p>
        <p className="feature-description">{description}</p>
        </div>
      </div>
    </div>
  );
}
  
