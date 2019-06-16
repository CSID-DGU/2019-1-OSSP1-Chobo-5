import React, { Component } from "react";
import ImageUploader from "./image-uploader.component";
import { withWebId } from "@inrupt/solid-react-components";
import SolidBackend from "../../services/solidBackend";

/**
 * handles selecting images, setting access rights, uploading new images.
 */
class ImageUploaderContainer extends Component<Props> {
  constructor(props) {
    super(props);
    this.selectedImage = this.selectedImage.bind(this);
    this.descriptionChanged = this.descriptionChanged.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.selectedShareOptions = this.selectedShareOptions.bind(this);
    this.publicChanged = this.publicChanged.bind(this);
    this.setAvailableShareOptions = this.setAvailableShareOptions.bind(this);
    this.state = {
      image: "",
      description: "",
      availableShareOptions: [],
      selectedShareOptions: [],
      public: true
    };
  }

  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.public !== prevState.public && this.state.public === false && this.state.availableShareOptions.length === 0) {
      this.setAvailableShareOptions();
    }
  }

  /**
   * selected image to component's state.
   * @param {FileList} image is file list containing image.
   */
  selectedImage(image) {
    this.setState({ image: image });
  }

  /**
   * current description value to component's state.
   * @param {Event} event triggere the description change.
   */
  descriptionChanged(event) {
    this.setState({ description: event.target.value });
  }

  /**
   * While saving to component's state, initiates the upload of a new image
   */
  async uploadImage() {
    const imageUrl = await SolidBackend.uploadImage(this.state.image.fileList[0],
                                                    this.state.description,
                                                    this.props.webId,
                                                    this.props.appFolder,
                                                    this.state.public,
                                                    this.state.selectedShareOptions.map(option => option.value));
    this.props.addImage(imageUrl);
    this.setState({ image: "", description: "", selectedShareOptions: [], public: true });
  }

  /**
   * Saves the share options to the component's state.
   * @param {*} selectedShareOptions Selected users to share with.
   */
  selectedShareOptions(selectedShareOptions) {
    this.setState({ selectedShareOptions });
  }

  /**
   * Saves the current public toggle state to the component's state.
   * @param {Event} event event trigger the public change.
   */
  publicChanged(event) {
    this.setState({ public: event.target.checked });
  }

  /**
   * Start fetching user's friends for sharing options,
   * and save to component's state.
   */
  async setAvailableShareOptions() {
    const friends = await SolidBackend.getFriends(this.props.webId);
    const options = friends.map(friend => { return { value: friend.webId, label: friend.name, image: friend.image } });
    this.setState({ availableShareOptions: options });
  }

  render() {
    return (
      <ImageUploader
        image={this.state.image.base64}
        description={this.state.description}
        onImageSelection={this.selectedImage}
        onDescriptionChange={this.descriptionChanged}
        onUploadClick={this.uploadImage}
        shareValue={this.state.selectedShareOptions}
        shareOptions={this.state.availableShareOptions}
        onSelectedShareOptions={(this.selectedShareOptions)}
        public={this.state.public}
        onPublicChanged={this.publicChanged}
      />
    );
  }
}

export default withWebId(ImageUploaderContainer);