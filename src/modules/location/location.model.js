import mongoose from 'mongoose';
const locationSchema = new mongoose.Schema({
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
    location: {
        type: {
            type: String,
            enum: ['Point'],
            default: 'Point',
        },
        coordinates: {
            type: [Number],
            required: true, // [lng, lat]
        },
        heading: Number,
        speed: Number,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,
});
// Geo-index for queries
locationSchema.index({ location: '2dsphere' });
// Index for quick lookup by user and room
locationSchema.index({ userId: 1, roomId: 1 }, { unique: true });
export const Location = mongoose.model('Location', locationSchema);
//# sourceMappingURL=location.model.js.map