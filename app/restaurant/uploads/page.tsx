const RestaurantUploads = () => {
  return (
    <div>
      <div className="sectionHeader">
        <h2>Uploads</h2>
        <p className="muted">Centralize supplier documents and internal audits.</p>
      </div>
      <div className="grid gridThree">
        <div className="card">
          <h3>Bulk Upload</h3>
          <p className="muted">Drop invoices, certificates, and reports.</p>
          <button className="buttonSecondary">Start upload</button>
        </div>
        <div className="card">
          <h3>Document Requests</h3>
          <p className="muted">Send upload requests to suppliers.</p>
          <button className="buttonSecondary">Send request</button>
        </div>
        <div className="card">
          <h3>Review Queue</h3>
          <p className="muted">Verify new files before publishing.</p>
          <button className="buttonSecondary">Open queue</button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantUploads;
