import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'MoviesController.index')

Route.get('/movie', 'MoviesController.index')

Route.post('/movie', 'MoviesController.store')
