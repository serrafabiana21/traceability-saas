const SupplierDeliveries = () => {
  return (
    <div>
      <div className="sectionHeader">
        <h2>Deliveries</h2>
        <p className="muted">Share shipment timelines and traceability details.</p>
      </div>
      <div className="grid gridThree">
        <div className="card">
          <h3>Delivery Schedule</h3>
          <p className="muted">Confirm drop-offs and lead times.</p>
          <button className="buttonSecondary">View schedule</button>
        </div>
        <div className="card">
          <h3>Cold Chain Logs</h3>
          <p className="muted">Upload temperature monitoring data.</p>
          <button className="buttonSecondary">Upload logs</button>
        </div>
        <div className="card">
          <h3>Proof of Delivery</h3>
          <p className="muted">Send receipts and signed documents.</p>
          <button className="buttonSecondary">Share documents</button>
        </div>
      </div>
    </div>
  );
};

export default SupplierDeliveries;
