const getIsLoggedIn = state => state.auth.isLoggedIn;
console.log(getIsLoggedIn)
const getUsername = state => state.auth.user.name;

console.log(getUsername)


const authSelectors = {
    getIsLoggedIn,
    getUsername,
};
export default authSelectors;