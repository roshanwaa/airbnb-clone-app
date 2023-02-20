const { default: mongoose } = require('mongoose');

const PlaceSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  title: String,
  address: String,
  photoLL: [String],
  description: String,
  perks: [String],
  extraInfo: String,
  checkIn: Number,
  checkOut: Number,
  maxGuest: Number,
});

const PlaceModal = new mongoose.model('place', PlaceSchema);

module.exports = placeModal;
