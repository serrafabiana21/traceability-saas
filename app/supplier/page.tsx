const SupplierDashboard = () => {
  return (
    <div>
      <div className="sectionHeader">
        <h2>Supplier Dashboard</h2>
        <p className="muted">
          Keep product documentation and delivery transparency up to date.
        </p>
      </div>
      <div className="grid gridThree">
        <div className="card">
          <h3>Product Catalog</h3>
          <p className="muted">Manage product SKUs and certifications.</p>
          <button className="buttonSecondary">Update catalog</button>
        </div>
        <div className="card">
          <h3>Upcoming Deliveries</h3>
          <p className="muted">3 deliveries scheduled this week.</p>
          <button className="buttonSecondary">View schedule</button>
        </div>
        <div className="card">
          <h3>Compliance Files</h3>
          <p className="muted">Upload audits and lab reports.</p>
          <button className="buttonSecondary">Upload files</button>
        </div>
      </div>
    </div>
  );
};

export default SupplierDashboard;
