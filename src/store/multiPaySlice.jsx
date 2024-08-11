import { createSlice } from '@reduxjs/toolkit';

// 초기 상태 정의
const initialState = {
  meetingNum: 0,
  meetingName: "",
  payers: [], // payer 객체들을 저장하는 배열
  settlements: [], // 결제 정보를 저장하는 배열
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
    setPayers: (state, action) => {
      state.payers = action.payload;
    },
    addPayer: (state, action) => {
      state.payers.push(action.payload);
    },
    updatePayer: (state, action) => {
      const { id, name, bankName, accountNumber } = action.payload;
      const existingPayer = state.payers.find(payer => payer.id === id);
      if (existingPayer) {
        existingPayer.name = name;
        existingPayer.bankName = bankName;
        existingPayer.accountNumber = accountNumber;
      }
    },
    removePayer: (state, action) => {
      state.payers = state.payers.filter(payer => payer.id !== action.payload);
    },

    // Settlements 관련 액션들
    setSettlements: (state, action) => {
      state.settlements = action.payload;
    },
    addSettlement: (state, action) => {
      state.settlements.push(action.payload);
    },
    updateSettlement: (state, action) => {
      const { id, payer, item, amount, settlers } = action.payload;
      const existingSettlement = state.settlements.find(settlement => settlement.id === id);
      if (existingSettlement) {
        existingSettlement.payer = payer;
        existingSettlement.item = item;
        existingSettlement.amount = amount;
        existingSettlement.settlers = settlers;
      }
    },
    removeSettlement: (state, action) => {
      state.settlements = state.settlements.filter(settlement => settlement.id !== action.payload);
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
  setPayers,
  addPayer,
  updatePayer,
  removePayer,
  setSettlements,
  addSettlement,
  updateSettlement,
  removeSettlement,
  setReceipt,
  setMeetingLink
} = multiPaySlice.actions;

export default multiPaySlice.reducer;