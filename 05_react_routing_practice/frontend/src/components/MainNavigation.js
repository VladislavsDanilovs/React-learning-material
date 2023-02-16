import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

/* We have to use the special NavLink component
instead of the regular Link component.
NavLink is also imported from react-router-dom.
And we still add the to prop, but now we can add the className
and we could have added that to link as well.
But with NavLink, className receives a function which gets an object automatically provided
by React Router where we can get the isActive prop with help of destructuring, which is what I'm doing here.
And then we can use this isActive prop to dynamically add the active class,
which is defined in this MainNavigation.module CSS file.
And otherwise, alternatively use undefined or render undefined.
And then we can also add className here for my Events link.
And with that, we actually do HIGHLIGHT the active link, */

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              {" "}
              Home{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              {" "}
              Events{" "}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
