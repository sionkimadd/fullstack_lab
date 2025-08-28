import pixellLogo from "../assets/pixell-logo.png";

export default function NavBar() {
    return (
        <div>
            <nav className="navbar inter-content">
                <img src={pixellLogo} alt="Pixell Logo"/>
                <ul>
                    <li><a href="https://www.rrc.ca/">Employees</a></li>
                    <li><a href="https://www.rrc.ca/">Organization</a></li>
                </ul>
            </nav>
        </div>
    );
}