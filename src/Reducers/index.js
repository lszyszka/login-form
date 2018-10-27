let initalState = {
    user: {
        firstName: "",
        userName: "",
        password: "",
        confirmPassword: ""
    },
};


const reducer = (state = initalState, action) => {
    switch (action.type) {
        case 'REGISTER' : {
            localStorage.setItem("userName", action.payload.userName);
            localStorage.setItem("password", action.payload.password);
            return {user: action.payload}
        }
        case 'LOGIN' : {

        }
    }
};

export default reducer;
