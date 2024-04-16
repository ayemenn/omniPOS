import * as Yup from "yup";


export const signUpSchema = Yup.object({
  username: Yup.string().min(3).max(25).required("Please enter username"),
  firstname: Yup.string().min(3).max(25).required("Please enter first name"),
  lastname: Yup.string().min(3).max(25).required("Please enter last name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])/,
      "Password must contain at least one uppercase and one lowercase letter"
    )
    .required("Please enter your password"),

 
});
