const subscriptionList = {
  LIST_OF_TIERS: ["BASIC", "STANDARD", "PREMIUM", "PLATINUM"],
  BASIC: {
    title: "Basic",
    description: "For individuals that just want to explore.",
    price: "5,500",
    data: ["Whatsapp"],
  },
  STANDARD: {
    title: "Standard",
    description: "For small businesses that want to grow.",
    price: "10,000",
    data: ["Whatsapp", "Mobile App."],
  },
  PREMIUM: {
    title: "Premium",
    description: "For businesses that want to grow exponentially.",
    price: "15,000",
    data: ["Whatsapp", "ChatBot", "Buy & Sale", "Website"],
  },
  PLATINUM: {
    title: "Platinum",
    description: "For companies and teams that require robust features.",
    price: "25,000",
    data: ["Whatsapp", "ChatBot", "Buy & Sale", "Website", "VIP Delegation"],
  },
};

export default subscriptionList;

export const questions = [
  {
    id: 1,
    question: "What benefits do I get with a subscription?",
    answer:
      "By subscribing to our service, you unlock a range of exclusive benefits. These may include access to premium content, priority customer support, early access to new features or products, discounted prices, or special member-only events.",
  },
  {
    id: 2,
    question: "So how does the 2-Day free trial work?",
    answer:
      "You get 2 days of free trial to have a glimpse of what our website provides.",
  },
  {
    id: 3,
    question: "Can I upgrade or downgrade my subscription plan?",
    answer:
      "Absolutely! We understand that your needs may change over time. You have the flexibility to upgrade or downgrade your subscription plan as per your requirements.",
  },
];
