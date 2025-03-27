import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestloan: {
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        };
      },
      reducer(state, action) {
        if (state.loan > 0) return;
        state.loan = action.payload.amount;
        state.balance = state.balance + action.payload.amount;
        state.loanPurpose = action.payload.purpose;
      },
    },
    payloan(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});

console.log(accountSlice);

export const { withdraw, requestloan, payloan } = accountSlice.actions;

export function deposit(amount, currency) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };

  return async function (dispatch, getState) {
    dispatch({ type: "account/convertingCurrency" });
    //api call

    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;
    console.log(converted);
    dispatch({ type: "account/deposit", payload: converted });
  };
}

export default accountSlice.reducer;
// export default function accountReducer(state = initialstate, action) {
//   switch (action.type) {
//     case "account/depoist":
//       return {
//         ...state,
//         balance: state.balance + action.payload,
//         isLoading: false,
//       };

//     case "account/withdraw":
//       return { ...state, balance: state.balance - action.payload };

//     case "account/requestloan":
//       if (state.loan > 0) return state;
//       return {
//         ...state,
//         balance: state.balance + action.payload.amount,
//         loan: action.payload.amount,
//         loanPurpose: action.payload.purpose,
//       };

//     case "account/payloan":
//       return {
//         ...state,
//         balance: state.balance - state.loan,
//         loanPurpose: "",
//         loan: 0,
//       };
//     case "account/covertingCurrency":
//       return { ...state, isLoading: true };
//     default:
//       return state;
//   }
// }

// export function depoist(amount, currency) {
//   if (currency === "USD") return { type: "account/depoist", payload: amount };

//   return async function (dispatch, getState) {
//     dispatch({ type: "account/convertingCurrency" });
//     //api call

//     const res = await fetch(
//       `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
//     );
//     const data = await res.json();
//     const converted = data.rates.USD;

//     dispatch({ type: "account/depoist", payload: converted });
//   };
// }
// export function withdraw(amount) {
//   return { type: "account/withdraw", payload: amount };
// }
// export function requestloan(amount, purpose) {
//   return {
//     type: "account/requestloan",
//     payload: { amount: amount, purpose: purpose },
//   };
// }
// export function payloan() {
//   return { type: "account/payloan" };
// }
