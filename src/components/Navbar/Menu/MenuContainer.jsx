import { connect } from "react-redux";
import Menu from "./Menu";

const mapStateToProps = (state) => {
   return {
      mainMenu: state.sidebar.menu.mainMenu,
      usersMenu: state.sidebar.menu.usersMenu,
      settingsMenu: state.sidebar.menu.settingsMenu
   }
}

const MenuContainer = connect(mapStateToProps)(Menu);

export default MenuContainer;