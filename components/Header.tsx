"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    // Mobile nav toggle
    useEffect(() => {
        const btn = document.querySelector<HTMLButtonElement>(".nav-toggle");
        const nav = document.getElementById("primary-nav");
        if (!btn || !nav) return;

        const toggle = () => {
            const open = nav.classList.toggle("open");
            btn.setAttribute("aria-expanded", open ? "true" : "false");
        };

        btn.addEventListener("click", toggle);
        return () => btn.removeEventListener("click", toggle);
    }, []);

    const isActive = (path: string) => (pathname === path ? "active" : "");

    return (
        <header className="site-header">
            <div className="container nav-inner">
                <Link className="brand" href="/">
                    <img
                        src="/images/logo/SDSTransparent.png"
                        alt="Swift Designs Studio"
                    />
                </Link>

                <button
                    className="nav-toggle"
                    aria-expanded="false"
                    aria-controls="primary-nav"
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="sr-only">Menu</span>
                </button>

                <nav id="primary-nav" className="nav">
                    <ul className="menu">
                        <li className={isActive("/")}>
                            <Link className="nav-link" href="/">
                                Home
                            </Link>
                        </li>

                        <li className={isActive("/about")}>
                            <Link className="nav-link" href="/about">
                                About
                            </Link>
                        </li>

                        <li className={isActive("/services")}>
                            <Link className="nav-link" href="/services">
                                Services
                            </Link>
                        </li>

                        <li className={isActive("/portfolio")}>
                            <Link className="nav-link" href="/portfolio">
                                Portfolio
                            </Link>
                        </li>

                        <li className={isActive("/testimonials")}>
                            <Link className="nav-link" href="/testimonials">
                                Testimonials
                            </Link>
                        </li>

                        <li className={isActive("/contact")}>
                            <Link className="nav-link" href="/contact">
                                Contact
                            </Link>
                        </li>

                        <li className={isActive("/blog")}>
                            <Link className="nav-link" href="/blog">
                                Blog
                            </Link>
                        </li>

                        <li className="menu-cta">
                            <Link href="/contact" className="btn-cta nav-cta-mobile">
                                Request a Quote
                            </Link>
                        </li>
                    </ul>
                </nav>

                <Link href="/contact" className="btn-cta header-cta">
                    Request a Quote
                </Link>
            </div>
        </header>
    );
}