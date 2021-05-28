import { Component } from "react";

class CommentBox extends Component {
  state = {
    comment: "",
  };

  handleChange = (e) => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = () => {
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

export default CommentBox;
