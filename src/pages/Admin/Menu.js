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
const SubMenuWithItems = props => {
  const { page, menuItemKey, subMenuKey, ...rest } = props;

  return (
    <SubMenu
      title={page.title || "untitled"}
      key={"sub" + subMenuKey}
      {...rest}>
      {<MenuItem page={page} key={menuItemKey} />}
      {page.items.map((item, index) => (
        <MenuItem page={item} key={menuItemKey + (index + 1)} />
      ))}
    </SubMenu>
  );
};

const AdminMenu = ({ match, ...rest }) => {
  let menuItemKey = 0;
  let subMenuKey = 0;

  return (
    <Menu
      onClick={() => console.log("onClickMenu()")}
      // defaultSelectedKeys={["1"]}
      // defaultOpenKeys={["sub1"]}
      mode="inline"
      theme="dark"
      {...rest}>
      {pages.map((page, index) => {
        return page.type === "sub" ? (
          <SubMenuWithItems
            page={page}
            menuItemKey={++menuItemKey}
            subMenuKey={++subMenuKey}
            key={index}
          />
        ) : (
          <MenuItem page={page} key={++menuItemKey} />
        );
      })}
    </Menu>
  );
};

AdminMenu.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.object),
};

export { AdminMenu };

export default AdminMenu;
