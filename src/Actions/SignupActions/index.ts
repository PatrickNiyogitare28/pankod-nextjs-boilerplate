// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

export const SignupActions = {
    Map: (payload: any) => ({
            payload,
            type: ActionConsts.Signup.SetReducer
    }),

    Reset: () => ({
        type: ActionConsts.Signup.ResetReducer
    }),

    GetData: () => ({
        type: ActionConsts.Signup.GetData,
        payload: [
            {
                id: 1,
                name:"Patrick"
            },
            {
                id: 2,
                name:"Eric"
            },
            {
                id: 3,
                name:"Mucyo"
            },
        ]
    })
};
