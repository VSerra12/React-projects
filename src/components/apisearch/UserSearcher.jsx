import Searcher from "./Searcher";
import User from "./User";


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
                    <User />
                </div>
            </div>
        </div>
    )
}

export default UserSearcher