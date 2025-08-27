import pixellLogo from "../assets/pixell-logo.png";

export default function NavBar() {
    return (
        <div>
            <nav>
                <img src={pixellLogo} alt="Pixell Logo"/>
                <div>
                    <span>
                        <a href="https://www.rrc.ca/">Employees</a>
                    </span>
                    <span>
                        <a href="https://www.rrc.ca/">Organization</a>
                    </span>
                </div>
            </nav>
        </div>
    );
}