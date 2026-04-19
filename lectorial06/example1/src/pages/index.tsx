import { EmployeeProvider } from "../context/EmployeeContext";
import { EmployeeList } from "../components/EmployeeList";

export default function Home() {
  return (
    <EmployeeProvider>
      <div className="min-h-screen bg-gray-900">
        <div className="max-w-4xl mx-auto py-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-white">
            Employee Salary Management
          </h1>
          <EmployeeList />
        </div>
      </div>
    </EmployeeProvider>
  );

  // The EmployeeProvider component is used to wrap the entire application, providing the employee context to all components within it. 
  // This allows any component that consumes the context to access the list of employees 
  // and the function to update their salaries without needing to pass props down through multiple levels of the component tree. 
  // The EmployeeList component is rendered within the EmployeeProvider, 
  // allowing it to consume the employee context and display the list of employees and their salaries.

}
