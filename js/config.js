// ═══════════════════════════════════════════════════════
//  CONFIG — edite aqui para atualizar conteúdo e preços
// ═══════════════════════════════════════════════════════

const CONFIG = {

  // ── WhatsApp ──
  whatsapp: {
    number: "5511999999999",          // DDI + DDD + número, sem espaços
    message: "Olá! Gostaria de solicitar um orçamento para redes de proteção.",
  },

  // ── Calculadora de preços ──
  pricing: {
    netPerM2: 59,   // Custo da rede por m²
    laborPerM2: 20,   // Custo da mão de obra por m²
    sliderMin: 1,
    sliderMax: 100,
    sliderDefault: 12,
  },

  // ── Serviços ──
 services: [
  { icon: "<i class=\"fa-solid fa-building\"></i>", title: "Sacadas e Varandas", desc: "Proteção ideal para sacadas de apartamentos e varandas gourmet." },
  { icon: "<i class=\"fa-solid fa-window-maximize\"></i>", title: "Janelas", desc: "Segurança para janelas de apartamentos, casas e escritórios." },
  { icon: "<i class=\"fa-solid fa-bug-slash\"></i>", title: "Tela Mosquiteiro", desc: "Proteção contra insetos com ventilação e conforto para o ambiente." },
  { icon: "<i class=\"fa-solid fa-paw\"></i>", title: "Pets", desc: "Redes específicas para garantir a segurança do seu pet com conforto." },
  { icon: "<i class=\"fa-solid fa-basketball-ball\"></i>", title: "Cobertura de Quadras", desc: "Redes de proteção e cobertura para quadras esportivas, garantindo segurança e resistência." },
  { icon: "<i class=\"fa-solid fa-shirt\"></i>", title: "Varais de Alumínio", desc: "Varais resistentes e práticos para otimizar espaços internos e externos." },
],

  // ── Depoimentos ──
  testimonials: [
    { text: "Excelente serviço! Equipe pontual, educada e o acabamento ficou perfeito. Meus filhos estão muito mais seguros agora.", name: "Juliana M.", city: "São Paulo – SP" },
    { text: "Material de alta qualidade e instalação impecável. Recomendo muito a Redes Vieira para quem quer segurança de verdade.", name: "Carlos R.", city: "Guarulhos – SP" },
    { text: "Super recomendo! Meu gato ficou muito mais seguro e a rede ficou linda, quase não aparece na varanda.", name: "Patricia S.", city: "Santo André – SP" },
  ],

  // ── Por que nos escolher ──
  whyItems: [
    { icon: "<i class=\"fa-solid fa-shield-alt\"></i>", title: "Segurança Garantida", desc: "Materiais de alta qualidade e instalação seguindo as normas de segurança." },
    { icon: "<i class=\"fa-solid fa-award\"></i>", title: "Equipe Certificada", desc: "Profissionais treinados e certificados para garantir o melhor resultado." },
    { icon: "<i class=\"fa-solid fa-gavel\"></i>", title: "Garantia Estendida", desc: "Anos de garantia em nossos produtos e serviços." },
    { icon: "<i class=\"fa-solid fa-bolt\"></i>", title: "Atendimento Rápido", desc: "Orçamento rápido e instalação ágil em toda São Paulo." },
  ],

  // ── Galeria ──
  gallery: [
    { image: "images/gallery/varanda.webp", gradient: "linear-gradient(135deg,#1e3a8a,#1d4ed8)", label: "Varanda" },
    { image: "images/gallery/varal.webp", gradient: "linear-gradient(135deg,#1e293b,#475569)", label: "Varal de Alumínio" },
    { image: "images/gallery/criancas.webp", gradient: "linear-gradient(135deg,#1e40af,#0e7490)", label: "Segurança para Crianças" },
    { image: "images/gallery/pet.webp", gradient: "linear-gradient(135deg,#334155,#1e3a8a)", label: "Segurança de Pet" },
    { image: "images/gallery/quadra.webp", gradient: "linear-gradient(135deg,#0e7490,#172554)", label: "Cobertura de Quadra" },
    { image: "images/gallery/mosquiteiro.webp", gradient: "linear-gradient(135deg,#1d4ed8,#1e293b)", label: "Tela Mosquiteiro" },
  ],
};
