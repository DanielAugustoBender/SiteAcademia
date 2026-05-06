function comprar(produto) {
  let numero = "5549992025959"; // seu número
  let mensagem = `Olá, tenho interesse no ${produto}`;
  let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  
  window.open(url, "_blank");
}