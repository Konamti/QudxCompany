const projectDetails = {
  himaya: {
    title: "QUDx Himaya",
    points: [
      "Sharia-compliant protection built on Takaful principles.",
      "Supports family security, claims, and inheritance distribution.",
      "Designed for transparent governance and community trust."
    ]
  },
  digital: {
    title: "QUDx Digital",
    points: [
      "Secure dashboards for members, partners, and administrators.",
      "Tracks workflows, records, claims, and reporting.",
      "Built for future blockchain-ready audit trails."
    ]
  },
  community: {
    title: "QUDx Community",
    points: [
      "Community programs that promote ethical financial protection.",
      "Supports education, outreach, and family resilience.",
      "Connects local families with diaspora supporters."
    ]
  },
  properties: {
    title: "QUDx Properties",
    points: [
      "A one of a kind platform built to simplify property management.",
      "Helps organize properties, tenants, records, and operational tasks.",
      "Designed to support transparent, structured, and easier property oversight."
    ]
  }
};

const runtimeTranslationCache = {};

const translations = {
  en: {
    brand: "QUDx Inc.",
    navAbout: "About",
    navSolution: "Solution",
    navHow: "How It Works",
    navRoadmap: "Roadmap",
    navProjects: "Projects",
    navContact: "Contact",
    cartCheckout: "Cart / Checkout",
    getStarted: "Get Started",
    menu: "Menu",
    heroEyebrow: "QUDx Himaya",
    heroTitle: "Africa's First Scalable Halal Protection System",
    heroText: "Sharia-compliant insurance and inheritance protection designed for trust, transparency, and generational security.",
    requestInvestor: "Request Investor Access",
    partnerWithUs: "Partner With Us",
    joinEarlyAccess: "Join Early Access",
    subsidiaries: "Subsidiaries",
    ongoingProjects: "Ongoing Projects",
    aboutTitle: "Old Era Analysis by QUDx",
    aboutCard1Title: "Heavy Trust Issues",
    aboutCard1Text: "Traditional insurance systems lack transparency and public confidence.",
    aboutCard2Title: "Complex Systems",
    aboutCard2Text: "Policies are difficult to understand and inaccessible to the majority.",
    aboutCard3Title: "Informal Inheritance",
    aboutCard3Text: "Families rely on unstructured, unreliable wealth transfer methods.",
    solutionTitle: "A New Era With QUDx",
    solutionCard1Title: "Halal Assurance",
    solutionCard1Text: "Built on Takaful principles with ethical contribution models.",
    solutionCard2Title: "Digital Infrastructure",
    solutionCard2Text: "Automated workflows for claims, tracking, and inheritance distribution.",
    solutionCard3Title: "Full Transparency",
    solutionCard3Text: "Audit trails, governance, and clear communication at every step.",
    howTitle: "How It Works",
    howStep1: "Register",
    howStep2: "Contribute",
    howStep3: "Track",
    howStep4: "Claim & Distribute",
    pitchTitle: "QUDx Inc Pitch",
    pitchText: "Building a value-driven ecosystem for the Ummah through ethical, structured, and scalable solutions.",
    investorOptionsTitle: "Investor Options",
    roadmapTitle: "QUDx Roadmap",
    roadmapSeedTitle: "Seed (2026)",
    roadmapSeedText: "Register Qudx Inc, finalize Himaya, join Muslim mentor networks.",
    roadmapEarlyTitle: "Early (2027)",
    roadmapEarlyText: "Pilot in Cote d'Ivoire, secure 500+ users, mosque/NGO partnerships.",
    roadmapGrowthTitle: "Growth (2028)",
    roadmapGrowthText: "Expand West Africa, launch QUDx Store and Properties.",
    roadmapExpansionTitle: "Expansion (2029)",
    roadmapExpansionText: "Enter MENA and diaspora markets, integrate digital inheritance.",
    roadmapImpactTitle: "Impact (2030+)",
    roadmapImpactText: "Sustainable ecosystem, IPO/cooperative model, global reach.",
    founderNoteTitle: "A Note from the Founder",
    projectsTitle: "Projects",
    ctaTitle: "Be Part of the Future of Ethical Protection",
    formSubmit: "Submit",
    close: "Close",
    paymentTitle: "Choose Payment Option",
    paymentText: "Select how you would like to support QUDx.",
    comingSoon: "Coming Soon",
    paystackOption: "Paystack / Visa / Mobile Money",
    cartShort: "Cart",
    back: "Back",
    checkoutEyebrow: "Secure checkout",
    checkoutTitle: "Support QUDx Inc.",
    fullName: "Full name",
    fullNamePlaceholder: "Your full name",
    emailAddress: "Email address",
    emailPlaceholder: "you@example.com",
    phoneNumber: "Phone number",
    amount: "Amount",
    amountPlaceholder: "Enter amount",
    messageNote: "Message or investment note",
    optional: "Optional",
    paymentOptions: "Payment Options",
    payWithPaystack: "Pay with Paystack",
    paystackMethods: "Visa, card, and mobile money",
    payWithPaypal: "Pay with PayPal",
    investorBriefTitle: "Investor & Partner Brief",
    becomeInvestor: "Become an Investor",
    exploreBrief: "Explore Brief",
    whyInvest: "Why Invest",
    investorReturns: "Investor Returns",
    assuranceForInvestors: "Assurance for Investors",
    communityTogether: "Building the Community Together",
    footerText: "Ethical protection, structured services, and long-term value for families, partners, and communities.",
    footerTagline: "Built for long-term impact, integrity, and structure",
    modalTitleInvestor: "Investor Access",
    modalTitlePartner: "Partnership Request",
    modalTitleEarly: "Early Access",
    paymentSelectedPrefix: "You selected",
    learnMore: "Learn More",
    iAmInterested: "I Am Interested",
    investPartner: "Invest/Partner"
  },
  fr: {
    brand: "QUDx Inc.",
    navAbout: "A propos",
    navSolution: "Solution",
    navHow: "Fonctionnement",
    navRoadmap: "Feuille de route",
    navProjects: "Projets",
    navContact: "Contact",
    cartCheckout: "Panier / Paiement",
    getStarted: "Commencer",
    menu: "Menu",
    heroEyebrow: "QUDx Himaya",
    heroTitle: "Le premier systeme de protection halal evolutif en Afrique",
    heroText: "Assurance conforme a la Sharia et protection successorale concues pour la confiance, la transparence et la securite generationnelle.",
    requestInvestor: "Demander l'acces investisseur",
    partnerWithUs: "Devenir partenaire",
    subsidiaries: "Filiales",
    ongoingProjects: "Projets en cours"
  },
  ar: {
    brand: "QUDx Inc.",
    navAbout: "من نحن",
    navSolution: "الحل",
    navHow: "كيف يعمل",
    navRoadmap: "خارطة الطريق",
    navProjects: "المشاريع",
    navContact: "اتصل بنا",
    cartCheckout: "السلة / الدفع",
    getStarted: "ابدأ الآن",
    menu: "القائمة",
    heroEyebrow: "QUDx Himaya",
    heroTitle: "أول نظام حماية حلال قابل للتوسع في أفريقيا",
    heroText: "تأمين متوافق مع الشريعة وحماية للميراث مبنية على الثقة والشفافية والأمان للأجيال.",
    requestInvestor: "طلب وصول المستثمر",
    partnerWithUs: "كن شريكا معنا",
    subsidiaries: "الشركات التابعة",
    ongoingProjects: "مشاريع جارية"
  },
  it: {
    brand: "QUDx Inc.",
    navAbout: "Chi siamo",
    navSolution: "Soluzione",
    navHow: "Come funziona",
    navRoadmap: "Roadmap",
    navProjects: "Progetti",
    navContact: "Contatto",
    cartCheckout: "Carrello / Checkout",
    getStarted: "Inizia",
    menu: "Menu",
    heroEyebrow: "QUDx Himaya",
    heroTitle: "Il primo sistema africano scalabile di protezione halal",
    heroText: "Assicurazione conforme alla Sharia e protezione ereditaria pensate per fiducia, trasparenza e sicurezza generazionale.",
    requestInvestor: "Richiedi accesso investitore",
    partnerWithUs: "Collabora con noi",
    subsidiaries: "Sussidiarie",
    ongoingProjects: "Progetti in corso"
  },
  es: {
    brand: "QUDx Inc.",
    navAbout: "Acerca de",
    navSolution: "Solucion",
    navHow: "Como funciona",
    navRoadmap: "Hoja de ruta",
    navProjects: "Proyectos",
    navContact: "Contacto",
    cartCheckout: "Carrito / Pago",
    getStarted: "Empezar",
    menu: "Menu",
    heroEyebrow: "QUDx Himaya",
    heroTitle: "El primer sistema escalable de proteccion halal de Africa",
    heroText: "Seguro compatible con la Sharia y proteccion de herencia disenados para confianza, transparencia y seguridad generacional.",
    requestInvestor: "Solicitar acceso de inversor",
    partnerWithUs: "Asociarse con nosotros",
    subsidiaries: "Subsidiarias",
    ongoingProjects: "Proyectos en curso"
  },
  ru: {
    brand: "QUDx Inc.",
    navAbout: "О нас",
    navSolution: "Решение",
    navHow: "Как это работает",
    navRoadmap: "Дорожная карта",
    navProjects: "Проекты",
    navContact: "Контакты",
    cartCheckout: "Корзина / Оплата",
    getStarted: "Начать",
    menu: "Меню",
    heroEyebrow: "QUDx Himaya",
    heroTitle: "Первая масштабируемая халяльная система защиты в Африке",
    heroText: "Страхование и защита наследства в соответствии с шариатом, созданные для доверия, прозрачности и безопасности поколений.",
    requestInvestor: "Запросить доступ инвестора",
    partnerWithUs: "Стать партнером",
    subsidiaries: "Дочерние компании",
    ongoingProjects: "Текущие проекты"
  },
  id: {
    brand: "QUDx Inc.",
    navAbout: "Tentang",
    navSolution: "Solusi",
    navHow: "Cara Kerja",
    navRoadmap: "Peta jalan",
    navProjects: "Proyek",
    navContact: "Kontak",
    cartCheckout: "Keranjang / Checkout",
    getStarted: "Mulai",
    menu: "Menu",
    heroEyebrow: "QUDx Himaya",
    heroTitle: "Sistem Perlindungan Halal Skalabel Pertama di Afrika",
    heroText: "Asuransi sesuai Syariah dan perlindungan warisan yang dirancang untuk kepercayaan, transparansi, dan keamanan generasi.",
    requestInvestor: "Minta Akses Investor",
    partnerWithUs: "Bermitra dengan Kami",
    subsidiaries: "Anak Perusahaan",
    ongoingProjects: "Proyek Berjalan"
  },
  zu: {
    brand: "QUDx Inc.",
    navAbout: "Mayelana",
    navSolution: "Isixazululo",
    navHow: "Isebenza Kanjani",
    navRoadmap: "Imephu yohambo",
    navProjects: "Amaphrojekthi",
    navContact: "Xhumana",
    cartCheckout: "Ikalishi / Inkokhelo",
    getStarted: "Qala",
    menu: "Imenyu",
    heroEyebrow: "QUDx Himaya",
    heroTitle: "Uhlelo lokuqala e-Afrika lokuvikela nge-Halal olukhulayo",
    heroText: "Umshwalense ohambisana ne-Sharia nokuvikelwa kwefa okwenzelwe ukwethembana, ukubonakala nokuphepha kwezizukulwane.",
    requestInvestor: "Cela Ukufinyelela Komtshalizimali",
    partnerWithUs: "Bambisana Nathi",
    subsidiaries: "Izinkampani ezingaphansi",
    ongoingProjects: "Amaphrojekthi aqhubekayo"
  },
  zh: {
    brand: "QUDx Inc.",
    navAbout: "关于",
    navSolution: "解决方案",
    navHow: "运作方式",
    navRoadmap: "路线图",
    navProjects: "项目",
    navContact: "联系",
    cartCheckout: "购物车 / 结账",
    getStarted: "开始",
    menu: "菜单",
    heroEyebrow: "QUDx Himaya",
    heroTitle: "非洲首个可扩展清真保护系统",
    heroText: "符合伊斯兰教法的保险与继承保护，专为信任、透明和代际安全而设计。",
    requestInvestor: "申请投资者访问",
    partnerWithUs: "与我们合作",
    subsidiaries: "子公司",
    ongoingProjects: "进行中的项目"
  },
  ja: {
    brand: "QUDx Inc.",
    navAbout: "概要",
    navSolution: "ソリューション",
    navHow: "仕組み",
    navRoadmap: "ロードマップ",
    navProjects: "プロジェクト",
    navContact: "連絡先",
    cartCheckout: "カート / 決済",
    getStarted: "始める",
    menu: "メニュー",
    heroEyebrow: "QUDx Himaya",
    heroTitle: "アフリカ初の拡張可能なハラール保護システム",
    heroText: "信頼、透明性、世代を超えた安心のために設計された、シャリア準拠の保険と相続保護。",
    requestInvestor: "投資家アクセスを申請",
    partnerWithUs: "パートナーになる",
    subsidiaries: "子会社",
    ongoingProjects: "進行中のプロジェクト"
  }
};

const extendedTranslations = {
  fr: {
    learnMore: "En savoir plus",
    iAmInterested: "Je suis interesse",
    investPartner: "Investir/Partenaire",
    aboutTitle: "Analyse de l'ancienne ere par QUDx",
    solutionTitle: "Une nouvelle ere avec QUDx",
    howTitle: "Comment ca marche",
    howStep1: "S'inscrire",
    howStep2: "Contribuer",
    howStep3: "Suivre",
    howStep4: "Reclamer et distribuer",
    investorOptionsTitle: "Options investisseurs",
    roadmapTitle: "Feuille de route QUDx",
    projectsTitle: "Projets",
    ctaTitle: "Participez a l'avenir de la protection ethique",
    paymentTitle: "Choisissez une option de paiement",
    paymentText: "Selectionnez comment vous souhaitez soutenir QUDx.",
    close: "Fermer",
    back: "Retour",
    learnMore: "En savoir plus",
    iAmInterested: "Je suis interesse",
    investPartner: "Investir/Partenaire",
    payWithPaystack: "Payer avec Paystack",
    payWithPaypal: "Payer avec PayPal",
    becomeInvestor: "Devenir investisseur",
    exploreBrief: "Explorer le brief"
  },
  ar: {
    learnMore: "تعرف على المزيد",
    iAmInterested: "أنا مهتم",
    investPartner: "استثمر/شريك",
    aboutTitle: "تحليل الحقبة القديمة من QUDx",
    solutionTitle: "حقبة جديدة مع QUDx",
    howTitle: "كيف يعمل",
    howStep1: "تسجيل",
    howStep2: "مساهمة",
    howStep3: "متابعة",
    howStep4: "مطالبة وتوزيع",
    investorOptionsTitle: "خيارات المستثمر",
    roadmapTitle: "خارطة طريق QUDx",
    projectsTitle: "المشاريع",
    ctaTitle: "كن جزءا من مستقبل الحماية الاخلاقية",
    paymentTitle: "اختر طريقة الدفع",
    paymentText: "اختر كيف تريد دعم QUDx.",
    close: "اغلاق",
    back: "رجوع",
    learnMore: "تعرف على المزيد",
    iAmInterested: "أنا مهتم",
    investPartner: "استثمر/شريك",
    payWithPaystack: "ادفع عبر Paystack",
    payWithPaypal: "ادفع عبر PayPal",
    becomeInvestor: "كن مستثمرا",
    exploreBrief: "استكشف الملخص"
  },
  it: {
    learnMore: "Scopri di piu",
    iAmInterested: "Sono interessato",
    investPartner: "Investi/Partner"
  },
  es: {
    learnMore: "Saber mas",
    iAmInterested: "Estoy interesado",
    investPartner: "Invertir/Socio"
  },
  ru: {
    learnMore: "Подробнее",
    iAmInterested: "Я заинтересован",
    investPartner: "Инвестировать/Партнер"
  },
  id: {
    learnMore: "Pelajari lebih lanjut",
    iAmInterested: "Saya tertarik",
    investPartner: "Investasi/Mitra"
  },
  zu: {
    learnMore: "Funda kabanzi",
    iAmInterested: "Nginesithakazelo",
    investPartner: "Tshala imali/Uzakwethu"
  },
  zh: {
    learnMore: "了解更多",
    iAmInterested: "我感兴趣",
    investPartner: "投资/合作伙伴"
  },
  ja: {
    learnMore: "詳細を見る",
    iAmInterested: "興味があります",
    investPartner: "投資/提携"
  }
};

Object.keys(extendedTranslations).forEach((language) => {
  translations[language] = { ...translations[language], ...extendedTranslations[language] };
});

document.addEventListener("DOMContentLoaded", () => {
  if (window.AOS) {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 100,
      easing: 'ease-in-out-quad'
    });
  }
  
  // Page load animation
  document.body.style.opacity = '0';
  document.body.style.animation = 'pageLoadFade 0.8s ease-out forwards';

  initLanguageSelector();
  startProjectAutoScroll();
  initCheckoutPage();
  initCountStats();
  initHeroTilt();
  initSpatialHero();
  initCtaParallax();
});

function initLanguageSelector() {
  const selectors = document.querySelectorAll(".language-select");
  if (!selectors.length) return;

  const savedLanguage = localStorage.getItem("qudxLanguage") || "en";
  selectors.forEach((selector) => {
    selector.value = savedLanguage;
    selector.addEventListener("change", (event) => {
      const language = event.target.value;
      localStorage.setItem("qudxLanguage", language);
      applyLanguage(language);
      selectors.forEach((item) => {
        item.value = language;
      });
    });
  });

  applyLanguage(savedLanguage);
}

function applyLanguage(language) {
  const baseDictionary = translations.en || {};
  const selectedDictionary = translations[language] || {};
  const textDirection = language === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = language;
  document.documentElement.dir = textDirection;
  document.body.dir = textDirection;

  const textNodes = Array.from(document.querySelectorAll("[data-i18n]"));
  textNodes.forEach((element) => {
    const key = element.dataset.i18n;
    if (!key) return;

    const baseText = baseDictionary[key] || element.dataset.baseText || element.textContent.trim();
    if (!element.dataset.baseText && baseText) {
      element.dataset.baseText = baseText;
    }

    if (language === "en") {
      if (baseText) element.textContent = baseText;
      return;
    }

    if (selectedDictionary[key]) {
      element.textContent = selectedDictionary[key];
      return;
    }

    translateRuntimeText(baseText, language).then((translated) => {
      element.textContent = translated;
    });
  });

  const placeholderNodes = Array.from(document.querySelectorAll("[data-i18n-placeholder]"));
  placeholderNodes.forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (!key) return;

    const basePlaceholder = baseDictionary[key] || element.dataset.basePlaceholder || element.getAttribute("placeholder") || "";
    if (!element.dataset.basePlaceholder && basePlaceholder) {
      element.dataset.basePlaceholder = basePlaceholder;
    }

    if (language === "en") {
      element.setAttribute("placeholder", basePlaceholder);
      return;
    }

    if (selectedDictionary[key]) {
      element.setAttribute("placeholder", selectedDictionary[key]);
      return;
    }

    translateRuntimeText(basePlaceholder, language).then((translated) => {
      element.setAttribute("placeholder", translated);
    });
  });

  translatePlaceholderValues(language);
  scheduleAutoTranslations(language);
}

function translatePlaceholderValues(language) {
  const elements = Array.from(document.querySelectorAll("input[placeholder],textarea[placeholder]"));
  if (!elements.length) return;

  elements.forEach((element) => {
    if (element.dataset.noAutoTranslate) return;
    const placeholderText = element.getAttribute("placeholder") || "";
    if (!placeholderText.trim()) return;

    if (!element.dataset.basePlaceholder) {
      element.dataset.basePlaceholder = placeholderText;
    }

    if (language === "en") {
      element.setAttribute("placeholder", element.dataset.basePlaceholder);
      return;
    }

    translateRuntimeText(element.dataset.basePlaceholder, language).then((translated) => {
      element.setAttribute("placeholder", translated);
    });
  });
}

async function applyAutoTranslations(language) {
  if (language === "en") {
    const translatedNodes = document.querySelectorAll("[data-auto-translated='true']");
    translatedNodes.forEach((element) => {
      if (element.dataset.baseText) element.textContent = element.dataset.baseText;
      element.dataset.autoTranslated = "false";
    });
    return;
  }

  const candidates = Array.from(
    document.querySelectorAll("h1,h2,h3,h4,h5,h6,p,a,button,label,li,strong,em,small,span")
  ).filter((element) => !element.hasAttribute("data-i18n") && shouldAutoTranslate(element));

  for (const element of candidates) {
    if (!element.dataset.baseText) {
      element.dataset.baseText = element.textContent.trim();
    }

    const baseText = element.dataset.baseText;
    if (language === "en") {
      element.textContent = baseText;
      continue;
    }

    const translated = await translateRuntimeText(baseText, language);
    element.textContent = translated;
    element.dataset.autoTranslated = "true";
  }
}

async function translateRuntimeText(text, language) {
  if (!text || language === "en") return text;

  const cacheKey = `${language}::${text}`;
  if (runtimeTranslationCache[cacheKey]) {
    return runtimeTranslationCache[cacheKey];
  }

  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${encodeURIComponent(language)}&dt=t&q=${encodeURIComponent(text)}`;
    const response = await fetch(url);
    if (!response.ok) return text;

    const payload = await response.json();
    const translated = payload?.[0]?.map((item) => item?.[0] || "").join("") || text;
    runtimeTranslationCache[cacheKey] = translated;
    return translated;
  } catch (_error) {
    return text;
  }
}

function shouldAutoTranslate(element) {
  if (!element) return false;
  if (element.closest("svg,script,style,noscript,textarea,select,option")) return false;
  if (element.classList.contains("language-select")) return false;
  if (element.hasAttribute("data-no-auto-translate")) return false;

  const children = Array.from(element.children);
  if (children.length && children.some((child) => child.tagName !== "BR")) return false;

  const text = element.textContent?.trim() || "";
  if (!text || text.length < 2) return false;
  if (/[@]/.test(text) || /^https?:\/\//i.test(text)) return false;
  if (/^[\d\W]+$/.test(text)) return false;
  return true;
}

function scheduleAutoTranslations(language) {
  const run = () => applyAutoTranslations(language);
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(run, { timeout: 1200 });
  } else {
    window.setTimeout(run, 1);
  }
}

async function applyAutoTranslations(language) {
  if (language === "en") {
    const translatedNodes = document.querySelectorAll("[data-auto-translated='true']");
    translatedNodes.forEach((element) => {
      if (element.dataset.baseText) element.textContent = element.dataset.baseText;
      element.dataset.autoTranslated = "false";
    });
    return;
  }

  const candidates = Array.from(
    document.querySelectorAll("h1,h2,h3,h4,h5,h6,p,a,button,label,li,strong,em,small,span")
  ).filter((element) => !element.hasAttribute("data-i18n") && shouldAutoTranslate(element));

  for (const element of candidates) {
    if (!element.dataset.baseText) {
      element.dataset.baseText = element.textContent.trim();
    }

    const baseText = element.dataset.baseText;
    if (language === "en") {
      element.textContent = baseText;
      continue;
    }

    const translated = await translateRuntimeText(baseText, language);
    element.textContent = translated;
    element.dataset.autoTranslated = "true";
  }
}

function toggleMenu() {
  document.getElementById("mobileMenu")?.classList.toggle("hidden");
}

function closeMenu() {
  document.getElementById("mobileMenu")?.classList.add("hidden");
}

function getModalTrigger(event) {
  return event?.currentTarget || event?.target || window.event?.currentTarget || document.activeElement;
}

function positionPanelOverTrigger(panel, trigger, options = {}) {
  if (!panel || !trigger || typeof trigger.getBoundingClientRect !== "function") return false;

  const gap = options.gap ?? 12;
  const preferAbove = options.preferAbove ?? true;
  const margin = options.margin ?? 12;

  panel.style.position = "fixed";
  panel.style.top = "0";
  panel.style.left = "0";
  panel.style.right = "auto";
  panel.style.bottom = "auto";
  panel.style.transform = "none";

  const triggerRect = trigger.getBoundingClientRect();
  const panelRect = panel.getBoundingClientRect();
  const viewportWidth = document.documentElement.clientWidth;
  const viewportHeight = document.documentElement.clientHeight;

  let left = triggerRect.left + (triggerRect.width / 2) - (panelRect.width / 2);
  let top = preferAbove ? triggerRect.top - panelRect.height - gap : triggerRect.bottom + gap;

  if (top < margin) {
    top = triggerRect.bottom + gap;
  }

  if (top + panelRect.height > viewportHeight - margin) {
    top = Math.max(margin, viewportHeight - panelRect.height - margin);
  }

  left = Math.max(margin, Math.min(left, viewportWidth - panelRect.width - margin));

  panel.style.left = `${Math.round(left)}px`;
  panel.style.top = `${Math.round(top)}px`;
  return true;
}

function attachAnchoredPanelReposition(panel, trigger, options = {}) {
  if (!panel || !trigger) return;

  const reposition = () => {
    if (!panel.classList.contains("hidden")) {
      positionPanelOverTrigger(panel, trigger, options);
    }
  };

  panel._anchoredReposition = reposition;
  window.addEventListener("resize", reposition, { passive: true });
  window.addEventListener("scroll", reposition, { passive: true });
}

function detachAnchoredPanelReposition(panel) {
  if (!panel?._anchoredReposition) return;
  window.removeEventListener("resize", panel._anchoredReposition);
  window.removeEventListener("scroll", panel._anchoredReposition);
  panel._anchoredReposition = null;
}

function openForm(type, event) {
  const modal = document.getElementById("formModal");
  const title = document.getElementById("formTitle");
  const backdrop = document.getElementById("formBackdrop");
  const trigger = getModalTrigger(event);

  if (!modal || !title) return;

  const dictionary = { ...translations.en, ...(translations[localStorage.getItem("qudxLanguage") || "en"] || {}) };
  const titles = {
    investor: dictionary.modalTitleInvestor,
    partner: dictionary.modalTitlePartner,
    early: dictionary.modalTitleEarly
  };

  title.innerText = titles[type] || "Contact QUDx";
  modal.classList.remove("hidden");
  if (backdrop) backdrop.classList.remove("hidden");

  detachAnchoredPanelReposition(modal);
  requestAnimationFrame(() => {
    const positioned = positionPanelOverTrigger(modal, trigger);
    if (positioned) {
      attachAnchoredPanelReposition(modal, trigger);
      return;
    }

    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
  });
}

function closeForm() {
  const modal = document.getElementById("formModal");
  detachAnchoredPanelReposition(modal);
  modal?.classList.add("hidden");
  document.getElementById("formBackdrop")?.classList.add("hidden");
}

function openProjectModal(projectKey) {
  const project = projectDetails[projectKey];
  const title = document.getElementById("projectTitle");
  const points = document.getElementById("projectPoints");
  const modal = document.getElementById("projectModal");

  if (!project || !title || !points || !modal) return;

  title.innerText = project.title;
  points.innerHTML = project.points.map((point) => `<li>${point}</li>`).join("");
  modal.classList.remove("hidden");
}

function closeProjectModal() {
  document.getElementById("projectModal")?.classList.add("hidden");
}

function moveCarousel(direction) {
  const carousel = document.getElementById("projectCarousel");
  if (!carousel) return;

  const distance = Math.min(390, carousel.clientWidth * 0.85);
  carousel.scrollBy({
    left: direction === "left" ? -distance : distance,
    behavior: "smooth"
  });
}

function startProjectAutoScroll() {
  const carousel = document.getElementById("projectCarousel");
  if (!carousel) return;

  setInterval(() => {
    const nearEnd = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 10;
    if (nearEnd) {
      carousel.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      moveCarousel("right");
    }
  }, 5000);
}

function openPaymentModal(plan, event) {
  const modal = document.getElementById("paymentModal");
  const panel = modal?.querySelector(".payment-modal-panel");
  const planText = document.getElementById("paymentPlanText");
  const paypalOption = document.getElementById("paypalOption");
  const paystackOption = document.getElementById("paystackOption");
  const trigger = getModalTrigger(event);

  if (!modal || !panel || !planText || !paypalOption || !paystackOption) return;

  const dictionary = { ...translations.en, ...(translations[localStorage.getItem("qudxLanguage") || "en"] || {}) };
  const checkoutPlan = encodeURIComponent(plan || "QUDx Support");
  planText.innerText = `${dictionary.paymentSelectedPrefix} ${plan}. ${dictionary.paymentText}`;
  paystackOption.href = `checkout.html?method=paystack&plan=${checkoutPlan}`;
  modal.classList.remove("hidden");
  modal.classList.add("anchored-payment");

  detachAnchoredPanelReposition(panel);
  requestAnimationFrame(() => {
    const positioned = positionPanelOverTrigger(panel, trigger);
    if (positioned) {
      attachAnchoredPanelReposition(panel, trigger);
      return;
    }

    panel.style.position = "fixed";
    panel.style.top = "50%";
    panel.style.left = "50%";
    panel.style.transform = "translate(-50%, -50%)";
  });
}

function closePaymentModal() {
  const modal = document.getElementById("paymentModal");
  const panel = modal?.querySelector(".payment-modal-panel");
  detachAnchoredPanelReposition(panel);
  modal?.classList.add("hidden");
  modal?.classList.remove("anchored-payment");
}

function showSupportToast() {
  const toast = document.getElementById("supportToast");
  if (!toast) return;

  toast.classList.remove("hidden");

  setTimeout(() => {
    toast.classList.add("hidden");
  }, 4500);
}

function redirectThankYou() {
  setTimeout(() => {
    window.location.href = "/thank-you.html";
  }, 500);
}

function initCheckoutPage() {
  const checkoutPlan = document.getElementById("checkoutPlan");
  const paystackCheckout = document.getElementById("paystackCheckout");
  const paypalCheckout = document.getElementById("paypalCheckout");

  if (!checkoutPlan || !paystackCheckout || !paypalCheckout) return;

  const params = new URLSearchParams(window.location.search);
  const plan = params.get("plan") || "QUDx Support";
  const method = params.get("method");

  checkoutPlan.innerText = `Plan: ${plan}`;

  if (method === "paystack") {
    paystackCheckout.classList.add("ring-2", "ring-green-700");
  }
}

function initCountStats() {
  const groups = Array.from(document.querySelectorAll(".hero-visual-panel, #brandStats")).filter(Boolean);

  if (!groups.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const stats = entry.target.querySelectorAll(".count-stat, .stat-value");
        stats.forEach((stat) => animateStat(stat));
        launchStatsBurst(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.45 }
  );

  groups.forEach((group) => observer.observe(group));
}

function animateStat(stat) {
  const target = Number(stat.dataset.count || 0);
  const pad = Number(stat.dataset.pad || 0);
  const decimals = Number(stat.dataset.decimals || 0);
  const prefix = stat.dataset.prefix || "";
  const suffix = stat.dataset.suffix || "";
  const duration = 2300;
  const start = performance.now();

  stat.classList.add("is-loading");

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3.2);
    const rawValue = target * eased;
    const value = decimals ? rawValue.toFixed(decimals) : Math.round(rawValue);
    const formatted = pad && !decimals ? String(value).padStart(pad, "0") : String(value).padStart(2, "0");

    stat.textContent = `${prefix}${formatted}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      stat.classList.remove("is-loading");
    }
  }

  requestAnimationFrame(tick);
}

function launchStatsBurst(container = document) {
  const burst = container.querySelector(".stats-burst") || document.getElementById("statsBurst");
  if (!burst) return;

  const colors = ["#c8a951", "#ffffff", "#16a34a", "#38bdf8", "#f97316"];
  burst.innerHTML = "";

  for (let index = 0; index < 42; index += 1) {
    const piece = document.createElement("span");
    const angle = Math.random() * Math.PI * 2;
    const distance = 52 + Math.random() * 128;
    const x = 18 + Math.random() * 64;
    const y = 22 + Math.random() * 42;

    piece.className = "burst-piece";
    piece.style.setProperty("--x", `${x}%`);
    piece.style.setProperty("--y", `${y}%`);
    piece.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
    piece.style.setProperty("--dy", `${Math.sin(angle) * distance}px`);
    piece.style.setProperty("--color", colors[index % colors.length]);
    burst.appendChild(piece);
  }

  setTimeout(() => {
    burst.innerHTML = "";
  }, 2000);
}

function initHeroTilt() {
  const cards = document.querySelectorAll(".hero-orbit");
  if (!cards.length || window.matchMedia("(pointer: coarse)").matches) return;

  cards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      card.style.setProperty("--tilt-x", `${x * 7}deg`);
      card.style.setProperty("--tilt-y", `${y * -7}deg`);
    });

    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
    });
  });
}

async function initSpatialHero() {
  const shells = Array.from(document.querySelectorAll(".hero-model-shell"));
  if (!shells.length) return;

  const canUseWebGL = (() => {
    try {
      const canvas = document.createElement("canvas");
      return Boolean(window.WebGLRenderingContext && (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")));
    } catch (_error) {
      return false;
    }
  })();

  if (!canUseWebGL) {
    document.documentElement.classList.add("no-webgl");
    return;
  }

  let THREE;
  try {
    THREE = await import("https://unpkg.com/three@0.164.1/build/three.module.js");
  } catch (_error) {
    document.documentElement.classList.add("no-webgl");
    return;
  }

  shells.forEach((shell) => buildHeroModel(shell, THREE));
}

function buildHeroModel(shell, THREE) {
  const canvas = shell.querySelector(".hero-webgl");
  const fallbackImage = shell.querySelector(".hero-visual-image");
  if (!canvas) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(0, 0.2, 6);

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));

  const group = new THREE.Group();
  scene.add(group);

  const green = new THREE.MeshStandardMaterial({
    color: 0x2c9523,
    roughness: 0.42,
    metalness: 0.28
  });
  const gold = new THREE.MeshStandardMaterial({
    color: 0xc8a951,
    roughness: 0.34,
    metalness: 0.55
  });
  const glass = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.28,
    roughness: 0.08,
    metalness: 0,
    transmission: 0.25,
    clearcoat: 0.7
  });

  const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.45, 1), green);
  core.scale.set(1.05, 1.18, 0.72);
  group.add(core);

  const ring = new THREE.Mesh(new THREE.TorusGeometry(1.95, 0.045, 10, 72), gold);
  ring.rotation.set(Math.PI / 2.25, 0.08, 0.25);
  group.add(ring);

  const secondRing = new THREE.Mesh(new THREE.TorusGeometry(1.55, 0.035, 10, 64), glass);
  secondRing.rotation.set(Math.PI / 2.8, 0.75, -0.35);
  group.add(secondRing);

  const shield = new THREE.Mesh(new THREE.ConeGeometry(0.72, 1.05, 5, 1), gold);
  shield.position.set(0, -0.1, 0.8);
  shield.rotation.set(Math.PI, Math.PI / 5, 0);
  shield.scale.set(1.1, 0.9, 0.25);
  group.add(shield);

  const particles = new THREE.Group();
  for (let index = 0; index < 18; index += 1) {
    const piece = new THREE.Mesh(new THREE.OctahedronGeometry(0.055 + (index % 3) * 0.018, 0), index % 2 ? gold : glass);
    const angle = (index / 18) * Math.PI * 2;
    const radius = 2.35 + (index % 4) * 0.12;
    piece.position.set(Math.cos(angle) * radius, Math.sin(angle * 1.4) * 0.75, Math.sin(angle) * radius * 0.34);
    particles.add(piece);
  }
  group.add(particles);

  scene.add(new THREE.AmbientLight(0xffffff, 1.4));
  const key = new THREE.DirectionalLight(0xffffff, 2.4);
  key.position.set(3.5, 4, 5);
  scene.add(key);
  const rim = new THREE.PointLight(0xc8a951, 2.2, 8);
  rim.position.set(-2.6, 1.5, 2.5);
  scene.add(rim);

  let pointerX = 0;
  let pointerY = 0;
  let dragging = false;
  let dragStart = 0;
  let baseRotation = 0;

  function resize() {
    const width = Math.max(220, shell.clientWidth);
    const height = Math.max(260, shell.clientHeight || width * 0.78);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  function setPointer(event) {
    const rect = shell.getBoundingClientRect();
    pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
  }

  shell.addEventListener("pointermove", (event) => {
    setPointer(event);
    if (dragging) {
      group.rotation.y = baseRotation + (event.clientX - dragStart) * 0.012;
    }
  });

  shell.addEventListener("pointerdown", (event) => {
    dragging = true;
    dragStart = event.clientX;
    baseRotation = group.rotation.y;
    shell.setPointerCapture?.(event.pointerId);
  });

  shell.addEventListener("pointerup", () => {
    dragging = false;
  });

  shell.addEventListener("pointerleave", () => {
    dragging = false;
    pointerX = 0;
    pointerY = 0;
  });

  resize();
  window.addEventListener("resize", resize, { passive: true });
  shell.classList.add("is-webgl-ready");
  if (fallbackImage) fallbackImage.setAttribute("aria-hidden", "true");

  function animate(now) {
    const time = now * 0.001;
    if (!dragging) {
      group.rotation.y += 0.004;
    }
    group.rotation.x += ((pointerY * 0.22) - group.rotation.x) * 0.04;
    group.rotation.z += ((pointerX * -0.08) - group.rotation.z) * 0.04;
    ring.rotation.z = time * 0.18;
    secondRing.rotation.z = -time * 0.24;
    particles.rotation.y = time * 0.22;
    particles.rotation.x = Math.sin(time * 0.7) * 0.12;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

function initCtaParallax() {
  const cta = document.getElementById("cta");
  if (!cta) return;

  const glassElements = Array.from(cta.querySelectorAll(".cta-glass"));
  if (!glassElements.length) return;

  const update = () => {
    const rect = cta.getBoundingClientRect();
    const viewport = window.innerHeight || document.documentElement.clientHeight;
    const progress = Math.max(0, Math.min(1, 1 - (rect.top / viewport)));
    cta.style.setProperty("--cta-depth", progress.toFixed(3));

    glassElements.forEach((element, index) => {
      const offset = (progress - 0.5) * (28 + index * 18);
      const rotate = (progress - 0.5) * (18 + index * 10);
      element.style.transform = `translate3d(${offset * (index % 2 ? -1 : 1)}px, ${offset * -0.9}px, 0) rotate(${rotate}deg)`;
    });
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update, { passive: true });
}

// Scroll-based navbar hide/show + glass-to-solid transition
let lastScrollTop = 0;
const header = document.querySelector('header');

function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const isScrollingDown = scrollTop > lastScrollTop && scrollTop > 100;

  header.classList.toggle('header-hidden', isScrollingDown);
  header.classList.toggle('header-solid', scrollTop > 20);

  lastScrollTop = Math.max(scrollTop, 0);
}

window.addEventListener('scroll', handleScroll, { passive: true });

// Back to top button
function initBackToTop() {
  const button = document.createElement('button');
  button.id = 'backToTop';
  button.innerHTML = '↑';
  button.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  button.setAttribute('aria-label', 'Scroll to top');
  document.body.appendChild(button);

  window.addEventListener('scroll', () => {
    button.classList.toggle('show', window.scrollY > 300);
  }, { passive: true });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  initBackToTop();
});
