function comprar(produto) {
  let numero = "5549992025959"; // seu número
  let mensagem = `Olá! Vi o produto ${produto} no site da Gym Complex e gostaria de mais informações.`;
  let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  
  window.open(url, "_blank");
}