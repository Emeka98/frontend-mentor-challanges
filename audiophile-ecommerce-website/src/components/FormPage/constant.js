export const formFields = [
  {
    title: "billing details",
    fields: [
      {
        id : 0,
        label: "Name",
        name: "name",
        placeholder: "Alexei Ward",
        form: "text",
      },
      {
        id : 1,
        label: "Email Adress",
        name: "email",
        placeholder: "alexei@mail.com",
        form: "email",
      },
      {
        id : 2,
        label: "Phone Number",
        name: "phoneNumber",
        placeholder: "+1 202-555-0136",
        form: "number",
      },
    ],
  },
  {
    title: "shipping info",
    fields: [
      {
        id : 3,
        label: "Adress",
        name: "address",
        placeholder: "Alexei Ward",
        form: "text",
      },
      {
        id : 4,
        label: "ZIP Code",
        name: "zipCode",
        placeholder: "10001",
        form: "number",
      },
      {
        id : 5,
        label: "City",
        name: "city",
        placeholder: "New York",
        form: "text",
      },
      {
        id : 6,
        label: "Country",
        name: "country",
        placeholder: "United States",
        form: "text",
      },
    ],
  },
  {
    title: "payment details",
    fields: [
      {
        id : 7,
        label: "Payment Method",
        name: "paymentMethod",
        form: "select",
        options: ["e-Money", "Cash on Delivery"],
      },
    ],
  },
];
