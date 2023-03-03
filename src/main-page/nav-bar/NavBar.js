import '../../assets/nav-bar/nav-bar.sass'

const NavBar = () => {
    return(
        <div className='main'>
            <div className='left'>
                <img src="/Users/nikitamoussa/Documents/sequance-flow/src/assets/img/logos/logo.png" alt="лого" />
            </div>
            <div className="right">
                <a href="#about">about</a>
                <a href='#support'>support</a>
                <a href="#profile">
                    <img src="" alt="" />
                </a>
            </div>
        </div>
    )
}

export default NavBar