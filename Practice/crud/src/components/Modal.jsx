import {forwardRef, useImperativeHandle, useRef} from "react";
import Button from "./Button";
import {createPortal} from "react-dom";

const SEVERITY = {
  default: {
    className: 'blue'
  },
  danger: {
    className: 'red'
  },
  success: {
    className: 'green'
  }
};

const Modal = forwardRef(function Modal({severity, children, captionButton}, ref) {
  const dialog = useRef();
  const currentSeverity = !severity ? SEVERITY['default'] : SEVERITY[severity];
  const className = `bg-${currentSeverity.className}-500 hover:bg-${currentSeverity.className}-700 font-medium text-white w-full justify-center mt-5`;

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    }
  });

  return createPortal(
      <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
        {children}
        <form method="dialog" className="mt-4 text-right">
          <Button className={className}>
            <p>{captionButton}</p>
          </Button>
          {/*<Button className="bg-red-500 hover:bg-red-700 font-medium text-white w-full justify-center mt-5">*/}
          {/*  <p>{captionButton}</p>*/}
          {/*</Button>*/}
        </form>
      </dialog>,
      document.getElementById('modal')
  );
});

export default Modal;