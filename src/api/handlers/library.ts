import { http, HttpResponse } from 'msw'
import { games } from '../mocks/games'

export const libraryHandlers = [
  http.get('/api/library', () => {
    return HttpResponse.json(games)
  }),
  http.get('/api/library/:id', ({ params }) => {
    const game = games.find((g) => g.id === params.id)
    if (!game) {
      return new HttpResponse(null, { status: 404 })
    }
    return HttpResponse.json(game)
  }),
]
