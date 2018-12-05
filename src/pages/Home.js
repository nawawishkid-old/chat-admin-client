import React from "react";
import { Link } from "react-router-dom";
import Page from "~/src/components/Page";
import ButtonLogout from "../components/buttons/Logout"; // using `~/src` is not working... :(
import { withAuth } from "~/src/services/auth";
import Logo from "~/src/components/Logo";
import styled from "styled-components";

const StyledLogo = styled(Logo)`
  max-width: 300px;
`;

const NoAuthPageHome = ({ isAuth }) => (
  <Page title="Homeeeeeeeeeee" style={{ textAlign: "center" }}>
    <StyledLogo />
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

const PageHome = withAuth(NoAuthPageHome);

export { PageHome };

export default PageHome;
