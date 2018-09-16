import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import pages from "~/src/scenes/Admin/pages";

const SubMenu = ({ children, ...rest }) => (
  <Menu.SubMenu {...rest}>{children}</Menu.SubMenu>
);
const MenuItem = ({ prefix, page, ...rest }) => (
  <Menu.Item {...rest}>
    <Link to={prefix + page.path}>{page.name}</Link>
  </Menu.Item>
);

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
      {...rest}
    >
      {pages.map(page => {
        if (!page.hasOwnProperty("menu")) {
          console.log("Skip menu: ", page.name);
          return null;
        }

        return page.menu.type === "sub" ? (
          <SubMenu
            title={page.menu.title || "untitled"}
            key={"sub" + ++subMenuKey}
          >
            {<MenuItem prefix={match.url} page={page} key={++menuItemKey} />}
            {page.menu.items.map(item => {
              // console.log("item.name: ", item);
              if (!item.hasOwnProperty("menu")) {
                console.log("Skip menu: ", item.name);
                return null;
              }

              return (
                <MenuItem
                  prefix={match.url + page.path}
                  page={item}
                  key={++menuItemKey}
                />
              );
            })}
          </SubMenu>
        ) : (
          <MenuItem prefix={match.url} page={page} key={++menuItemKey} />
        );
      })}
    </Menu>
  );
};

export { AdminMenu };

export default AdminMenu;
