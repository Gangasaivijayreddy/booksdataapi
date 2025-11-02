const mongoose = require("mongoose");

const SmartphoneSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
      trim: true
    },
    model: {
      type: String,
      required: true,
      trim: true
    },
    releaseYear: {
      type: Number,
      required: true
    },
    operatingSystem: {
      type: String,
      enum: ['iOS', 'Android', 'Windows', 'Other'],
      default: 'Other'
    },
    displaySize: {
      type: String,
      default: ""
    },
    storage: {
      type: String,
      default: ""
    },
    ram: {
      type: String,
      default: ""
    },
    cameraSpecs: {
      type: Object,
      default: {} // Can include megapixels, lens type, etc.
    },
    batteryCapacity: {
      type: String,
      default: ""
    },
    connectivity: {
      type: [String],
      default: [] // e.g., ['4G LTE', '5G', 'Wi-Fi', 'Bluetooth', 'NFC']
    },
    price: {
      type: Number,
      default: 0
    },
    colorsAvailable: {
      type: [String],
      default: []
    },
    features: {
      type: [String],
      default: []
    }
  },
  { timestamps: true } // Adds createdAt and updatedAt automatically
);

const Smartphone = mongoose.model("Smartphone", SmartphoneSchema);

module.exports = Smartphone;
