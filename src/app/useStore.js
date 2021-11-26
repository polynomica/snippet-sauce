import { useSelector } from "react-redux";
import { selectUsername, selectLoggedIN, selectRole } from "../features/userSlice";


export function UserName() { return useSelector(selectUsername) }
export function LoggedIn() { return useSelector(selectLoggedIN) }
export function UserRole() { return useSelector(selectRole) }


