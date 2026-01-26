const RestaurantIngredients = () => {
  return (
    <div>
      <div className="sectionHeader">
        <h2>Ingredient Library</h2>
        <p className="muted">Track sourcing, certifications, and suppliers per ingredient.</p>
      </div>
      <div className="grid gridThree">
        <div className="card">
          <h3>Supplier Links</h3>
          <p className="muted">Connect suppliers to each ingredient.</p>
          <button className="buttonSecondary">Link suppliers</button>
        </div>
        <div className="card">
          <h3>Certifications</h3>
          <p className="muted">Log organic, fair trade, and local claims.</p>
          <button className="buttonSecondary">Add certification</button>
        </div>
        <div className="card">
          <h3>Stock Alerts</h3>
          <p className="muted">Monitor expiring lots and missing data.</p>
          <button className="buttonSecondary">View alerts</button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantIngredients;
