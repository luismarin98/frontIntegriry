import { useState } from "react"
/* import { ClienteType } from "../../../Interfaces/ClienteType"; */
import axios, { AxiosError } from "axios";
/* import { useDispatch } from "react-redux";
import { getCliente } from "../../../Redux/Client/client.slice";
import { useNavigate } from "react-router-dom"; */
import { AuthDTO } from "../../../Interfaces/Auth";
/* import { jwtDecode } from "jwt-decode"; */
import toast from "react-hot-toast";

export const useClient = () => {
    const [loading, setIsLoading] = useState<boolean>(false);

    /* const dispatch = useDispatch();
    const navigate = useNavigate(); */

    const post = async (auth: AuthDTO) => {
        setIsLoading(true);
        toast.promise(axios.post<string>(`${process.env.REACT_APP_RUTA_API}/Usuario/auth`, { ...auth }), {
            loading: 'Accediendo...',
            success: (res) => {
                localStorage.setItem('usuario', JSON.stringify(res.data));/* 
                const cliente_data: ClienteType = JSON.parse(jwtDecode(res.data).sub!);
                dispatch(getCliente(cliente_data));
                navigate(`/dashboard/${cliente_data!.nombres}`); */
                setIsLoading(false);
                return 'Acceso exitoso';
            },
            error: (err: AxiosError<any>) => {
                setIsLoading(false);
                return err.response!.data;
            }
        })
    }

    const update_user = () => {
        setIsLoading(true);
        toast.promise(axios.put<string>(`${process.env.REACT_APP_RUTA_API}/Usuario/update`), {
            loading: 'Actualizando datos',
            success: (res) => {
                setIsLoading(false);
                return res.data;
            },
            error: (err: AxiosError<any>) => {
                setIsLoading(false);
                return err.response!.data;
            }
        })
    }

    return { post, update_user, loading }
}