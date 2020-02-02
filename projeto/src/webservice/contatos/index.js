import http from '../../http'

export async function addContatos(model) {
    return http.post('/api/contato/register', model)
}

export async function getContatos(id_usuario) {
    return http.get(`/api/contato/contatos/${id_usuario}`)
}