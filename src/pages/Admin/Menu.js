import React from "react";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";
import { Menu } from "antd";
import { withAuth } from "~/src/services/auth";
import { withAdminContext } from "./context";
import pages from "~/src/data/menu";

const menuMaker = (page, index) => {
  if (page.type === "item") {
    // console.log("key: ", page.path);
    return (
      <Menu.Item key={page.path}>
        <Link to={page.path}>{page.name}</Link>
      </Menu.Item>
    );

    return <MenuItem page={page} key={page.path} itemKey={page.path} />;
  }

  // If submenu has its own path (page), add it to the first of its children.
  const items = page.path
    ? [{ name: page.name, path: page.path }, ...page.items]
    : page.items;
  const key = "sub_" + (page.path ? page.path : page.items[0].path);
  // console.log("subKey: ", key);

  return (
    <Menu.SubMenu title={page.title || "untitled"} key={key}>
      {items.map(item => (
        <Menu.Item key={item.path}>
          <Link to={item.path}>{item.name}</Link>
        </Menu.Item>
      ))}
    </Menu.SubMenu>
  );

  return <SubMenuWithItems page={page} key={"sub_" + index} />;
};

const LogoutMenu = withAuth(({ logout, ...rest }) => (
  <Menu.Item {...rest} onClick={() => logout()}>
    Logout
  </Menu.Item>
));

/**
 * Currently unavailable to automatically open submenu when URL changed
 */
class AdminMenuWithoutRouter extends React.Component {
  render() {
    const { sidebar, location, logout } = this.props;
    const { pathname } = location;
    const selectedKeys = [pathname];
    const openKeys = ["sub_" + pathname];

    return (
      <Menu
        onClick={() => sidebar.handleClose()}
        defaultSelectedKeys={selectedKeys}
        defaultOpenKeys={openKeys}
        selectedKeys={selectedKeys}
        mode="inline">
        {pages.map(menuMaker)}
        <LogoutMenu />
      </Menu>
    );
  }
}

AdminMenuWithoutRouter.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.object)
};

const AdminMenu = withAdminContext(withRouter(AdminMenuWithoutRouter));

export { AdminMenu };

export default AdminMenu;
