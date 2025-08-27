import employees from "../assets/employees.json";

export default function Body() {
    return (
        <div>
            <main>
                {Object.entries(employees).map(([department, names]) => (
                    <section key={department}>
                        <h4>{department}</h4>
                        <ul>
                            {names.map((name, idx) => (
                                <li key={idx}>
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