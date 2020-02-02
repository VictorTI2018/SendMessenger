import http from '../../http'

export async function addContatos(model) {
    return http.post('/api/contato/register', model)
}