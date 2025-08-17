import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const LogoutButton = () => {
  const { dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token"); // Borrar el token guardado
    dispatch({ type: "LOGOUT" });
    navigate("/login"); 
  };

  return (
    <button className="btn btn-danger" onClick={handleLogout}>
      LogOut
    </button>
  );
};