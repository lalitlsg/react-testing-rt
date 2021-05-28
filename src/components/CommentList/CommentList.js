import { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
  renderComments = () => {
    return this.props.comments.map((c) => <li key={c}>{c}</li>);
  };

  render() {
    return (
      <>
        <h3>Comments</h3>
        <div>
          <ul>{this.renderComments()}</ul>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { comments } = state;
  return { comments };
};

export default connect(mapStateToProps)(CommentList);
