import { FC, MouseEvent, useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import DashboardContext, { IDashboardContext } from "./provider";
import { ModalForm } from "../../Components/ModalForm";
import { jwtDecode } from "jwt-decode";
import { ClienteType } from "../../Interfaces/ClienteType";

interface IButtonNavigation {
    title: string;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const DASHBOARD_FEATURE: FC = () => {
    const { isOpen, setIsOpen, navigate } = useContext(DashboardContext) as IDashboardContext;
    const tokenData: string | null = localStorage.getItem('usuario');
    let cliente: ClienteType | null = null;

    if (tokenData) {
        try {
            const decodedToken = jwtDecode(tokenData);
            cliente = decodedToken.sub ? JSON.parse(decodedToken.sub) : null;
        } catch (error) {
            console.error('Error decoding token:', error);
        }
    }

    const EventosNavegacion: IButtonNavigation[] = [
        {
            title: 'Inicio',
            onClick: (e) => {
                e.preventDefault();
                navigate(`/dashboard/${cliente!.nombres}`);
                setIsOpen(false);
            }
        },
        {
            title: 'Productos',
            onClick: (e) => {
                e.preventDefault();
                navigate(`/dashboard/${cliente!.nombres}/productos`);
                setIsOpen(false);
            }
        },
        {
            title: 'Cerrar sesion',
            onClick: (e) => {
                e.preventDefault();
                localStorage.removeItem('token');
                navigate('/');
            }
        }
    ]

    const handleOpenDialogNav = () => setIsOpen(!isOpen)

    return (
        <div className="w-full h-full flex justify-between items-center flex-col p-2">
            <nav className="w-full flex justify-between items-center p-2 shadow-sm shadow-neutral-800 bg-neutral-500 bg-opacity-50 md:bg-opacity-30 dark:bg-neutral-600 dark:bg-opacity-25 backdrop-blur-md rounded-md">
                <Link className="uppercase bg-neutral-200 dark:bg-white/20 rounded-md px-5 py-1 shadow-md" to={cliente !== null ? `/dashboard/${cliente}` : '/'}>Inventario</Link>
                <div className="hidden md:flex flex-row items-center justify-center gap-2 ">
                    {
                        EventosNavegacion.map((data, i) => <button onClick={data.onClick} className="bg-neutral-300 text-black px-5 py-0.5 rounded-md shadow-inner shadow-neutral-600" key={i}>{data.title}</button>)
                    }
                </div>
                <button onClick={handleOpenDialogNav} className="flex items-center justify-center shadow-md md:hidden bg-neutral-200 p-1 text-black rounded-md focus:scale-105 transition ease-in duration-100"><span className="material-symbols-outlined">menu</span></button>
                <ModalForm isOpen={isOpen} closePromise={handleOpenDialogNav} dialog_title="Navegacion">
                    <div className="w-full h-full flex flex-col gap-1 p-3">
                        {
                            EventosNavegacion.map((data, i) => <button onClick={data.onClick} className="bg-neutral-800 text-white dark:bg-white dark:text-black rounded-md px-6 py-1 hover:scale-105 transition ease-in duration-100" key={i}>{data.title}</button>)
                        }
                    </div>
                </ModalForm>
            </nav>
            <div className="w-full h-full flex items-center justify-center"><Outlet /></div>
        </div>
    )
}