import Account from '../../components/Account/Account';

function UserDetails() {
    return (
        <div class="header">
            <h1>Welcome back<br />Tony Jarvis!</h1>
            <button class="edit-button">Edit Name</button>
            <Account />
        </div>

    );
}

export default UserDetails;