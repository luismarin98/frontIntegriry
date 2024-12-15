import { FC, MouseEvent, useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import LoginContext, { ILoginContext } from "./provider";
import { AuthDTO } from "../../Interfaces/Auth";

export const LOGIN_FEATURE: FC = () => {
    const initalValues: AuthDTO | undefined = undefined;
    const methods = useForm({ defaultValues: initalValues });

    const { post } = useContext(LoginContext) as ILoginContext;
    const { getValues, reset, register } = useForm<AuthDTO>();

    const handle_login = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const data = getValues();
        if (!data.username || !data.password) return;
        post(data);
        reset();
    }

    const handle_register = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

    }

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-1/3 h-1/3 flex justify-between items-center p-5 shadow-sm shadow-neutral-800 bg-neutral-500 bg-opacity-30 md:bg-opacity-30 dark:bg-neutral-600 dark:bg-opacity-20 backdrop-blur-md rounded-md">
                <div className="flex flex-col w-full h-full gap-3">
                    <div className="w-full flex flex-row items-center gap-2 text-white justify-between">
                        <div className="flex flex-row gap-2 items-center">
                            <div className="bg-logo-bg w-16 h-16 bg-center bg-cover rounded-full " />
                            <div className="flex flex-col">
                                <p className="font-bold text-xl">Banco</p>
                                <p className="font-bold text-xl">Guayaquil</p>
                            </div>
                        </div>
                        <p className="font-bold text-xl p-3 uppercase">Login</p>
                    </div>
                    <div className="text-white w-full h-full flex justify-center items-center">
                        <div className="flex flex-col gap-2 w-full">
                            <FormProvider {...methods}>
                                <label className="flex flex-row justify-around px-2">
                                    <p className="text-center w-full">Usuario</p>
                                    <input {...register('username')} type="text" className="ring-1 ring-white bg-transparent rounded-md w-full text-center" />
                                </label>
                                <label className="flex flex-row justify-around px-2">
                                    <p className="text-center w-full">Contraseña</p>
                                    <input {...register('password')} type="password" className="ring-1 ring-white bg-transparent rounded-md w-full text-center" />
                                </label>
                            </FormProvider>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <button onClick={handle_login} className="px-6 py-0.1 bg-transparent ring-1 ring-white rounded-md text-white hover:bg-neutral-50 hover:bg-opacity-20">Acceder</button>
                        <button onClick={handle_register} className="px-6 py-0.1 bg-transparent ring-1 ring-white rounded-md text-white hover:bg-neutral-50 hover:bg-opacity-20">Registrarse</button>
                    </div>
                </div>
            </div>
        </div>
    )
}