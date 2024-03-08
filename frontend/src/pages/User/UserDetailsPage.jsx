import Account from '../../components/Account/Account';
import Data from "../../data/Data.json";

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function UserDetails() {
    const selectUser = (state) => state.user.user.body
    const user = useSelector(selectUser)
    const navigate = useNavigate();

    if (!user) {
        return navigate('/');
    }

    return (
        <main className="main bg-dark main-user">
            <div className="header">
                <h1>
                    Welcome back
                    <br />
                    {user.firstName} {user.lastName}
                </h1>
                <button className="edit-button">Edit Name</button>
                <h2 className="sr-only">Accounts</h2>
            </div>
            <h2 className="sr-only">Accounts</h2>
            {Data.map((account, index) => (
                <Account key={`account-${index}`} title={account.title} amount={account.amount} description={account.description} />
            ))}
        </main>
    );
}

export default UserDetails;