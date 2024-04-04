import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import CompanyTable from './components/CompanyTable';
import EmployeeTable from './components/EmployeeTable';
import AddCompanyForm from './components/AddCompanyForm';
import AddEmployeeForm from './components/AddEmployeeForm';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <AddCompanyForm />
        <AddEmployeeForm />
      </div>
    </Provider>
  );
};

export default App;
