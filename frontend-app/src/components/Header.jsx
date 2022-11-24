import HeaderCSS from './Header.module.css';

const Header = () => {
    return (
        <nav className={HeaderCSS.header}>
            <h1>Musik Samspil</h1>
            <a href="/" className={HeaderCSS.linkColor}>Home</a>
            <a href="/profil" className={HeaderCSS.linkColor}>Profil</a>
            <a href="/signup" className={HeaderCSS.opret}>Create profile</a>
            <a href="/login" className={HeaderCSS.login}>Login</a>
        </nav>
      );
}
 
export default Header;