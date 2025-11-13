import logo from "../assets/logo-tuhoc.png";
//import "./Header.css";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1 className={classes.paragraph}>CSS trong React</h1>
      <h2 className={classes["my-paragraph"]}>CSS trong React</h2>
      <p style = {{
        color: "#555",
        backgroundColor: "#f0f0f0",
      }}>Tìm hiểu về css trong react cho người mới.</p>
    </header>
  );
}
