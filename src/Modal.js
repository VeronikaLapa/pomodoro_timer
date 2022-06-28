import "./Modal.scss"
import {MdClear} from "react-icons/md";

function Modal({children, onClose, show, title}) {
    return (
        show?
        <div className="modal__back" onClick={onClose}>
            <div className="modal__body">
                <div className="modal__header">
                    <div className="modal__title">{title}</div>
                    <button className="icon-button modal__exit-button" onClick={onClose}><MdClear/></button>
                </div>
                <div>{children}</div>
                <div>
                    <button
                        onClick={e => {
                            onClose(e);
                        }}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>:
            null
    );
}

export default Modal;
