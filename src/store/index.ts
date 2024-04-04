import { Dispatch, ThunkDispatch, UnknownAction, configureStore } from '@reduxjs/toolkit';
import companyReducer, { CompanyState } from './companySlice';
import employeeReducer, { EmployeeState } from './employeeSlice';

export default configureStore({
  reducer: {
    companies: companyReducer,
    employees: employeeReducer,
  },
});

export type RootState = {
  employees: EmployeeState;
  companies: CompanyState;
};

export type AppDispatch = ThunkDispatch<
  {
    employees: EmployeeState;
    companies: CompanyState;
  },
  undefined,
  UnknownAction
> &
  Dispatch<UnknownAction>;
