import createStripe from "stripe-client";


const stripe = createStripe("pk_test_51PkhB4Iw1DuEY1gZnjV6SxAjOHGbwqz1R6ICUMPkcq0bZvhQbASlIusCvc9UwPpNeW5znxPI0gqHhcXf4M8PFTHj00fZo9miVX");

export const creatTokenRequest = (card) => stripe.createToken({card})

export const payRequest = (token , sum , name) => {
    return new Promise((resolve, reject) => {
        // Mocking the payment process
        setTimeout(() => {
            const paymentResult = {
                success: true,
                message: "Payment successful",
                transactionId: {token},
            };
            resolve(paymentResult);
            reject("Payment failed");
        }, 2000);
    });
}
