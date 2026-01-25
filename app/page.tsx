export default function Home() {
  return (
    <main className="page">
      <header className="nav">
        <div className="container navInner">
          <div className="brand">
            <span className="brandMark" aria-hidden="true" />
            SustainTable
          </div>
          <div className="navLinks">
            <a href="#how-it-works">How it works</a>
            <a href="#who-its-for">Who it&apos;s for</a>
            <a href="#why-now">Why now</a>
          </div>
          <a className="button" href="mailto:pilot@sustaintable.com">
            Join the pilot
          </a>
        </div>
      </header>

      <section className="section hero">
        <div className="container heroGrid">
          <div className="heroContent">
            <p className="eyebrow">Verified sustainability</p>
            <h1>Dish-level proof for sustainability claims.</h1>
            <p className="subheadline">
              SustainTable turns supplier documentation into guest-ready transparency. Track sourcing,
              verify claims, and publish evidence without slowing down your menu team.
            </p>
            <div className="heroActions">
              <a className="button" href="mailto:pilot@sustaintable.com">
                Join the pilot
              </a>
              <a className="buttonSecondary" href="#how-it-works">
                See how it works
              </a>
            </div>
            <div className="trustMarkers">
              <span>Audit-ready</span>
              <span>Dish-level proof</span>
              <span>Supplier docs</span>
            </div>
          </div>
          <div className="heroCard">
            <div className="badge">Verified status</div>
            <h2>Nordic Brasserie</h2>
            <p className="muted">Seafood tasting menu</p>
            <div className="heroStat">98% verified</div>
            <div className="miniCard">
              <p>Ingredient documents linked</p>
              <span>12 suppliers · 48 items</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gridTwo">
          <div className="card">
            <h2>The problem</h2>
            <p className="muted">
              Sustainability proof lives across inboxes, PDFs, and spreadsheets. Teams can&apos;t trace
              claims to dishes quickly enough to satisfy regulators or guests.
            </p>
            <ul>
              <li>Fragmented documentation</li>
              <li>Low transparency for diners</li>
              <li>Manual updates across menus</li>
            </ul>
          </div>
          <div className="card subtle">
            <h2>The solution</h2>
            <p className="muted">
              SustainTable centralizes supplier proof, maps it to dishes, and outputs verified QR
              stories that stay current as menus change.
            </p>
            <ul>
              <li>Verified audit trail in one workspace</li>
              <li>Ingredient-to-dish mapping in minutes</li>
              <li>Guest-facing transparency without extra tools</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section">
        <div className="container">
          <div className="sectionHeader">
            <p className="eyebrow">How it works</p>
            <h2>Collect proof, connect it to dishes, publish confidently.</h2>
          </div>
          <div className="grid gridThree">
            <div className="card">
              <h3>Collect proof</h3>
              <p className="muted">
                Suppliers upload certifications, lab results, and sourcing statements once.
              </p>
            </div>
            <div className="card">
              <h3>Map to dishes</h3>
              <p className="muted">
                Restaurants link verified ingredients to each menu item and seasonal update.
              </p>
            </div>
            <div className="card">
              <h3>Publish QR proof</h3>
              <p className="muted">
                Guests scan a QR code to see credible sustainability stories on the spot.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="who-its-for" className="section">
        <div className="container">
          <div className="sectionHeader">
            <p className="eyebrow">Who it&apos;s for</p>
            <h2>Built for restaurants and suppliers who share accountability.</h2>
          </div>
          <div className="grid gridTwo">
            <div className="card">
              <h3>Restaurants</h3>
              <p className="muted">
                Give chefs and operators a single source of truth for menu-level transparency.
              </p>
            </div>
            <div className="card">
              <h3>Suppliers</h3>
              <p className="muted">
                Share verified documentation once and reuse it across every hospitality partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="why-now" className="section">
        <div className="container">
          <div className="sectionHeader">
            <p className="eyebrow">Why now</p>
            <h2>Regulation, trust, and risk are converging.</h2>
          </div>
          <div className="grid gridThree">
            <div className="card">
              <h3>Regulation pressure</h3>
              <p className="muted">New sourcing rules demand verifiable documentation, not claims.</p>
            </div>
            <div className="card">
              <h3>Guest trust</h3>
              <p className="muted">Diners want proof they can scan, not marketing promises.</p>
            </div>
            <div className="card">
              <h3>Greenwashing risk</h3>
              <p className="muted">Credibility slips when teams can&apos;t trace ingredients to dishes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section ctaSection">
        <div className="container ctaCard">
          <div>
            <h2>Ready to share verified sustainability with every guest?</h2>
            <p className="muted">
              Join the pilot cohort and build a calmer, more credible sourcing workflow.
            </p>
          </div>
          <a className="button" href="mailto:pilot@sustaintable.com">
            Join the pilot
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerInner">
          <p>© 2024 SustainTable. Verified sustainability for hospitality teams.</p>
          <div className="footerLinks">
            <a href="/restaurant">Restaurant</a>
            <a href="/supplier">Supplier</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
