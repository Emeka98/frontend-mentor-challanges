import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string("Must be string")
    .required("Email address is required")
    .email("Invalid email address"),
  phoneNumber: yup
    .string()
    .matches(/^\d+$/, "Phone number must contain only digits")
    .required("Phone number is required")
    .min(6, "Phone number must be at least 6 characters")
    .max(20, "Phone number must not exceed 20 characters"),
  address: yup
    .string()
    .required("Address is required")
    .min(10, "Address must be at least 10 characters")
    .max(50, "Address can be at most 50 characters")
    .matches(
      /^[a-zA-Z0-9\s,'.-]*$/,
      "Address can only contain letters, numbers, spaces, and common punctuation marks"
    ),
  zipCode: yup
    .string()
    .required("Zip Code is required")
    .matches(/^\d+$/, "Zip Code must contain only digits")
    .min(5, "Zip Code must be at least 5 characters"),
  country: yup
    .string()
    .required("Country is required")
    .min(3, "Country must be at least 3 characters")
    .max(50, "Country can be at most 50 characters"),
  city: yup
    .string()
    .required("City is required")
    .min(3, "City must be at least 3 characters")
    .max(50, "City can be at most 50 characters"),

});
