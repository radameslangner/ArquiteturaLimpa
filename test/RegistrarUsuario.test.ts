import Colecao from "../src/exemplo/app/portas/Colecao"
import Registarusuario from "../src/exemplo/app/usuario/RegistrarUsuario"
import BancoEmMemoria from "../src/exemplo/adaptadores/db/BancoEmMemoria"
import SenhaComEspaco from "../src/exemplo/adaptadores/auth/SenhaComEspaco"
import InverterSenha from "../src/exemplo/adaptadores/auth/InverterSenha"
import CriptoReal from "../src/exemplo/adaptadores/auth/CriptoReal"

test('Deve reistrar um usuário invertendo a senha', () => {
    const colecao = new BancoEmMemoria()
    const provedorCript = new InverterSenha()
    const casoDeUso = new Registarusuario(colecao, provedorCript)
    const usuario = casoDeUso.executar('João', 'j@mail.com', '123456')
    expect(usuario).toHaveProperty("id")
    expect(usuario.nome).toBe('João')
    expect(usuario.senha).toBe('654321')
})

test('Deve reistrar um usuário com senha espaçada', () => {
    const colecao = new BancoEmMemoria()
    const provedorCript = new SenhaComEspaco()
    const casoDeUso = new Registarusuario(colecao, provedorCript)
    const usuario = casoDeUso.executar('João', 'j@mail.com', '123456')
    expect(usuario).toHaveProperty("id")
    expect(usuario.nome).toBe('João')
    expect(usuario.senha).toBe('1 2 3 4 5 6')
})

test('Deve reistrar um usuário com senha criptografada', () => {
    const colecao = new BancoEmMemoria()
    const provedorCript = new CriptoReal()
    const casoDeUso = new Registarusuario(colecao, provedorCript)
    const usuario = casoDeUso.executar('João', 'j@mail.com', '123456')
    expect(usuario).toHaveProperty("id")
    expect(usuario.nome).toBe('João')
    expect(provedorCript.comparar('123456', usuario.senha!)).toBeTruthy()
})