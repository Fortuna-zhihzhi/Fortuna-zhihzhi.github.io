/**
 * 站点内容配置 —— 直接改这里即可更新博客，无需动页面结构。
 * GitHub Pages 仓库: Fortuna-zhizhi.github.io
 */
window.SITE = {
  profile: {
    name: "吱吱",
    handle: "trainer01",
    title: "求职 · 机器人 / 嵌入式 / 控制方向",
    bio: "喜欢把强化学习算法搬到真机上跑通。当前目标：机器人软件 / 运动控制 / 感知相关岗位。",
    email: "your.email@example.com",
    github: "https://github.com/Fortuna-zhihzhi",
    location: "China",
    followers: 42,
    following: 18,
    repoCount: 12,
    stars: "128",
    avatarLabel: "吱",
    quote: "调试真机前先把表填对，再谈策略是否聪明。",
  },

  nav: [
    { id: "home", href: "index.html", label: "概览", icon: "ball" },
    { id: "projects", href: "projects.html", label: "项目", icon: "box" },
    { id: "logs", href: "logs.html", label: "学习日志", icon: "book" },
    { id: "awards", href: "awards.html", label: "奖项·学生工作", icon: "medal" },
    { id: "stack", href: "stack.html", label: "技术栈", icon: "gear" },
    { id: "papers", href: "papers.html", label: "论文阅读", icon: "scroll" },
    { id: "opensource", href: "opensource.html", label: "开源源码", icon: "code" },
  ],

  sidebarRepos: [
    { name: "robot-infer", icon: "spark", href: "projects.html#robot-infer" },
    { name: "ankle-kin", icon: "blob", href: "projects.html#ankle-kin" },
    { name: "sim2sim", icon: "ghost", href: "projects.html#sim2sim" },
    { name: "blog-site", icon: "leaf", href: "projects.html#blog-site" },
    { name: "paper-notes", icon: "orb", href: "papers.html" },
  ],

  featured: {
    id: "robot-infer",
    name: "robot_infer",
    badge: "Public",
    tagline: "双足人形机器人实时推理与控制工程",
    desc: "AimRT + ROS 2 Humble，集成 ONNX RL 策略、EtherCAT(SOEM) 驱动与 MuJoCo 仿真。聚焦 mojia 系列机型的真机部署与并联踝传动。",
    lang: "C++",
    langColor: "#f34b7d",
    stars: 36,
    forks: 8,
    issues: 3,
    updated: "2026-08",
    icon: "spark",
    href: "projects.html#robot-infer",
    links: [
      { label: "README / 文档", href: "projects.html#robot-infer" },
      { label: "相关日志", href: "logs.html?project=robot-infer" },
    ],
  },

  projects: [
    {
      id: "robot-infer",
      name: "robot_infer · 真机推理控制",
      icon: "spark",
      desc: "Coludata Mojia 双足机型的 1kHz 控制环：RL 推理、状态机、JCU EtherCAT 驱动、踝并联 transmission。",
      tags: ["C++20", "ROS2", "ONNX", "EtherCAT", "AimRT"],
      lang: "C++",
      year: "2025–2026",
      role: "核心开发 / 真机部署",
      highlights: [
        "完成 mojia_v3.6 实机配置与 23DoF 策略接入",
        "踝并联 FK/IK 建表与力矩映射校验工具链",
        "手柄状态机（zero / stand / walk / damping）联调",
      ],
      repo: "https://github.com/Fortuna-zhihzhi",
      demo: "",
      logIds: ["log-ankle", "log-zero-mode", "log-jcu-sdo"],
    },
    {
      id: "ankle-kin",
      name: "ankle_parallel · 并联踝运动学",
      icon: "blob",
      desc: "2-DOF 踝关节差动机构：离线 LUT、解析 IK、雅可比力矩映射，Python 一致性校验脚本。",
      tags: ["Python", "YAML LUT", "Kinematics"],
      lang: "Python",
      year: "2025",
      role: "独立完成",
      highlights: [
        "±1.5 rad 网格双线性插值 FK",
        "左右脚镜像与 roll 符号约定整理",
        "verify_ankle_fk_ik 自动化校验",
      ],
      repo: "",
      logIds: ["log-ankle"],
    },
    {
      id: "sim2sim",
      name: "sim2sim · 策略迁移",
      icon: "ghost",
      desc: "Isaac / 训练侧策略到 MuJoCo + 本仓库控制器的对齐：观测序、init_state、kp/kd 与 act_scale。",
      tags: ["MuJoCo", "RL", "YAML"],
      lang: "Python/C++",
      year: "2026",
      role: "策略落地",
      highlights: [
        "mojia_v3_6 仿真配置与 23dof ONNX 接入",
        "obs history / action clip 对齐训练",
      ],
      repo: "",
      logIds: ["log-sim2sim"],
    },
    {
      id: "blog-site",
      name: "pixel-portfolio · 本站",
      icon: "leaf",
      desc: "纯 HTML/CSS/JS 个人求职博客，像素 RPG 界面，GitHub Pages 托管。",
      tags: ["HTML", "CSS", "JS", "GitHub Pages"],
      lang: "JavaScript",
      year: "2026",
      role: "个人项目",
      highlights: ["数据与视图分离", "多栏目求职信息架构", "像素风组件库"],
      repo: "https://github.com/Fortuna-zhihzhi/Fortuna-zhizhi.github.io",
      logIds: ["log-blog"],
    },
  ],

  techStack: {
    groups: [
      {
        title: "语言与基础",
        items: [
          { name: "C++20", level: 4, note: "控制与驱动主语言" },
          { name: "Python", level: 4, note: "工具链 / 校验 / 脚本" },
          { name: "Shell / CMake", level: 3, note: "构建与部署" },
          { name: "YAML 配置驱动", level: 4, note: "多机型参数" },
        ],
      },
      {
        title: "机器人中间件",
        items: [
          { name: "ROS 2 Humble", level: 4, note: "消息与调试" },
          { name: "AimRT", level: 3, note: "模块化运行时" },
          { name: "EtherCAT / SOEM", level: 3, note: "JCU 真机通信" },
          { name: "MuJoCo", level: 3, note: "sim2sim" },
        ],
      },
      {
        title: "算法与控制",
        items: [
          { name: "RL 策略部署", level: 4, note: "ONNX Runtime" },
          { name: "并联机构运动学", level: 3, note: "FK/IK/Jacobian" },
          { name: "MIT 阻抗 / PD", level: 4, note: "关节与电机侧" },
          { name: "状态机与安全", level: 3, note: "limit / damping" },
        ],
      },
      {
        title: "工程习惯",
        items: [
          { name: "Git / Code Review", level: 3, note: "feature 分支流" },
          { name: "日志与 trace", level: 4, note: "CSV / torque trace" },
          { name: "文档化", level: 3, note: "runbook / 校验指南" },
        ],
      },
    ],
  },

  awards: [
    {
      year: "2025",
      title: "XX 机器人竞赛 / 项目奖（示例）",
      org: "学校 / 赛事组委会",
      desc: "负责运动控制子系统联调与现场部署。请替换为你的真实奖项名称与角色。",
      icon: "medal",
    },
    {
      year: "2024",
      title: "奖学金 / 学术荣誉（示例）",
      org: "学院",
      desc: "连续获得学业奖学金。请替换为真实条目。",
      icon: "star",
    },
  ],

  studentWork: [
    {
      role: "实验室研究助理（示例）",
      org: "机器人实验室",
      time: "2024 – 至今",
      points: [
        "协助完成人形机器人下肢控制实验平台",
        "整理周报与实验记录，组织组内 code reading",
      ],
    },
    {
      role: "学生组织技术部（示例）",
      org: "学院科协",
      time: "2023 – 2024",
      points: [
        "维护部门项目文档与新生培训课件",
        "组织 2 次技术分享：Git 协作 / 嵌入式入门",
      ],
    },
  ],

  logs: [
    {
      id: "log-ankle",
      project: "ankle-kin",
      projectName: "并联踝",
      date: "2026-07-22",
      title: "并联踝 FK 建表与 IK 分支选择",
      tags: ["kinematics", "LUT"],
      summary: "记录 qm5×qm6 网格步长选取、左右脚镜像与 IK 选近支策略。",
      body: [
        "电机角网格 ±1.5 rad，步长约 0.4°；位置双线性插值，力矩/速度走雅可比。",
        "TransformActuatorToJoint 与 TransformJointToActuator 必须和建表几何常量同步。",
        "真机验证优先小角度 + zero 模式回安全区，再跑正弦。",
      ],
    },
    {
      id: "log-zero-mode",
      project: "robot-infer",
      projectName: "robot_infer",
      date: "2026-08-03",
      title: "zero / damping 下左右阻尼不对称排查",
      tags: ["debug", "real-robot"],
      summary: "pd_zero 与 JCU 配置左右对称时，症状更像通道使能/CAN 硬件问题。",
      body: [
        "对照 /joint_cmd 与 /actuator_cmd 中左右 hip/knee 的 kd。",
        "左腿共用 hip JCU channel 2，整腿空响应优先查使能失败与线束。",
        "continue_on_enable_fail=true 会掩盖单侧 Enable 失败。",
      ],
    },
    {
      id: "log-jcu-sdo",
      project: "robot-infer",
      projectName: "robot_infer",
      date: "2026-08-03",
      title: "JCU SDO 注册写失败（0x8000）",
      tags: ["EtherCAT", "SDO"],
      summary: "肩 JCU 启动同步 can_id 时邮箱超时，重启后消失——偶发时序/链路问题。",
      body: [
        "idx=0x8000 sub=0x01 value=can_id 是电机注册首笔。",
        "err 显示 MBX No error 但 WKC≤0 通常是超时而非对象字典拒绝。",
        "可开 JCU_SDO_TRACE 精确定位第几笔。",
      ],
    },
    {
      id: "log-sim2sim",
      project: "sim2sim",
      projectName: "sim2sim",
      date: "2026-07-28",
      title: "v3.6 23dof 观测与 init_state 对齐",
      tags: ["RL", "sim"],
      summary: "obs=78×hist10，action scale 0.25，站姿 home 与训练 mojia_v3_6_flat 对齐。",
      body: [
        "注意仿真 joint 序（腰→臂→腿）与真机 JCU 序（腰→腿→臂）映射靠关节名。",
        "act_alpha 与 training 一致时可先关 EMA，避免相位滞后误判。",
      ],
    },
    {
      id: "log-blog",
      project: "blog-site",
      projectName: "本站",
      date: "2026-08-10",
      title: "求职向像素站上线清单",
      tags: ["web", "career"],
      summary: "HTML/CSS/JS 静态站 + data/site.js 数据驱动，GitHub Pages 发布。",
      body: [
        "栏目：项目 / 日志 / 奖项·学生工作 / 技术栈 / 论文 / 开源。",
        "替换 profile 联系方式与真实成绩后即可投递链接。",
      ],
    },
  ],

  papers: [
    {
      id: "p1",
      title: "Learning to Walk in Minutes（示例）",
      authors: "… et al.",
      venue: "Conference / arXiv",
      year: "202X",
      tags: ["RL", "locomotion"],
      rating: 4,
      status: "精读",
      takeaways: [
        "域随机与 sim-to-real 的常见配方",
        "动作空间与 PD 目标的接口选择",
      ],
      notes:
        "替换为你真实的读后笔记。建议每篇 3 条 takeaway + 与本仓库部署的对应点。",
      link: "",
    },
    {
      id: "p2",
      title: "人形并联踝 / 传动相关论文（示例）",
      authors: "…",
      venue: "Journal",
      year: "202X",
      tags: ["mechanism", "ankle"],
      rating: 3,
      status: "略读",
      takeaways: ["差动并联与串联脚踝的控制差异", "力矩映射在阻抗控制中的角色"],
      notes: "与 ankle_transmission 实现对照阅读。",
      link: "",
    },
    {
      id: "p3",
      title: "ONNX / 边缘推理综述或工程博文（示例）",
      authors: "社区",
      venue: "Blog",
      year: "202X",
      tags: ["deploy", "inference"],
      rating: 3,
      status: "笔记",
      takeaways: ["实时环与策略频率解耦", "观测 history 缓冲布局"],
      notes: "服务于真机 50Hz 策略 / 1kHz 控制分层。",
      link: "",
    },
  ],

  opensource: [
    {
      name: "Fortuna-zhizhi.github.io",
      desc: "本求职博客源码（HTML/CSS/JS）。",
      lang: "JavaScript",
      stars: 0,
      url: "https://github.com/Fortuna-zhihzhi/Fortuna-zhizhi.github.io",
      topics: ["portfolio", "github-pages", "pixel-ui"],
    },
    {
      name: "（示例）你 fork / 贡献的仓库",
      desc: "替换为真实开源贡献：PR 链接、issue、文档补丁均可。",
      lang: "C++",
      stars: 0,
      url: "https://github.com/Fortuna-zhihzhi",
      topics: ["opensource", "contribution"],
    },
  ],

  activities: [
    { icon: "spark", text: "更新了 robot_infer 真机配置笔记", time: "2d" },
    { icon: "blob", text: "新增并联踝校验日志", time: "5d" },
    { icon: "scroll", text: "精读一篇 locomotion 论文", time: "1w" },
    { icon: "leaf", text: "上线像素风求职博客", time: "now" },
  ],

  /** 简易贡献热力图种子（0–4），52 周 × 7 天 */
  contributionSeed: 42,
};
