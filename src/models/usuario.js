const { model, Schema } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true,
    },
    role:{
        type:Array,
        default:"normalUser"
    }
}, {
    versionKey: false,
    timestamps: true
});

UserSchema.methods.toJSON = function() {
    const { password, _id, ...user } = this.toObject();
    user.uid = _id;

    return user;
}

module.exports = model('users', UserSchema);