
const mongoose = require("mongoose");
const crypto = require("crypto");

const accountDetailsSchema = new mongoose.Schema({
  bankName: {
    type: String,
    required: true,
    trim: true,
    set: (val) => encrypt(val),
    get: (val) => decrypt(val),
  },

  accountHolderName: {
    type: String,
    // required: true,
    trim: true,
    set: (val) => encrypt(val),
    get: (val) => decrypt(val),
  },
  accountNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    set: (val) => encrypt(val),
    get: (val) => decrypt(val),
  },
  ifscCode: {
    type: String,
    required: true,
    trim: true,
    set: (val) => encrypt(val),
    get: (val) => decrypt(val),
  },
  branchName: {
    type: String,
    required: true,
    trim: true,
    set: (val) => encrypt(val),
    get: (val) => decrypt(val),
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

//function is used to encrypt the value
function encrypt(text) {
  const cipher = crypto.createCipher("aes-256-cbc", "craves_encryption_key");
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}

//function is used to decrypt the value
function decrypt(text) {
  const decipher = crypto.createDecipher(
    "aes-256-cbc",
    "craves_encryption_key"
  );
  let decrypted = decipher.update(text, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

module.exports = mongoose.model("AccountDetails", accountDetailsSchema);
