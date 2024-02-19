import bcrypt from 'bcrypt'
import ProvedorCriptografia from "../../app/portas/ProvedorCriptografia"

export default class CriptoReal implements ProvedorCriptografia{
    criptografar(senha: string): string {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(senha, salt)
    }
    comparar(senha: string, senhacriptografada: string): boolean {
        return bcrypt.compareSync(senha, senhacriptografada)
    }
}