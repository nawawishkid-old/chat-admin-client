import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "antd";
import styled from "styled-components";
import TemplateFormQuery from "~/src/components/TemplateForm/Query";

const TemplateFormQueryBoardView = ({ templates }) =>
  templates.length === 0 ? <BoardEmpty /> : <Board templates={templates} />;

const BoardEmpty = styled(props => (
  <div {...props}>
    <h3>Such empty!</h3>
    <p>You don't have any template yet</p>
    <Link to="/admin/templates/new">
      <Button type="primary">Create</Button>
    </Link>
  </div>
))`
  height: 100%;
  text-align: center;
`;

const Board = ({ templates }) => {
  return (
    <Row>
      {templates.map((template, index) => (
        <ItemWrapper>
          <TemplateFormQuery
            key={index}
            name={template.name}
            fieldSchemes={template.inputs || []} // Temporary
            templateId={template._id}
          />
        </ItemWrapper>
      ))}
    </Row>
  );
};

const ItemWrapper = ({ children }) => (
  <Col xs={24} md={12} lg={8} style={{ padding: "0 1em", marginBottom: "1em" }}>
    {children}
  </Col>
);

export { TemplateFormQueryBoardView };

export default TemplateFormQueryBoardView;
