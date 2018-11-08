let initialState = {
    user: {
        firstName: "",
        userName: "",
        password: "",
        confirmPassword: ""
    },
    isLogin: undefined,
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER' : {
            localStorage.setItem("userName", action.payload.userName);
            localStorage.setItem("password", action.payload.password);
            localStorage.setItem("firstName", action.payload.firstName);
            return {user: action.payload}
        }
        case 'LOGIN' : {
            if (action.payload.userName === localStorage.getItem('userName') &&
                action.payload.password === localStorage.getItem('password')) {
                console.log("Udalo sie zalogowac");
                return {isLogin: true}
            }
            else {
                return {isLogin: false};
                console.log("Niepoprawne dane");
            }
        }
    }
};

export default reducer;
