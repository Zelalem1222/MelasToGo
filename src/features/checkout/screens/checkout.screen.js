import React , {useContext} from "react";

import { CartContext } from "../../../services/cart/cart.context";

import { SafeArea } from "../../../components/utility/safeArea.component";
import { Text } from "../../../components/typography/typography.component";
import { CreditCardInputs } from "../components/credit-card.component";

import { CartIconContainer , CartIcon } from "../components/checkout.styles.js"

export const CheckoutScreen = () => {
    const { cart , restaurant } = useContext(CartContext)
    if(!cart.length && !restaurant){
        return (
        <SafeArea>
            <CartIconContainer>
                <CartIcon icon="cart-off" />
                <Text>Your cart is empty!</Text>
            </CartIconContainer>
        </SafeArea>
        )
    }
return (
<SafeArea>
    <Text>{JSON.stringify(cart)}</Text>
    <Text>restaurant : {JSON.stringify(restaurant)}</Text>
    <CreditCardInputs />
    </SafeArea>
)
}