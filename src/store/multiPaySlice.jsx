import { createSlice } from '@reduxjs/toolkit';

// 초기 상태 정의
const initialState = {
  meetingNum: null,
  meetingName: "",
  payerNames: [],



  bankName: "",
  accountNumber: "",
  accountHolder: "",
  amount: "",
  numberOfPeople: "",
  receiptUrl: null,
  meetingLink: null
};

// createSlice를 사용하여 slice 정의
const multiPaySlice = createSlice({
  name: 'multiPay',
  initialState,
  reducers: {
    setMeetingNum: (state, action) => {
      state.meetingNum = action.payload;
    },
    setMeetingName: (state, action) => {
      state.meetingName = action.payload;
    },
    setPayerNames: (state, action) => {
      state.payerNames = action.payload;
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

    setMeetingLink: (state, action) => {
      state.meetingLink = action.payload;
    },
  },
});

// export
export const {
  setMeetingNum,
  setMeetingName,
  setPayerNames,

  setSettlementAmount,
  setBankName,
  setAccountNumber,
  setAccountHolder,
  setAmount,
  setNumberOfPeople,
  setReceipt,
  setMeetingLink
} = multiPaySlice.actions;

export default multiPaySlice.reducer;
