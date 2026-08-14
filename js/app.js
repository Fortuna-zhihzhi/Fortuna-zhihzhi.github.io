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

  function activePage() {
    const file = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    if (!file || file === "/") return "home";
    const hit = (window.SITE.nav || []).find((n) => n.href.toLowerCase() === file);
    return hit ? hit.id : file.replace(".html", "") || "home";
  }

  function githubIcon() {
    return `<svg class="brand-icon" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>`;
  }

  function activityList(items) {
    return `
      <ul class="activity">
        ${(items || [])
          .map(
            (a) => `
          <li>
            <span class="${iconClass(a.icon)}" style="width:20px;height:20px"></span>
            <span>${escapeHtml(a.text)}</span>
            <span class="time">${escapeHtml(a.time)}</span>
          </li>`
          )
          .join("")}
      </ul>`;
  }

  function bindNavToggle() {
    const btn = $("#nav-toggle");
    const nav = $("#site-nav");
    if (!btn || !nav) return;
    const close = () => {
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-label", "打开导航");
      nav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
    };
    btn.addEventListener("click", () => {
      const open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", open ? "false" : "true");
      btn.setAttribute("aria-label", open ? "打开导航" : "关闭导航");
      nav.classList.toggle("is-open", !open);
      document.body.classList.toggle("nav-open", !open);
    });
    nav.addEventListener("click", (e) => {
      if (e.target.closest("a")) close();
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 720) close();
    });
  }

  function renderChrome() {
    const site = window.SITE;
    if (!site) return;
    const page = activePage();
    const p = site.profile;

    const banner = $("#site-banner");
    if (banner) {
      banner.innerHTML = `
        <div class="banner-inner">
          <a class="logo-sign" href="index.html">
            <span class="${iconClass("ball")}" aria-hidden="true"></span>
            <div>
              <h1>${escapeHtml(p.name)} · Quest Log</h1>
              <p>求职向 · 个人博客</p>
            </div>
          </a>
        </div>`;
    }

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
    bindNavToggle();

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

    const right = $("#side-right");
    if (right) {
      right.innerHTML = `
        <div class="panel profile-card alt identity-sticky">
          <div class="avatar-xl">${escapeHtml(p.avatarLabel || "吱")}</div>
          <p class="name">${escapeHtml(p.name)}</p>
          <p class="handle">@${escapeHtml(p.handle)} · Trainer</p>
          <p class="bio">${escapeHtml(p.bio)}</p>
          <div class="stat-row">
            <div><strong>${p.followers}</strong>关注者</div>
            <div><strong>${p.following}</strong>关注</div>
            <div><strong>${p.repoCount}</strong>仓库</div>
          </div>
          <div class="speech">
            <span class="${iconClass("water")} mascot"></span>
            <div class="bubble">${escapeHtml(p.quote)}</div>
          </div>
          <div class="contact-bar">
            <a class="btn btn-ghost" href="${p.github}" target="_blank" rel="noopener">${githubIcon()}GitHub</a>
            <a class="btn btn-ghost" href="mailto:${escapeAttr(p.email)}">邮件</a>
          </div>
        </div>`;
    }

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
        <div class="contact-bar quick-links">
          <a class="btn" href="awards.html">奖项 · 学生工作</a>
          <a class="btn" href="stack.html">技术栈</a>
          <a class="btn" href="papers.html">论文阅读</a>
          <a class="btn" href="opensource.html">开源源码</a>
        </div>
      </section>

      <section class="panel appendix">
        <h3 class="panel-title">最近动态</h3>
        ${activityList(SITE.activities)}
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

  const COMMENT_NICK_KEY = "zhizhi-comment-nick";
  const COMMENT_RATE_KEY = "zhizhi-comment-rate";

  function commentRepo() {
    const cfg = window.SITE.comments || {};
    if (cfg.repo) return cfg.repo;
    const github = (window.SITE.profile && window.SITE.profile.github) || "";
    const m = github.match(/github\.com\/([^/]+)\/?$/);
    return m ? `${m[1]}/${m[1]}.github.io` : "Fortuna-zhihzhi/Fortuna-zhihzhi.github.io";
  }

  function commentLabel() {
    return (window.SITE.comments && window.SITE.comments.label) || "logs-discuss";
  }

  function parseIssueComment(issue) {
    const body = String(issue.body || "");
    const nickMatch = body.match(/[-*] 昵称：\s*(.+)/);
    const provinceMatch = body.match(/[-*] 地区：\s*(.+)/);
    const ipMatch = body.match(/[-*] IP：\s*(.+)/);
    let text = "";
    const parts = body.split(/\n---\n/);
    if (parts.length > 1) text = parts.slice(1).join("\n---\n").trim();
    if (!text) text = body.replace(/^### 交流区评论[\s\S]*?(?:\n---\n|$)/, "").trim() || body;
    const user = issue.user || {};
    return {
      id: issue.number,
      nick: (nickMatch ? nickMatch[1] : user.login || "访客").trim(),
      github: user.login || "",
      avatar: user.avatar_url || "",
      province: (provinceMatch ? provinceMatch[1] : "").trim() || "未知",
      ip: (ipMatch ? ipMatch[1] : "").trim() || "未知",
      text,
      ts: issue.created_at,
      url: issue.html_url,
    };
  }

  async function fetchComments() {
    const repo = commentRepo();
    const label = encodeURIComponent(commentLabel());
    const url = `https://api.github.com/repos/${repo}/issues?state=all&labels=${label}&per_page=50&sort=created&direction=desc`;
    const res = await fetch(url, {
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!res.ok) throw new Error("load " + res.status);
    const issues = await res.json();
    return (Array.isArray(issues) ? issues : [])
      .filter((it) => !it.pull_request)
      .map(parseIssueComment);
  }

  function buildIssueDraft(nick, text, geo) {
    const title = `[交流区] ${nick}`.slice(0, 80);
    const body = [
      "### 交流区评论",
      "",
      `- 昵称：${nick}`,
      `- 地区：${geo.province}`,
      `- IP：${geo.ip}`,
      "",
      "---",
      "",
      text,
    ].join("\n");
    const repo = commentRepo();
    const params = new URLSearchParams({
      title,
      labels: commentLabel(),
      body,
    });
    return `https://github.com/${repo}/issues/new?${params.toString()}`;
  }

  async function lookupVisitorGeo() {
    const readers = [
      async () => {
        const j = await (await fetch("https://ip.useragentinfo.com/json")).json();
        return { ip: j.ip || j.query, province: j.province || j.region };
      },
      async () => {
        const j = await (await fetch("https://ipwho.is/")).json();
        return { ip: j.ip, province: j.region || j.city };
      },
      async () => {
        const j = await (await fetch("https://ipapi.co/json/")).json();
        return { ip: j.ip, province: j.region || j.city };
      },
    ];
    for (const read of readers) {
      try {
        const hit = await Promise.race([
          read(),
          new Promise((_, rej) => setTimeout(() => rej(new Error("timeout")), 4000)),
        ]);
        if (hit && hit.ip) {
          return {
            ip: String(hit.ip).slice(0, 64),
            province: formatProvince(hit.province),
          };
        }
      } catch (err) {
        /* try next provider */
      }
    }
    return { ip: "未知", province: "未知" };
  }

  function formatProvince(raw) {
    const s = String(raw || "").trim();
    if (!s) return "未知";
    if (/省|市|自治区|特别行政区/.test(s)) return s;
    const map = {
      Beijing: "北京",
      Shanghai: "上海",
      Tianjin: "天津",
      Chongqing: "重庆",
      Guangdong: "广东",
      Zhejiang: "浙江",
      Jiangsu: "江苏",
      Sichuan: "四川",
      Hubei: "湖北",
      Hunan: "湖南",
      Henan: "河南",
      Hebei: "河北",
      Shandong: "山东",
      Shanxi: "山西",
      Shaanxi: "陕西",
      Anhui: "安徽",
      Fujian: "福建",
      Jiangxi: "江西",
      Liaoning: "辽宁",
      Jilin: "吉林",
      Heilongjiang: "黑龙江",
      Yunnan: "云南",
      Guizhou: "贵州",
      Hainan: "海南",
      Gansu: "甘肃",
      Qinghai: "青海",
      Taiwan: "台湾",
      Hong: "香港",
      Macao: "澳门",
      Macau: "澳门",
      Inner: "内蒙古",
      Guangxi: "广西",
      Ningxia: "宁夏",
      Xinjiang: "新疆",
      Tibet: "西藏",
    };
    const key = Object.keys(map).find((k) => s.indexOf(k) === 0);
    return key ? map[key] : s;
  }

  function renderCommentItems(list) {
    if (!list.length) {
      return `<div class="empty-hint">还没有评论。发表后会在 GitHub Issue 中公开，回来刷新即可看到。</div>`;
    }
    return `<ul class="comment-list">${list
      .map(
        (c) => `
      <li class="comment-item">
        <div class="comment-head">
          <strong>${escapeHtml(c.nick)}</strong>
          <span class="comment-meta">${escapeHtml(c.province || "未知")} · ${escapeHtml(
            c.ip || "未知"
          )}</span>
          <time datetime="${escapeAttr(c.ts)}">${escapeHtml(formatCommentTime(c.ts))}</time>
          ${
            c.url
              ? `<a class="comment-issue" href="${escapeAttr(
                  c.url
                )}" target="_blank" rel="noopener">#${escapeHtml(String(c.id))} 回复</a>`
              : ""
          }
        </div>
        <p class="comment-body">${escapeHtml(c.text)}</p>
      </li>`
      )
      .join("")}</ul>`;
  }

  function formatCommentTime(ts) {
    const d = new Date(ts);
    if (Number.isNaN(d.getTime())) return "";
    const pad = (n) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(
      d.getMinutes()
    )}`;
  }

  function paintComments(root, list, status) {
    const box = $("#comment-list-box", root);
    const hint = $("#comment-status", root);
    if (box) box.innerHTML = renderCommentItems(list);
    if (hint && status) hint.textContent = status;
  }

  function initLogComments() {
    const root = $("#logs-comments");
    if (!root) return;
    const repo = commentRepo();
    const label = commentLabel();
    const issuesUrl = `https://github.com/${repo}/issues?q=label%3A${encodeURIComponent(label)}`;
    const savedNick = localStorage.getItem(COMMENT_NICK_KEY) || "";
    root.innerHTML = `
      <section class="panel comments-panel">
        <h2 class="comments-title">交流区</h2>
        <p class="comments-lead">留言会发到本仓库的 <a href="${issuesUrl}" target="_blank" rel="noopener">GitHub Issue</a>（标签 <code>${escapeHtml(
          label
        )}</code>）。可自设昵称；提交时会标注 IP 与省份。需登录 GitHub 后点创建。</p>
        <form class="comment-form" id="comment-form">
          <label>
            昵称
            <input type="text" id="comment-nick" name="nick" maxlength="24" required placeholder="怎么称呼你" value="${escapeAttr(
              savedNick
            )}" autocomplete="nickname" />
          </label>
          <label class="comment-hp" aria-hidden="true">
            网站
            <input type="text" id="comment-website" name="website" tabindex="-1" autocomplete="off" />
          </label>
          <label>
            评论
            <textarea id="comment-text" name="text" maxlength="500" required rows="4" placeholder="说点什么…"></textarea>
          </label>
          <div class="comment-actions">
            <button type="submit" class="btn btn-code" id="comment-submit">发表到 GitHub</button>
            <button type="button" class="btn btn-ghost" id="comment-refresh">刷新评论</button>
            <span class="comment-status" id="comment-status"></span>
          </div>
        </form>
        <div id="comment-list-box"></div>
      </section>`;

    let cache = [];
    const form = $("#comment-form", root);

    function reload(status) {
      paintComments(root, cache, status || "正在读取 GitHub Issue…");
      return fetchComments()
        .then((list) => {
          cache = list;
          paintComments(root, cache, `已同步 GitHub Issue，共 ${list.length} 条。`);
        })
        .catch(() => {
          paintComments(root, cache, "无法读取 Issue。请确认仓库公开，并已创建标签 logs-discuss。");
        });
    }

    reload();
    $("#comment-refresh", root).addEventListener("click", () => reload("正在刷新…"));

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const nick = $("#comment-nick", root).value.trim();
      const text = $("#comment-text", root).value.trim();
      const trap = $("#comment-website", root).value.trim();
      const btn = $("#comment-submit", root);
      if (trap) return;
      if (nick.length < 1 || nick.length > 24) {
        paintComments(root, cache, "请填写 1–24 字昵称。");
        return;
      }
      if (text.length < 1 || text.length > 500) {
        paintComments(root, cache, "评论请控制在 500 字以内。");
        return;
      }
      const now = Date.now();
      const last = Number(localStorage.getItem(COMMENT_RATE_KEY) || 0);
      if (now - last < 20000) {
        paintComments(root, cache, "发表太频繁，请稍后再试。");
        return;
      }
      btn.disabled = true;
      paintComments(root, cache, "正在获取位置…");
      try {
        const geo = await lookupVisitorGeo();
        localStorage.setItem(COMMENT_NICK_KEY, nick);
        localStorage.setItem(COMMENT_RATE_KEY, String(now));
        window.open(buildIssueDraft(nick, text, geo), "_blank", "noopener");
        paintComments(root, cache, "已打开 GitHub。创建 Issue 后回到本页点击「刷新评论」。");
      } catch (err) {
        paintComments(root, cache, "无法打开 GitHub，请检查网络后再试。");
      } finally {
        btn.disabled = false;
      }
    });
  }

  function boot() {
    renderChrome();
    const page = activePage();
    const fn = pageRenderers[page] || pageRenderers.home;
    fn();
    if (page === "logs") initLogComments();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  window.PortfolioApp = { iconClass, renderChrome, boot };
})();
