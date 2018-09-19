import React from "react";
import { Link } from "react-router-dom";
import Page from "~/src/components/Page";
import ButtonLogout from "../components/buttons/Logout"; // using `~/src` is not working... :(
import { withAuth } from "~/src/services/auth";

const PageHome = ({ isAuth }) => (
  <Page title="Homeeeeeeeeeee">
    <h1>Chat Admin</h1>
    <small>An app by Nawawish Samerpark</small>
    {isAuth ? (
      <div>
        <p>
          <Link to="/admin">Admin page</Link>
        </p>
        <p>
          <ButtonLogout />
        </p>
      </div>
    ) : (
      <div>
        <Link to="/signup">Sign up</Link> or <Link to="/login">Log in</Link>
      </div>
    )}
  </Page>
);

export { PageHome };

export default withAuth(PageHome);
