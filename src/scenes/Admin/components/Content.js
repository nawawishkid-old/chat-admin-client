import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import pages from "~/src/scenes/Admin/pages";
import NotFound from "~/src/scenes/NotFound";

const { Content } = Layout;

const makeRoutes = (accumulator, pages, prefix, key) => {
  return [accumulator, ...pages].reduce((acc, page) => {
    const realPrefix = prefix + page.path;

    // Push submenu's item before pushing the submenu,
    // because `react-router-dom`'s <Switch> behaviour
    // that loads the first matched <Route>'s path immediately.
    // e.g. push `/inputs/new` before `/inputs`.
    if (page.hasOwnProperty("menu") && page.menu.type === "sub") {
      makeRoutes(acc, page.menu.items, realPrefix, key);
    }

    acc.push(
      <Route path={realPrefix} component={page.component} key={++key} />
    );

    return acc;
  });
};

const AdminContent = ({ match }) => {
  let key = 0;

  return (
    <Content style={{ height: "100vh", overflowY: "auto" }}>
      <Switch>
        {makeRoutes([], pages, match.url, key)}
        <Route key={++key} component={NotFound} />
      </Switch>
    </Content>
  );
};

export { AdminContent };

export default AdminContent;
