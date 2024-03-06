import { Link } from "react-router-dom";


const NavBar = () => {
    return (
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to='/addCoffee'>Add Coffee</Link>
            </li>
            <li>
              <Link to='/upDateCoffee'>Upddate Coffee</Link>
            </li>
            <li>
              <a>Item 4</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    );
};

export default NavBar;