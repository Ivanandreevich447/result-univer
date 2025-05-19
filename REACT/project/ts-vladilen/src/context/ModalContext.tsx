import { createContext } from "react";

interface IModalContext {
    modal: boolean
    open: () => void
    close: () => void
}

const ModalContext = createContext<IModalContext>({
    modal: false,
    open: ()=> {},
    close: ()=> {},

})
export default ModalContext;

export const ModalState = () => {
    return(
        
    )
}