

export default  function Feature({featureIcon, title, description }) {
  return (
    <div className="feature">
      <img src="" alt="" className="feature-icon" />
      <div>
        <img src={featureIcon} alt="" />
        <p className="feature-title">{title}</p>
        <p className="feature-description">{description}</p>
      </div>
    </div>
  );
}
  
