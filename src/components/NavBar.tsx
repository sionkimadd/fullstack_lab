import pixellLogo from "../assets/pixell-logo.png";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
    const navigate = useNavigate();

    const handleNavigateToEmployees = () => {
        navigate("/employees");
    };

    const handleNavigateToOrganization = () => {
        navigate("/organization");
    };

    return (
        <div>
            <nav className="navbar inter-content">
                <img src={pixellLogo} alt="Pixell Logo"/>
                <ul>
                    <li><a onClick={handleNavigateToEmployees}>Employees</a></li>
                    <li><a onClick={handleNavigateToOrganization}>Organization</a></li>
                </ul>
            </nav>
        </div>
    );
}