import React from "react";
import Modal from 'react-animated-modal';
import Scrollbar from 'perfect-scrollbar-react';
import { AppContext } from "../../App";

const ModalWindow = () => {
    const context = React.useContext(AppContext);

    return (
        <Modal
            visible={context.modalVisible}
            closemodal={() => context.hideModal()}
            type="pulse"
        >
            <div class='inner-wrapper'>
                <Scrollbar options={{ suppressScrollX: true }}>
                    {context.modalContent}
                </Scrollbar>
            </div>

        </Modal>
    );
};

export default ModalWindow;