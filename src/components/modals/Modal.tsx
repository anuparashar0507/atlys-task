
import SignUpForm from "../forms/SignUpForm";
type ModalProps = {
    onClose: React.Dispatch<React.SetStateAction<boolean>>
}
const Modal = ({onClose}: ModalProps) => {
  return (
  <div
      aria-hidden="true"
   className={
        "flex  fixed z-50  overflow-hidden justify-center items-center w-full inset-0 outline-none focus:outline-none bg-black/50 bg-opacity-60 backdrop-blur-sm"
      }  onClick={() => onClose(false)} >
    <div className="relative p-4 w-full max-w-md max-h-full">
    <SignUpForm />
    </div>
</div>
  );
};

export default Modal;


