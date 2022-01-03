import { Link } from 'react-router-dom';

function Header () {
  return (
    <div className="header">
      <h1>
        <Link to="/">English Vocabulary</Link>
      </h1>
      <div className="menu">
        <a href="#x" className="link">
          Add word
        </a>
        <a href="#x" className="link">
          Add Day
        </a>
      </div>
    </div>
  )
};

export default Header;