import React from "react";
import Modal from "react-responsive-modal";

/**
 * folder model component
 * @param {Props} props Given props.
 */
// choose default folder
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
        앱 폴더를 설정하세요.
      </h3>
      <label>
        {props.baseUrl}
      </label>
      <div className="input-wrap">
        <label>
          폴더 이름
        </label>
        <input
          type="text"
          placeholder="예: Chobo"
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