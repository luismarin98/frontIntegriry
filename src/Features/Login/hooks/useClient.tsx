import { useState } from "react"
import { ClienteType } from "../../../Interfaces/ClienteType";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getCliente } from "../../../Redux/Client/client.slice";
import { useNavigate } from "react-router-dom";
import { AuthDTO } from "../../../Interfaces/Auth";
import { jwtDecode } from "jwt-decode";

export const useClient = () => {
    const [loading, setIsLoading] = useState<boolean>(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const post = async (auth: AuthDTO) => {
        setIsLoading(true);
        await axios.post<string>(`${process.env.REACT_APP_RUTA_API}/Usuario/auth`, { ...auth })
            .then((res) => {
                localStorage.setItem('token', JSON.stringify(res.data));
                const cliente_data: ClienteType = JSON.parse(jwtDecode(res.data).sub!);
                dispatch(getCliente(cliente_data));
                navigate(`/dashboard/${cliente_data!.id}`);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setIsLoading(false);
            });
    }

    return { post, loading }
}