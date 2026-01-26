const SupplierProducts = () => {
  return (
    <div>
      <div className="sectionHeader">
        <h2>Products</h2>
        <p className="muted">Maintain product details and traceability metadata.</p>
      </div>
      <div className="grid gridThree">
        <div className="card">
          <h3>New Product</h3>
          <p className="muted">Add a new ingredient or packaged item.</p>
          <button className="buttonSecondary">Add product</button>
        </div>
        <div className="card">
          <h3>Certifications</h3>
          <p className="muted">Attach certifications and testing results.</p>
          <button className="buttonSecondary">Upload certs</button>
        </div>
        <div className="card">
          <h3>Pricing Updates</h3>
          <p className="muted">Review pricing shared with restaurants.</p>
          <button className="buttonSecondary">Review pricing</button>
        </div>
      </div>
    </div>
  );
};

export default SupplierProducts;
