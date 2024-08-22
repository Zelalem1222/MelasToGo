import React , {useContext , useState , useEffect} from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { CartContext } from "../../../services/cart/cart.context";

import { SafeArea } from "../../../components/utility/safeArea.component";
import { Text } from "../../../components/typography/typography.component";
import { Spacer } from "../../../components/spacer/spacer.component.js"
import { CreditCardInputs } from "../components/credit-card.component";
import { payRequest } from "../../../services/checkout/checkout.service.js";

import { CartIconContainer , CartIcon , NameInput , PayButton , ClearButton , PaymentProceessing } from "../components/checkout.styles.js"
import { RestaurantInfoCard } from "../../restaurants/components/restaurants-info-card.components.js"

export const CheckoutScreen = ({navigation}) => {
    const { cart , restaurant , clearCart , sum } = useContext(CartContext);
    const [name , setName] = useState("")
    const [card , setCard] = useState(null)
    const [isLoading , setIsLoading] = useState(false)

    const onPay = () => {
        setIsLoading(true);
        if(!card || !card.id){
            setIsLoading(false)
            navigation.navigate("CheckoutError" , {error: "Please Fill in a valid credit card"})
            return 
        }
        payRequest(card.id, sum , name)
        .then((res) => {
            setIsLoading(false);
            clearCart()
            setName("")
            navigation.navigate("CheckoutSuccess")
        }).catch((err) => {
            setIsLoading(false);
            navigation.navigate("CheckoutError" , {error: err})
        })

    }

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
    <RestaurantInfoCard restaurant={restaurant} />
    {isLoading && <PaymentProceessing />}
    <ScrollView>
        <Spacer position="left" size="medium">
            <Spacer position="top" size="large"><Text>Your Order</Text></Spacer>
       
            <List.Section>
            {cart.map(({ item, price }, i) => {
              return (
                <List.Item
                  key={`item-${i}`}
                  title={`${item} - ${price}$`}
                />
              );
            })}
          </List.Section>
          <Text>Total : {sum / 100}$</Text>
    </Spacer>
    
    <NameInput label="name" value={name} onChangeText={(t) => setName(t)}/>
    <Spacer position="top" size="large">
    {name.length > 0 &&
     <CreditCardInputs 
     onSuccess={setCard} 
     onError={() => navigation.navigate("CheckoutError" , {error: "Something went wrong processing your credit card"})}
    /> }
    </Spacer>
    <Spacer position="top" size="xxl" />

    <PayButton icon="cash" onPress={onPay}>Pay</PayButton>
    <Spacer position="top" size="large">
    <ClearButton icon="cart-off" onPress={clearCart}>Clear Cart</ClearButton>
    </Spacer>
    </ScrollView>
    </SafeArea>
)
}