const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  // image: {
  //   filename: String,
  //   url: String,
  //   // default:
  //   //   "https://unsplash.com/photos/a-misty-landscape-with-snowy-mountains-and-sky-2-a-R0glb48",
  //   // set: (v) =>
  //   //   v === ""
  //   //     ? "https://unsplash.com/photos/a-misty-landscape-with-snowy-mountains-and-sky-2-a-R0glb48"
  //   //     : v,
  // },
  image: {
    filename: {
      type: String,
      default: "", // or you can omit it if not required
    },
    url: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=60",
      set: (v) =>
        v === ""
          ? "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=60"
          : v,
    },
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  category: {
    type: String,
    enum: ["mountains", "arctic", "farms", ""],
  },
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
