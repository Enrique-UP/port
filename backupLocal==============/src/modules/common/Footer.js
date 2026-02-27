import { Link } from 'react-router-dom';

// import '../sass/modules/footer.scss';

function Footer() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/aboutus">About Us</Link>
        <br />
        <Link to="/lifestyle">Life Style</Link>
        <br />
        <Link to="/contactus">Contact Us</Link>
      </nav>
    </>
  );
}

export default Footer;
