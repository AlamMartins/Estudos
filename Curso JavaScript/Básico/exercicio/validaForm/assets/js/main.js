class ValidarFormulario{
  constructor(){
    //Seleciona o formulário
    this.formulario = document.querySelector('.formulario');
    //Executa a função Eventos ao iniciar a página
    this.eventos();
  }

  //Ao clicar no botão submit é 
  eventos(){
    this.formulario.addEventListener('submit', e => {
      this.handleSubmit(e);
    });
  }
  /*
  * HandleSubmit função do React, identifica erro através da variável camposValidados que é
  * recebido identificado através da função camposSaoValidos se for valido o formulário é enviado.
  */
  handleSubmit(e){
    e.preventDefault();
    const camposValidos = this.camposSaoValidos();
    const senhasValidas = this.senhasSaoValidos();

    //Se todos os campos forem validados e a senha for validada o formulário é enviado
    if(camposValidos && senhasValidas){
      alert('Formulário enviado.');
      this.formulario.submit();
    }
  }

  //Validando as senhas
  senhasSaoValidos(){
    let valid = true;

    const senha = this.formulario.querySelector('.senha')
    const repetirSenha = this.formulario.querySelector('.repetir-senha')

    if(senha.value !== repetirSenha.value){
      valid = false;
      this.criaErro(senha, 'Campos senha e repetir senha precisa ser iguais')
      this.criaErro(repetirSenha, 'Campos senha e repetir senha precisa ser iguais')
    }

    if(senha.value.length < 6 || senha.value.length > 12){
      valid = false;
      this.criaErro(senha, 'Senha tem que estar entre 6 e 12 caracteres')
    }

    return valid;
  }

  //Validação começa como true caso é identificado algum erro é retornado false
  camposSaoValidos(){
    let valid = true;
    //Loop para remover os campos de erros duplicado
    for(let errorText of this.formulario.querySelectorAll('.error-text')){
      errorText.remove()
    }

    //Loop para informar os campos que estão em branco e não foram preenchidos
    for(let campo of this.formulario.querySelectorAll('.validar')){
      const label = campo.previousElementSibling.innerText;
      
      if(!campo.value){
        this.criaErro(campo,`Campo ${label} não pode estar em branco.`)
        valid = false;
      }
      //Se não tiver informação no campo CPF, return valid false;
      if(campo.classList.contains('cpf')){
        if(!this.validaCPF(campo)) valid = false;
      }
      //Se não tiver informação no campo usuário, return valid false;
      if(campo.classList.contains('usuario')){
        if(!this.validaUsuario(campo)) valid = false;
      }

    }
    return valid;
  }

  validaUsuario(campo){
    const usuario = campo.value;
    let valid = true;

    if(usuario.length < 3 || usuario.length > 12){
      this.criaErro(campo, 'Usuário Precisa ter entre 3 e 12 caracteres.')
      valid = false
    }

    if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(campo, 'Nome de usuário precisar conter apenas letras e/ou números.');
      valid = false;
    } 

    return valid;
  }

  //validando o CPF com o validaCPF.js
  validaCPF(campo){
    const cpf = new ValidaCPF(campo.value)

    if(!cpf.valida()){
      this.criaErro(campo, 'CPF inválido.')
      return false;
    }
    return true
  }

  criaErro(campo, msg){
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    campo.insertAdjacentElement('afterend',div);

  }

}




const valida = new ValidarFormulario();