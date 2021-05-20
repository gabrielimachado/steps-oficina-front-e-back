import mongoose, { Schema } from 'mongoose'

export interface MateriaInterface extends mongoose.Document {
    _id?: string,
    name: string,
    description: string,
    updatedAt?: Date,
    createdAt?: Date
}
export const MateriaSchema = new mongoose.Schema({
    name: {
        type: String,
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
const Materia = mongoose.model('Materia', MateriaSchema)

export { Materia }