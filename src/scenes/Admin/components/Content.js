import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

const AdminContent = props => <Content>{props.children}</Content>;

export { AdminContent };

export default AdminContent;
