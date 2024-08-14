import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// settlementId
export const getPayers = createAsyncThunk(
  'multiLink/getPayers',
  async (meetingNum, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://umc.dutchtogether.com/api/payers/${meetingNum}`);

      if (response.status === 200) {
        console.log('GET 요청 성공:', response.data.data.names);
        return response.data.data.names.map((e) => { return { seettlementId: e.settlementId, name: e.name } });
      } else {
        console.error('GET 요청 실패:', response.status, response.data);
        return rejectWithValue('GET 요청에 실패했습니다.');
      }
    } catch (error) {
      console.error('GET 요청 중 오류 발생:', error);
      return rejectWithValue(error.message);
    }
  }
);




const initialState = {
  meetingNum: 0,
  meetingName: "",
  payers: [],
  meetingLink: null,
  loading: false,
  error: null,
};

const multiLinkSlice = createSlice({
  name: 'multiLink',
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
    updatePayer: (state, action) => {
      const { id, bankName, accountNumber } = action.payload;
      const existingPayer = state.payers.find(payer => payer.settlementId === id);
      if (existingPayer) {
        if (bankName !== undefined) {
          existingPayer.bankName = bankName;
        }
        if (accountNumber !== undefined) {
          existingPayer.accountNumber = accountNumber;
        }
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPayers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPayers.fulfilled, (state, action) => {
        state.loading = false;
        state.payers = action.payload;
      })
      .addCase(getPayers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setMeetingNum,
  setMeetingName,
  setPayers,
  setMeetingLink,
  updatePayer
} = multiLinkSlice.actions;




export default multiLinkSlice.reducer;

