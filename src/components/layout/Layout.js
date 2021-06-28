import cssClass from "./Layout.module.css";
import MainNavigation from "../layout/MainNavigation";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={cssClass.main}>{props.children}</main>
    </div>
  );
}
export default Layout;
