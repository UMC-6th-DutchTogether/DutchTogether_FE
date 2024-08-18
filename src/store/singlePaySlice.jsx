import { createSlice } from '@reduxjs/toolkit';

// 초기 상태 정의
const initialState = {
  meetingNum: null,
  meetingName: "",
  bankName: "",
  accountNumber: "",
  accountHolder: "",
  amount: "",
  numberOfPeople: "",
  receiptId: null,
  meetingLink: null
};

// createSlice를 사용하여 slice 정의
const singlePaySlice = createSlice({
  name: 'singlePay',
  initialState,
  reducers: {
    setMeetingNum: (state, action) => {
      state.meetingNum = action.payload;
    },
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
    setReceiptId: (state, action) => {
      state.receiptId = parseFloat(action.payload);
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
  setReceiptId,
  setMeetingNum,
  setMeetingLink
} = singlePaySlice.actions;

export default singlePaySlice.reducer;
