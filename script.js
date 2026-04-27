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
  }
};

document.addEventListener("DOMContentLoaded", () => {
  if (window.AOS) {
    AOS.init();
  }
});

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
