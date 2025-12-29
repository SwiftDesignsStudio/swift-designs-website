"use client";

import { useEffect } from "react";
import Link from "next/link";
import Script from "next/script";

export default function Footer() {
    useEffect(() => {
        if (typeof window === "undefined") return;

        // ========= WOW animations =========
        const wowCtor = (window as any).WOW;
        if (typeof wowCtor === "function") {
            // eslint-disable-next-line new-cap
            new wowCtor().init();
        }

        // ========= Navbar shrink on scroll =========
        const nav = document.querySelector<HTMLElement>(
            ".navbar.navbar-default.main-nav"
        );

        const handleScroll = () => {
            if (!nav) return;
            if (window.scrollY > 10) nav.classList.add("navbar--shrink");
            else nav.classList.remove("navbar--shrink");
        };

        if (nav) {
            handleScroll();
            window.addEventListener("scroll", handleScroll);
        }

        // ========= Cookie banner =========
        const cookieKey = "sds_cookie_ok";
        const banner = document.getElementById("cookie-banner") as
            | HTMLElement
            | null;
        const acceptBtn = document.getElementById("cookie-accept");

        if (banner) {
            if (!localStorage.getItem(cookieKey)) {
                banner.hidden = false;
            }

            const onAccept = () => {
                localStorage.setItem(cookieKey, "1");
                banner.hidden = true;
            };

            acceptBtn?.addEventListener("click", onAccept);

            // cleanup
            return () => {
                window.removeEventListener("scroll", handleScroll);
                acceptBtn?.removeEventListener("click", onAccept);
            };
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {/* ========= MAIN FOOTER ========= */}
            <footer className="footer-area">
                <div className="container">
                    <div
                        className="legal-links"
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "16px",
                            justifyContent: "center",
                            fontSize: "14px",
                        }}
                    >
                        <Link href="/privacy" style={{ color: "goldenrod" }}>
                            Privacy Policy
                        </Link>
                        <span style={{ opacity: 0.5 }}>•</span>
                        <Link href="/terms" style={{ color: "goldenrod" }}>
                            Terms &amp; Conditions
                        </Link>
                        <span style={{ opacity: 0.5 }}>•</span>
                        <Link href="/security" style={{ color: "goldenrod" }}>
                            Security
                        </Link>
                        <span style={{ opacity: 0.5 }}>•</span>
                        <Link href="/data-processing" style={{ color: "goldenrod" }}>
                            Data Processing
                        </Link>
                    </div>

                    <p
                        style={{
                            textAlign: "center",
                            marginTop: "10px",
                            fontSize: "13px",
                            opacity: 0.85,
                        }}
                    >
                        © {new Date().getFullYear()} Swift Designs Studio LLC. All rights
                        reserved.
                    </p>
                </div>
            </footer>

            {/* ========= COOKIE BANNER ========= */}
            <div
                id="cookie-banner"
                className="cookie-banner"
                role="dialog"
                aria-live="polite"
                hidden
            >
                <div className="cookie-inner">
                    <p>
                        We use cookies to improve your experience. See our{" "}
                        <Link href="/privacy">Privacy Policy</Link>.
                    </p>
                    <button id="cookie-accept" className="btn btn--primary">
                        Accept
                    </button>
                </div>
            </div>

            {/* ========= SWIFT AI MESSENGER (UI ONLY – same as your HTML) ========= */}
            <div className="ai-messenger">
                {/* Floating Button */}
                <button
                    className="ai-messenger-button"
                    id="aiMessengerToggle"
                    aria-label="Open Swift AI Assistant"
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="ai-messenger-icon">
                        <path d="M4 4h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-6.5l-3.3 3.3a1 1 0 0 1-1.7-.7V16H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                    </svg>
                </button>

                {/* Chat Panel */}
                <div
                    className="ai-messenger-panel"
                    id="aiMessengerPanel"
                    aria-hidden="true"
                >
                    <header className="ai-messenger-header">
                        <div className="ai-messenger-header-main">
                            <span className="ai-messenger-title">Swift AI Assistant</span>
                            <span className="ai-messenger-subtitle" id="aiMessengerGreeting">
                                Ask anything about your website, content, or strategy.
                            </span>
                        </div>
                        <button
                            className="ai-messenger-close"
                            id="aiMessengerClose"
                            aria-label="Close Swift AI Assistant"
                        >
                            ×
                        </button>
                    </header>

                    <div className="ai-messenger-body">
                        <div className="ai-messenger-message ai-messenger-message--bot">
                            <p>Hey there 👋 — I’m your Swift AI assistant. What can I help you with today?</p>
                        </div>

                        <div className="ai-messenger-suggestions">
                            <button className="ai-messenger-chip">
                                Improve my landing page copy
                            </button>
                            <button className="ai-messenger-chip">
                                Explain Webflow vs WordPress
                            </button>
                            <button className="ai-messenger-chip">
                                Help me plan a new campaign
                            </button>
                        </div>
                    </div>

                    <form
                        className="ai-messenger-input-row"
                        action="#"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <input
                            type="text"
                            id="aiMessengerInput"
                            className="ai-messenger-input"
                            placeholder="Type your question…"
                        />
                        <button type="submit" className="ai-messenger-send">
                            Send
                        </button>
                    </form>
                </div>
            </div>

            {/* ========= JS FILES (loaded in browser) ========= */}
            <Script src="/js/jquery-3.2.1.min.js" strategy="afterInteractive" />
            <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
            <Script src="/js/wow.min.js" strategy="afterInteractive" />
            <Script src="/js/jquery.waypoints.js" strategy="afterInteractive" />
            <Script src="/js/jquery.counterup.min.js" strategy="afterInteractive" />
            <Script src="/js/owl.carousel.js" strategy="afterInteractive" />
            <Script src="/js/jquery.magnific-popup.js" strategy="afterInteractive" />
            <Script src="/js/jquery.animatedheadline.js" strategy="afterInteractive" />
            <Script src="/js/jquery.mb.YTPlayer.min.js" strategy="afterInteractive" />
            <Script src="/js/particles.js" strategy="afterInteractive" />
            <Script src="/js/app.js" strategy="afterInteractive" />
            <Script src="/js/validator.js" strategy="afterInteractive" />
            <Script src="/js/contact.js" strategy="afterInteractive" />
            <Script src="/js/main.js" strategy="afterInteractive" />
        </>
    );
}

