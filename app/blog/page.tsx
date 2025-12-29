export default function BlogPage() {
    return (
        <main id="blog" className="blog-page">
            {/* Hero */}
            <section className="blog-hero">
                <div className="container">
                    <h1 className="blog-title">Swift Designs Blog</h1>
                    <p className="blog-subtitle">
                        Insights, how-tos, and case studies on design, code, and growth.
                    </p>
                </div>
            </section>

            {/* Cards Grid */}
            <section className="blog-grid-wrap">
                <div className="container">
                    <div className="blog-grid">

                        {/* CARD 1 */}
                        <article className="post-card">
                            <a className="post-link" href="/blog/posts/post-web-design-agency">
                                <figure className="post-thumb">
                                    <img
                                        src="/images/blog/webflow.jpeg"
                                        alt="Why partner with a web design agency"
                                    />
                                </figure>
                                <div className="post-body">
                                    <h2 className="post-title">
                                        Why Partner With A Web Design Agency For Custom Projects
                                    </h2>
                                    <p className="post-excerpt">
                                        How a senior team accelerates delivery, protects quality, and
                                        reduces long-term costs.
                                    </p>
                                </div>
                            </a>
                        </article>

                        {/* CARD 2 */}
                        <article className="post-card">
                            <a className="post-link" href="/blog/posts/post-choose-agency">
                                <figure className="post-thumb">
                                    <img
                                        src="/images/blog/webdesign.jpeg"
                                        alt="Choosing a web design agency"
                                    />
                                </figure>
                                <div className="post-body">
                                    <h2 className="post-title">
                                        Choosing A Web Design Agency: What To Look For &amp; Why It Matters
                                    </h2>
                                    <p className="post-excerpt">
                                        A practical checklist for vetting vendors—process, proofs, pricing, and people.
                                    </p>
                                </div>
                            </a>
                        </article>

                        {/* CARD 3 */}
                        <article className="post-card">
                            <a className="post-link" href="/blog/posts/post-wix-vs-weblow">
                                <figure className="post-thumb">
                                    <img src="" alt="" /></figure></a>
                        </article>

                    </div>
                </div>
            </section>
        </main>
    );
}
