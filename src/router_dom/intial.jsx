import { Link } from "react-router-dom";

function Intial() {
  return (
    <>
      <ul>
        <li>
          <Link to="/first">First</Link>
        </li>
        <li>
          <Link to="/second">Second</Link>
        </li>
        <li>
          <Link to="/third">Third</Link>
        </li>
      </ul>
    </>
  );
}

export default Intial;
