/* 共享布局 + 渲染 helpers */
(function () {
  const $ = (sel, el = document) => el.querySelector(sel);
  const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];

  function iconClass(name) {
    const map = {
      ball: "pi-ball",
      box: "pi-box",
      book: "pi-book",
      medal: "pi-medal",
      gear: "pi-gear",
      scroll: "pi-scroll",
      code: "pi-code",
      spark: "pi-spark",
      blob: "pi-blob",
      ghost: "pi-ghost",
      leaf: "pi-leaf",
      orb: "pi-orb",
      star: "pi-star",
      water: "pi-water",
    };
    return "pixel-icon " + (map[name] || "pi-orb");
  }

  function mulberry32(a) {
    return function () {
      let t = (a += 0x6d2b79f5);
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function renderHeatmap(seed) {
    const rand = mulberry32(seed || 1);
    let html = "";
    for (let i = 0; i < 13 * 7; i++) {
      const r = rand();
      let lv = 0;
      if (r > 0.45) lv = 1;
      if (r > 0.7) lv = 2;
      if (r > 0.85) lv = 3;
      if (r > 0.94) lv = 4;
      html += `<i class="l${lv}" title="contrib"></i>`;
    }
    return html;
  }

  function activePage() {
    const file = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    if (!file || file === "/") return "home";
    const hit = (window.SITE.nav || []).find((n) => n.href.toLowerCase() === file);
    return hit ? hit.id : file.replace(".html", "") || "home";
  }

  function renderChrome() {
    const site = window.SITE;
    if (!site) return;
    const page = activePage();
    const p = site.profile;

    // banner
    const banner = $("#site-banner");
    if (banner) {
      banner.innerHTML = `
        <div class="banner-inner">
          <div class="logo-sign">
            <span class="${iconClass("ball")}" aria-hidden="true"></span>
            <div>
              <h1>${escapeHtml(p.name)} · Quest Log</h1>
              <p>求职向 · 个人博客</p>
            </div>
          </div>
          <div class="banner-tools">
            <span class="star-chip">★ ${escapeHtml(String(p.stars))}</span>
            <span class="user-chip">
              <span class="mini-avatar">${escapeHtml(p.avatarLabel || "吱")}</span>
              ${escapeHtml(p.handle)}
            </span>
          </div>
        </div>`;
    }

    // nav
    const nav = $("#site-nav");
    if (nav) {
      nav.innerHTML = `
        <div class="site-nav-inner">
          ${(site.nav || [])
            .map(
              (n) => `
            <a class="nav-link ${n.id === page ? "active" : ""}" href="${n.href}" data-id="${n.id}">
              <span class="${iconClass(n.icon)}"></span>
              ${escapeHtml(n.label)}
            </a>`
            )
            .join("")}
        </div>`;
    }

    // left sidebar
    const left = $("#side-left");
    if (left) {
      left.innerHTML = `
        <div class="panel side-left-panel">
          <h3 class="panel-title">你的仓库</h3>
          <div class="side-search">
            <input type="search" id="repo-filter" placeholder="搜索仓库…" aria-label="搜索仓库" />
          </div>
          <ul class="repo-list" id="repo-list">
            ${(site.sidebarRepos || [])
              .map(
                (r) => `
              <li>
                <a href="${r.href}" data-name="${escapeAttr(r.name)}">
                  <span class="${iconClass(r.icon)}"></span>
                  <span>${escapeHtml(r.name)}</span>
                  <span class="star-mini">★</span>
                </a>
              </li>`
              )
              .join("")}
          </ul>
          <a class="btn side-cta" href="projects.html">
            <span class="${iconClass("spark")}" style="width:20px;height:20px"></span>
            浏览全部项目
          </a>
        </div>`;

      const input = $("#repo-filter", left);
      if (input) {
        input.addEventListener("input", () => {
          const q = input.value.trim().toLowerCase();
          $$("#repo-list a").forEach((a) => {
            const name = (a.dataset.name || "").toLowerCase();
            a.parentElement.style.display = !q || name.includes(q) ? "" : "none";
          });
        });
      }
    }

    // right sidebar
    const right = $("#side-right");
    if (right) {
      right.innerHTML = `
        <div class="panel profile-card alt">
          <div class="avatar-xl">${escapeHtml(p.avatarLabel || "吱")}</div>
          <p class="name">${escapeHtml(p.name)}</p>
          <p class="handle">@${escapeHtml(p.handle)} · Trainer</p>
          <p class="bio">${escapeHtml(p.bio)}</p>
          <div class="stat-row">
            <div><strong>${p.followers}</strong>关注者</div>
            <div><strong>${p.following}</strong>关注</div>
            <div><strong>${p.repoCount}</strong>仓库</div>
          </div>
          <h3 class="panel-title">贡献地图</h3>
          <div class="heatmap" aria-hidden="true">${renderHeatmap(site.contributionSeed)}</div>
          <h3 class="panel-title">最近动态</h3>
          <ul class="activity">
            ${(site.activities || [])
              .map(
                (a) => `
              <li>
                <span class="${iconClass(a.icon)}" style="width:20px;height:20px"></span>
                <span>${escapeHtml(a.text)}</span>
                <span class="time">${escapeHtml(a.time)}</span>
              </li>`
              )
              .join("")}
          </ul>
          <div class="speech">
            <span class="${iconClass("water")} mascot"></span>
            <div class="bubble">${escapeHtml(p.quote)}</div>
          </div>
          <div class="contact-bar">
            <a class="btn btn-ghost" href="${p.github}" target="_blank" rel="noopener">GitHub</a>
            <a class="btn btn-ghost" href="mailto:${escapeAttr(p.email)}">邮件</a>
          </div>
        </div>`;
    }

    // footer
    const footer = $("#site-footer");
    if (footer) {
      footer.innerHTML = `
        <div>© ${new Date().getFullYear()} ${escapeHtml(p.name)} · Built with HTML / CSS / JS · Hosted on GitHub Pages</div>
        <div style="margin-top:0.35rem;opacity:.9">
          <a href="${p.github}">源码仓库</a>
          · 数据在 <code>data/site.js</code> 修改
        </div>`;
    }

    document.title = document.body.dataset.title
      ? `${document.body.dataset.title} · ${p.name}`
      : `${p.name} · 求职博客`;
  }

  function escapeHtml(s) {
    return String(s ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function escapeAttr(s) {
    return escapeHtml(s).replace(/'/g, "&#39;");
  }

  /* -------- page renderers -------- */

  function renderHome() {
    const root = $("#main-content");
    if (!root || !window.SITE) return;
    const f = SITE.featured;
    const projects = SITE.projects || [];
    root.innerHTML = `
      <section class="page-intro">
        <h2>训练师档案 · 概览</h2>
        <p>欢迎来到我的求职主页。左侧是重点项目捷径，中间是精选项目与动态，右侧是个人简介与贡献节奏。</p>
      </section>

      <article class="hero-card">
        <span class="${iconClass(f.icon)}"></span>
        <div>
          <h2>${escapeHtml(f.name)} <span class="badge">${escapeHtml(f.badge)}</span></h2>
          <p style="margin:0.25rem 0;font-weight:600">${escapeHtml(f.tagline)}</p>
          <p style="margin:0;color:var(--ink-soft)">${escapeHtml(f.desc)}</p>
          <div class="hero-meta">
            <span><i class="lang-dot" style="background:${f.langColor}"></i>${escapeHtml(f.lang)}</span>
            <span>★ ${f.stars}</span>
            <span>⑂ ${f.forks}</span>
            <span>议题 ${f.issues}</span>
            <span>更新 ${escapeHtml(f.updated)}</span>
          </div>
          <div class="tags">${(f.links || [])
            .map((l) => `<a class="tag" href="${l.href}">${escapeHtml(l.label)}</a>`)
            .join("")}</div>
        </div>
        <div class="hero-actions">
          <a class="btn btn-code" href="${f.href}">查看项目</a>
          <a class="btn btn-ghost" href="logs.html?project=${encodeURIComponent(
            f.id
          )}">相关日志</a>
        </div>
      </article>

      <section class="panel">
        <div class="section-head">
          <h3>最近更新的仓库</h3>
          <a class="btn btn-ghost" href="projects.html">全部 →</a>
        </div>
        <div class="card-list">
          ${projects
            .map(
              (p) => `
            <a class="item-card" href="projects.html#${p.id}" style="color:inherit;text-decoration:none">
              <span class="${iconClass(p.icon)}"></span>
              <div>
                <h4>${escapeHtml(p.name)}</h4>
                <p>${escapeHtml(p.desc)}</p>
                <div class="meta">
                  <span>${escapeHtml(p.lang)}</span>
                  <span>${escapeHtml(p.year)}</span>
                  <span>${escapeHtml(p.role)}</span>
                </div>
              </div>
              <div class="meta-side"><span class="badge">★</span></div>
            </a>`
            )
            .join("")}
        </div>
      </section>

      <section class="panel alt">
        <div class="section-head"><h3>快速入口</h3></div>
        <div class="contact-bar">
          <a class="btn" href="awards.html">奖项 · 学生工作</a>
          <a class="btn" href="stack.html">技术栈</a>
          <a class="btn" href="papers.html">论文阅读</a>
          <a class="btn" href="opensource.html">开源源码</a>
        </div>
      </section>`;
  }

  function renderProjects() {
    const root = $("#main-content");
    if (!root) return;
    root.innerHTML = `
      <section class="page-intro">
        <h2>项目展示</h2>
        <p>每条项目含角色、亮点与跳转学习日志。把 <code>data/site.js</code> 中的项目换成你的作品集即可。</p>
      </section>
      ${(SITE.projects || [])
        .map(
          (p) => `
        <article class="project-block" id="${escapeAttr(p.id)}">
          <h2><span class="${iconClass(p.icon)}"></span>${escapeHtml(p.name)}</h2>
          <p>${escapeHtml(p.desc)}</p>
          <div class="hero-meta">
            <span>${escapeHtml(p.lang)}</span>
            <span>${escapeHtml(p.year)}</span>
            <span>${escapeHtml(p.role)}</span>
          </div>
          <div class="tags">${(p.tags || [])
            .map((t) => `<span class="tag">${escapeHtml(t)}</span>`)
            .join("")}</div>
          <ul class="hl">${(p.highlights || [])
            .map((h) => `<li>${escapeHtml(h)}</li>`)
            .join("")}</ul>
          <div class="contact-bar" style="margin-top:0.75rem">
            ${
              p.repo
                ? `<a class="btn btn-code" href="${p.repo}" target="_blank" rel="noopener">源码</a>`
                : ""
            }
            <a class="btn btn-ghost" href="logs.html?project=${encodeURIComponent(
              p.id
            )}">分项目日志</a>
          </div>
        </article>`
        )
        .join("")}`;
  }

  function renderLogs() {
    const root = $("#main-content");
    if (!root) return;
    const params = new URLSearchParams(location.search);
    let filter = params.get("project") || "all";
    const projects = [
      { id: "all", name: "全部" },
      ...[...new Map((SITE.logs || []).map((l) => [l.project, l.projectName])).entries()].map(
        ([id, name]) => ({ id, name })
      ),
    ];

    function paint() {
      const logs = (SITE.logs || []).filter((l) => filter === "all" || l.project === filter);
      root.innerHTML = `
        <section class="page-intro">
          <h2>个人日志 · 学习记录</h2>
          <p>按项目过滤。适合写真机踩坑、推导笔记、实验结论——面试时非常好用。</p>
        </section>
        <div class="filter-bar">
          ${projects
            .map(
              (p) =>
                `<button type="button" class="chip-btn ${
                  p.id === filter ? "active" : ""
                }" data-p="${escapeAttr(p.id)}">${escapeHtml(p.name)}</button>`
            )
            .join("")}
        </div>
        ${
          logs.length
            ? logs
                .map(
                  (l) => `
            <article class="log-card" id="${escapeAttr(l.id)}">
              <h4>${escapeHtml(l.title)}</h4>
              <div class="meta">${escapeHtml(l.date)} · ${escapeHtml(
                    l.projectName
                  )} · ${(l.tags || []).map((t) => `#${t}`).join(" ")}</div>
              <p><strong>${escapeHtml(l.summary)}</strong></p>
              <ul class="hl">${(l.body || []).map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>
            </article>`
                )
                .join("")
            : `<div class="empty-hint">这个项目还没有日志，去 data/site.js 添加吧。</div>`
        }`;

      $$(".chip-btn", root).forEach((btn) => {
        btn.addEventListener("click", () => {
          filter = btn.dataset.p;
          const url = new URL(location.href);
          if (filter === "all") url.searchParams.delete("project");
          else url.searchParams.set("project", filter);
          history.replaceState({}, "", url);
          paint();
        });
      });
    }
    paint();
  }

  function renderAwards() {
    const root = $("#main-content");
    if (!root) return;
    root.innerHTML = `
      <section class="page-intro">
        <h2>奖项以及学生工作</h2>
        <p>竞赛、奖学金、实验室与学生组织经历。示例内容请替换成真实信息。</p>
      </section>
      <section class="panel">
        <h3 class="panel-title">奖项荣誉</h3>
        <div class="timeline">
          ${(SITE.awards || [])
            .map(
              (a) => `
            <div class="t-item">
              <div class="year">${escapeHtml(a.year)}</div>
              <h4 style="margin:0.35rem 0 0.2rem">${escapeHtml(a.title)}</h4>
              <div class="meta" style="font-family:var(--font-ui);color:var(--ink-soft)">${escapeHtml(
                a.org
              )}</div>
              <p style="margin:0.35rem 0 0">${escapeHtml(a.desc)}</p>
            </div>`
            )
            .join("")}
        </div>
      </section>
      <section class="panel alt">
        <h3 class="panel-title">学生工作</h3>
        <div class="card-list">
          ${(SITE.studentWork || [])
            .map(
              (w) => `
            <div class="item-card" style="grid-template-columns:1fr">
              <div>
                <h4>${escapeHtml(w.role)}</h4>
                <div class="meta">${escapeHtml(w.org)} · ${escapeHtml(w.time)}</div>
                <ul class="hl">${(w.points || [])
                  .map((x) => `<li>${escapeHtml(x)}</li>`)
                  .join("")}</ul>
              </div>
            </div>`
            )
            .join("")}
        </div>
      </section>`;
  }

  function renderStack() {
    const root = $("#main-content");
    if (!root) return;
    const groups = (SITE.techStack && SITE.techStack.groups) || [];
    root.innerHTML = `
      <section class="page-intro">
        <h2>技术栈介绍</h2>
        <p>等级条仅用于可视化熟练度（1–5），投递前按你的真实水平调整。</p>
      </section>
      <div class="stack-grid">
        ${groups
          .map(
            (g) => `
          <section class="stack-group">
            <h4>${escapeHtml(g.title)}</h4>
            ${(g.items || [])
              .map((it) => {
                const pct = Math.min(5, Math.max(1, it.level || 1)) * 20;
                return `
                <div class="skill">
                  <span>${escapeHtml(it.name)}</span>
                  <div class="bar" aria-label="level ${it.level}"><span style="width:${pct}%"></span></div>
                  <span class="lvl">Lv.${it.level}</span>
                  <div class="note">${escapeHtml(it.note || "")}</div>
                </div>`;
              })
              .join("")}
          </section>`
          )
          .join("")}
      </div>`;
  }

  function renderPapers() {
    const root = $("#main-content");
    if (!root) return;
    let tag = "all";
    const tags = [
      "all",
      ...new Set((SITE.papers || []).flatMap((p) => p.tags || [])),
    ];

    function paint() {
      const list = (SITE.papers || []).filter(
        (p) => tag === "all" || (p.tags || []).includes(tag)
      );
      root.innerHTML = `
        <section class="page-intro">
          <h2>论文阅读区域</h2>
          <p>记录精读 / 略读结论。建议与「项目日志」交叉链接，体现学以致用。</p>
        </section>
        <div class="filter-bar">
          ${tags
            .map(
              (t) =>
                `<button type="button" class="chip-btn ${
                  t === tag ? "active" : ""
                }" data-t="${escapeAttr(t)}">${escapeHtml(t)}</button>`
            )
            .join("")}
        </div>
        ${list
          .map((p) => {
            const stars = "★".repeat(p.rating || 0) + "☆".repeat(5 - (p.rating || 0));
            return `
            <article class="paper-card" id="${escapeAttr(p.id)}">
              <h4>${escapeHtml(p.title)}</h4>
              <div class="meta">${escapeHtml(p.authors)} · ${escapeHtml(
              p.venue
            )} · ${escapeHtml(String(p.year))} · <span class="badge">${escapeHtml(
              p.status
            )}</span>
              · <span class="stars-rating">${stars}</span>
              </div>
              <div class="tags">${(p.tags || [])
                .map((t) => `<span class="tag">${escapeHtml(t)}</span>`)
                .join("")}</div>
              <ul class="hl">${(p.takeaways || [])
                .map((t) => `<li>${escapeHtml(t)}</li>`)
                .join("")}</ul>
              <p style="margin:0.5rem 0 0;color:var(--ink-soft)">${escapeHtml(p.notes || "")}</p>
              ${
                p.link
                  ? `<p style="margin:0.5rem 0 0"><a href="${p.link}" target="_blank" rel="noopener">阅读链接</a></p>`
                  : ""
              }
            </article>`;
          })
          .join("")}`;

      $$(".chip-btn", root).forEach((btn) => {
        btn.addEventListener("click", () => {
          tag = btn.dataset.t;
          paint();
        });
      });
    }
    paint();
  }

  function renderOpensource() {
    const root = $("#main-content");
    if (!root) return;
    const rows = SITE.opensource || [];
    root.innerHTML = `
      <section class="page-intro">
        <h2>开源项目源码区</h2>
        <p>集中展示仓库链接、技术标签与角色。也可附上贡献过的上游 PR。</p>
      </section>
      <section class="panel">
        <table class="os-table">
          <tbody>
          ${rows
            .map(
              (r) => `
            <tr>
              <td style="width:28%">
                <div class="name">${escapeHtml(r.name)}</div>
                <div style="font-family:var(--font-ui);margin-top:0.2rem">${escapeHtml(
                  r.lang
                )} · ★ ${r.stars}</div>
              </td>
              <td>
                <p style="margin:0 0 0.4rem">${escapeHtml(r.desc)}</p>
                <div class="tags">${(r.topics || [])
                  .map((t) => `<span class="tag">${escapeHtml(t)}</span>`)
                  .join("")}</div>
              </td>
              <td style="width:120px;text-align:right">
                <a class="btn btn-code" href="${r.url}" target="_blank" rel="noopener">Code</a>
              </td>
            </tr>`
            )
            .join("")}
          </tbody>
        </table>
      </section>`;
  }

  const pageRenderers = {
    home: renderHome,
    index: renderHome,
    projects: renderProjects,
    logs: renderLogs,
    awards: renderAwards,
    stack: renderStack,
    papers: renderPapers,
    opensource: renderOpensource,
  };

  function boot() {
    renderChrome();
    const page = activePage();
    const fn = pageRenderers[page] || pageRenderers.home;
    fn();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  window.PortfolioApp = { iconClass, renderChrome, boot };
})();
