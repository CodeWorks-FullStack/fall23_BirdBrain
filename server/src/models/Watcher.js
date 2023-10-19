import { Schema } from "mongoose";

export const WatcherSchema = new Schema({
  birdId : {type: Schema.Types.ObjectId, required: true, ref: "Bird"},
  creatorId: {type: Schema.Types.ObjectId, required: true, ref: "Account"}
}, { timestamps: true, toJSON: { virtuals: true }})

WatcherSchema.virtual('creator', {
  localField: "creatorId",
  foreignField: "_id",
  justOne: true,
  ref: "Account"
})

WatcherSchema.virtual('bird', {
  localField: "birdId",
  foreignField: "_id",
  justOne: true,
  ref: "Bird"
})

// Makes it so you can only share 1 unique BirdId with 1 unique CreatorId making it so you can only "watch" a bird once.
WatcherSchema.index({birdId: 1, creatorId: 1}, {unique: true})
