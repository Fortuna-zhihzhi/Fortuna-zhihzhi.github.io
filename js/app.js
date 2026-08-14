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

  function xiaohongshuIcon() {
    return `<svg class="brand-icon social-logo social-logo--xhs" viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path fill="currentColor" d="M22.405 9.879c.002.016.01.02.07.019h.725a.797.797 0 0 0 .78-.972.794.794 0 0 0-.884-.618.795.795 0 0 0-.692.794c0 .101-.002.666.001.777zm-11.509 4.808c-.203.001-1.353.004-1.685.003a2.528 2.528 0 0 1-.766-.126.025.025 0 0 0-.03.014L7.7 16.127a.025.025 0 0 0 .01.032c.111.06.336.124.495.124.66.01 1.32.002 1.981 0 .01 0 .02-.006.023-.015l.712-1.545a.025.025 0 0 0-.024-.036zM.477 9.91c-.071 0-.076.002-.076.01a.834.834 0 0 0-.01.08c-.027.397-.038.495-.234 3.06-.012.24-.034.389-.135.607-.026.057-.033.042.003.112.046.092.681 1.523.787 1.74.008.015.011.02.017.02.008 0 .033-.026.047-.044.147-.187.268-.391.371-.606.306-.635.44-1.325.486-1.706.014-.11.021-.22.03-.33l.204-2.616.022-.293c.003-.029 0-.033-.03-.034zm7.203 3.757a1.427 1.427 0 0 1-.135-.607c-.004-.084-.031-.39-.235-3.06a.443.443 0 0 0-.01-.082c-.004-.011-.052-.008-.076-.008h-1.48c-.03.001-.034.005-.03.034l.021.293c.076.982.153 1.964.233 2.946.05.4.186 1.085.487 1.706.103.215.223.419.37.606.015.018.037.051.048.049.02-.003.742-1.642.804-1.765.036-.07.03-.055.003-.112zm3.861-.913h-.872a.126.126 0 0 1-.116-.178l1.178-2.625a.025.025 0 0 0-.023-.035l-1.318-.003a.148.148 0 0 1-.135-.21l.876-1.954a.025.025 0 0 0-.023-.035h-1.56c-.01 0-.02.006-.024.015l-.926 2.068c-.085.169-.314.634-.399.938a.534.534 0 0 0-.02.191.46.46 0 0 0 .23.378.981.981 0 0 0 .46.119h.59c.041 0-.688 1.482-.834 1.972a.53.53 0 0 0-.023.172.465.465 0 0 0 .23.398c.15.092.342.12.475.12l1.66-.001c.01 0 .02-.006.023-.015l.575-1.28a.025.025 0 0 0-.024-.035zm-6.93-4.937H3.1a.032.032 0 0 0-.034.033c0 1.048-.01 2.795-.01 6.829 0 .288-.269.262-.28.262h-.74c-.04.001-.044.004-.04.047.001.037.465 1.064.555 1.263.01.02.03.033.051.033.157.003.767.009.938-.014.153-.02.3-.06.438-.132.3-.156.49-.419.595-.765.052-.172.075-.353.075-.533.002-2.33 0-4.66-.007-6.991a.032.032 0 0 0-.032-.032zm11.784 6.896c0-.014-.01-.021-.024-.022h-1.465c-.048-.001-.049-.002-.05-.049v-4.66c0-.072-.005-.07.07-.07h.863c.08 0 .075.004.075-.074V8.393c0-.082.006-.076-.08-.076h-3.5c-.064 0-.075-.006-.075.073v1.445c0 .083-.006.077.08.077h.854c.075 0 .07-.004.07.07v4.624c0 .095.008.084-.085.084-.37 0-1.11-.002-1.304 0-.048.001-.06.03-.06.03l-.697 1.519s-.014.025-.008.036c.006.01.013.008.058.008 1.748.003 3.495.002 5.243.002.03-.001.034-.006.035-.033v-1.539zm4.177-3.43c0 .013-.007.023-.02.024-.346.006-.692.004-1.037.004-.014-.002-.022-.01-.022-.024-.005-.434-.007-.869-.01-1.303 0-.072-.006-.071.07-.07l.733-.003c.041 0 .081.002.12.015.093.025.16.107.165.204.006.431.002 1.153.001 1.153zm2.67.244a1.953 1.953 0 0 0-.883-.222h-.18c-.04-.001-.04-.003-.042-.04V10.21c0-.132-.007-.263-.025-.394a1.823 1.823 0 0 0-.153-.53 1.533 1.533 0 0 0-.677-.71 2.167 2.167 0 0 0-1-.258c-.153-.003-.567 0-.72 0-.07 0-.068.004-.068-.065V7.76c0-.031-.01-.041-.046-.039H17.93s-.016 0-.023.007c-.006.006-.008.012-.008.023v.546c-.008.036-.057.015-.082.022h-.95c-.022.002-.028.008-.03.032v1.481c0 .09-.004.082.082.082h.913c.082 0 .072.128.072.128V11.19s.003.117-.06.117h-1.482c-.068 0-.06.082-.06.082v1.445s-.01.068.064.068h1.457c.082 0 .076-.006.076.079v3.225c0 .088-.007.081.082.081h1.43c.09 0 .082.007.082-.08v-3.27c0-.029.006-.035.033-.035l2.323-.003c.098 0 .191.02.28.061a.46.46 0 0 1 .274.407c.008.395.003.79.003 1.185 0 .259-.107.367-.33.367h-1.218c-.023.002-.029.008-.028.033.184.437.374.871.57 1.303a.045.045 0 0 0 .04.026c.17.005.34.002.51.003.15-.002.517.004.666-.01a2.03 2.03 0 0 0 .408-.075c.59-.18.975-.698.976-1.313v-1.981c0-.128-.01-.254-.034-.38 0 .078-.029-.641-.724-.998z"/></svg>`;
  }

  function bilibiliIcon() {
    return `<svg class="brand-icon social-logo social-logo--bili" viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path fill="currentColor" d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z"/></svg>`;
  }

  function douyinIcon() {
    const note =
      "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z";
    return `<svg class="brand-icon social-logo social-logo--douyin" viewBox="-2 -2 28 28" width="26" height="26" aria-hidden="true"><path fill="#25F4EE" d="${note}" transform="translate(1.2,-0.9)"/><path fill="#FE2C55" d="${note}" transform="translate(-1.15,0.85)"/><path fill="#161823" d="${note}"/></svg>`;
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
            <a class="social-tile" href="${escapeAttr(p.xiaohongshu)}" target="_blank" rel="noopener" aria-label="小红书">
              ${xiaohongshuIcon()}
              <span>小红书</span>
            </a>
            <a class="social-tile" href="${escapeAttr(p.bilibili)}" target="_blank" rel="noopener" aria-label="Bilibili">
              ${bilibiliIcon()}
              <span>Bilibili</span>
            </a>
            <a class="social-tile" href="${escapeAttr(p.douyin)}" target="_blank" rel="noopener" aria-label="抖音">
              ${douyinIcon()}
              <span>抖音</span>
            </a>
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
