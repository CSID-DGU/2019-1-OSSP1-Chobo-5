import React, { Component } from "react";
import ImageDetailModal from "./image-detail-modal.component";
import { withWebId } from "@inrupt/solid-react-components";
import { SolidBackend } from "@services";
import { withToastManager } from "react-toast-notifications";

/**
 * show image with detailed descriptions, comments, likes
 */
class ImageDetailModalContainer extends Component<Props> {
  constructor(props) {
    super(props);
    this.uploadComment = this.uploadComment.bind(this);
    this.getComments = this.getComments.bind(this);
    this.commentChanged = this.commentChanged.bind(this);
    this.uploadLike = this.uploadLike.bind(this);
    this.getLikes = this.getLikes.bind(this);
    this.isLikedByUser = this.isLikedByUser.bind(this);
    this.state = {
      comment: "",
      comments: [],
      likes: [],
      users: [],
      isLikedByUser: false
    };
  }
  
  componentDidUpdate(prevProps, prevState) {
    if ((this.props.webId && this.props.webId !== prevProps.webId) || (this.props.image && this.props.image !== prevProps.image)) {
      this.getLikes();
      this.getComments();
    }
  }

  componentDidMount() {
    if (this.props.webId && this.props.image) {
      this.getLikes();
    }
  }


  /**
   * Get like and save to component's state
   */
  async getLikes() {
    const likes = await SolidBackend.getLikes(this.props.image.url);
    const isLikedByUser = this.isLikedByUser(likes);
    this.setState({ likes: likes, isLikedByUser: isLikedByUser });
  }

  /**
   * Check user cliked like
   * @param {Like[]} likes array of likes of the image.
   */
  isLikedByUser(likes: Like[]) : boolean {
    const myLike = likes.filter(like => { return like.creator === this.props.webId } );
    return myLike.length > 0;
  }

  /**
   * Add a new like, while saving it
   * into the component's state.
   */
  async uploadLike() {
    if (this.state.isLikedByUser === true) {
      this.props.toastManager.add("Cannot Like Twice", { appearance: "error" });
      return;
    }
    const like = await SolidBackend.uploadLike(this.props.webId, this.props.appFolder, this.props.image.url);
    this.props.toastManager.add("Image Liked", { appearance: "success" });
    this.setState({ likes: [ like ].concat(this.state.likes), isLikedByUser: true });
  }

  /**
   * Fetch comments for the given image,
   * saving them into the component's state.
   */
  async getComments() {
    const comments = await SolidBackend.getComments(this.props.image.url);
    const userIds = [...new Set(comments.map(comment => comment.creator)).add(this.props.webId)];
    const users = await SolidBackend.getPersons(userIds);
    const userMap = new Map();
    users.forEach(user => { userMap.set(user.webId, user) });
    this.setState({ comments: comments, users: userMap });
  }

  /**
   *Upload a new comment, while saving
   * it into the component's state.
   */
  async uploadComment() {
    if (this.state.comment === "") {
      this.props.toastManager.add("Type A Comment", { appearance: "error" });
      return;
    }
    const comment = await SolidBackend.uploadComment(this.props.webId, this.props.appFolder, this.props.image.url, this.state.comment);
    this.props.toastManager.add("Comment Added", { appearance: "success" });
    this.setState({ comments: [ comment ].concat(this.state.comments), comment: "" });
  }

  /**
   * Saves the current comment value to the component's state.
   * @param {Event} event An event triggering the comment change.
   */
  commentChanged(event) {
    this.setState({ comment: event.target.value });
  }

  render() {
    return (
      <ImageDetailModal
        open={this.props.open}
        image={this.props.image}
        creator={this.props.creator}
        likeCount={this.state.likes.length}
        isLikedByUser={this.state.isLikedByUser}
        onCloseModal={this.props.onClose}
        onLike={this.uploadLike}
        comment={this.state.comment}
        comments={this.state.comments}
        users={this.state.users}
        onAddComment={this.uploadComment}
        onCommentChange={this.commentChanged}
      />
    );
  }
}

export default withToastManager(withWebId(ImageDetailModalContainer));