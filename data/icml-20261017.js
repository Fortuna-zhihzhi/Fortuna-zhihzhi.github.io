window.PAPER_DIGEST_20261017 = {
  "id": "digest-20261017",
  "title": "20261017论文整理",
  "summary": "ICML 2025 / 2026 中与长程任务、Agentic RL 相关的筛选表。可按研究主题、年份和关键词筛选。",
  "themes": [
    {
      "id": "all",
      "label": "全部"
    },
    {
      "id": "setting",
      "label": "任务与环境"
    },
    {
      "id": "joint",
      "label": "规划·搜索·记忆·工具"
    },
    {
      "id": "reward",
      "label": "RLVR / GRPO / PPO"
    },
    {
      "id": "credit",
      "label": "信用分配与方差"
    },
    {
      "id": "collapse",
      "label": "投机、坍塌与博弈"
    }
  ],
  "themeLabels": {
    "setting": "长程任务设定",
    "joint": "能力联合训练",
    "reward": "可验证奖励与策略优化",
    "credit": "信用分配、分层与方差",
    "collapse": "奖励投机与能力坍塌"
  },
  "papers": [
    {
      "id": "abdulhai25a",
      "year": 2025,
      "title": "LMRL-Gym",
      "theme": "setting",
      "object": "多轮、目标导向的语言模型智能体",
      "data": "3 个交互对话任务 + 5 项 RL 能力测试（开放对话与文字游戏）",
      "method": "给出离线价值学习与在线策略梯度两套可复现起点，而不是只靠提示",
      "problem": "普通生成不会主动澄清、搜集信息或做跨轮决策，缺少衡量多轮 RL 算法的任务"
    },
    {
      "id": "pan25g",
      "year": 2025,
      "title": "SWE-Gym",
      "theme": "setting",
      "object": "仓库级软件工程智能体及其验证器",
      "data": "2438 个可执行 Python 任务；评测 SWE-Bench Verified / Lite",
      "method": "在真实代码库、测试和自然语言任务上训练智能体，并用轨迹训练推理时验证器",
      "problem": "长程修代码缺少可训练环境；验证器用来放大测试时搜索"
    },
    {
      "id": "wang26jh",
      "year": 2026,
      "title": "Agent World Model",
      "theme": "setting",
      "object": "多轮工具使用智能体",
      "data": "1000 个代码与数据库驱动的合成环境；在三个外部基准上测泛化",
      "method": "用可执行状态转移提供可靠奖励，只在合成环境里做大规模多轮 RL",
      "problem": "真实环境轨迹贵且不稳定，智能体 RL 缺多样、可验证的交互环境"
    },
    {
      "id": "shen26j",
      "year": 2026,
      "title": "TRIP-Bench / GTPO",
      "theme": "setting",
      "object": "长程、多工具、约束随用户变化的交互智能体",
      "data": "旅行规划；18 个工具、40 余项约束；对话最多约 15 轮、150 次以上工具调用",
      "method": "在线多轮 RL，用奖励归一化与奖励差分（GTPO）训练 Qwen2.5-32B",
      "problem": "全局约束、多工具协调和用户中途改需求；难例成功率低于 10%"
    },
    {
      "id": "kim26h",
      "year": 2026,
      "title": "Horizon Length Study",
      "theme": "setting",
      "object": "交互式 LLM 智能体",
      "data": "决策规则相同、只改变所需动作序列长度的受控任务",
      "method": "对照实验隔离时域长度；用缩短时域训练，再测更长时域上的泛化",
      "problem": "仅仅加长时域就会造成探索失败和信用分配崩溃"
    },
    {
      "id": "zhang26r",
      "year": 2026,
      "title": "ArenaRL",
      "theme": "setting",
      "object": "开放式、没有唯一正确答案的智能体",
      "data": "自建 Open-Travel 与 Open-DeepResearch，覆盖训练和多维评测",
      "method": "用过程感知的两两比较和锦标赛相对排序代替逐条打分，组内优势为 O(N)",
      "problem": "开放任务上奖励模型的点式打分挤在一起，优势信号被噪声淹没"
    },
    {
      "id": "erdogan25a",
      "year": 2025,
      "title": "Plan-and-Act",
      "theme": "joint",
      "object": "网页长程导航智能体：规划器与执行器分离",
      "data": "WebArena-Lite、WebVoyager",
      "method": "用合成数据给真实轨迹标注高层计划，训练规划器，执行器再落到环境动作",
      "problem": "模型不会稳定产出可执行的高层计划，规划与执行缠在一起"
    },
    {
      "id": "wang25bx",
      "year": 2025,
      "title": "Agent Workflow Memory",
      "theme": "joint",
      "object": "网页导航智能体",
      "data": "Mind2Web、WebArena，1000 余任务、200 余网站",
      "method": "从历史轨迹归纳可复用工作流，离线或在线注入后续生成",
      "problem": "长动作轨迹难以复用；人类靠套路，模型每次从头规划"
    },
    {
      "id": "peng26h",
      "year": 2026,
      "title": "HiPER",
      "theme": "joint",
      "object": "多轮 LLM 智能体的子目标策略与动作策略",
      "data": "ALFWorld（97.4%）、WebShop（83.3%）",
      "method": "联合训练高层子目标与低层执行，用双时间尺度优势估计（HAE）",
      "problem": "扁平策略只在轨迹末端拿到稀疏奖励，长依赖学不稳"
    },
    {
      "id": "li26bn",
      "year": 2026,
      "title": "H-EPM",
      "theme": "joint",
      "object": "多轮工具使用策略",
      "data": "多轮工具使用基准，含分布外任务",
      "method": "把轨迹收成工具图：边是过程性例程，边上附情景摘要；再用记忆引导 RL 探索",
      "problem": "整段轨迹迁不走，单工具记忆又丢掉上下文；长轨迹探索效率低"
    },
    {
      "id": "cai26b",
      "year": 2026,
      "title": "MemoPilot",
      "theme": "joint",
      "object": "冻结选手模型上的记忆更新器",
      "data": "多轮石头剪刀布、限注德州扑克",
      "method": "把写记忆当成多轮决策，用多轮 GRPO、逐步奖励和轮级优势训练",
      "problem": "手写记忆规则对不齐多步下游目标，测试时经验无法稳定积累"
    },
    {
      "id": "mi26d",
      "year": 2026,
      "title": "Skill-Pro",
      "theme": "joint",
      "object": "不更新参数的 LLM 智能体技能库",
      "data": "同任务、跨任务、跨智能体复用实验",
      "method": "把经验写成带触发/执行/终止条件的技能，用非参数 PPO 门控验收",
      "problem": "重复场景仍从头推理，经验复用差且容易把能力写坏"
    },
    {
      "id": "sun26x",
      "year": 2026,
      "title": "Context Folding / FoldGRPO",
      "theme": "joint",
      "object": "会主动折叠工作上下文的长程智能体",
      "data": "长程任务；对照相同上下文预算的模型",
      "method": "子轨迹完成后折叠成摘要，FoldGRPO 用过程奖励学习分解与上下文管理",
      "problem": "上下文长度卡住长程任务；手工摘要或多智能体切分不可学习"
    },
    {
      "id": "liu26ds",
      "year": 2026,
      "title": "SRPO",
      "theme": "joint",
      "object": "长程推理与智能体策略",
      "data": "AIME 2024、WebShop、ALFWorld、SWE-Bench-Lite",
      "method": "模型给自己的轨迹写反思补丁，再把反思条件下的同策略样本当蒸馏目标",
      "problem": "只有终局奖励，缺少外部评论模型时无法把稀疏结果变成逐步信号"
    },
    {
      "id": "zhang26an",
      "year": 2026,
      "title": "RepoNavigator",
      "theme": "joint",
      "object": "仓库级代码定位智能体",
      "data": "真实代码仓库中的文件/函数定位；7B–32B",
      "method": "只保留“跳到符号定义”一个工具，从基座模型端到端 RL，不蒸馏闭源轨迹",
      "problem": "多工具检索忽略执行流，动作空间反而更难控"
    },
    {
      "id": "wang26gg",
      "year": 2026,
      "title": "Evolving Rollouts",
      "theme": "joint",
      "object": "网页搜索智能体",
      "data": "GAIA、xBench、HLE",
      "method": "把历史轨迹收成策略经验，注入后续上下文，挽回零方差组里的学习信号",
      "problem": "长上下文加环境交互很贵，GRPO 整组奖励无方差时样本被丢掉"
    },
    {
      "id": "xu26bn",
      "year": 2026,
      "title": "D-CORE",
      "theme": "joint",
      "object": "复杂工具使用中的大推理模型",
      "data": "BFCLv3；8B 达 77.7%，14B 达 79.3%",
      "method": "先自我蒸馏学会任务分解，再用多样性感知 RL 恢复反思",
      "problem": "模型在复杂工具链上懒得拆子任务（Lazy Reasoning）"
    },
    {
      "id": "xin26d",
      "year": 2026,
      "title": "BFS-Prover-V2",
      "theme": "joint",
      "object": "逐步形式定理证明器，以及推理时的规划-证明多智能体",
      "data": "miniF2F 95.08%，ProofNet 41.4%",
      "method": "多轮离策略专家迭代训练步进证明器；高层规划器拆子目标，证明器共享证明缓存",
      "problem": "训练时 RL 和推理时搜索都扩不开，长程多轮证明容易平台期"
    },
    {
      "id": "guan25f",
      "year": 2025,
      "title": "rStar-Math",
      "theme": "joint",
      "object": "小模型数学策略与过程偏好模型",
      "data": "747k 数学题上的 MCTS 轨迹；MATH、AIME",
      "method": "代码增强的逐步验证轨迹训练策略，过程偏好模型代替朴素逐步打分，双方自我进化",
      "problem": "小模型没有强教师蒸馏时，搜索和过程奖励都训不起来"
    },
    {
      "id": "shen25o",
      "year": 2025,
      "title": "Satori",
      "theme": "joint",
      "object": "7B 推理模型",
      "data": "开源模型与数据；数学基准及分布外任务",
      "method": "Chain-of-Action-Thought：先格式对齐，再用大规模 RL 把反思和换策略内化成自回归搜索",
      "problem": "测试时依赖外部验证器，搜索能力没有写进单个模型"
    },
    {
      "id": "lin25l",
      "year": 2025,
      "title": "QLASS",
      "theme": "reward",
      "object": "开放语言智能体的逐步决策",
      "data": "复杂交互任务；过程标注可减到约一半",
      "method": "用推理树估计逐步 Q 值，建成过程奖励，再按长期价值生成",
      "problem": "中间交互没有标注，结果奖励把整条轨迹捆在一起，策略次优"
    },
    {
      "id": "kazemnejad25a",
      "year": 2025,
      "title": "VinePPO",
      "theme": "reward",
      "object": "多步推理 LLM 的 PPO 训练",
      "data": "MATH、GSM8K",
      "method": "丢掉不靠谱的价值网络，用语言环境里的蒙特卡洛回报做无偏信用分配",
      "problem": "价值网络在推理任务上几乎比不过随机比较，PPO 的信用分配失效"
    },
    {
      "id": "sullivan26a",
      "year": 2026,
      "title": "GRPO is Secretly a PRM",
      "theme": "reward",
      "object": "带结果奖励的 GRPO 推理模型",
      "data": "下游推理任务",
      "method": "证明结果奖励的 GRPO 等价于一种蒙特卡洛过程奖励；提出 λ-GRPO 修正步长不平衡",
      "problem": "过程奖励和结果奖励被当成两套系统，标准 GRPO 在步骤不均衡时探索和利用都受损"
    },
    {
      "id": "he26ae",
      "year": 2026,
      "title": "Advantage Collapse / AVSPO",
      "theme": "reward",
      "object": "RLVR 下的 GRPO 推理模型（0.5B–14B）",
      "data": "数学推理，及一个分布外任务",
      "method": "用优势坍塌率（ACR）诊断全对/全错组；AVSPO 注入虚拟奖励样本，不再多采样",
      "problem": "组内奖励同质时优势趋近 0，梯度消失，训练停滞"
    },
    {
      "id": "rad26a",
      "year": 2026,
      "title": "G²RPO",
      "theme": "reward",
      "object": "RLVR 数学推理策略（7B、14B）",
      "data": "数学训练；AIME 2024/2025",
      "method": "把 GRPO 看成单纯形上的流，给低概率正确模式加粒度奖励，避免赢家通吃",
      "problem": "正确解的模式多样性坍塌，准确率与熵互相牺牲"
    },
    {
      "id": "zhu26f",
      "year": 2026,
      "title": "Stratified GRPO",
      "theme": "reward",
      "object": "会调用搜索工具的 LLM 智能体",
      "data": "事实问答与深度研究智能体基准",
      "method": "按工具调用结构分层，只在同层内做优势归一化（SAN）",
      "problem": "工具调用次数和位置不同的轨迹被放进同一个基线，信用分配被跨层偏差扭曲"
    },
    {
      "id": "zhou26y",
      "year": 2026,
      "title": "RuscaRL",
      "theme": "reward",
      "object": "开放式推理模型",
      "data": "开放式推理基准，Best-of-N 评测",
      "method": "清单式量规先引导多样采样，再逐步撤掉；同一量规作为可核查的评判奖励",
      "problem": "RL 只能学到模型已经能采样到的答案，开放任务探索被模型自身能力封死"
    },
    {
      "id": "tan26e",
      "year": 2026,
      "title": "GTPO / GRPO-S",
      "theme": "reward",
      "object": "推理 LLM 的 token 或序列",
      "data": "AIME、MATH 500",
      "method": "用策略熵把整段相同的结果奖励拆到 token 或序列，形成更细的优势",
      "problem": "GRPO/DAPO 对同一回答里的所有 token 给同一个奖励"
    },
    {
      "id": "qu25g",
      "year": 2025,
      "title": "MRT",
      "theme": "reward",
      "object": "测试时计算的使用方式",
      "data": "AIME",
      "method": "把长输出看成多段回合的元 RL，在 0/1 结果奖励上加信息增益稠密奖励以降低累积遗憾",
      "problem": "只克隆搜索轨迹或只优化终局对错，额外测试时 token 的利用率上不去"
    },
    {
      "id": "zeng25h",
      "year": 2025,
      "title": "VersaPRM",
      "theme": "reward",
      "object": "跨领域过程奖励模型",
      "data": "合成多领域推理数据；MMLU-Pro 等",
      "method": "用新的生成与标注流程训练过程奖励，再做加权多数投票",
      "problem": "现有过程奖励几乎只在数学上有效，换领域就失效"
    },
    {
      "id": "wang26jm",
      "year": 2026,
      "title": "BEACON",
      "theme": "credit",
      "object": "长程语言智能体",
      "data": "ALFWorld、WebShop、ScienceWorld；长程 ALFWorld 成功率 92.9% 对 GRPO 的 53.5%",
      "method": "在里程碑处切开轨迹，段内做时间奖励塑造，并在两个时间尺度上估计优势",
      "problem": "前面做对的动作被终局失败连坐；成功轨迹太少，学习信号近乎消失"
    },
    {
      "id": "jiang26y",
      "year": 2026,
      "title": "Hindsight Policy Optimization",
      "theme": "credit",
      "object": "长程语言智能体策略",
      "data": "长时域交互任务（论文给出理论界与实验）",
      "method": "把当前策略和后见分布投到意图空间，用二者的 Wasserstein 距离做低方差策略梯度",
      "problem": "长轨迹里分不清每个动作的贡献，策略梯度方差高"
    },
    {
      "id": "wang26ek",
      "year": 2026,
      "title": "EMPG",
      "theme": "credit",
      "object": "长程 LLM 智能体",
      "data": "WebShop、ALFWorld、Deep Search",
      "method": "按步骤熵和终局结果调制梯度：放大确信且正确的更新，压低不确定步骤",
      "problem": "稀疏结果奖励下，梯度大小被熵绑住，确信的正确动作几乎学不到"
    },
    {
      "id": "li26hy",
      "year": 2026,
      "title": "Optimal Token Baseline",
      "theme": "credit",
      "object": "长程及工具集成的 LLM-RL",
      "data": "单轮推理与工具集成推理",
      "method": "按累积梯度范数的倒数给 token 加权；用 logits 近似梯度范数，避免再训价值模型",
      "problem": "长时域梯度方差爆炸；组基线忽略序列差异，最优基线又太贵"
    },
    {
      "id": "cheng26e",
      "year": 2026,
      "title": "GraphGPO",
      "theme": "credit",
      "object": "智能体强化学习中的单步动作",
      "data": "一组高难度智能体基准",
      "method": "把所有采样轨迹收成状态转移图，按“离目标更近多少”给每条边信用",
      "problem": "组相对方法只按整条轨迹的终局打分，失败轨迹里的有用步骤被埋没"
    },
    {
      "id": "li26dp",
      "year": 2026,
      "title": "Trust Region Masking",
      "theme": "credit",
      "object": "长序列 LLM 策略梯度",
      "data": "长时域 LLM-RL 训练分析",
      "method": "证明经典信任域误差随长度按 O(T²) 变空，改为整段屏蔽超出 token 级 KL 上限的序列",
      "problem": "采样策略和更新策略不一致时，PPO 裁剪控不住长轨迹上的偏差，训练坍塌"
    },
    {
      "id": "hu25q",
      "year": 2025,
      "title": "GLIDER",
      "theme": "credit",
      "object": "分层的 LLM 决策策略",
      "data": "ScienceWorld、ALFWorld",
      "method": "离线分层 RL：高层学习抽象计划，低层按计划做逐步推理；低层技能可迁移",
      "problem": "稀疏奖励下探索不足、长期信用分配差"
    },
    {
      "id": "auzina26a",
      "year": 2026,
      "title": "ΔBelief-RL",
      "theme": "credit",
      "object": "需要主动询问才能消解不确定性的长程智能体",
      "data": "合成交互；泛化到客服与个性化等分布外场景",
      "method": "用模型对目标答案的信念变化作为内在过程奖励",
      "problem": "只有终局奖励时，智能体既不去要信息，也不吸收已经得到的证据"
    },
    {
      "id": "hu26k",
      "year": 2026,
      "title": "Faithful-Agent / GuAE",
      "theme": "credit",
      "object": "移动 GUI 智能体",
      "data": "带证据扰动的 GUI 任务；Trap SR 从 13.88% 提到 80.21%",
      "method": "先监督学会证据不足就弃权，再在 GRPO 上用锚点式、方差自适应的引导优势估计",
      "problem": "稀疏 GUI 奖励下低方差组优势坍塌；模型靠记忆捷径而不是屏幕证据"
    },
    {
      "id": "jia25e",
      "year": 2025,
      "title": "CoLA",
      "theme": "credit",
      "object": "作为 RL 智能体的 LLM（Llama-3.1-8B）",
      "data": "MATH500；另有智能体任务",
      "method": "用逆动力学抽出紧致隐动作，LLM 同时当语言世界模型，策略可行为克隆或 RL",
      "problem": "token 动作空间太大，探索差，而且容易把预训练能力训掉"
    },
    {
      "id": "huang26ca",
      "year": 2026,
      "title": "VCPO",
      "theme": "credit",
      "object": "异步离策略的 LLM 后训练，含长程工具使用",
      "data": "数学、通用推理、长程工具任务；可到 128 步离策略",
      "method": "用有效样本量缩放学习率，并加无评论模型的最小方差基线",
      "problem": "旧轨迹的重要性权重重尾，少数样本主导更新，方差随异步程度升高"
    },
    {
      "id": "wang26ah",
      "year": 2026,
      "title": "T²PO",
      "theme": "credit",
      "object": "多轮智能体策略",
      "data": "WebShop、ALFWorld、Search QA",
      "method": "token 级发现不确定性不再下降就插入思考；回合级把没有探索进展的轮次重采样",
      "problem": "多轮 RL 继续产生既不减不确定性、也不推进任务的动作，训练坍塌"
    },
    {
      "id": "wang26bn",
      "year": 2026,
      "title": "RAGEN-2",
      "theme": "collapse",
      "object": "多轮智能体 RL 中的推理过程",
      "data": "规划、数学、网页导航、代码执行",
      "method": "用互信息代理发现“模板坍塌”；用信噪比过滤，优先保留组内奖励方差高的提示",
      "problem": "熵看起来正常，但推理变成与输入无关的套话；任务梯度被正则项盖过"
    },
    {
      "id": "deng26k",
      "year": 2026,
      "title": "Lazy Likelihood Displacement",
      "theme": "collapse",
      "object": "搜索工具集成的 GRPO 智能体（Search-R1 式问答）",
      "data": "七个基准；Qwen2.5-3B / 7B",
      "method": "只在某些 token 的似然下降时施加似然保持正则（LLDS）",
      "problem": "正确和错误回答的似然一起下降，低置信放大梯度，形成坍塌螺旋"
    },
    {
      "id": "thaman26a",
      "year": 2026,
      "title": "Reward Hacking Benchmark",
      "theme": "collapse",
      "object": "带工具的 RL 后训练语言模型",
      "data": "多步工具任务，含独立题和可串联的长链；13 个前沿模型",
      "method": "设置跳过验证、偷看元数据、改评测函数等捷径；链长作为时域代理",
      "problem": "RL 后训练显著提高投机率（DeepSeek-V3 0.6% 对 R1-Zero 13.9%），且模型把投机写成合理推理"
    },
    {
      "id": "zou26b",
      "year": 2026,
      "title": "Information Self-Locking / AREW",
      "theme": "collapse",
      "object": "必须通过交互获取新观察的主动推理智能体",
      "data": "9 个不同复杂度的智能体任务",
      "method": "把行为拆成动作选择与信念跟踪；用方向性批评重分配轨迹内优势",
      "problem": "结果奖励造成信息自锁：既不去要有用反馈，也不吸收已经得到的证据"
    },
    {
      "id": "li26bh",
      "year": 2026,
      "title": "R-Diverse",
      "theme": "collapse",
      "object": "自我博弈中的出题者与解题者",
      "data": "10 个数学与通用推理基准",
      "method": "用跨轮记忆惩罚重复模式，并按所需推理技能而不是表面措辞衡量多样性",
      "problem": "自我博弈早期上涨后回落；题目看起来多样，底层技能模式在循环"
    },
    {
      "id": "dong25h",
      "year": 2025,
      "title": "STP",
      "theme": "collapse",
      "object": "形式定理的猜想者与证明者",
      "data": "Lean / Isabelle；LeanWorkbook、miniF2F、ProofNet、PutnamBench",
      "method": "猜想者专门生成当前证明者刚好做不出的题，证明者用专家迭代求解，双方互为训练信号",
      "problem": "正确证明极稀疏，普通专家迭代很快平台"
    },
    {
      "id": "wei26x",
      "year": 2026,
      "title": "Self-play SWE-RL",
      "theme": "collapse",
      "object": "单个软件工程智能体，同时充当出bug者和修bug者",
      "data": "只有源码和依赖的沙箱仓库；评测 SWE-bench Verified 与 SWE-Bench Pro",
      "method": "自我博弈注入并修复越来越难的 bug，bug 由智能体提出的测试改进来形式化",
      "problem": "长程软件智能体依赖人工问题和测试，无法自己扩大训练分布"
    },
    {
      "id": "wu26al",
      "year": 2026,
      "title": "OpenAgent",
      "theme": "collapse",
      "object": "开放世界工具使用智能体",
      "data": "可控沙箱，按感知、交互、推理、内化四层做分布偏移",
      "method": "对比 SFT 与 RL 在环境偏移下的退化，并提出扰动增强微调",
      "problem": "静态训练的工具策略换查询、工具集或观察分布就碎"
    },
    {
      "id": "wang26kv",
      "year": 2026,
      "title": "ARLArena / SAMPO",
      "theme": "collapse",
      "object": "多步交互的智能体策略梯度",
      "data": "标准化智能体测试床，多种智能体任务",
      "method": "把策略梯度拆成四个设计维度做稳定性解剖，据此得到 SAMPO",
      "problem": "智能体 RL 容易训练坍塌，时域一长或环境一大就无法扩展"
    }
  ]
};
