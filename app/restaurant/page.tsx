const RestaurantDashboard = () => {
  return (
    <div>
      <div className="sectionHeader">
        <h2>Restaurant Dashboard</h2>
        <p className="muted">
          Monitor dish transparency, ingredient sourcing, and compliance actions.
        </p>
      </div>
      <div className="grid gridThree">
        <div className="card">
          <h3>Pending Claims</h3>
          <p className="muted">3 claims awaiting verification.</p>
          <button className="buttonSecondary">Review claims</button>
        </div>
        <div className="card">
          <h3>Ingredient Checklist</h3>
          <p className="muted">12 ingredients need updated sourcing data.</p>
          <button className="buttonSecondary">Update ingredients</button>
        </div>
        <div className="card">
          <h3>Latest Upload</h3>
          <p className="muted">Sync your supplier docs and audits.</p>
          <button className="buttonSecondary">Start upload</button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDashboard;
