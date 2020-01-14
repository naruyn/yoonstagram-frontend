export const defaults = {
    isLoggedIn: localStorage.getItem("token") !== null ? true : false
};


export const resolvers = {
    Mutaion: {
        logUserIn: (_, {token}, {cache}) => {
            localStorage.setItem("token", token);
            cache.wirteData({
                data: {
                    isLoggedIn : true
                }
            });
            return null;
        },
        logUserOut: (_, __, {cache}) => {
            localStorage.removeItem("token");
            window.location.reload();
            return null;
        }
    }
};