import Account from '../../components/Account/Account';

function UserDetails() {
    return (
        <div className="header">
            <h1>Welcome back<br />Tony Jarvis!</h1>
            <button className="edit-button">Edit Name</button>
            <Account />
        </div>

    );
}

export default UserDetails;