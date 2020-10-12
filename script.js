function enviarMsg(){
    var form = document.getElementById("formContato");
    let nome = form.nome.value;
    let sobreNome = form.nome.value;
    let telefone = form.telefone.value;
    let msg = form.msg.value;
    
    let texto = "olá meu nome é " + nome + " " + sobrenome +  " " + msg;

   alert(texto);
    
}