import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Movie from 'App/Models/Movie'

export default class MoviesController {
  public async index({ response }) {
    const movieAll = await Movie.query()
    return response.json(movieAll)
  }

  public async store({ request, response }: HttpContextContract) {
    const data = request.body()
    const movieCreated = Movie.create(data)
    return response.json(movieCreated)
  }

  public async show({ response, params }: HttpContextContract) {
    return response.json({ movieId: params.id })
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
