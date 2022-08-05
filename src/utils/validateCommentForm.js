import { ErrorMessage, validateYupSchema } from "formik"


export const validateContactForm =  (values) => {
    const errors = {}
    console.log(values)

    if(!values.rating || values.rating === "Select..."){
        errors.rating = "Required"
    }

    if(values.author.length < 2){
        errors.author = "Must be at least 2 characters."
    }else if(values.author.length > 15){
        errors.author = "Must be 15 characters or less."
    }

    return errors

}