export const Items = [
    {
      id: "step1",
      number: 1,
      subtitle: "Step 1",
      title: "Your Info",
    },
    {
      id: "step2",
      number: 2,
      subtitle: "Step 2",
      title: "Select Plan",
    },
    {
      id: "step3",
      number: 3,
      subtitle: "Step 3",
      title: "Add-Ons",
    },
    {
      id: "step4",
      number: 4,
      subtitle: "Step 4",
      title: "Summary",
    },
  ];
  export const StepInfo = [
    {
      "step1": [
        {
          "id": "name",
          "label": "Name",
          "type": "text",
          "placeholder": "Enter your name"
        },
        {
          "id": "email-address",
          "label": "Email Address",
          "type": "mail",
          "placeholder": "e.g. stephenking@lorem.com"
        },
        {
          "id": "phone-number",
          "label": "Phone Number",
          "type": "tel",
          "placeholder": "e.g. +1 234 567 890"
        }
      ],
      "step2": {
        "monthly": [
          {
            "id": 1,
            "title": "Arcade",
            "price": "$9/mo",
            "priceAmount": 9
          },
          {
            "id": 2,
            "title": "Advanced",
            "price": "$12/mo",
            "priceAmount": 12
          },
          {
            "id": 3,
            "title": "Pro",
            "price": "$15/mo",
            "priceAmount": 15
          }
        ],
        "yearly": [
          {
            "id": 1,
            "icon": "icon-arcade.svg",
            "title": "Arcade",
            "price": "$90/yr",
            "description": "2 months free",
            "priceAmount": 90
          },
          {
            "id": 2,
            "icon": "icon-advanced.svg",
            "title": "Advanced",
            "price": "$120/yr",
            "description": "2 months free",
            "priceAmount": 120
          },
          {
            "id": 3,
            "icon": "icon-pro.svg",
            "title": "Pro",
            "price": "$150/yr",
            "description": "2 months free",
            "priceAmount": 150
          }
        ]
      },
      "step3": {
        "monthly": [
          {
            "id": 0,
            "title": "Online service",
            "price": "+1/mo",
            "priceAmount": 1,
            "description": "Access to multiplayer games"
          },
          {
            "id": 1,
            "title": "Larger storage",
            "price": "+2/mo",
            "priceAmount": 2,
            "description": "Extra 1TB of cloud save"
          },
          {
            "id": 2,
            "title": "Customizable profile",
            "price": "+2/mo",
            "priceAmount": 2,
            "description": "Custom theme on your profile"
          }
        ],
        "yearly": [
          {
            "id": 0,
            "title": "Online service",
            "price": "+10/yr",
            "priceAmount": 10,
            "description": "Access to multiplayer games"
          },
          {
            "id": 1,
            "title": "Larger storage",
            "price": "+20/yr",
            "priceAmount": 20,
            "description": "Extra 1TB of cloud save"
          },
          {
            "id": 2,
            "title": "Customizable profile",
            "price": "+20/yr",
            "priceAmount": 20,
            "description": "Custom theme on your profile"
          }
        ]
      }
    }
  ]

