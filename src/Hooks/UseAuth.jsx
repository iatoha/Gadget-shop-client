import { useContext } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider"

export const UseAuth = () => {
  const auth = useContext(AuthContext)
  return auth;
}

