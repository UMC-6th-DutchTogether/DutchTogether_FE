import { createSlice } from '@reduxjs/toolkit';

// 초기 상태 정의
const initialState = {
  meetingNum: 0,
  meetingName: "",
  payers: [], // payer 객체들을 저장하는 배열 { payerId, name, bankName, account, settelmentId }
  settlements: [], // 결제 정보를 저장하는 배열 { settlementId, payer, item, amount, settlers }
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
      const { payerId, name, bankName, account, settlementId } = action.payload;
      const existingPayer = state.payers.find(payer => payer.payerId === payerId);
      if (existingPayer) {
        existingPayer.name = name;
        existingPayer.bankName = bankName;
        existingPayer.account = account;
        existingPayer.settelmentId = settlementId;
      }
    },
    removePayer: (state, action) => {
      state.payers = state.payers.filter(payer => payer.payerId !== action.payload);
    },

    // Settlements 관련 액션들
    setSettlements: (state, action) => {
      state.settlements = action.payload;
      console.log(state.settlements);
    },
    addSettlement: (state, action) => {
      state.settlements.push(action.payload);
    },
    updateSettlement: (state, action) => {
      const { settlementId, payer, item, amount, settlers } = action.payload;
      const existingSettlement = state.settlements.find(settlement => settlement.settlementId === settlementId);
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