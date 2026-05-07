function comprar(produto, preco) {

  let numero = "5549992025959";

  let mensagem =
  `Olá! Tenho interesse no ${produto} no valor de R$ ${preco}.`;

  let url =
  `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}