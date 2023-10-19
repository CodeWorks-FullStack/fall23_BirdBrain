import { Schema } from "mongoose";

export const BirdSchema = new Schema({
  name: {type: String, required: true, maxlength: 50, minlength: 1},
  imgUrl: {type: String, default: "https://www.mvnews.org/wp-content/uploads/2020/01/drird.jpg", maxlength: 500},
  location: {type: String, default: "My backyard.", minlength: 1, maxlength: 500},
  canFly: {type: Boolean, default: true},
  isBird: {type: Boolean, default: false},
  creatorId: {type: Schema.Types.ObjectId, required: true, ref: "Account"}
}, { timestamps: true, toJSON: { virtuals: true }})

BirdSchema.virtual("creator", {
  localField: "creatorId",
  foreignField: "_id",
  ref: "Account",
  justOne: true
})
