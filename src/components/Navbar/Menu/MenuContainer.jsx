import { connect } from "react-redux";
import Menu from "./Menu";

const mapStateToProps = (state) => {
   return {
      mainMenu: state.sidebar.menu.mainMenu,
      additionalMenu: state.sidebar.menu.additionalMenu
   }
}

const MenuContainer = connect(mapStateToProps)(Menu);

export default MenuContainer;