export const registerUser = (user) => (
    {
        type: "REGISTER",
        payload: user,
    });

export const loginUser = (userLogin) => ({
    type: "LOGIN",
    payload: userLogin,
})

