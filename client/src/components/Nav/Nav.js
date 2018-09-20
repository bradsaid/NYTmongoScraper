import React from "react";

const Nav = () => (
  <nav className="navbar navbar-expand-md navbar-dark bg-primary">
  <div className="d-flex w-50 order-0">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar"></button>
  </div>
  <div className="navbar-collapse collapse justify-content-center order-0" id="collapsingNavbar">
      <span className="navbar-brand mr-1">New York Times Scrubber</span>
  </div>
  <span className="navbar-text small text-truncate mt-1 w-50 text-right order-1 order-md-last"></span>
</nav>
);

export default Nav;
