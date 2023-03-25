const { default: mongoose } = new require('mongoose');

const bookingSchema = new mongoose.Schema({
  place: { type: mongoose.Schema.Types.ObjectId, required: true },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  bookingName: { type: String, required: true },
  bookingEmail: { type: String, required: true },
  bookingMobileNo: { type: Number, required: true },
  price: Number,
});

const BookingModel = mongoose.model('Booking', bookingSchema);

module.exports = BookingModel;
