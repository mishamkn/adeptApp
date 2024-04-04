import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { selectCompany, selectAllCompanies, deleteCompany } from '../store/companySlice';

const CompanyTable: React.FC = () => {
  const companies = useSelector((state: RootState) => state.companies.companies);
  const dispatch = useDispatch();

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch(selectAllCompanies());
    } else {
      dispatch(selectCompany([]));
    }
  };

  const handleDelete = () => {
    const selectedIds = companies
      .filter((company) => company.isSelected)
      .map((company) => company.id);

    dispatch(deleteCompany(selectedIds));
  };

  const numsOfEmpl = companies.reduce((acc, item) => {
    return acc + item.employeeCount;
  }, 0);

  return (
    <div className="table-left">
      <h2>Общее число сотрудников: {numsOfEmpl}</h2>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" onChange={handleSelectAll} />
            </th>
            <th>Имя</th>
            <th>Число сотрудников</th>
            <th>Адрес</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td>
                <input
                  type="checkbox"
                  checked={company.isSelected}
                  onChange={(e) => {
                    if (e.target.checked) {
                      dispatch(selectCompany([company.id]));
                    } else {
                      dispatch(selectCompany([]));
                    }
                  }}
                />
              </td>
              <td>{company.name}</td>
              <td>{company.employeeCount}</td>
              <td>{company.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleDelete}>Удалить выбранное</button>
    </div>
  );
};

export default CompanyTable;
