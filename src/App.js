import { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import CommentBox from "./components/CommentBox/CommentBox";
import CommentList from "./components/CommentList/CommentList";
import { authToggle } from "./actions";

class App extends Component {
  renderLoginButton = () => {
    return this.props.auth ? (
      <button onClick={() => this.props.authToggle(false)}>Logout</button>
    ) : (
      <button onClick={() => this.props.authToggle(true)}>Login</button>
    );
  };

  renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post Comment</Link>
        </li>
        <li>{this.renderLoginButton()}</li>
      </ul>
    );
  };

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { auth } = state;
  return { auth };
};

export default connect(mapStateToProps, { authToggle })(App);
