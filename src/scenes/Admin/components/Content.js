import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import pages from "~/src/scenes/Admin/pages";
import NotFound from "~/src/scenes/NotFound";

const { Content } = Layout;

// Render recursively
const renderer = (pages, prefix, key) =>
  pages.map(page => {
    const realPrefix = prefix + page.path;

    if (Array.isArray(page.children)) {
      return renderer(page.children, realPrefix, key);
    }

    return <Route path={realPrefix} component={page.component} key={++key} />;
  });

const AdminContent = ({ match }) => {
  let key = 0;

  return (
    <Content>
      <Switch>
        {renderer(pages, match.url, key)}
        <Route key={++key} component={NotFound} />
      </Switch>
    </Content>
  );
};

export { AdminContent };

export default AdminContent;
