import { useSelector } from "react-redux";
import { selectUsername, selectLoggedIN, selectRole } from "../features/userSlice";

export const userName = useSelector(selectUsername);
export const loggedIn = useSelector(selectLoggedIN);
export const userRole = useSelector(selectRole);


