const Login = ({authenticate}) => {
    return (
        <div className="login">
            <p>Please click button below to sign in!</p>
            <button className="facebook" onClick={() => authenticate("Facebook")}>
                Log In With Facebook
            </button>
        </div>
    )
}

export default Login