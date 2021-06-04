import { Component } from "react";
import { connect } from "react-redux";

const requireAuth = (ChildComponent) => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.isLoggedIn();
    }
    componentDidUpdate() {
      this.isLoggedIn();
    }

    isLoggedIn = () => {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    };
    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = (state) => {
    const { auth } = state;
    return { auth };
  };

  return connect(mapStateToProps)(ComposedComponent);
};

export default requireAuth;
