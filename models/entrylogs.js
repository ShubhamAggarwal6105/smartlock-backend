import mongoose from 'mongoose';

const entryLogSchema = new mongoose.Schema({
    issued_by: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'declined'],
        required: true
    },
    reviewer: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        default: Date.now
    }
});

export const EntryLog = mongoose.model('EntryLog', entryLogSchema);
