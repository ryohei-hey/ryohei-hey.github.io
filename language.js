document.addEventListener("DOMContentLoaded", () => {
  const english = document.documentElement.lang === "en";
  const names = {
    "index.html": ["ホーム", "Home"],
    "research.html": ["研究", "Research"],
    "publications.html": ["業績", "Publications"],
    "projects.html": ["プロジェクト", "Projects"],
    "education.html": ["教育資料", "Education"],
    "cv.html": ["経歴", "CV"]
  };
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar a[href]").forEach(link => {
    const url = new URL(link.href, location.href);
    if (url.origin !== location.origin) return;
    const file = url.pathname.split("/").pop() || "index.html";
    if (!names[file]) return;
    link.href = (english ? "/en/" : "/") + file;
    if (link.classList.contains("navbar-brand")) return;
    const label = link.querySelector(".menu-text");
    if (label) label.textContent = names[file][english ? 1 : 0];
    link.classList.toggle("active", file === current);
    if (file === current) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
});
