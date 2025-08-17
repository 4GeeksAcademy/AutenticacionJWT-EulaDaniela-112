import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { PrivateContent } from "../components/PrivateContent.jsx";


export const Private = () => {
    const {store, dispatch} = useGlobalReducer()

    return (
        <div className="text-center mt-5">
            
            <PrivateContent />
            
        </div>

    );
};