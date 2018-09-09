import React from "react";
import { Layout } from "antd";

const { Header } = Layout;

const AdminHeader = props => <Header>{props.children}</Header>;

export default AdminHeader;
