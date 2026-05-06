function comprar(produto) {
  let numero = "5599999999999"; // número da academia
  let mensagem = `Olá, tenho interesse no ${produto}`;
  let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  
  window.open(url, "_blank");
}