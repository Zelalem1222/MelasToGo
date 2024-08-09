import createStripe from "stripe-client";


const stripe = createStripe("pk_test_51PkhB4Iw1DuEY1gZnjV6SxAjOHGbwqz1R6ICUMPkcq0bZvhQbASlIusCvc9UwPpNeW5znxPI0gqHhcXf4M8PFTHj00fZo9miVX");

export const creatTokenRequest = (card) => stripe.createToken({card})