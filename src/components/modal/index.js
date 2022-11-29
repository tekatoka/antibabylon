import React, { useEffect } from "react";
import Modal from 'react-animated-modal';
import Scrollbar from 'perfect-scrollbar-react';
import { AppContext } from "../../App";

const ModalWindow = () => {
    const context = React.useContext(AppContext);

    useEffect(() => {
        if (context.modalVisible) {
            const modalWrapper = document.getElementsByClassName("react-modal-body");
            if (modalWrapper && modalWrapper.length > 0) modalWrapper[0].className = `react-modal-body pulse-enter-done modal-${context.modalStyle}`;
        }
    }, [context.modalStyle, context.modalVisible])

    return (
        <Modal
            visible={context.modalVisible}
            closemodal={() => context.hideModal()}
            type="pulse"
        >
            {context.modalStyle !== "default" ?
                <div>{context.modalContent}</div> :
                <div class='inner-wrapper'>
                    <Scrollbar options={{ suppressScrollX: true }}>
                        {context.modalContent}
                    </Scrollbar>
                </div>
            }
        </Modal>
    );
};

export default ModalWindow;