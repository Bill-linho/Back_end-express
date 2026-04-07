import jwt from 'jsonwebtoken'

export function autencticar(req, res, next){
    const authHeader = req.headers['authorization']
    console.log("tentando Autenticar")

    // 👇 valida primeiro se existe
    if (!authHeader) {
        return res.status(401).json({ error: 'Token não informado' })
    }

    // 👇 agora sim pode usar startsWith
    if (!authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Token inválido' })
    }

    const token = authHeader.split(' ')[1]
    
    try {
        const validarToken = jwt.verify(token, process.env.JWT_SECRET)
        req.contatos = validarToken

        console.log('autenticado')
        next()        
    } catch (error) {
        return res.status(401).json({ error: 'Token inválido' })
    }
}