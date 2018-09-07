import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";

import "antd/dist/antd.css";

class ServicePanel extends React.Component {
  getDummyData = () => {
    return Array(20)
      .fill(0)
      .map((item, index) =>
        this.getColumn({
          content: "Colunm No. " + ++index,
          props: {
            xs: 24,
            md: 12,
            lg: 8,
            xl: 6,
            xxl: 3
          }
        })
      );
  };

  getColumn = data => {
    return <Col {...data.props}>{data.content}</Col>;
  };

  render() {
    const colProps = {
      xs: 24,
      md: 12,
      lg: 8,
      xl: 6,
      xxl: 3
    };

    return (
      <div className="sp">
        <Row type="flex" justify="center" align="center" gutter={16}>
          {React.Children.map(this.props.children, (child, index) =>
            this.getColumn({
              content: child,
              props: colProps
            })
          )}
        </Row>
      </div>
    );
  }
}

ServicePanel.propTypes = {};

export default ServicePanel;
