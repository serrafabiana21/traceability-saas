const RestaurantClaims = () => {
  return (
    <div>
      <div className="sectionHeader">
        <h2>Claims Center</h2>
        <p className="muted">Review, approve, and publish transparency claims.</p>
      </div>
      <div className="grid gridThree">
        <div className="card">
          <h3>Submitted Claims</h3>
          <p className="muted">6 supplier claims ready for review.</p>
          <button className="buttonSecondary">Review submissions</button>
        </div>
        <div className="card">
          <h3>Verification Tasks</h3>
          <p className="muted">Track outstanding audits and checks.</p>
          <button className="buttonSecondary">View tasks</button>
        </div>
        <div className="card">
          <h3>Claim Library</h3>
          <p className="muted">Maintain approved claim statements.</p>
          <button className="buttonSecondary">Manage library</button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantClaims;
