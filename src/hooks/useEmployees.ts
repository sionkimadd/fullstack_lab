import { useState, useEffect } from "react";

interface Employees {
    [department: string]: string[];
}

const useEmployees = () => {
    const [employees, setEmployees] = useState<Employees>({});

    useEffect(() => {
        const loadEmployees = async () => {
            const response = await fetch('/employees.json');
            const data = await response.json();
            setEmployees(data);
        };

        loadEmployees();
    }, []);

    return employees;
};

export default useEmployees;