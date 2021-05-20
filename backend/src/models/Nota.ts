import mongoose, { Schema } from 'mongoose'

export interface NotaInterface extends mongoose.Document {
    _id?: string,
    _materiaId: string,
    _userId: string,
    description: string,
    updatedAt?: Date,
    createdAt?: Date
}
export const NotaSchema = new mongoose.Schema({
    _materiaId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    _userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    description: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)
const Nota = mongoose.model('Nota', NotaSchema)

export { Nota }