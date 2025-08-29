import useEmployees from "../hooks/useEmployees";

export default function Body() {
    const employees = useEmployees();

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