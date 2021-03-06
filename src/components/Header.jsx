import React from "react";

function Header() {
  return (
    <header>
      <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <a
          href="/"
          class="d-flex align-items-center text-dark text-decoration-none"
        >
          <img src="images/GEM_logo_blue_outline.png" alt="logo" class="logo" />
        </a>
        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <a class="me-3 py-2 text-dark text-decoration-none" href="#">
            Features
          </a>
          <a class="me-3 py-2 text-dark text-decoration-none" href="#">
            Enterprise
          </a>
          <a class="me-3 py-2 text-dark text-decoration-none" href="#">
            Support
          </a>
          <a class="py-2 text-dark text-decoration-none" href="#">
            Pricing
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
