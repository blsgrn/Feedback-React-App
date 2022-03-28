// import React from 'react'
import PropTypes from 'prop-types';

function Header({ text }) {
  return <header className="container">{text}</header>;
}

// Header.defaultProps = {
//   text: 'Feedback UI',
// };

Header.propTypes = {
  text: PropTypes.string,
};
export default Header;
