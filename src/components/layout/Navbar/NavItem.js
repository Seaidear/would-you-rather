import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export function NavItem({ route, text }) {
  return (
    <li className="nav-item active">
      <Link className="nav-link" to={route}>
        {text}
      </Link>
    </li>
  );
}
NavItem.propTypes = {
  route: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
