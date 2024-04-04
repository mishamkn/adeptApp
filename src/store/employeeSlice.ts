// employeeSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Employee {
  id: number;
  companyId: number;
  lastName: string;
  firstName: string;
  position: string;
  isSelected: boolean;
}

export interface EmployeeState {
  employees: Employee[];
}

const initialState: EmployeeState = {
  employees: [
    {
      id: 1,
      companyId: 1,
      lastName: 'Doe',
      firstName: 'John',
      position: 'Software Engineer',
      isSelected: false,
    },
    {
      id: 2,
      companyId: 2,
      lastName: 'Smith',
      firstName: 'Alice',
      position: 'Data Analyst',
      isSelected: false,
    },
    {
      id: 3,
      companyId: 3,
      lastName: 'Brown',
      firstName: 'Chris',
      position: 'IT Manager',
      isSelected: false,
    },
    {
      id: 4,
      companyId: 4,
      lastName: 'Johnson',
      firstName: 'Emily',
      position: 'Marketing Specialist',
      isSelected: false,
    },
  ],
};

const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees.push({ ...action.payload, isSelected: false });
    },
    deleteEmployee: (state, action: PayloadAction<number[]>) => {
      state.employees = state.employees.filter((employee) => !action.payload.includes(employee.id));
    },
    selectEmployee: (state, action: PayloadAction<number[]>) => {
      state.employees.forEach((employee) => {
        if (action.payload.includes(employee.id)) {
          employee.isSelected = true;
        } else {
          employee.isSelected = false;
        }
      });
    },
    selectAllEmployees: (state) => {
      state.employees.forEach((employee) => {
        employee.isSelected = true;
      });
    },
  },
});

export const { addEmployee, deleteEmployee, selectEmployee, selectAllEmployees } =
  employeeSlice.actions;
export default employeeSlice.reducer;
