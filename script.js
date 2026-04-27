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

const translations = {
  en: {
    brand: "QUDx Inc.",
    navAbout: "About",
    navSolution: "Solution",
    navHow: "How It Works",
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
    subsidiaries: "Subsidiaries",
    ongoingProjects: "Ongoing Projects"
  },
  fr: {
    brand: "QUDx Inc.",
    navAbout: "A propos",
    navSolution: "Solution",
    navHow: "Fonctionnement",
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

document.addEventListener("DOMContentLoaded", () => {
  if (window.AOS) {
    AOS.init();
  }

  initLanguageSelector();
  startProjectAutoScroll();
  initCheckoutPage();
  initBrandStats();
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
  const dictionary = translations[language] || translations.en;
  document.documentElement.lang = language;
  document.body.dir = language === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });
}

function toggleMenu() {
  document.getElementById("mobileMenu")?.classList.toggle("hidden");
}

function closeMenu() {
  document.getElementById("mobileMenu")?.classList.add("hidden");
}

function openForm(type) {
  const modal = document.getElementById("formModal");
  const title = document.getElementById("formTitle");

  if (!modal || !title) return;

  const titles = {
    investor: "Investor Access",
    partner: "Partnership Request",
    early: "Early Access"
  };

  title.innerText = titles[type] || "Contact QUDx";
  modal.classList.remove("hidden");
}

function closeForm() {
  document.getElementById("formModal")?.classList.add("hidden");
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

function openPaymentModal(plan) {
  const modal = document.getElementById("paymentModal");
  const planText = document.getElementById("paymentPlanText");
  const paypalOption = document.getElementById("paypalOption");
  const paystackOption = document.getElementById("paystackOption");

  if (!modal || !planText || !paypalOption || !paystackOption) return;

  const checkoutPlan = encodeURIComponent(plan || "QUDx Support");
  planText.innerText = `You selected ${plan}. Choose a secure checkout option below.`;
  paystackOption.href = `checkout.html?method=paystack&plan=${checkoutPlan}`;
  modal.classList.remove("hidden");
}

function closePaymentModal() {
  document.getElementById("paymentModal")?.classList.add("hidden");
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

function initBrandStats() {
  const stats = document.querySelectorAll(".stat-value");
  const statsWrap = document.getElementById("brandStats");

  if (!stats.length || !statsWrap) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        stats.forEach((stat) => animateStat(stat));
        launchStatsBurst();
        observer.disconnect();
      });
    },
    { threshold: 0.45 }
  );

  observer.observe(statsWrap);
}

function animateStat(stat) {
  const target = Number(stat.dataset.count || 0);
  const pad = Number(stat.dataset.pad || 0);
  const suffix = stat.dataset.suffix || "";
  const duration = 3200;
  const start = performance.now();

  stat.classList.add("is-loading");

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    const formatted = pad ? String(value).padStart(pad, "0") : String(value).padStart(2, "0");

    stat.textContent = `${formatted}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      stat.classList.remove("is-loading");
    }
  }

  requestAnimationFrame(tick);
}

function launchStatsBurst() {
  const burst = document.getElementById("statsBurst");
  if (!burst) return;

  const colors = ["#1c730c", "#c8a951", "#16a34a", "#f97316", "#0f172a"];
  burst.innerHTML = "";

  for (let index = 0; index < 34; index += 1) {
    const piece = document.createElement("span");
    const angle = Math.random() * Math.PI * 2;
    const distance = 46 + Math.random() * 116;
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
