import "./Modal.scss"
import {MdClear} from "react-icons/md";

function Modal({children, onClose, show, title, actionName, actionFunction}) {
    return (
        show?
        <div className="modal__back" onClick={onClose}>
            <div className="modal__body" onClick={(event)=>{event.stopPropagation()}}>
                <div className="modal__header">
                    <div className="modal__title">{title}</div>
                    <button className="icon-button modal__exit-button" onClick={onClose}><MdClear/></button>
                </div>
                    <form  onSubmit={e => {
                        actionFunction(e);
                    }}
                    className="modal__menu">
                        <div>{children}</div>
                        <input type="submit"
                            className="modal__action"
                               value={actionName}
                        ></input>
                    </form>

            </div>
        </div>:
            null
    );
}

export default Modal;
