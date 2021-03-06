import { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import requireAuth from "../hoc/requireAuth";

class CommentBox extends Component {
  state = {
    comment: "",
  };

  handleChange = (e) => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.saveComments(this.state.comment);
    this.setState({ comment: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Enter Comment</h3>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default connect(null, actions)(requireAuth(CommentBox));
