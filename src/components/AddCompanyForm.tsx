import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCompany } from '../store/companySlice';
import CompanyTable from './CompanyTable';

const AddCompanyForm: React.FC = () => {
  const dispatch = useDispatch();
  const [companyName, setCompanyName] = useState('');
  const [employeeCount, setEmployeeCount] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      addCompany({
        id: Date.now(),
        name: companyName,
        employeeCount: parseInt(employeeCount),
        address,
        isSelected: false, // Добавлено свойство isSelected со значением false
      }),
    );
    setCompanyName('');
    setEmployeeCount('');
    setAddress('');
  };

  return (
    <div className="company block">
      <h1>Компании</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Название компании"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Число сотрудников"
          value={employeeCount}
          onChange={(e) => setEmployeeCount(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Адрес"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <button type="submit">Add Company</button>
      </form>
      <CompanyTable />
    </div>
  );
};

export default AddCompanyForm;
