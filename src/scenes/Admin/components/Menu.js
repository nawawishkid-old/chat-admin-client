import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const AdminMenu = ({ pages, ...rest }) => (
  <Menu
    onClick={() => console.log("onClickMenu()")}
    // defaultSelectedKeys={["1"]}
    // defaultOpenKeys={["sub1"]}
    mode="inline"
    theme="dark"
    {...rest}
  >
    {pages.map((page, index) => (
      <Menu.Item key={index}>
        <Link to={page.path}>{page.name}</Link>
      </Menu.Item>
    ))}
  </Menu>
);

export default AdminMenu;
