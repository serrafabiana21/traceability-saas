const SupplierUploads = () => {
  return (
    <div>
      <div className="sectionHeader">
        <h2>Uploads</h2>
        <p className="muted">Send documents and compliance files to restaurants.</p>
      </div>
      <div className="grid gridThree">
        <div className="card">
          <h3>Upload Center</h3>
          <p className="muted">Drag and drop new documents.</p>
          <button className="buttonSecondary">Start upload</button>
        </div>
        <div className="card">
          <h3>Shared Library</h3>
          <p className="muted">View files shared with partners.</p>
          <button className="buttonSecondary">Open library</button>
        </div>
        <div className="card">
          <h3>Request Queue</h3>
          <p className="muted">Respond to restaurant requests.</p>
          <button className="buttonSecondary">Review requests</button>
        </div>
      </div>
    </div>
  );
};

export default SupplierUploads;
