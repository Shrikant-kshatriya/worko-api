const Joi = require('joi');

const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.when('$updating', {
        is: true,
        then: Joi.string().min(6),
        otherwise: Joi.string().min(6).required(),
    }),
    name: Joi.string().required(),
    age: Joi.number().integer().required(),
    city: Joi.string().required(),
    zipcode: Joi.number().integer().required(),
});

const userIdSchema = Joi.string().regex(/^[0-9a-fA-F]{24}$/);

module.exports = {
    schema,
    userIdSchema,
};