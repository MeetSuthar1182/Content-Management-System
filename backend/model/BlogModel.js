import { Schema, model } from "mongoose";

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxLength: 100
    },
    url: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
},
{
    timestamps: true
}
);

const blogModel = model('blogs', blogSchema);
export default blogModel;