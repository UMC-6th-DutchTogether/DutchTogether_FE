import { createSlice } from '@reduxjs/toolkit';

// 초기 상태 정의
const initialState = {
  meetingNum: 0,
  meetingName: "",
  payers: [], // payer 객체들을 저장하는 배열
  settlements: [],
  settlers: [],
  meetingLink: null
};

// 
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
  setMeetingLink
} = multiPaySlice.actions;

export default multiPaySlice.reducer;