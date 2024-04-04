import vine from '@vinejs/vine';

const commentSchema = vine.object({});

const executivememberSchema = vine.object({});

const homedataSchema = vine.object({});

const newsSchema = vine.object({});

const userSchema = vine.object({});

export {commentSchema,
        executivememberSchema,
        homedataSchema,
        newsSchema,
        userSchema            
};