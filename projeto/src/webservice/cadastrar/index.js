import http from '../../http'

export async function cadastrar(model) {
    return http.post('/api/register', model)
}