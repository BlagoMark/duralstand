import React from "react";
import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import HeaderContainer from "./components/Header/HeaderContainer";
import MenuContainer from "./components/Menu/MenuContainer";
import { compose } from "redux";
import { connect, Provider } from "react-redux";
import { withRouter } from "./components/Hoc/withRouter";
import { initialize } from "./redux/appReducer";
import Preloader from "./components/common/preloader/preloader";
import store from "./redux/storeRedux";
import { withSuspense } from "./components/Hoc/withSuspense";
import { Settings } from "./components/Settings/Settings";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const LoginContainer = React.lazy(() =>
  import("./components/Login/LoginContainer")
);

class App extends React.Component {
  componentDidMount() {
    this.props.initialize();
  }
  render() {
    return (
      <div className="App">
        {!this.props.initialized ? (
          <Preloader />
        ) : (
          <>
            <HeaderContainer />
            <MenuContainer />
            <Routes>
              <Route
                path="/profile/*"
                element={withSuspense(ProfileContainer)}
              />
              {/* <Route path="/profile/*" element={<ProfileContainer />} /> */}
              <Route
                path="/dialogs/*"
                element={withSuspense(DialogsContainer)}
              />
              <Route path="/news/*" element={<News />} />
              <Route path="/music/*" element={<Music />} />
              <Route path="/users/*" element={withSuspense(UsersContainer)} />
              <Route path="/login/*" element={withSuspense(LoginContainer)} />
              <Route path="/settings/*" element={withSuspense(Settings)} />
            </Routes>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initialize })
)(App);

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initialize })
)(App);

export const MainApp = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};
