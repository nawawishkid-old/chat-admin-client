import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import styled from "styled-components";

const TemplateBoard = ({
  header,
  children,
  emptyComponent,
  renderEmpty: Empty
}) => {
  let EmptyComponent = emptyComponent || Empty;

  if (typeof EmptyComponent === "undefined") {
    EmptyComponent = BoardEmpty;
  }

  return (
    <div>
      <h1>{header}</h1>
      <div>
        {children.length === 0 ? (
          <EmptyComponent />
        ) : (
          <Board header={header}>{children}</Board>
        )}
      </div>
    </div>
  );
};

const Board = ({ children }) => (
  <Row>
    {React.Children.map(children, (child, index) => (
      <ItemWrapper key={index}>{child}</ItemWrapper>
    ))}
  </Row>
);

const BoardEmpty = styled(props => (
  <div {...props}>
    <h3>Such empty!</h3>
  </div>
))`
  height: 100%;
  text-align: center;
`;

const ItemWrapper = styled(({ children, ...rest }) => (
  <Col xs={24} md={12} lg={8} {...rest}>
    {children}
  </Col>
))`
  margin-bottom: 1em;
	transition: width .4s;

  @media only screen and (min-width: 768px) {
    padding: 0 1em;
  }
`;

export { TemplateBoard };

export default TemplateBoard;
