import { Router } from 'express'
import { Materia } from '../models/Materia'

const materiaRouter = Router()
const url = 'materias'
materiaRouter.get(`/${url}`, async (request, response) => {
    try {
        const materias = await Materia.find()
        return response.status(200).send(materias)
    } catch (error) {
        return response.status(400).send(error)
    }
})
materiaRouter.get(`/${url}/:id`, async (request, response) => {
    try {
        const materia = await Materia.findById(request.params.id)
        return response.status(200).send(materia)
    } catch (error) {
        return response.status(400).send(error)
    }
})
materiaRouter.post(`/${url}`, async (request, response) => {
    try {
        const materia = await Materia.create(request.body)
        return response.status(201).send(materia)
    } catch (error) {
        return response.status(400).send(error)
    }
})
materiaRouter.delete(`/${url}/:id`, async (request, response) => {
    try {
        const materia = await Materia.findByIdAndDelete(request.params.id)
        return response.status(200).send(materia)
    } catch (error) {
        return response.status(400).send(error)
    }
})
materiaRouter.patch(`/${url}/:id`, async (request, response) => {
    try {
        const materia = await Materia.findByIdAndUpdate(request.params.id, request.body)
        return response.status(200).send(materia)
    } catch (error) {
        return response.status(400).send(error)
    }
})
materiaRouter.put(`/${url}/:id`, async (request, response) => {
    try {
        const materia = await Materia.findByIdAndUpdate(request.params.id, request.body)
        return response.status(200).send(materia)
    } catch (error) {
        return response.status(400).send(error)
    }
})
export { materiaRouter }
