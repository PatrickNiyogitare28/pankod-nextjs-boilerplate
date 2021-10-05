// #region Interface Imports
import { IHomePage, ISignup } from "@Interfaces";
// #endregion Interface Imports

export interface IStore {
    signup: ISignup.IStateProps;
    home: IHomePage.IStateProps;
}
