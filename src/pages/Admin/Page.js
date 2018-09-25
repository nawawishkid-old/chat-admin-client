import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1em;
`;

const AdminPage = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
);

export { AdminPage };

export default AdminPage;
