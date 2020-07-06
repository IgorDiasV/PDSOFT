function logar()
{
    let usuario =document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;
    if(usuario=="caixa"&&senha=="caixa")
    {
        location.href="caixa.html";
    }else if(usuario=="gerente" && senha=="gerente")
    {
        location.href = "gerente.html";
    }else if(usuario=="cozinha" && senha =="cozinha")
    {
        //window.open('teste.html',"_self");
        location.href = "cozinha.html";
        
      
    }else
    {
        alert("Usuário ou senha incorreta");
    }
}