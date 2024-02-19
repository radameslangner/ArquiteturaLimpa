import ProvedorCriptografia from "../../app/portas/ProvedorCriptografia";

export default class SenhaComEspaco  implements ProvedorCriptografia{
    criptografar(senha: string): string{
        return senha.split('').join(' ')
    }
    comparar(senha: string, senhacriptografada: string): boolean {
        const senhaFornecida = this.criptografar(senha)
        return senhaFornecida === senhacriptografada
    }
}