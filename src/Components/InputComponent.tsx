import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface IInputComponent extends InputHTMLAttributes<HTMLInputElement> {
    children: string;
    register: UseFormRegisterReturn;
}

export const InputComponent = ({ children, register, ...rest }: IInputComponent) => {

    return (
        <div className="w-full md:w-5/6 flex flex-col md:flex-row justify-around items-center gap-1 p-1">
            <label className="w-full md:w-5/6 md:text-center text-md font-semibold">{children}</label>
            <input className='w-full bg-transparent ring-1 ring-white rounded-md' {...register} {...rest} />
        </div>
    );
}