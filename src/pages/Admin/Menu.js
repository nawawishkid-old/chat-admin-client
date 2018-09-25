import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Menu } from "antd";
// import pages from "~/src/scenes/Admin/pages";
import pages from "~/src/data/menu.js";

const SubMenu = ({ children, ...rest }) => (
  <Menu.SubMenu {...rest}>{children}</Menu.SubMenu>
);
const MenuItem = ({ page, ...rest }) => (
  <Menu.Item {...rest}>
    <Link to={page.path}>{page.name}</Link>
  </Menu.Item>
);

const getKey = page => [page.type, page.name].join("_");

const SubMenuWithItems = props => {
  const { page, ...rest } = props;
  const items = [{ name: page.name, path: page.path }, ...page.items];

  return (
    <SubMenu title={page.title || "untitled"} key={getKey(page)} {...rest}>
      {items.map((item, index) => (
        <MenuItem page={item} key={getKey(item)} />
      ))}
    </SubMenu>
  );
};

const menuMaker = (page, index) => {
  const key = getKey(page);

  if (page.type === "item") {
    return <MenuItem page={page} key={key} />;
  }

  return <SubMenuWithItems page={page} />;
};

const AdminMenu = ({ match, ...rest }) => (
  <Menu
    onClick={() => console.log("onClickMenu()")}
    // defaultSelectedKeys={["1"]}
    // defaultOpenKeys={["sub1"]}
    mode="inline"
    theme="dark"
    {...rest}>
    {pages.map(menuMaker)}
  </Menu>
);

AdminMenu.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.object)
};

export { AdminMenu };

export default AdminMenu;
