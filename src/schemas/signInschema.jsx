import * as Yup from "yup"
export const signinSchema = Yup.object({
  emailusername: Yup.string().required("Please enter email or username"),
 
  passwordlogin: Yup.string().required("Please enter your password"),
});
