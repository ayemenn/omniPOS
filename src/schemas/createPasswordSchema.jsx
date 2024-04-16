import * as Yup from "yup";
export const createPasswordSchema = Yup.object(
    {
Password: Yup.string().min(8).matches(
    /^(?=.*[a-z])(?=.*[A-Z])/,
    "One Uppercase and lowercase required"
  ).required("Enter new Password"),
ConfirmPassword:Yup.string().required().oneOf([Yup.ref("Password"),null],"Password must match")

    });