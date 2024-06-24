const { schema, userIdSchema } = require('./validator');

module.exports = {
    checkValidID : async (req, res, next) => {
        try {
            const {error} = await userIdSchema.validateAsync(req.params.id);
            if(error) {
                throw error;
            }else next();

        } catch (error) {
            res.status(500).json({ error: error });
        }
    },
    checkValidUser: async (req, res, next) => {
        try {
            const isupdating = Boolean(false);
            const {error} = await schema.validateAsync(req.body, { context: {updating: isupdating} });
            if(error) {
                throw error;
            }else next();
        } catch (error) {
            res.status(400).json({ error: error });
        }
    },
    checkValidation: async (req, res, next) => {
        try {
            const isupdating = Boolean(req.params.id);
            const {error} = await schema.validateAsync(req.body, { context: {updating: isupdating}});
            if(error) {
                throw error;
            }
            const {error1} = await userIdSchema.validateAsync(req.params.id);
            if(error1) {
                throw error1;
            }else next();

        } catch (error) {
            res.status(400).json({ error: error });
        }
    }
}