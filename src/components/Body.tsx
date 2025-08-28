import employees from "../assets/employees.json";

export default function Body() {
    return (
        <div>
            <main className="employee-directory">
                {Object.entries(employees).map(([department, names]) => (
                    <section key={department} className="department">
                        <h4 className="inter-content">{department}</h4>
                        <ul>
                            {names.map((name, idx) => (
                                <li key={idx} className="inter-thin">
                                    {name}
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </main>
        </div>
    );
}