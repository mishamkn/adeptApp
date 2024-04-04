import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { selectAllEmployees, selectEmployee, deleteEmployee } from '../store/employeeSlice';

const EmployeeTable: React.FC = () => {
  const selectedCompany = useSelector((state: RootState) =>
    state.companies.companies.find((company) => company.isSelected),
  );
  const employees = useSelector((state: RootState) =>
    state.employees.employees.filter((employee) => employee.companyId === selectedCompany?.id),
  );

  const dispatch = useDispatch();

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch(selectAllEmployees());
    } else {
      dispatch(selectEmployee([]));
    }
  };

  const handleDelete = () => {
    const selectedIds = employees
      .filter((employee) => employee.isSelected)
      .map((employee) => employee.id);
    dispatch(deleteEmployee(selectedIds));
  };

  if (!selectedCompany) {
    return null;
  }

  return (
    <div className="table-right">
      <h2>Сотрудники компании: {selectedCompany.name}</h2>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" onChange={handleSelectAll} />
            </th>
            <th>Фамилия</th>
            <th>Имя</th>
            <th>Должность</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>
                <input
                  type="checkbox"
                  checked={employee.isSelected}
                  onChange={(e) => {
                    if (e.target.checked) {
                      dispatch(selectEmployee([employee.id]));
                    } else {
                      dispatch(selectEmployee([]));
                    }
                  }}
                />
              </td>
              <td>{employee.lastName}</td>
              <td>{employee.firstName}</td>
              <td>{employee.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleDelete}>Удалить выбранное</button>
    </div>
  );
};

export default EmployeeTable;
