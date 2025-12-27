import React from "react";

export function Footer() {
  return (
    <footer className="footer ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-12 text-center">
            Copyright © 2013-{new Date().getFullYear()} All rights reserved Remo
            H. Jansen
          </div>
        </div>
      </div>
    </footer>
  );
}
