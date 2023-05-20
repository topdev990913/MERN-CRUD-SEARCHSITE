import { useSelector } from "react-redux";

const useAUth = () =>{
    const user = useSelector((state) => state.auth.user)
    const authenticated = user!==null
    return{
        authenticated
    }
}

export default useAUth