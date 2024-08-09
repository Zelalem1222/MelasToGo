import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import { creatTokenRequest } from "../../../services/checkout/checkout.service";
//
export const CreditCardInputs = ({name = "zola"}) => {
    const onChange = async (formData) => {
        const { values , status } = formData;
        const isIncomplete = Object.values(status).includes("incomplete")
        console.log(isIncomplete)
        const expiry = values.expiry.split("/")
        const card = {
            number: values.number,
            exp_month: expiry[0],
            exp_year: expiry[1],
            cvc: values.cvc,
            name: name
        }
        const info = await creatTokenRequest(card)
        console.log(info);
    }

    return (
    <LiteCreditCardInput onChange={onChange} />
     )
};