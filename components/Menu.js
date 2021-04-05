
import "../styles/drawerstyle.module.css"

import Link from 'next/link'
/*
import insta from "../public/insta.svg"
import linked from "../public/linkedin.svg"
import git from "../public/git.svg"
*/
const Drawer = props => {
  return (
    <div
      className="drawer-wrapper"
      style={{ display: props.active ? "flex" : "none" }}
      onClick={props.drawerSwitch}
    >
      <ul>
        <li>
          <Link href="/">
            <h1>Home</h1>
          </Link>
        </li>
        <li>
          <h1>Blog</h1>
        </li>
        <li>
          <h1>Contact</h1>
        </li>
        <li>
          <Link href="/about">
            <h1>About</h1>
          </Link>
        </li>
      </ul>

      <div className="socialMediaLinks">
        <a href="https://www.instagram.com/raphaelwirawan">
          <img src='../public/insta.svg' alt="instagram" />
        </a>
        <a href="https://www.github.com/RaphaelWirawan">
          <img src='../public/git.svg' alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/raphaelwirawan">
          <img src='../public/linkedin.svg' alt="linked in" style={{ marginRight: 0 }} />
        </a>
      </div>
    </div>
  )
}

export default Drawer