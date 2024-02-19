import ProvedorCriptografia from "../../app/portas/ProvedorCriptografia";

export default class InverterSenha  implements ProvedorCriptografia{
    criptografar(senha: string): string{
        return senha.split('').reverse().join('')
    }
    comparar(senha: string, senhacriptografada: string): boolean {
        const senhaFornecida = this.criptografar(senha)
        return senhaFornecida === senhacriptografada
    }
}