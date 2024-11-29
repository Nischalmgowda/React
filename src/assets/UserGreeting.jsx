/* eslint-disable react/prop-types */
function UserGreeting(props){
    const welcome=<h2 className="welcome">Welcome {props.userName}</h2>
    const log = <h2 className="log">Please Login and Continue</h2>
    return (
        <div>
        {props.isLoggedIn ? welcome : log};
        </div>
    )
}
export default UserGreeting;