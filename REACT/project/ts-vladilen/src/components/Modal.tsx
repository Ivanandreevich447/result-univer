import React from "react";


//задаю тип пропсу-чилдрен
interface ModalProps {
    children : React.ReactNode,
    title: string,
    onClose: () => void
    }


    //props.children - зарезервированный пропс в него попадает все, что задаем внутренним контентом
const Modal = ({children, title, onClose}:ModalProps) => {
  return (
    <>
    <div className="fixed bg-black/50 top-0 right-0 left-0 bottom-0" onClick={onClose}></div>
    <div
    className="w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2 "
    >
<h1 className="text-2xl text-center mb-2" >{title}</h1>

{children}
    </div>

    </>
  );
};

export default Modal;
