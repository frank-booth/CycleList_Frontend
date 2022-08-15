import NavLogo from '../assets/NavLogo.svg'

const Nav = () => {

    return (
        <div>
            <div id='logo'><img src={NavLogo} alt="cycle-list-logo" /></div>
            <ul>
                <li>home</li>
                <li>login/sign up</li>
                <li>songs</li>
            </ul>
        </div>
    )
}

export default Nav