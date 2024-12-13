import { useState } from "react"
import { ClienteType } from "../../../Interfaces/ClienteType";
/* import axios from "axios"; */
/* import { useDispatch } from "react-redux"; */
/* import { getCliente } from "../../../Redux/Client/client.slice"; */
import { useNavigate } from "react-router-dom";

export const useClient = () => {
    const [client, /* setClient */] = useState<ClienteType | undefined>();
    const [loading, setIsLoading] = useState<boolean>(false);

/*     const dispatch = useDispatch(); */
    const navigate = useNavigate();

    const get = async (/* username: string, password: string */) => {
        setIsLoading(true);
        navigate('/dashboard')
/*         await axios.get<ClienteType>(`${process.env.REACT_APP_RUTA_API}/cliente?username=${username}&password=${password}`)
            .then((res) => {
                setClient(res.data);
                dispatch(getCliente(res.data));
                localStorage.setItem('cliente', JSON.stringify(res.data));
                setIsLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setIsLoading(false);
            }); */
    }

    return { get, client, loading }
}