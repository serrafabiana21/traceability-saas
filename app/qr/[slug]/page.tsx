type QRPageProps = {
  params: { slug: string };
};

const QRPage = ({ params }: QRPageProps) => {
  const { slug } = params;

  return (
    <div className="page">
      <div className="container section">
        <div className="sectionHeader">
          <p className="eyebrow">Dish transparency</p>
          <h2>Dish: {slug.replace(/-/g, " ")}</h2>
          <p className="muted">
            This QR landing page highlights the sourcing journey for this dish.
          </p>
        </div>
        <div className="grid gridThree">
          <div className="card">
            <h3>Ingredient Map</h3>
            <p className="muted">Origin details for each key ingredient.</p>
            <button className="buttonSecondary">View origins</button>
          </div>
          <div className="card">
            <h3>Supplier Highlights</h3>
            <p className="muted">Meet the farmers and producers behind the dish.</p>
            <button className="buttonSecondary">See suppliers</button>
          </div>
          <div className="card">
            <h3>Compliance Notes</h3>
            <p className="muted">Certifications, audits, and quality checks.</p>
            <button className="buttonSecondary">Review checks</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRPage;
