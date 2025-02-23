document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    en: {
      "header-title": "Understanding Blockchain Concepts",
      "header-subtitle": "Your guide to Tokenization, RWA, Proof of Reserve, and DAOs",
      "tokenization-title": "What is Tokenization?",
      "tokenization-desc": "Tokenization is the process of converting real-world or digital assets into digital tokens on a blockchain. These tokens represent ownership or a stake in the asset, making it easier to trade, divide, or manage securely and transparently.",
      "tokenization-list": [
        "Examples: Real estate, art, or even intellectual property.",
        "Benefit: Fractional ownership and increased liquidity."
      ],
      "rwa-title": "Real World Assets (RWA)",
      "rwa-desc": "RWAs are physical or tangible assets (like property, gold, or stocks) that are tokenized and brought onto the blockchain. This bridges traditional finance with decentralized systems.",
      "rwa-list": [
        "Advantage: Global access to investment opportunities.",
        "Use Case: Buying a fraction of a house via tokens."
      ],
      "proof-title": "Proof of Reserve",
      "proof-desc": "Proof of Reserve is a transparent method used by crypto platforms to prove they hold the assets they claim to custody. It involves cryptographic audits to verify reserves match user deposits.",
      "proof-list": [
        "Benefit: Builds trust in centralized exchanges.",
        "How it works: Publicly auditable blockchain records."
      ],
      "dao-title": "Decentralized Autonomous Organizations (DAOs)",
      "dao-desc": "A DAO is a blockchain-based organization governed by smart contracts and community votes, not a central authority. It’s transparent, democratic, and programmable.",
      "dao-features-title": "Advantages & Features:",
      "dao-list": [
        "<strong>Decentralized Governance:</strong> Members vote on decisions.",
        "<strong>Transparency:</strong> All actions recorded on-chain.",
        "<strong>Automation:</strong> Smart contracts execute rules.",
        "<strong>Global Participation:</strong> Anyone with tokens can join."
      ],
      "dnft-title": "Dynamic NFTs (dNFTs)",
      "dnft-desc": "Dynamic NFTs (dNFTs) are non-fungible tokens that can change their metadata based on external conditions using smart contracts. Unlike static NFTs, they evolve, offering interactive and adaptable digital assets.",
      "dnft-features-title": "Features & Advantages:",
      "dnft-list": [
        "<strong>Adaptability:</strong> Updates based on real-world data (e.g., weather, game progress).",
        "<strong>Interactivity:</strong> Enhances user engagement with evolving traits.",
        "<strong>Versatility:</strong> Supports use cases like gaming, art, and real estate."
      ],
      "multi-chain-title": "Token Multi-Chain Use",
      "multi-chain-desc": "Token Multi-Chain Use refers to tokens that operate across multiple blockchain networks, leveraging interoperability to enhance functionality and accessibility beyond a single chain.",
      "multi-chain-features-title": "Features & Advantages:",
      "multi-chain-list": [
        "<strong>Interoperability:</strong> Works across Ethereum, Binance Smart Chain, etc.",
        "<strong>Scalability:</strong> Utilizes faster or cheaper chains as needed.",
        "<strong>Broader Reach:</strong> Accessible to users on different ecosystems."
      ],
      "client-title": "Join Archimedes DAO",
      "client-desc": "Archimedes is a cutting-edge DAO offering tokenization services to transform assets into blockchain-ready tokens. Engage with us to unlock new opportunities and join a community shaping the future of finance.",
      "client-features-title": "Advantages & Features:",
      "client-list": [
        "<strong>Expert Tokenization:</strong> Convert assets into secure, tradable tokens.",
        "<strong>Community-Driven:</strong> Vote on service enhancements and priorities.",
        "<strong>Global Reach:</strong> Access tokenization markets worldwide.",
        "<strong>Transparency:</strong> Full visibility into operations and reserves."
      ],
      "client-competitive-title": "<strong>Competitive Advantages:</strong> Archimedes leverages advanced smart contracts for faster tokenization, offers lower fees than traditional services, and provides real-time Proof of Reserve audits for unmatched trust."
    },
    es: {
      "header-title": "Comprendiendo Conceptos de Blockchain",
      "header-subtitle": "Tu guía sobre Tokenización, RWA, Prueba de Reserva y DAOs",
      "tokenization-title": "¿Qué es la Tokenización?",
      "tokenization-desc": "La tokenización es el proceso de convertir activos del mundo real o digitales en tokens digitales en una blockchain. Estos tokens representan propiedad o una participación en el activo, facilitando su comercio, división o gestión de manera segura y transparente.",
      "tokenization-list": [
        "Ejemplos: Bienes raíces, arte o incluso propiedad intelectual.",
        "Beneficio: Propiedad fraccional y mayor liquidez."
      ],
      "rwa-title": "Activos del Mundo Real (RWA)",
      "rwa-desc": "Los RWA son activos físicos o tangibles (como propiedades, oro o acciones) que se tokenizan y se incorporan a la blockchain. Esto conecta las finanzas tradicionales con sistemas descentralizados.",
      "rwa-list": [
        "Ventaja: Acceso global a oportunidades de inversión.",
        "Caso de uso: Comprar una fracción de una casa mediante tokens."
      ],
      "proof-title": "Prueba de Reserva",
      "proof-desc": "La Prueba de Reserva es un método transparente utilizado por plataformas criptográficas para demostrar que poseen los activos que dicen custodiar. Involucra auditorías criptográficas para verificar que las reservas coincidan con los depósitos de los usuarios.",
      "proof-list": [
        "Beneficio: Genera confianza en los intercambios centralizados.",
        "Cómo funciona: Registros en blockchain auditables públicamente."
      ],
      "dao-title": "Organizaciones Autónomas Descentralizadas (DAOs)",
      "dao-desc": "Un DAO es una organización basada en blockchain gobernada por contratos inteligentes y votos de la comunidad, no por una autoridad central. Es transparente, democrática y programable.",
      "dao-features-title": "Ventajas y Características:",
      "dao-list": [
        "<strong>Gobernanza Descentralizada:</strong> Los miembros votan en las decisiones.",
        "<strong>Transparencia:</strong> Todas las acciones se registran en la cadena.",
        "<strong>Automatización:</strong> Los contratos inteligentes ejecutan las reglas.",
        "<strong>Participación Global:</strong> Cualquiera con tokens puede unirse."
      ],
      "dnft-title": "NFTs Dinámicos (dNFTs)",
      "dnft-desc": "Los NFTs Dinámicos (dNFTs) son tokens no fungibles que pueden cambiar sus metadatos según condiciones externas mediante contratos inteligentes. A diferencia de los NFTs estáticos, evolucionan, ofreciendo activos digitales interactivos y adaptables.",
      "dnft-features-title": "Características y Ventajas:",
      "dnft-list": [
        "<strong>Adaptabilidad:</strong> Se actualiza según datos del mundo real (por ejemplo, clima, progreso en juegos).",
        "<strong>Interactividad:</strong> Mejora la participación del usuario con rasgos evolutivos.",
        "<strong>Versatilidad:</strong> Admite casos de uso como juegos, arte y bienes raíces."
      ],
      "multi-chain-title": "Uso Multi-Cadena de Tokens",
      "multi-chain-desc": "El uso multi-cadena de tokens se refiere a tokens que operan en múltiples redes blockchain, aprovechando la interoperabilidad para mejorar la funcionalidad y accesibilidad más allá de una sola cadena.",
      "multi-chain-features-title": "Características y Ventajas:",
      "multi-chain-list": [
        "<strong>Interoperabilidad:</strong> Funciona en Ethereum, Binance Smart Chain, etc.",
        "<strong>Escalabilidad:</strong> Usa cadenas más rápidas o baratas según sea necesario.",
        "<strong>Mayor Alcance:</strong> Accesible para usuarios en diferentes ecosistemas."
      ],
      "client-title": "Únete al DAO Archimedes",
      "client-desc": "Archimedes es un DAO innovador que ofrece servicios de tokenización para transformar activos en tokens listos para blockchain. Participa con nosotros para desbloquear nuevas oportunidades y unirte a una comunidad que da forma al futuro de las finanzas.",
      "client-features-title": "Ventajas y Características:",
      "client-list": [
        "<strong>Tokenización Experta:</strong> Convierte activos en tokens seguros y comerciables.",
        "<strong>Impulsado por la Comunidad:</strong> Vota sobre mejoras y prioridades de servicios.",
        "<strong>Alcance Global:</strong> Accede a mercados de tokenización en todo el mundo.",
        "<strong>Transparencia:</strong> Visibilidad total en operaciones y reservas."
      ],
      "client-competitive-title": "<strong>Ventajas Competitivas:</strong> Archimedes utiliza contratos inteligentes avanzados para una tokenización más rápida, ofrece tarifas más bajas que los servicios tradicionales y proporciona auditorías de Prueba de Reserva en tiempo real para una confianza inigualable."
    }
  };

  function updateLanguage(lang) {
    document.getElementById("header-title").textContent = translations[lang]["header-title"];
    document.getElementById("header-subtitle").textContent = translations[lang]["header-subtitle"];
    
    document.getElementById("tokenization-title").textContent = translations[lang]["tokenization-title"];
    document.getElementById("tokenization-desc").textContent = translations[lang]["tokenization-desc"];
    const tokenList = document.getElementById("tokenization-list").children;
    translations[lang]["tokenization-list"].forEach((item, index) => {
      tokenList[index].innerHTML = item;
    });

    document.getElementById("rwa-title").textContent = translations[lang]["rwa-title"];
    document.getElementById("rwa-desc").textContent = translations[lang]["rwa-desc"];
    const rwaList = document.getElementById("rwa-list").children;
    translations[lang]["rwa-list"].forEach((item, index) => {
      rwaList[index].innerHTML = item;
    });

    document.getElementById("proof-title").textContent = translations[lang]["proof-title"];
    document.getElementById("proof-desc").textContent = translations[lang]["proof-desc"];
    const proofList = document.getElementById("proof-list").children;
    translations[lang]["proof-list"].forEach((item, index) => {
      proofList[index].innerHTML = item;
    });

    document.getElementById("dao-title").textContent = translations[lang]["dao-title"];
    document.getElementById("dao-desc").textContent = translations[lang]["dao-desc"];
    document.getElementById("dao-features-title").textContent = translations[lang]["dao-features-title"];
    const daoList = document.getElementById("dao-list").children;
    translations[lang]["dao-list"].forEach((item, index) => {
      daoList[index].innerHTML = item;
    });

    document.getElementById("dnft-title").textContent = translations[lang]["dnft-title"];
    document.getElementById("dnft-desc").textContent = translations[lang]["dnft-desc"];
    document.getElementById("dnft-features-title").textContent = translations[lang]["dnft-features-title"];
    const dnftList = document.getElementById("dnft-list").children;
    translations[lang]["dnft-list"].forEach((item, index) => {
      dnftList[index].innerHTML = item;
    });

    document.getElementById("multi-chain-title").textContent = translations[lang]["multi-chain-title"];
    document.getElementById("multi-chain-desc").textContent = translations[lang]["multi-chain-desc"];
    document.getElementById("multi-chain-features-title").textContent = translations[lang]["multi-chain-features-title"];
    const multiChainList = document.getElementById("multi-chain-list").children;
    translations[lang]["multi-chain-list"].forEach((item, index) => {
      multiChainList[index].innerHTML = item;
    });

    document.getElementById("client-title").textContent = translations[lang]["client-title"];
    document.getElementById("client-desc").textContent = translations[lang]["client-desc"];
    document.getElementById("client-features-title").textContent = translations[lang]["client-features-title"];
    const clientList = document.getElementById("client-list").children;
    translations[lang]["client-list"].forEach((item, index) => {
      clientList[index].innerHTML = item;
    });
    document.getElementById("client-competitive-title").innerHTML = translations[lang]["client-competitive-title"];
  }

  const enButton = document.getElementById("lang-en");
  const esButton = document.getElementById("lang-es");

  enButton.addEventListener("click", () => {
    updateLanguage("en");
    enButton.classList.add("active");
    esButton.classList.remove("active");
  });

  esButton.addEventListener("click", () => {
    updateLanguage("es");
    esButton.classList.add("active");
    enButton.classList.remove("active");
  });

  document.getElementById("join-archimedes").addEventListener("click", () => {
    console.log("Join Archimedes button clicked!");
    window.location.href = "https://example.com/join-archimedes"; // Placeholder URL
  });

  updateLanguage("en");
});