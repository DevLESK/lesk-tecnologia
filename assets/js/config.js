/**
 * Configuração central de contatos do site.
 * Os botões e links com data-contact="whatsapp" ou data-contact="instagram"
 * leem estes valores em assets/js/main.js.
 *
 * Preencher somente com dados oficiais antes de publicar.
 * Manter vazio enquanto o contato oficial não estiver definido.
 * Não inserir número, perfil ou URL fictícios.
 */
window.LESK_CONFIG = Object.freeze({
  /* WhatsApp: código do país + DDD + número, somente dígitos. */
  whatsappNumber: "",

  /* Mensagem inicial do WhatsApp ao abrir a conversa. */
  whatsappMessage: "Olá! Quero conhecer as soluções da LESK Tecnologia.",

  /* Instagram: URL completa do perfil oficial, com https://www.instagram.com/. */
  instagramUrl: ""
});
