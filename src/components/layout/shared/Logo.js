import React from 'react';
import { Link } from 'react-router-dom';
export function Logo() {
  return (
    <Link className="navbar-brand" to="/">
      <h1
        className="h4 mb-0 font-weight-light"
        style={{ display: 'inline-block' }}
      >
        WOULD YOU RATHER?
      </h1>
    </Link>
  );
}
