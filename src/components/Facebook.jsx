import React, { Component, useEffect, useState } from 'react'
import FacebookLogin from 'react-facebook-login'

export default class Facebook extends Component {

    // const [value, setValue] = useState({
    //     isLoggedIn: false,
    //     userID: "",
    //     email: "",
    //     name: "",
    //     picture: ""
    // })

    // const [fbContent, setFbContent] = useState<any>(null)

    state = {
        isLoggedIn: false,
        userID: "",
        email: "",
        name: "",
        picture: ""
    }

    responseFacebook = (response) => {
        console.log("response", response)
    }

    componentClicked = (abc) => console.log("componentClicked", abc)
    

    render() {

        let fbContent

        if(this.state.isLoggedIn) {
            fbContent = null
        }
        else {
            fbContent = (<FacebookLogin
            appId="383036661164866"
            autoLoad={true}
            fields="name,email,picture"
            cssClass="my-facebook-button-class"
            onClick={this.componentClicked}
            callback={this.responseFacebook} />)
        }

        return (
            <div>
                {fbContent}
            </div>
        )
    }
}

//     const componentClicked = () => {
//         console.log("componentClicked")
//     }

//     const responseFacebook = (respose) => {
//         console.log("responseFacebook", respose)
//     }

//     useEffect(() => {
//         if (value.isLoggedIn) {
//             setFbContent(null)
//         }
//         else {
//             setFbContent(<FacebookLogin
//                 appId="383036661164866"
//                 autoLoad={true}
//                 fields="name,email,picture"
//                 cssClass="my-facebook-button-class"
//                 onClick={componentClicked}
//                 callback={responseFacebook} />)
//         }
//     }, [value.isLoggedIn])

//     return (
//         <div>
//             {fbContent}
//         </div>
//     )
// }

// export default Facebook;