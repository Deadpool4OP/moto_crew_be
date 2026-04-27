import mongoose from 'mongoose';
const sosSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    roomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        required: true,
    },
    type: {
        type: String,
        enum: ['tea_break', 'water_break', 'bike_issue', 'emergency'],
        required: true,
    },
    location: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
    },
    message: String,
    status: {
        type: String,
        enum: ['active', 'resolved'],
        default: 'active',
    },
}, {
    timestamps: true,
});
export const SOS = mongoose.model('SOS', sosSchema);
//# sourceMappingURL=sos.model.js.map