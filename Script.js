let pedidos=[];

let total=0;



function adicionarPedido(nome,preco){


pedidos.push(nome);

total += preco;


mostrarPedido();


}



function mostrarPedido(){


let lista=document.getElementById("listaPedido");


lista.innerHTML="";


pedidos.forEach(item=>{


let li=document.createElement("li");

li.innerHTML=item;

lista.appendChild(li);


});


document.getElementById("valorTotal").innerHTML=
"Total: R$ "+total;


}




function enviarWhatsapp(){


let mensagem=
"Olá Tropa das Luu's! Quero fazer um pedido:%0A%0A"
+
pedidos.join("%0A")
+
"%0A%0ATotal: R$ "
+
total;



window.open(

"https://wa.me/5521981696711?text="+mensagem

);


}




function entrarAdm(){


let usuario=
document.getElementById("usuario").value;


let senha=
document.getElementById("senha").value;



if(

usuario==="Tropa das Luu's"
&&
senha==="Tropa9392"

){


document.getElementById("mensagemAdm").innerHTML=
"✅ Login ADM realizado";


}

else{


document.getElementById("mensagemAdm").innerHTML=
"❌ Usuário ou senha incorretos";


}


}
