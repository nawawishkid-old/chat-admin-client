import React from "react";
import PropTypes from "prop-types";
import Api from "../../services/api/index";
import SFPresentation from "../Presentation/index";
import { Button, Input, Alert } from "antd";
import key from "keymaster";

class ServiceFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      copying: false,
      isCopied: false,
      isLoading: false,
      output: "",
      errorText: "",
      params: {}
    };

    if (typeof props.controllers !== "undefined") {
      this.controllers = this.modifyControllersComponent();
    }

    this.inputs = this.modifyInputComponents();
    this.output = React.createRef();
  }

  /**
   * ======= Input management ========
   */
  modifyInputComponents = () => {
    return this.props.inputs.map((input, index) => {
      console.log(input);
      const props = {
        onKeyPress: this.getInputOnKeyPressListener(input),
        onChange: this.getInputOnChangeListener(input)
      };
      const newInput = this.modifySubComponent(input, props);

      this.setInitialParams(newInput.props.name, newInput.props.defaultValue);

      return newInput;
    });
  };

  /**
   * @param {*} maybeValue 'Maybe' because it may be a DOM value or an SyntheticEvent object which will be given by Ant Design Component (-_-')
   */
  getInputOnChangeListener = input => {
    return maybeValue => {
      const value = this.evaluateAntDesignListenerParameter(maybeValue);

      if (typeof input.props.onChange === "function") {
        input.props.onChange(value);
      }

      this.updateParams(input.props.name, value);
    };
  };

  getInputOnKeyPressListener = input => {
    return event => {
      const value = this.evaluateAntDesignListenerParameter(event);
      const currentKeys = key.getPressedKeyCodes();

      if (typeof input.props.onKeyPress === "function") {
        input.props.onKeyPress(value);
      }

      console.log(currentKeys);

      if (currentKeys[0] === 16 && currentKeys[1] === 13) {
        this.copyOutputText();
      } else if (currentKeys[0] === 13) {
        this.handleClick(event);
      }
    };
  };

  /**
   * Evaluate whether it is DOM value or React SyntheticEvent
   */
  evaluateAntDesignListenerParameter = maybeValue => {
    let value;

    if (typeof maybeValue === "object") {
      value =
        maybeValue.constructor.name === "SyntheticEvent"
          ? maybeValue.target.value
          : maybeValue;
    } else {
      value = maybeValue;
    }

    return value;
  };

  setInitialParams = (key, value) => {
    // No problems here, we call this method on instantiation
    this.state.params[key] = value;
  };

  updateParams = (key, value) => {
    const { params } = this.state;

    params[key] = value;

    this.setState({ params: params });
  };

  /**
   * ======= Controller management ========
   */
  handleClick = event => {
    this.fetchData(event);
    this.setState({ isLoading: true });
  };

  /**
   * Fetch data from API
   *
   * @return void
   */
  fetchData = event => {
    const { method, url, onSuccess, onError } = this.props.request;

    new Api(method, url, this.state.params)
      .then(data => {
        console.log(data);
        const userStates = onSuccess(data, this);
        const states = {
          ...this.state,
          ...userStates,
          isLoading: false
        };

        this.setState(states);
      })
      .catch(err => {
        const userStates = onError(err, this);
        const states = {
          ...this.state,
          ...userStates,
          isLoading: false
        };

        this.setState(states);
      });
  };

  modifyControllersComponent = () => {
    return this.props.controllers.map((controller, index) => {
      const listeners = this.getSubComponentEventListeners(controller.props);

      return this.modifySubComponent(controller, listeners);
    });
  };

  copyOutputText = () => {
    const output = this.output.current.textAreaRef;

    if (output.value === "") {
      return;
    }

    output.select();
    document.execCommand("copy");

    return true;
  };

  /**
   * ========== Common methods ============
   */
  modifySubComponent = (component, additionalProps) => {
    const props = {
      ...component.props,
      ...additionalProps
    };

    return React.cloneElement(component, props);
  };

  getSubComponentEventListeners = props => {
    let listeners = {};

    for (let key in props) {
      if (key.substr(0, 2) === "on") {
        listeners[key] = event => props[key](event, this);
      }
    }

    return listeners;
  };

  /**
   * ============= Return component methods ===============
   */
  getSubmitController = () => {
    const SubmitBtn = (
      <Button
        loading={this.state.isLoading}
        type="primary"
        onClick={this.handleClick}
      >
        Get
      </Button>
    );

    return this.state.output === "" ? (
      SubmitBtn
    ) : (
      <React.Fragment>
        {SubmitBtn}
        <Button
          onClick={() => {
            this.copyOutputText();
            this.setState({ isCopied: true });
          }}
        >
          {this.state.isCopied ? "Copied" : "Copy"}
        </Button>
      </React.Fragment>
    );
  };

  getTextAreaOutput = () => {
    const { TextArea } = Input;

    return (
      <TextArea
        defaultValue=""
        onChange={event => this.setState({ output: event.target.value })}
        ref={this.output}
        onCopy={event => {
          console.log("I'm copied!!!");
        }}
      />
    );
  };

  getErrorOutput = () => {
    return this.state.errorText === "" ? (
      ""
    ) : (
      <Alert
        type="error"
        message="Error"
        description={this.state.errorText}
        closable
        onClose={event => this.setState({ errorText: "" })}
      />
    );
  };

  /**
   * ================== Lifecycle methods ================
   */
  componentDidUpdate() {
    if (this.state.isCopied) {
      setTimeout(() => this.setState({ isCopied: false }), 2000);
    }
  }

  render() {
    const controllers = [...this.controllers, this.getSubmitController()];

    return (
      <SFPresentation
        title={this.props.title}
        inputs={this.inputs}
        controllers={controllers}
        error={this.getErrorOutput()}
        output={this.getTextAreaOutput()}
      />
    );
  }
}

ServiceFormContainer.defaultProps = {
  title: "",
  inputs: [],
  controllers: [],
  request: {}
};

ServiceFormContainer.propTypes = {
  title: PropTypes.string,
  inputs: PropTypes.arrayOf(PropTypes.element).isRequired,
  controllers: PropTypes.arrayOf(PropTypes.element).isRequired
  // request: PropTypes.objectOf(),
};

export default ServiceFormContainer;
