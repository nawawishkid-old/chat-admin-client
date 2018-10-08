import React from "react";
import { Drawer } from "antd";
import { withAdminContext } from "./context";

// Could not use styled components :(
const style = {
  padding: "3em 0",
  zIndex: 1
};

const PageAdminSidebar = withAdminContext(({ sidebar, children, ...rest }) => {
  const { isVisible, handleClose } = sidebar;

  return (
    <Drawer
      style={style}
      placement="left"
      visible={isVisible}
      onClose={handleClose}
      {...rest}>
      {children}
    </Drawer>
  );
});

export { PageAdminSidebar };

export default PageAdminSidebar;
