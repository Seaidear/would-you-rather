import React from 'react';
export function NavbarToggler() {
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarsExample04"
      aria-controls="navbarsExample04"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
  );
}
