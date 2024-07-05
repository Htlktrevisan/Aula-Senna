function Enviar(){
  let nomeUsuario =document.getElementById('nome').value
  let emailUsuario =document.getElementById('email').value
  let senhaUsuario =document.getElementById('senha').value
  let dataUsuario =document.getElementById('data').value
  let heroisUsuario = document.querySelector("input[name='herois']:checked").value
  let faUsuario = document.querySelector("input[name='Fã']:checked").value

alert("Seu nome é:" + nomeUsuario + "\n"
    + "Seu email é:" + emailUsuario + "\n"
    + "Sua senha é:" + senhaUsuario + "\n"
    + "Você nasceu:" + dataUsuario + "\n"
    + "Seu heroi favorito é:" + heroisUsuario + "\n"
    + "Você é:" + faUsuario + "\n"
)

}