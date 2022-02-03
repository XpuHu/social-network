import { connect } from "react-redux";
import Menu from "./Menu";
import { compose } from "redux";

const mapStateToProps = (state) => {
   return {
      mainMenu: state.sidebar.menu.mainMenu,
      usersMenu: state.sidebar.menu.usersMenu,
      settingsMenu: state.sidebar.menu.settingsMenu
   }
}

export default compose(
   connect(mapStateToProps)
)(Menu);
