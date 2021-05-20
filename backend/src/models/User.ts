import { mongoose } from '../database/database'
import bcrypt from 'bcryptjs'
import { environment } from '../config/config';

export interface UserInterface extends mongoose.Document {
    _id?: string,
    name: string,
    email: string,
    password: string,
    updatedAt?: Date,
    createdAt?: Date
}
export const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 100,
        minlength: 3
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    password: {
        type: String,
        required: true,
        select: false,
        minlength: 8
    }
},
    {
        timestamps: true
    }
)

UserSchema.pre<UserInterface>('save', async function (next) {
    const user = this
    if (!user.isModified('password')) {
        next()
    } else {
        const hash = await bcrypt.hash(this.password, environment.security.saltRounds)
        this.password = hash
        next()
    }
})
const User = mongoose.model('User', UserSchema)

export { User }