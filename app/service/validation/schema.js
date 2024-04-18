import vine from '@vinejs/vine';

const commentSchema = vine.object({});

const boardmemberSchema = vine.object({});

const homedataSchema = vine.object({});

const newsSchema = vine.object({});

const createuserSchema = vine.object({
        email : vine.string().email(),
        lastname : vine.string().minLength(1),
        firstname : vine.string().minLength(1),
        password : vine.string().minLength(8).confirmed()     
});

const loginSchema = vine.object({
        email : vine.string().email(),
        password : vine.string().minLength(8)
})

export {commentSchema,
        boardmemberSchema,
        homedataSchema,
        loginSchema,
        newsSchema,
        createuserSchema            
};