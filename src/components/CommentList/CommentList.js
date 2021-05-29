import { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class CommentList extends Component {
  componentDidMount() {
    this.props.fetchComments();
  }

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

export default connect(mapStateToProps, actions)(CommentList);
