import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import User from "./User";


const UserFind = () => {

    const { user } = useContext(UserContext)

    if (user.id === undefined || user.id === null) {
        return <></>
    }

  return (
    <User user={user} />
  )
}

export default UserFind