import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { addEmployee } from '../store/employeeSlice';
import EmployeeTable from './EmployeeTable';

const AddEmployeeForm: React.FC = () => {
  const dispatch = useDispatch();
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [position, setPosition] = useState('');
  const selectedCompany = useSelector((state: RootState) =>
    state.companies.companies.find((company) => company.isSelected),
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCompany) {
      dispatch(
        addEmployee({
          id: Date.now(),
          companyId: selectedCompany.id,
          lastName,
          firstName,
          position,
          isSelected: false,
        }),
      );
      setLastName('');
      setFirstName('');
      setPosition('');
    }
  };

  return (
    <div className="employee block">
      <h1>Сотрудники</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Фамилия"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Имя"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Должность"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
        />
        <button type="submit" disabled={!selectedCompany}>
          Добавить сотрудника
        </button>
      </form>
      <EmployeeTable />
    </div>
  );
};

export default AddEmployeeForm;
