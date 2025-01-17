import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButtonComponent extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export const ButtonComponent = ({ children, ...rest }: IButtonComponent) => {
    return <button className="flex items-center justify-center bg-transparent ring-1 ring-white text-white rounded-md px-6 py-1" {...rest}>{children}</button>
}