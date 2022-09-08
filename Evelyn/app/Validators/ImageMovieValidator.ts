import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ImageMovieValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    image_url: schema.array().members(schema.string()),
  })
  public messages: CustomMessages = {}
}
