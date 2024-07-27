import { createSlice } from '@reduxjs/toolkit';

// 초기 상태 정의
const initialState = {
  meetingName: " ",
  bankName: " ",
  accountNumber: " ",
  accountHolder: " ",
  amount: " ",
  numberOfPeople: " ",
};

// createSlice를 사용하여 slice 정의
const singlePaySlice = createSlice({
  name: 'singlePay',
  initialState,
  reducers: {
    setMeetingName: (state, action) => {
      state.meetingName = action.payload;
    },
    setBankName: (state, action) => {
      state.bankName = action.payload;
    },
    setAccountNumber: (state, action) => {
      state.accountNumber = action.payload;
    },
    setAccountHolder: (state, action) => {
      state.accountHolder = action.payload;
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
    setNumberOfPeople: (state, action) => {
      state.numberOfPeople = action.payload;
    },
  },
});

// export
export const {
  setMeetingName,
  setSettlementAmount,
  setBankName,
  setAccountNumber,
  setAccountHolder,
  setAmount,
  setNumberOfPeople
} = singlePaySlice.actions;

export default singlePaySlice.reducer;
