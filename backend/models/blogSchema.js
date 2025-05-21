import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: [8, "Blog title must containe atleast 8 characters!"],
        maxLength: [40, "Blog title can not exceed 40 characters!"],
    },
    mainImage: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    intro: {
        type: String,
        required: true,
        minLength: [250, "Blog intro must containe atleast 250 characters!"],
    },
    paraOneImage: {
         public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    paraOneDescription: {
        type: String,
        minLength: [50, "Blog intro must containe atleast 50 characters!"],
    },
    paraOneTitle:{
        type: String,
        minLength: [50, "Blog title must containe atleast 50 characters!"],
    },
    paraTwoImage: {
         public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    paraTwoDescription: {
        type: String,
        minLength: [50, "Blog intro must containe atleast 50 characters!"],
    },
    paraTwoTitle:{
        type: String,
        minLength: [50, "Blog title must containe atleast 50 characters!"],
    },
    paraThreeImage: {
         public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    paraThreeDescription: {
        type: String,
        minLength: [50, "Blog intro must containe atleast 50 characters!"],
    },
    paraThreeTitle:{
        type: String,
        minLength: [50, "Blog title must containe atleast 50 characters!"],
    },
    category: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: ture
    },
    authorName: {
        type: String,
        required: true
    },
    authorAvatar: {
        type: String,
        required: true,

    }
});


export const Blog = mongoose.model("Blog", blogSchema);

