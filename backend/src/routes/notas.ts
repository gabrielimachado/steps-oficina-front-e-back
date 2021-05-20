import { Router } from 'express'
import { Nota } from '../models/Nota'

const notaRouter = Router()
const url = 'notas'
notaRouter.get(`/${url}`, async (request, response) => {
    try {
        const notas = await Nota.find()
        return response.status(200).send(notas)
    } catch (error) {
        return response.status(400).send(error)
    }
})
notaRouter.get(`/${url}/:id`, async (request, response) => {
    try {
        const nota = await Nota.findById(request.params.id)
        return response.status(200).send(nota)
    } catch (error) {
        return response.status(400).send(error)
    }
})
notaRouter.post(`/${url}`, async (request, response) => {
    try {
        const nota = await Nota.create(request.body)
        return response.status(201).send(nota)
    } catch (error) {
        return response.status(400).send(error)
    }
})
notaRouter.delete(`/${url}/:id`, async (request, response) => {
    try {
        const nota = await Nota.findByIdAndDelete(request.params.id)
        return response.status(200).send(nota)
    } catch (error) {
        return response.status(400).send(error)
    }
})
notaRouter.patch(`/${url}/:id`, async (request, response) => {
    try {
        const nota = await Nota.findByIdAndUpdate(request.params.id, request.body)
        return response.status(200).send(nota)
    } catch (error) {
        return response.status(400).send(error)
    }
})
notaRouter.put(`/${url}/:id`, async (request, response) => {
    try {
        const nota = await Nota.findByIdAndUpdate(request.params.id, request.body)
        return response.status(200).send(nota)
    } catch (error) {
        return response.status(400).send(error)
    }
})
notaRouter.get(`/${url}/materias/:id`, async (request, response) => {
    try {
        const notas = await Nota.find({ _materiaId: request.params.id })
        return response.status(200).send(notas)
    } catch (error) {
        return response.status(400).send(error)
    }
})
export { notaRouter }
