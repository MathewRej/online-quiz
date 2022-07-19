import React from "react";
import Modal from 'react-modal';
import { useState } from "react/cjs/react.development";


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: "rgb(159 163 163)"
    },
  };
const ModalComponent = () => {
    const [modalOpen, setModalOpen] = useState(false);
    console.log('modalOpen: ', modalOpen);
    const closeModal = () => (
        setModalOpen(false)
    )

    return (
        <div>
            <Modal
                isOpen={modalOpen}
                onRequestClose = {closeModal}
                style={customStyles}
            >
                    hiiiiiiiiiiiiiiiiiiiiiii

            </Modal>
            <div>
                |<button className="save-button"
                    onClick ={ () => setModalOpen(true)}
                >

                </button>
            </div>
        </div>
    )
}
export default ModalComponent;