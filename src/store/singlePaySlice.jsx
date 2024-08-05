import { createSlice } from '@reduxjs/toolkit';

// 초기 상태 정의
const initialState = {
  meetingName: "",
  bankName: "",
  accountNumber: "",
  accountHolder: "",
  amount: "",
  numberOfPeople: "",
  receiptUrl: null,
  meetingNum: null,
  meetingLink: null
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
      state.accountNumber = parseFloat(action.payload);
    },
    setAccountHolder: (state, action) => {
      state.accountHolder = action.payload;
    },
    setAmount: (state, action) => {
      state.amount = parseFloat(action.payload);
    },
    setNumberOfPeople: (state, action) => {
      state.numberOfPeople = parseFloat(action.payload);
    },
    setReceipt: (state, action) => {
      state.receiptUrl = action.payload;
    },
    setMeetingNum: (state, action) => {
      state.meetingNum = action.payload;
    },
    setMeetingLink: (state, action) => {
      state.meetingLink = action.payload;
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
  setNumberOfPeople,
  setReceipt,
  setMeetingNum,
  setMeetingLink
} = singlePaySlice.actions;

export default singlePaySlice.reducer;
