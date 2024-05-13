const RAZOR_PAY_API_KEY = process.env.RAZORPAY_API_KEY;

export default async function handler(req, res) {
  const data = await fetch("http://localhost:3005/api/razorpay");

  const { order } = await data.json();

  const options = {
    key: RAZOR_PAY_API_KEY,
    name: "mmantratech", // change this name
    currency: order.currency,
    amount: order.amount,
    order_id: order.id,
    description: "Understanding RazorPay Integration",
    handler: async function (response) {
      console.log(response);

      const data = await fetch("http://localhost:3005/api/paymentverify", {
        method: "POST",
        body: JSON.stringify({
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
        }),
      });

      const res = await data.json();

      console.log("response verify==", res);

      if (res?.message == "success") {
        console.log("Payment successful");

        // db updates
      }
    },
    prefill: {
      // change these details
      name: "mmantratech",
      email: "mmantratech@gmail.com",
      contact: "9354536067",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();

  paymentObject.on("payment.failed", function (response) {
    alert("Payment failed. Please try again. Contact support for help");
  });

  try {
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error sending mail" });
  }
}
