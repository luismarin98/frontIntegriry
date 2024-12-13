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
        <div className="bg-neutral-800 bg-opacity-40 fixed inset-0 flex w-full items-center justify-center">
            <DialogPanel className='bg-neutral-50 bg-opacity-90 rounded-md p-2'>
                <DialogTitle className="font-bold text-black text-center w-full">{dialog_title}</DialogTitle>
                <div className="p-5">{children}</div>
            </DialogPanel>
        </div>
    </Dialog>
}