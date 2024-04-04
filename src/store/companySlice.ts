// companySlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Company {
  id: number;
  name: string;
  employeeCount: number;
  address: string;
  isSelected: boolean;
}

export interface CompanyState {
  companies: Company[];
}

const initialState: CompanyState = {
  companies: [
    {
      id: 1,
      name: 'Acme Corporation',
      employeeCount: 2,
      address: '123 Main St, Springfield',
      isSelected: false,
    },
    {
      id: 2,
      name: 'Widget Co.',
      employeeCount: 5,
      address: '456 Elm St, Anytown',
      isSelected: false,
    },
    {
      id: 3,
      name: 'Tech Solutions Ltd.',
      employeeCount: 10,
      address: '789 Oak Ave, Tech City',
      isSelected: false,
    },
    {
      id: 4,
      name: 'Innovate Innovations Inc.',
      employeeCount: 7,
      address: '321 Maple Blvd, Innovation Valley',
      isSelected: false,
    },
  ],
};

const companySlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    addCompany: (state, action: PayloadAction<Company>) => {
      state.companies.push({ ...action.payload, isSelected: false });
    },
    deleteCompany: (state, action: PayloadAction<number[]>) => {
      state.companies = state.companies.filter((company) => !action.payload.includes(company.id));
    },
    selectCompany: (state, action: PayloadAction<number[]>) => {
      state.companies.forEach((company) => {
        if (action.payload.includes(company.id)) {
          company.isSelected = true;
        } else {
          company.isSelected = false;
        }
      });
    },
    selectAllCompanies: (state) => {
      state.companies.forEach((company) => {
        company.isSelected = true;
      });
    },
  },
});

export const { addCompany, deleteCompany, selectCompany, selectAllCompanies } =
  companySlice.actions;
export default companySlice.reducer;
