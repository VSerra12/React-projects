
import Searcher from "./Searcher";
import UserFind from "./UserFind";


const UserSearcher = () => {

    return (
        <div className="card text-center position-absolute top-50 start-50 translate-middle">
            <div className="card-header">
            </div>
            <div className="card-body">
                <Searcher />
            </div>
            <div className="card-footer text-body-secondary">
                <div className="container text-center">
                    <UserFind />
                </div>
            </div>
        </div>
    )
}

export default UserSearcher