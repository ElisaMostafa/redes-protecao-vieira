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
    netPerM2:   59,   // Custo da rede por m²
    laborPerM2: 20,   // Custo da mão de obra por m²
    sliderMin:  1,
    sliderMax:  100,
    sliderDefault: 12,
  },

  // ── Serviços ──
  services: [
    { icon: "<i class=\"fa-solid fa-building\"></i>", title: "Sacadas e Varandas",   desc: "Proteção ideal para sacadas de apartamentos e varandas gourmet." },
    { icon: "🪟", title: "Janelas",               desc: "Segurança para janelas de apartamentos, casas e escritórios." },
    { icon: "🪜", title: "Escadas",               desc: "Proteção para escadas internas e externas, ideal para crianças e pets." },
    { icon: "🐾", title: "Pets",                  desc: "Redes específicas para garantir a segurança do seu pet com conforto." },
    { icon: "⛹️", title: "Cobertura de Quadras", desc: "Redes de proteção e cobertura para quadras esportivas, garantindo segurança e resistência." },
  ],

  // ── Depoimentos ──
  testimonials: [
    { text: "Excelente serviço! Equipe pontual, educada e o acabamento ficou perfeito. Meus filhos estão muito mais seguros agora.", name: "Juliana M.", city: "São Paulo – SP" },
    { text: "Material de alta qualidade e instalação impecável. Recomendo muito a Redes Vieira para quem quer segurança de verdade.",  name: "Carlos R.",  city: "Guarulhos – SP" },
    { text: "Super recomendo! Meu gato ficou muito mais seguro e a rede ficou linda, quase não aparece na varanda.",                  name: "Patricia S.", city: "Santo André – SP" },
  ],

  // ── Por que nos escolher ──
  whyItems: [
    { icon: "🛡️", title: "Segurança Garantida",  desc: "Materiais de alta qualidade e instalação seguindo as normas de segurança." },
    { icon: "🏆", title: "Equipe Certificada",   desc: "Profissionais treinados e certificados para garantir o melhor resultado." },
    { icon: "📋", title: "Garantia Estendida",   desc: "Anos de garantia em nossos produtos e serviços." },
    { icon: "⚡", title: "Atendimento Rápido",   desc: "Orçamento rápido e instalação ágil em toda São Paulo." },
  ],

  // ── Galeria ──
  gallery: [
    { gradient: "linear-gradient(135deg,#1e3a8a,#1d4ed8)", label: "Varanda Gourmet" },
    { gradient: "linear-gradient(135deg,#1e293b,#475569)", label: "Janelas Residenciais" },
    { gradient: "linear-gradient(135deg,#1e40af,#0e7490)", label: "Escada Interna" },
    { gradient: "linear-gradient(135deg,#334155,#1e3a8a)", label: "Pet Safe" },
    { gradient: "linear-gradient(135deg,#0e7490,#172554)", label: "Cobertura de Quadra" },
    { gradient: "linear-gradient(135deg,#1d4ed8,#1e293b)", label: "Sacada Apartamento" },
  ],
};
