// src/const.js

export const questions = [
  {
    id: "occasion",
    question: "What is the occasion for this jewellery?",
    note: "This helps us tailor our recommendations to match the significance and style suitable for the event.",
    options: [
      "Engagement",
      "Anniversary",
      "Birthday",
      "Daily-wear",
      "Other (please specify)",
    ],
    type: "select",
  },
  {
    id: "purchaseType",
    question: "Is this a gift or a personal purchase?",
    note: "Understanding if the jewellery is for yourself or someone else helps us refine our suggestions based on typical gift preferences.",
    options: ["Gift", "Personal Purchase"],
    type: "radio",
  },
  {
    id: "gender",
    question: "Please select the gender.",
    note: "This allows us to recommend designs and styles that align with the typical preferences of the chosen gender.",
    options: ["Male", "Female", "Other"],
    type: "radio",
  },
  {
    id: "ageGroup",
    question: "What is the age group of the wearer?",
    note: "Age can significantly influence jewellery style preferences, so this helps us make more suitable recommendations.",
    options: ["<18", "18-25", "26-35", "36-50", "51+"],
    type: "radio",
  },
  {
    id: "religion",
    question: "Do you have any religious considerations for this jewellery?",
    note: "Some religious beliefs might influence jewellery design choices, like specific symbols or restrictions.",
    options: ["Christianity", "Islam", "Hinduism", "None"],
    type: "select",
  },
  {
    id: "jewelleryType",
    question: "What type of jewellery are you interested in?",
    note: "This helps us narrow down the product category to provide more relevant recommendations.",
    options: ["Rings", "Necklaces", "Pendants", "Bracelets", "Earrings"],
    type: "radio",
  },
  {
    id: "budget",
    question: "What is your budget for this jewellery?",
    note: "Knowing your budget helps us suggest options that fit within your financial constraints.",
    options: ["<$50", "$50-$100", "$100-$200", "$200+"],
    type: "radio",
  },
  {
    id: "outfitMatch",
    question: "Would you like to match your jewellery with an outfit?",
    note: "Uploading an image of your outfit can help us recommend jewellery that complements your attire perfectly.",
    options: ["Yes", "No"],
    type: "radio",
    additional: {
      ifYes: "Upload an image of your outfit for better recommendations.",
    },
  },
];
