import http from '../../http'

export async function getUsuarios() {
    return http.get('/api/usuarios/usuarios')
}