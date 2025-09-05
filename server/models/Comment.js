// import mongoose from "mongoose";

// const commentSchema = new mongoose.Schema({
//     blog: { type: mongoose.Schema.Types.ObjectId, ref: "blog", required: true },
//     name: { type: String, required: true },
//     content: { type: String, required: true },
//     isApproved: { type: Boolean, default: false },
// }, { timestamps: true });

// const comment = mongoose.model('comment', commentSchema);

// export default comment;
import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    blog: { type: mongoose.Schema.Types.ObjectId, ref: "Blog", required: true },
    name: { type: String, required: true }, // who posted
    content: { type: String, required: true }, // the actual comment
    isApproved: { type: Boolean, default: false },
}, { timestamps: true });

const Comment = mongoose.models.Comment || mongoose.model("Comment", commentSchema);

export default Comment;