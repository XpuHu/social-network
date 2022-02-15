import { connect } from "react-redux";
import Menu from "./Menu";
import { compose } from "redux";
import { selectMainMenu, selectSettingsMenu, selectUsersMenu } from "../../../redux/selectors/menuSelectors";

const mapStateToProps = (state) => {
   return {
      mainMenu: selectMainMenu(state),
      usersMenu: selectUsersMenu(state),
      settingsMenu: selectSettingsMenu(state)
   }
}

export default compose(
   connect(mapStateToProps, null)
)(Menu);
