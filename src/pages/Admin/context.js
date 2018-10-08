import React from "react";

const Context = React.createContext();
const AdminContextConsumer = Context.Consumer;

class AdminContextProvider extends React.Component {
  state = {
    sidebar: {}
  };

  sidebar = {
    open: () => console.log('open!!!') || this.setState({ ...{ sidebar: { isVisible: true } } }),
		handleClose: () => this.setState({ ...{ sidebar: { isVisible: false } } })
  };

  render() {
    const { children } = this.props;

		this.sidebar.isVisible = this.state.sidebar.isVisible;

    return (
      <Context.Provider
        value={{
          sidebar: this.sidebar
        }}>
        {children}
      </Context.Provider>
    );
  }
}

const withAdminContext = Component => props => (
  <AdminContextConsumer>
    {contextProps => <Component {...contextProps} {...props} />}
  </AdminContextConsumer>
);

export { AdminContextProvider, AdminContextConsumer, withAdminContext };
