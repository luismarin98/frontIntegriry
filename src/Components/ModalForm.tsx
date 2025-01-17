import { Dialog, DialogTitle, DialogPanel } from "@headlessui/react";
import { ReactNode } from "react"

interface IModalForm {
    isOpen: boolean;
    closePromise: () => void;
    dialog_title: string;
    children: ReactNode
}

export const ModalForm = ({ children, isOpen, dialog_title, closePromise }: IModalForm) => {
    return <Dialog open={isOpen} onClose={closePromise} className="relative z-50">
        <div className="bg-neutral-800 bg-opacity-50 fixed inset-0 flex items-center justify-center w-full">
            <DialogPanel className='bg-neutral-50 bg-opacity-90 rounded-md p-2 w-5/6 md:w-1/4'>
                <DialogTitle className="font-bold text-xl text-black text-center w-full">{dialog_title}</DialogTitle>
                <div className="p-1">{children}</div>
            </DialogPanel>
        </div>
    </Dialog>
}