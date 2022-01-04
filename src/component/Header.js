import { Link } from 'react-router-dom';

function Header () {
  return (
    <div className="header">
      <h1>
        <Link to="/">English Vocabulary</Link>
      </h1>
      <div className="menu">
        <Link to="/create_word" className="link">
          Add Word
        </Link>
        <Link to="/create_day" className="link">
          Add Day
        </Link>
      </div>
    </div>
  )
};

export default Header;