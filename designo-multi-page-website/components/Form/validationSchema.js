import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Can't be empty"),
  email: Yup.string().email("Invalid email").required("Cant' be empty"),
  phone: Yup.string()
    .required("Can't be empty")
    .matches(/^\d+$/, "Invalid phone number"),
  message: Yup.string()
    .required("Can't be empty")
    .min(10, "Message must be at least 10 characters long")
    .max(300, "Message cannot exceed 300 characters"),
});

export default validationSchema;
