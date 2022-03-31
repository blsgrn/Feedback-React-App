import { FaLink } from 'react-icons/fa';
// we get rid of a link becuase it reloads. Use Link from react-router-d0m for internal links
import { Link } from 'react-router-dom';

function AboutLinkIcon() {
  return (
    <div className="about-link">
      {/* <Link to="/about"> */}
      <Link
        to={{
          pathname: '/about',
          search: '!sort=name',
          hash: '#Info',
        }}
      >
        <FaLink size={30} />
      </Link>
      {/* </Link> */}
    </div>
  );
}

export default AboutLinkIcon;
