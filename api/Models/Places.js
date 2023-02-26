const { default: mongoose } = new require('mongoose');

const PlaceSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  title: String,
  address: String,
  photos: [String],
  description: String,
  perks: [String],
  extraInfo: String,
  checkIn: Number,
  checkOut: Number,
  maxGuest: Number,
});

const placeModal = new mongoose.model('Place', PlaceSchema);

module.exports = placeModal;
