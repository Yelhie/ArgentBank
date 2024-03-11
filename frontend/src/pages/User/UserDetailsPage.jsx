import Account from '../../components/Account/Account';
import Data from "../../data/Data.json";

import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { EditUser } from '../../store/Actions/UserAction';

function UserDetails() {

    const selectUser = (state) => state.user.user.body
    const user = useSelector(selectUser)
    const [userName, setUserName] = useState(user ? user.userName : '');
    const navigate = useNavigate();
    const [editName, setEditName] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);


    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(EditUser(userName))
        setEditName(false)
    };

    const handleCancel = () => {
        setEditName(false);
        setUserName(user ? user.userName : '');
    };

    if (!user) {
        return null;
    }

    return (
        <main className="main bg-dark main-user">
            <div className="header">
                <h1>
                    Welcome back
                    <br />
                    {user.firstName} {user.lastName}
                </h1>
                {editName ? (
                    <form className="edit-wrapper" onSubmit={handleSubmit}>
                        <div className="edit-form-inputs">
                            <input type="text" value={userName} onChange={handleUserNameChange} />
                        </div>
                        <div className="form-buttons">
                            <button type="submit" className="edit-button">Save</button>
                            <button type="button" className="edit-button" onClick={handleCancel}>Cancel</button>
                        </div>
                    </form>
                ) : (
                    <button className="edit-button" onClick={() => setEditName(true)}>
                        Edit Name
                    </button>
                )}
            </div>
            <h2 className="sr-only">Accounts</h2>
            {Data.map((account, index) => (
                <Account key={`account-${index}`} title={account.title} amount={account.amount} description={account.description} />
            ))}
        </main>
    );
}

export default UserDetails;