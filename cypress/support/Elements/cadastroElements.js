class cadastroElements{

    signUp = () => {return '[show-authed="false"] > :nth-child(3) > .nav-link'}
    username = () => {return '.form-group:nth-child(1) > .form-control'}
    email = () => {return ':nth-child(2) > .form-control'}
    password = () => {return ':nth-child(3) > .form-control'}
    buttonSignUp = () => {return '.btn'}
    cadastrocomsucesso = () => {return '.navbar-brand'}
}
export default cadastroElements;