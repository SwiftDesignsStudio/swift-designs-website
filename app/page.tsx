// app/page.tsx

export default function HomePage() {
  return (
    <div>
      {/* === Banner / Hero (particles) === */}
      <div className="banner-area">
        <div id="particles-js"></div>
        <div className="banner-table">
          <div className="banner-table-cell">
            <div className="welcome-text">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <section className="intro animate-scale">
                      <h3>Welcome to Swift Designs Studio</h3>
                      <h1 className="ah-headline">
                        <span className="ah-words-wrapper">
                          <b className="is-visible">Full-Stack Developer</b>
                          <b>Web Designer</b>
                          <b>Web Developer</b>
                          <b>Brand Strategist</b>
                          <b>Creative Director</b>
                          <b>UX/UI Designer</b>
                          <b>Digital Marketer</b>
                          <b>Content Creator</b>
                          <b>SEO Specialist</b>
                          <b>Tech Innovator</b>
                        </span>
                      </h1>
                      <a href="/contact" className="banner-btn">
                        Contact me
                      </a>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === About section === */}
      <section id="about" className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>About Swift Designs Studio</h2>
            <p>
              Swift Designs Studio is a San Diego–based creative and development
              agency specializing in crafting{" "}
              <strong className="text--goldenrod">
                modern, high-performance websites
              </strong>{" "}
              and{" "}
              <strong className="text--goldenrod">digital experiences</strong> that
              elevate brands and drive real results. We combine design innovation
              with full-stack engineering to deliver fast, responsive, and visually
              striking web solutions.
            </p>

            <a className="banner-btn" href="/portfolio">
              See my work
            </a>
          </div>
        </div>
      </section>

      {/* === Hero CTA section === */}
      <header className="hero hero--solid">
        <div className="container hero__inner">
          <h1 className="hero__title">Let’s Grow Your Brand</h1>
          <p className="hero__subtitle">
            Design, development &amp; performance—built for results.
          </p>
          <div className="hero__actions">
            <a href="/contact" className="btn btn--primary">
              Request a Quote
            </a>
            <a href="/services" className="btn btn--outline">
              Explore Services
            </a>
          </div>
        </div>
      </header>

      {/* === Mega footer section from home page === */}
      <footer className="mega-footer">
        <div className="container mega-footer__grid">
          <section>
            <h3 className="mf__title">Main Services</h3>
            <ul className="mf__links">
              <li>
                <a href="/services#webdesign">Custom Web Design</a>
              </li>
              <li>
                <a href="/services#branding">Branding Services</a>
              </li>
              <li>
                <a href="/services#ecommerce">eCommerce Design</a>
              </li>
              <li>
                <a href="/services#wordpress">WordPress Web Design</a>
              </li>
              <li>
                <a href="/services#marketing">Digital Marketing</a>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="mf__title">Apps &amp; Development</h3>
            <ul className="mf__links">
              <li>
                <a href="/services#frontend">Frontend Development</a>
              </li>
              <li>
                <a href="/services#backend">Backend Development</a>
              </li>
              <li>
                <a href="/services#api">API Integration</a>
              </li>
              <li>
                <a href="/services#shopify">Shopify / WooCommerce</a>
              </li>
              <li>
                <a href="/services#dashboard">Dashboards &amp; Admin</a>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="mf__title">Company</h3>
            <ul className="mf__links">
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/portfolio">Case Studies</a>
              </li>
              <li>
                <a href="/blog">Insights</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/sitemap.xml">Sitemap</a>
              </li>
            </ul>
          </section>
        </div>
      </footer>
    </div>
  );
}
