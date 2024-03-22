import Joi from 'joi';
export const ValidateProduct = Joi.object({
    name:Joi.string().required().empty().min(6).messages({
        "any.required":"Ten san pham khong de trong",
        "string.empty":"Ten san pham khong de trong",
        "string.min":"Ten san pham phai lon hon 6 ky tu"
    }),
    image:Joi.string().required().empty().messages({
        "any.required":"Anh san pham khong de trong",
        "string.empty":"Anh san pham khong de trong"
    }),
    price:Joi.string().required().empty().messages({
        "any.required":"Gia san pham khong de trong",
        "number.min":"Gia san pham khong de trong"
    })
})