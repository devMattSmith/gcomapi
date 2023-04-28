const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { USER } = require("../constant/appConstant");

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    verification: {
      token: {
        type: String,
        default: "",
      },
      expireTime: {
        type: Date,
        default: null,
      },
      isVerified: {
        type: Boolean,
        default: false,
      },
    },

    firstName: {
      type: String,
      default: "",
    },
    lastName: {
      type: String,
      default: "",
    },

    state: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    avatar: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      required: true,
    },
    registerType: {
      type: String,
    },
    country: {
      type: String,
    },
    isDesable: {
      type: Boolean,
      default: false,
    },
    phoneNumber: {
      type: Number,
    },
    role: {
      type: Number,
      enum: [USER.TYPE.ADMIN],
      default: USER.TYPE.ADMIN,
    },
    dt_added: {
      type: Date,
      default: new Date(),
    },
    dt_upd: {
      type: Date,
    },
  },
  { versionKey: false }
);

const UserModel = mongoose.model("User", UserSchema, "Users");
module.exports = UserModel;
