'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import '../styles/globals.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
  useEffect(() => {
    typeof document !== undefined
      ? require('bootstrap/dist/js/bootstrap.bundle.min.js')
      : null;
  }, []);

  return (
    <html lang="en">
      <body>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link href="/" className="navbar-brand">Historical Landmarks</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/europe" className="nav-link">Europe</Link>
              </li>
              <li className="nav-item">
                <Link href="/asia" className="nav-link">Asia</Link>
              </li>
              <li className="nav-item">
                <Link href="/americas" className="nav-link">Americas</Link>
              </li>
              <li className="nav-item">
                <Link href="/landmark-history" className="nav-link">Landmark History</Link>
              </li>
              <li className="nav-item">
                <Link href="/cultural-significance" className="nav-link">Cultural Significance</Link>
              </li>
            </ul>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
