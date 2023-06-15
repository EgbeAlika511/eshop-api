import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String },
    products: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

export default mongoose.model("Order", OrderSchema);
