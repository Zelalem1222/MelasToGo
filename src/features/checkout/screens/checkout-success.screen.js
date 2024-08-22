import React from "react";
import { SafeArea } from "../../../components/utility/safeArea.component";
import { Text } from "../../../components/typography/typography.component";
import { Spacer } from "../../../components/spacer/spacer.component.js"
import { CartIconContainer , CartIcon , NameInput , PayButton , ClearButton , PaymentProceessing } from "../components/checkout.styles.js"

export const CheckoutSuccessScreen = () => (
    <SafeArea>
        <CartIconContainer>
            <CartIcon icon="check-bold"/>
            <Text variant="label">Success! </Text>
        </CartIconContainer>
    </SafeArea>
)