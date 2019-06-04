import React from "react";
import Modal from "react-responsive-modal";

/**
 * folder model component
 * @param {Props} props Given props.
 */
// set default folder
export const FolderModal = (props: Props) => {
  return (
    <Modal
      open={props.open}
      onClose={props.onCloseModal}
      closeOnEsc={props.userRequested}
      closeOnOverlayClick={props.userRequested}
      showCloseIcon={props.userRequested}
      center
    >
      <h3>
        Choose an application folder
      </h3>
      <label>
        {props.baseUrl}
      </label>
      <div className="input-wrap">
        <label>
          Folder name: (e.g. Chobo)
        </label>
        <input
          type="text"
          placeholder="Application folder..."
          value={props.folder}
          onChange={props.onFolderChange}
          invalid={props.invalid}
        />
      </div>
      <button
        onClick={props.onFolderConfirm}
        disabled={!props.folder}
      >
        Save
      </button>
    </Modal>
  );
};

export default FolderModal;