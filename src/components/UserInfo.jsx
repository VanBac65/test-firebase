import React, { useState } from "react";
import Login from "./Login";
import { auth } from "../config/base"
import { FacebookAuthProvider, signInWithRedirect, getRedirectResult, getAuth, signInWithPopup } from "firebase/auth";

const UserInfo = () => {

    const [userInfo, setUserInfo] = useState({
        email: "",
        displayName: ""
    })

    const authHandler = async authData => {
        const user = authData.user;
        setUserInfo({
            email: user.email,
            displayName: user.displayName
        });
    };

    const authenticate = provider => {
        console.log(provider);
        const authProvider = new FacebookAuthProvider()
        signInWithRedirect(auth, authProvider);
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = FacebookAuthProvider.credentialFromError(error);
        });

        getRedirectResult(auth).then((result) => {
            // Xử lý sau khi đăng nhập thành công
            const user = result.user;
            console.log("Đăng nhập thành công với người dùng:", user.displayName);
        }).catch((error) => {
            // Xử lý khi đăng nhập không thành công
            console.error("Đăng nhập không thành công:", error.message);
        });
    }

        return (
            <>
                <Login authenticate={authenticate} />;
                <div className="user-info">
                    <label>Email:</label>
                    <span type="text" id="email">
                        test@test.com
                    </span>
                </div>
            </>
        )
    }

    export default UserInfo;
