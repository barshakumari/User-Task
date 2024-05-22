import * as Yup from "yup"


export const loginschema=Yup.object({
    name:Yup.string().min(2).max(25).required("Please provide name"),
    email:Yup.string().email().required("Please enter your email"),
    phone: Yup.number().typeError("That doesn't look like a phone number")
                       .positive("A phone number can't start with a minus")
                       .integer("A phone number can't include a decimal point")
                       .min(8)
                       .required('A phone number is required')
})