// #region Global Imports
import React, {useEffect, useState} from "react";
import { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";

// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import { IStore } from "@Redux/IStore";
import { SignupActions } from "@Actions";
// #endregion Local Imports

// #region Interface Imports
import { ReduxNextPageContext, ISignup } from "@Interfaces";
// #endregion Interface Imports

export const Signup: NextPage<
    ISignup.IProps,
    ISignup.InitialProps
> = ({ t, i18n }) => {
    const signup:any = useSelector((state: IStore) => state.signup);
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    
    useEffect(() => {
       dispatch(SignupActions.GetData());
       setData(signup.data);
    },[dispatch, signup])
   
    return (
        <section className="signup">
            Signup Page
            <ul>
                {
                  data.map((el:any, index) => (
                      <li>{el.id}. {el.name}</li>
                  ))
                }
            </ul>
        </section>
    );
};

Signup.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<ISignup.InitialProps> => {

    return { namespacesRequired: ["common"] };
};

export default withTranslation("common")(Signup);
