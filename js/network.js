// 知识网络数据
const knowledgeData = {
    nodes: [
        // 核心著作节点
        { id: "本草纲目", type: "book", category: "医学", size: 40 },
        { id: "天工开物", type: "book", category: "工艺", size: 40 },
        { id: "梦溪笔谈", type: "book", category: "综合", size: 40 },
        { id: "齐民要术", type: "book", category: "农业", size: 40 },
        { id: "农政全书", type: "book", category: "农业", size: 40 },
        { id: "营造法式", type: "book", category: "建筑", size: 40 },
        { id: "授时历", type: "book", category: "天文", size: 40 },
        { id: "黄帝内经", type: "book", category: "医学", size: 40 },
        { id: "九章算术", type: "book", category: "数学", size: 40 },
        
        // 本草纲目相关主题节点
        { id: "药材分类", type: "topic", category: "医学", size: 30, book: "本草纲目" },
        { id: "炮制方法", type: "topic", category: "医学", size: 30, book: "本草纲目" },
        { id: "药性理论", type: "topic", category: "医学", size: 30, book: "本草纲目" },
        { id: "方剂配伍", type: "topic", category: "医学", size: 30, book: "本草纲目" },
        
        // 天工开物相关主题节点
        { id: "制药工艺", type: "topic", category: "工艺", size: 30, book: "天工开物" },
        { id: "冶炼技术", type: "topic", category: "工艺", size: 30, book: "天工开物" },
        { id: "农业技术", type: "topic", category: "工艺", size: 30, book: "天工开物" },
        { id: "纺织染色", type: "topic", category: "工艺", size: 30, book: "天工开物" },
        
        // 梦溪笔谈相关主题节点
        { id: "天文观测", type: "topic", category: "综合", size: 30, book: "梦溪笔谈" },
        { id: "地理现象", type: "topic", category: "综合", size: 30, book: "梦溪笔谈" },
        { id: "物理发现", type: "topic", category: "综合", size: 30, book: "梦溪笔谈" },
        { id: "数学原理", type: "topic", category: "综合", size: 30, book: "梦溪笔谈" },
        
        // 齐民要术相关主题节点
        { id: "农作物栽培", type: "topic", category: "农业", size: 30, book: "齐民要术" },
        { id: "土壤改良", type: "topic", category: "农业", size: 30, book: "齐民要术" },
        { id: "农具使用", type: "topic", category: "农业", size: 30, book: "齐民要术" },
        
        // 农政全书相关主题节点
        { id: "农业管理", type: "topic", category: "农业", size: 30, book: "农政全书" },
        { id: "水利工程", type: "topic", category: "农业", size: 30, book: "农政全书" },
        { id: "农事历法", type: "topic", category: "农业", size: 30, book: "农政全书" },
        
        // 营造法式相关主题节点
        { id: "建筑规范", type: "topic", category: "建筑", size: 30, book: "营造法式" },
        { id: "木作技艺", type: "topic", category: "建筑", size: 30, book: "营造法式" },
        { id: "尺度标准", type: "topic", category: "建筑", size: 30, book: "营造法式" },
        
        // 授时历相关主题节点
        { id: "历法计算", type: "topic", category: "天文", size: 30, book: "授时历" },
        { id: "天体运动", type: "topic", category: "天文", size: 30, book: "授时历" },
        { id: "时刻测定", type: "topic", category: "天文", size: 30, book: "授时历" },
        
        // 黄帝内经相关主题节点
        { id: "阴阳五行", type: "topic", category: "医学", size: 30, book: "黄帝内经" },
        { id: "经络学说", type: "topic", category: "医学", size: 30, book: "黄帝内经" },
        { id: "脏腑理论", type: "topic", category: "医学", size: 30, book: "黄帝内经" },
        
        // 九章算术相关主题节点
        { id: "面积计算", type: "topic", category: "数学", size: 30, book: "九章算术" },
        { id: "比例换算", type: "topic", category: "数学", size: 30, book: "九章算术" },
        { id: "方程求解", type: "topic", category: "数学", size: 30, book: "九章算术" }
    ],
    links: [
        // 本草纲目内部关联
        { source: "本草纲目", target: "药材分类", strength: 1 },
        { source: "本草纲目", target: "炮制方法", strength: 1 },
        { source: "本草纲目", target: "药性理论", strength: 1 },
        { source: "本草纲目", target: "方剂配伍", strength: 1 },
        { source: "药材分类", target: "炮制方法", strength: 0.5 },
        { source: "药性理论", target: "方剂配伍", strength: 0.5 },
        
        // 天工开物内部关联
        { source: "天工开物", target: "制药工艺", strength: 1 },
        { source: "天工开物", target: "冶炼技术", strength: 1 },
        { source: "天工开物", target: "农业技术", strength: 1 },
        { source: "天工开物", target: "纺织染色", strength: 1 },
        { source: "制药工艺", target: "冶炼技术", strength: 0.5 },
        { source: "农业技术", target: "纺织染色", strength: 0.5 },
        
        // 梦溪笔谈内部关联
        { source: "梦溪笔谈", target: "天文观测", strength: 1 },
        { source: "梦溪笔谈", target: "地理现象", strength: 1 },
        { source: "梦溪笔谈", target: "物理发现", strength: 1 },
        { source: "梦溪笔谈", target: "数学原理", strength: 1 },
        { source: "天文观测", target: "物理发现", strength: 0.5 },
        { source: "地理现象", target: "数学原理", strength: 0.5 },
        
        // 齐民要术内部关联
        { source: "齐民要术", target: "农作物栽培", strength: 1 },
        { source: "齐民要术", target: "土壤改良", strength: 1 },
        { source: "齐民要术", target: "农具使用", strength: 1 },
        { source: "农作物栽培", target: "土壤改良", strength: 0.5 },
        { source: "土壤改良", target: "农具使用", strength: 0.5 },
        
        // 农政全书内部关联
        { source: "农政全书", target: "农业管理", strength: 1 },
        { source: "农政全书", target: "水利工程", strength: 1 },
        { source: "农政全书", target: "农事历法", strength: 1 },
        { source: "农业管理", target: "水利工程", strength: 0.5 },
        { source: "水利工程", target: "农事历法", strength: 0.5 },
        
        // 营造法式内部关联
        { source: "营造法式", target: "建筑规范", strength: 1 },
        { source: "营造法式", target: "木作技艺", strength: 1 },
        { source: "营造法式", target: "尺度标准", strength: 1 },
        { source: "建筑规范", target: "木作技艺", strength: 0.5 },
        { source: "尺度标准", target: "建筑规范", strength: 0.5 },
        
        // 授时历内部关联
        { source: "授时历", target: "历法计算", strength: 1 },
        { source: "授时历", target: "天体运动", strength: 1 },
        { source: "授时历", target: "时刻测定", strength: 1 },
        { source: "历法计算", target: "天体运动", strength: 0.5 },
        { source: "时刻测定", target: "历法计算", strength: 0.5 },
        
        // 黄帝内经内部关联
        { source: "黄帝内经", target: "阴阳五行", strength: 1 },
        { source: "黄帝内经", target: "经络学说", strength: 1 },
        { source: "黄帝内经", target: "脏腑理论", strength: 1 },
        { source: "阴阳五行", target: "经络学说", strength: 0.5 },
        { source: "脏腑理论", target: "经络学说", strength: 0.5 },
        
        // 九章算术内部关联
        { source: "九章算术", target: "面积计算", strength: 1 },
        { source: "九章算术", target: "比例换算", strength: 1 },
        { source: "九章算术", target: "方程求解", strength: 1 },
        { source: "面积计算", target: "比例换算", strength: 0.5 },
        { source: "方程求解", target: "比例换算", strength: 0.5 },
        
        // 跨书关联
        { source: "药材分类", target: "制药工艺", strength: 0.8 },
        { source: "炮制方法", target: "冶炼技术", strength: 0.6 },
        { source: "农业技术", target: "药材分类", strength: 0.7 },
        { source: "物理发现", target: "冶炼技术", strength: 0.5 },
        { source: "天文观测", target: "数学原理", strength: 0.6 },
        { source: "农作物栽培", target: "农业技术", strength: 0.8 },
        { source: "农具使用", target: "农业管理", strength: 0.7 },
        { source: "水利工程", target: "土壤改良", strength: 0.6 },
        { source: "尺度标准", target: "面积计算", strength: 0.7 },
        { source: "天体运动", target: "数学原理", strength: 0.6 },
        { source: "阴阳五行", target: "药性理论", strength: 0.8 },
        { source: "经络学说", target: "方剂配伍", strength: 0.7 }
    ]
};

// 节点详细信息
const nodeDetails = {
    "本草纲目": {
        title: "《本草纲目》",
        author: "李时珍",
        year: "1578年",
        dynasty: "明朝",
        category: "医学",
        description: "是中国最完备的药物学著作，收录药物1892种，记载方剂11096个。全书分为16部，包括水、火、土、金石、草、谷、菜、果、木等。",
        significance: "被誉为'东方医学巨典'，对世界医药学发展有重大影响。",
        influence: "被译为多国文字，对世界传统医学研究有深远影响。",
        //image: "bencao.jpg"
    },
    "药材分类": {
        title: "药材分类体系",
        category: "医学",
        book: "本草纲目",
        description: "《本草纲目》创立了独特的药材分类体系，将药物分为水、火、土、金石、草、谷、菜、果、木等16个部类，建立了系统的药物分类方法。",
        significance: "这一分类体系突破了传统本草书籍的分类方法，建立了更科学的药物分类标准。",
        influence: "影响了后世中医药学的分类体系，为现代中药学科的发展奠定了基础。"
    },
    "炮制方法": {
        title: "药材炮制方法",
        category: "医学",
        book: "本草纲目",
        description: "详细记载了各种中药材的炮制方法，包括炮、炙、煅、制等多种技术，确保药材的有效性和安全性。",
        significance: "系统总结了中药炮制的理论和技术，是中药炮制学的重要参考。",
        influence: "为现代中药炮制工艺的发展提供了重要依据，推动了中药质量标准的建立。"
    },
    "药性理论": {
        title: "药性理论体系",
        category: "医学",
        book: "本草纲目",
        description: "阐述了药物的四气五味、升降浮沉等性质，以及药物的归经、毒性等特征，构建了完整的药性理论体系。",
        significance: "深化了中医药理论，为药物临床应用提供了理论指导。",
        influence: "对中医药理论的发展和临床用药的指导具有深远影响。"
    },
    "方剂配伍": {
        title: "方剂配伍原则",
        category: "医学",
        book: "本草纲目",
        description: "记载了大量方剂及其配伍原则，包括七情配伍、君臣佐使等理论，体现了中医用药的整体观念。",
        significance: "总结了中医方剂配伍的规律和原则，为临床用药提供了重要参考。",
        influence: "对中医临床处方用药和新药研发都产生了重要影响。"
    },
    "天工开物": {
        title: "《天工开物》",
        author: "宋应星",
        year: "1637年",
        dynasty: "明朝",
        category: "工艺",
        description: "是中国古代一部综合性的科学技术著作，详细记述了农业和手工业的生产技术，被誉为'中国17世纪的工艺百科全书'。",
        significance: "是世界上第一部关于农业和手工业生产的综合性著作。",
        influence: "对了解中国古代工艺技术发展具有重要价值。",
        //image: "tiangong.jpg"
    },
    "制药工艺": {
        title: "传统制药工艺",
        category: "工艺",
        book: "天工开物",
        description: "详细记载了中国古代制药工艺，包括药材采集、加工、炮制等全过程，展示了完整的传统制药技术体系。",
        significance: "是中国古代制药工艺的重要记录，体现了先民的智慧。",
        influence: "为现代中药工业化生产提供了重要的历史参考。"
    },
    "冶炼技术": {
        title: "金属冶炼技术",
        category: "工艺",
        book: "天工开物",
        description: "记录了金、银、铜、铁等金属的开采、冶炼和加工技术，展示了中国古代冶金工艺的发展水平。",
        significance: "系统记录了中国古代冶金技术，反映了当时的工业发展水平。",
        influence: "对中国冶金工业的发展产生了深远影响。"
    },
    "农业技术": {
        title: "农业生产技术",
        category: "工艺",
        book: "天工开物",
        description: "详述了农作物种植、农具使用、水利灌溉等农业生产技术，体现了中国古代农业的先进性。",
        significance: "全面记录了明代农业生产技术，是重要的农业史料。",
        influence: "对中国传统农业技术的传承和发展有重要作用。"
    },
    "纺织染色": {
        title: "纺织染色工艺",
        category: "工艺",
        book: "天工开物",
        description: "记载了棉、麻、丝、毛等纺织品的加工工艺和染色技术，展示了中国古代纺织业的发达程度。",
        significance: "系统记录了中国传统纺织染色技术，反映了纺织工业的发展水平。",
        influence: "对传统纺织工艺的保护和传承具有重要价值。"
    },
    "梦溪笔谈": {
        title: "《梦溪笔谈》",
        author: "沈括",
        year: "1086年",
        dynasty: "北宋",
        category: "综合",
        description: "是一部记载科学技术的笔记，内容涉及天文、地理、物理、数学等多个领域，展现了宋代科技发展的高度。",
        significance: "是中国古代一部重要的科技著作，记录了大量科学发现。",
        influence: "对中国古代科技史研究具有重要参考价值。",
        //image: "mengxi.jpg"
    },
    "天文观测": {
        title: "天文观测记录",
        category: "综合",
        book: "梦溪笔谈",
        description: "记录了各种天文现象的观测方法和结果，包括日月食、彗星、星象等，体现了宋代天文学的发展水平。",
        significance: "是重要的天文史料，记录了多个重要的天文发现。",
        influence: "对中国古代天文学研究有重要的参考价值。"
    },
    "地理现象": {
        title: "地理现象研究",
        category: "综合",
        book: "梦溪笔谈",
        description: "记载了各种地理现象的观察和研究，包括地形、气候、水文等方面的发现。",
        significance: "为中国古代地理学研究提供了重要资料。",
        influence: "对中国地理学的发展有重要推动作用。"
    },
    "物理发现": {
        title: "物理学发现",
        category: "综合",
        book: "梦溪笔谈",
        description: "记录了多项物理学发现和发明，包括磁性、声学、光学等方面的研究成果。",
        significance: "反映了宋代科学技术的发展水平。",
        influence: "对中国古代物理学研究有重要的历史价值。"
    },
    "数学原理": {
        title: "数学原理探讨",
        category: "综合",
        book: "梦溪笔谈",
        description: "探讨了各种数学原理和应用，包括几何、代数等方面的研究。",
        significance: "展示了宋代数学研究的成就。",
        influence: "对中国数学史研究具有重要价值。"
    },
    "齐民要术": {
        title: "《齐民要术》",
        author: "贾思勰",
        year: "544年",
        dynasty: "北魏",
        category: "农业",
        description: "北魏时期最完整的农书，是中国现存最早的农业百科全书，详细记载了农业生产技术和经验。",
        significance: "是中国现存最早最完整的农书，总结了魏晋南北朝时期的农业成就。",
        influence: "对中国传统农业技术的发展和传播有重要作用。",
        //image: "qimin.jpg"
    },
    "农作物栽培": {
        title: "农作物栽培技术",
        category: "农业",
        book: "齐民要术",
        description: "详细记载了各种农作物的栽培方法，包括水稻、麦类、豆类等作物的种植技术和田间管理方法。",
        significance: "系统总结了魏晋南北朝时期的农作物栽培技术，是重要的农业技术文献。",
        influence: "对中国传统农业技术的发展和传播产生了深远影响。"
    },
    "土壤改良": {
        title: "土壤改良技术",
        category: "农业",
        book: "齐民要术",
        description: "记载了各种土壤改良方法，包括施肥、翻耕、水利等技术，体现了古人对土壤改良的深刻认识。",
        significance: "开创了系统的土壤改良理论，为农业发展提供了重要指导。",
        influence: "对中国传统农业的可持续发展产生了重要影响。"
    },
    "农具使用": {
        title: "农具使用方法",
        category: "农业",
        book: "齐民要术",
        description: "详述了各种农具的使用方法和维护技巧，展示了古代农业机具的发展水平。",
        significance: "记录了魏晋南北朝时期农具发展和使用的重要资料。",
        influence: "为研究中国古代农具发展史提供了重要参考。"
    },
    "农政全书": {
        title: "《农政全书》",
        author: "徐光启",
        year: "1639年",
        dynasty: "明朝",
        category: "农业",
        description: "明代重要的农学著作，总结了中国传统农业技术，并吸收了西方农业科技知识，是一部农业科技巨著。",
        significance: "是中西农业科技交流的重要成果，开创了中西农业技术结合的先河。",
        influence: "推动了中国农业科技的现代化进程。",
        //image: "nongzheng.jpg"
    },
    "农业政策": {
        title: "农业政策制度",
        category: "农业",
        book: "农政全书",
        description: "记载了明代的农业政策和制度，包括土地制度、赋税制度等，反映了农业管理的系统性。",
        significance: "是研究明代农业政策和制度的重要文献。",
        influence: "对中国农业政策的制定和实施有重要的历史借鉴意义。"
    },
    "水利工程": {
        title: "水利工程技术",
        category: "农业",
        book: "农政全书",
        description: "详述了水利工程的修建和管理技术，包括灌溉、排水、防洪等方面的内容。",
        significance: "系统总结了中国古代水利工程技术，体现了水利工程的重要性。",
        influence: "对中国水利工程的发展有重要的指导作用。"
    },
    "农业改革": {
        title: "农业改革措施",
        category: "农业",
        book: "农政全书",
        description: "记录了明代农业改革的措施和方法，包括引进新作物、改进耕作技术等内容。",
        significance: "反映了明代农业改革的创新精神。",
        influence: "对中国农业现代化进程有重要的启示作用。"
    },
    "营造法式": {
        title: "《营造法式》",
        author: "李诫",
        year: "1103年",
        dynasty: "北宋",
        category: "建筑",
        description: "北宋时期官方颁布的建筑技术规范，详细记载了建筑设计、施工标准和木作技艺，是研究中国古代建筑的重要文献。",
        significance: "是中国现存最早的官方建筑技术规范，对古建筑研究具有重要价值。",
        influence: "对中国传统建筑的标准化和规范化产生深远影响。",
        //image: "yingzao.jpg"
    },
    "建筑规范": {
        title: "建筑规范标准",
        category: "建筑",
        book: "营造法式",
        description: "详细规定了建筑设计和施工的标准，包括材料规格、构件尺寸等具体要求。",
        significance: "是中国古代最系统的建筑技术标准，体现了建筑规范化的重要性。",
        influence: "对中国传统建筑的标准化和规范化产生深远影响。"
    },
    "木作技艺": {
        title: "木作工艺技术",
        category: "建筑",
        book: "营造法式",
        description: "记载了木构建筑的制作技艺，包括榫卯结构、木材加工等技术细节。",
        significance: "系统记录了宋代木作技艺，是研究中国传统建筑技术的重要资料。",
        influence: "对中国传统木作技艺的传承和发展具有重要价值。"
    },
    "建筑装饰": {
        title: "建筑装饰艺术",
        category: "建筑",
        book: "营造法式",
        description: "详述了建筑装饰的设计和制作方法，包括彩画、雕刻等艺术形式。",
        significance: "全面记录了宋代建筑装饰艺术，展示了高度的艺术成就。",
        influence: "对中国传统建筑装饰艺术的发展产生重要影响。"
    },
    "授时历": {
        title: "《授时历》",
        author: "郭守敬",
        year: "1281年",
        dynasty: "元朝",
        category: "天文",
        description: "元代最精确的历法，由郭守敬主持编制，在天文观测和历法计算方面都达到了很高的精度。",
        significance: "是中国古代最精确的历法之一，天文计算精度超过当时的欧洲。",
        influence: "对中国和东亚地区的历法发展产生重大影响。",
        //image: "shoushi.jpg"
    },
    "天文观测": {
        title: "天文观测技术",
        category: "天文",
        book: "授时历",
        description: "详述了天文观测的方法和工具，包括各种天文仪器的使用技术。",
        significance: "记录了元代天文观测技术的重要成就。",
        influence: "推动了中国古代天文观测技术的发展。"
    },
    "时间测量": {
        title: "时间测量系统",
        category: "天文",
        book: "授时历",
        description: "建立了精确的时间测量系统，包括昼夜时刻的划分和计量方法。",
        significance: "完善了中国古代的时间测量体系。",
        influence: "对中国传统计时方法的发展有重要贡献。"
    },
    "黄帝内经": {
        title: "《黄帝内经》",
        author: "佚名",
        year: "约前200年",
        dynasty: "战国至秦汉",
        category: "医学",
        description: "中医理论的奠基之作，系统阐述了中医基础理论、诊断方法和治疗原则。",
        significance: "是中医理论体系的开山之作，奠定了中医学的理论基础。",
        influence: "对中国传统医学的发展产生深远影响，至今仍是中医必读经典。",
        //image: "huangdi.jpg"
    },
    "阴阳五行": {
        title: "阴阳五行理论",
        category: "医学",
        book: "黄帝内经",
        description: "阐述了阴阳五行在医学中的应用，建立了中医基础理论体系。",
        significance: "奠定了中医理论的哲学基础。",
        influence: "对中医理论体系的形成有根本性影响。"
    },
    "经络学说": {
        title: "经络学说体系",
        category: "医学",
        book: "黄帝内经",
        description: "详述了人体经络系统的分布和功能，建立了经络理论体系。",
        significance: "是中医经络学说的理论基础。",
        influence: "对中医诊疗方法的发展产生深远影响。"
    },
    "养生理论": {
        title: "养生保健理论",
        category: "医学",
        book: "黄帝内经",
        description: "记载了养生保健的原则和方法，包括起居、饮食、运动等方面的指导。",
        significance: "系统阐述了中医养生理论。",
        influence: "对中国传统养生文化的发展有重要影响。"
    },
    "九章算术": {
        title: "《九章算术》",
        author: "佚名",
        year: "约100年",
        dynasty: "汉朝",
        category: "数学",
        description: "中国古代最重要的数学著作之一，收录了246个数学问题和解法，涵盖了古代数学的主要内容。",
        significance: "是中国古代数学的代表作，对后世数学发展有重要影响。",
        influence: "传播到日本、朝鲜等地，对东亚数学发展有重要贡献。",
        //image: "jiuzhang.jpg"
    },
    "面积计算": {
        title: "面积测算方法",
        category: "数学",
        book: "九章算术",
        description: "记载了各种形状的面积计算方法，建立了系统的测量理论。",
        significance: "是中国古代面积测算的重要理论基础。",
        influence: "对中国数学计量方法的发展有重要贡献。"
    },
    "比例问题": {
        title: "比例问题解法",
        category: "数学",
        book: "九章算术",
        description: "详述了比例问题的解决方法，包括比例分配、盈亏等问题。",
        significance: "建立了系统的比例计算方法。",
        influence: "对中国古代数学教育产生深远影响。"
    },
    "方程求解": {
        title: "方程解法技术",
        category: "数学",
        book: "九章算术",
        description: "记载了各类方程的求解方法，开创了代数学研究的先河。",
        significance: "是中国古代代数学发展的重要成就。",
        influence: "对世界数学发展有重要贡献。"
    }
};

// 知识网络模块
function initNetwork() {
    // 创建布局结构
    const container = d3.select('#network-container');
    container.html('');
    
    // 创建顶部筛选器
    const filterBar = container.append('div')
        .attr('class', 'filter-bar')
        .style('height', '15%')
        .style('padding', '10px')
        .style('display', 'flex')
        .style('justify-content', 'center')
        .style('align-items', 'center')
        .style('flex-wrap', 'wrap');
        
    // 添加筛选按钮
    const books = ['全部', '本草纲目', '天工开物', '梦溪笔谈', '齐民要术', '农政全书', '营造法式', '授时历', '黄帝内经', '九章算术'];
    filterBar.selectAll('.switch-option')
        .data(books)
        .enter()
        .append('div')
        .attr('class', 'switch-option')
        .html(d => `<span>${d}</span>`)
        .style('position', 'relative')
        .style('display', 'flex')
        .style('align-items', 'center')
        .style('justify-content', 'center')
        .style('font-size', '14px')
        .style('width', '80px')
        .style('height', '80px')
        .style('margin', '15px')
        .style('cursor', 'pointer')
        .on('click', filterNetwork);

    // 创建主体容器
    const mainContainer = container.append('div')
        .style('display', 'grid')
        .style('grid-template-columns', '70% 30%')
        .style('height', '80%')
        .style('gap', '20px')
        .style('padding', '20px');

    // 创建图谱容器
    const graphContainer = mainContainer.append('div')
        .style('position', 'relative')
        .style('background', 'rgba(255, 255, 255, 0.9)')
        .style('border-radius', '10px')
        .style('box-shadow', '0 0 10px rgba(0,0,0,0.1)');

    // 创建侧边栏
    const sidebar = mainContainer.append('div')
        .attr('class', 'detail-panel')
        .style('background', 'rgba(255, 255, 255, 0.9)')
        .style('border-radius', '10px')
        .style('padding', '20px')
        .style('overflow-y', 'auto')
        .style('box-shadow', '0 0 10px rgba(0,0,0,0.1)');

    // 设置SVG
    const width = graphContainer.node().getBoundingClientRect().width;
    const height = graphContainer.node().getBoundingClientRect().height;

    const svg = graphContainer.append('svg')
        .attr('width', width)
        .attr('height', height);

    // 创建力导向图
    createForceGraph(svg, width, height, knowledgeData, sidebar);
}

// 创建力导向图
function createForceGraph(svg, width, height, data, sidebar) {
    // 清除之前的内容
    svg.selectAll("*").remove();

    // 创建缩放行为
    const zoom = d3.zoom()
        .scaleExtent([0.5, 3])
        .on('zoom', (event) => {
            container.attr('transform', event.transform);
        });

    svg.call(zoom);

    // 创建一个容器来包含所有元素
    const container = svg.append('g');

    // 添加发光效果
    const defs = container.append('defs');
    const filter = defs.append('filter')
        .attr('id', 'glow');
    
    filter.append('feGaussianBlur')
        .attr('stdDeviation', '3')
        .attr('result', 'coloredBlur');
    
    const feMerge = filter.append('feMerge');
    feMerge.append('feMergeNode')
        .attr('in', 'coloredBlur');
    feMerge.append('feMergeNode')
        .attr('in', 'SourceGraphic');

    // 创建力导向模拟
    const simulation = d3.forceSimulation(data.nodes)
        .force('link', d3.forceLink(data.links)
            .id(d => d.id)
            .distance(d => 180) // 增加连接线的长度
        )
        .force('charge', d3.forceManyBody()
            .strength(d => d.type === 'book' ? -350 : -250) // 调整节点间的斥力
        )
        .force('center', d3.forceCenter(width / 2, height / 2))
        .force('collision', d3.forceCollide().radius(d => d.size * 1.8)) // 增加碰撞半径
        .force('x', d3.forceX(width / 2).strength(0.03))
        .force('y', d3.forceY(height / 2).strength(0.03));

    // 创建连接线
    const link = container.append('g')
        .attr('class', 'links')
        .selectAll('line')
        .data(data.links)
        .enter()
        .append('line')
        .style('stroke', '#999')
        .style('stroke-opacity', d => d.strength)
        .style('stroke-width', d => d.strength * 2);

    // 创建节点组
    const node = container.append('g')
        .attr('class', 'nodes')
        .selectAll('g')
        .data(data.nodes)
        .enter()
        .append('g')
        .call(d3.drag()
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended));

    // 添加节点圆形
    node.append('circle')
        .attr('r', d => d.size / 2)
        .style('fill', d => getNodeColor(d))
        .style('filter', 'url(#glow)')
        .style('stroke', '#fff')
        .style('stroke-width', 2);

    // 添加节点文本
    node.append('text')
        .text(d => d.id)
        .attr('dy', d => d.type === 'book' ? -d.size/2 - 5 : d.size/2 + 15)
        .attr('text-anchor', 'middle')
        .style('font-size', d => d.type === 'book' ? '14px' : '12px')
        .style('font-weight', d => d.type === 'book' ? 'bold' : 'normal')
        .style('fill', '#333')
        .style('pointer-events', 'none');

    // 添加节点悬停效果
    node.on('mouseover', function(event, d) {
        // 高亮相关节点和连接
        const connectedNodes = new Set();
        data.links.forEach(link => {
            if (link.source.id === d.id || link.target.id === d.id) {
                connectedNodes.add(link.source.id);
                connectedNodes.add(link.target.id);
            }
        });

        node.style('opacity', n => connectedNodes.has(n.id) || n.id === d.id ? 1 : 0.1);
        link.style('opacity', l => 
            (l.source.id === d.id || l.target.id === d.id) ? 1 : 0.1
        );

        // 显示详情
        showNodeDetail(d, sidebar);
    })
    .on('mouseout', function() {
        // 恢复原始状态
        node.style('opacity', 1);
        link.style('opacity', d => d.strength);
    })
    .on('click', (event, d) => {
        // 点击时固定节点位置
        d.fx = d.x;
        d.fy = d.y;
        showNodeDetail(d, sidebar);
    });

    // 双击解除固定位置
    node.on('dblclick', (event, d) => {
        d.fx = null;
        d.fy = null;
    });

    // 更新力导向图
    simulation.on('tick', () => {
        // 限制节点位置在视图范围内
        data.nodes.forEach(d => {
            d.x = Math.max(d.size, Math.min(width - d.size, d.x));
            d.y = Math.max(d.size, Math.min(height - d.size, d.y));
        });

        link
            .attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);

        node
            .attr('transform', d => `translate(${d.x},${d.y})`);
    });

    // 拖拽函数
    function dragstarted(event) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
    }

    function dragged(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
    }

    function dragended(event) {
        if (!event.active) simulation.alphaTarget(0);
        // 不再自动解除固定位置，需要双击才解除
    }

    // 初始预热模拟
    simulation.alpha(1).restart();
}

// 获取节点颜色
function getNodeColor(node) {
    const colors = {
        "医学": "#A51C30",    // 深红色
        "工艺": "#1565C0",    // 深蓝色
        "综合": "#43A047",    // 绿色
        "农业": "#8D6E63",    // 褐色
        "建筑": "#6D4C41",    // 深褐色
        "天文": "#1A237E",    // 深蓝色
        "数学": "#4527A0",    // 紫色
        "default": "#757575"   // 默认灰色
    };
    return colors[node.category] || colors.default;
}

// 显示节点详情
function showNodeDetail(node, sidebar) {
    const detail = nodeDetails[node.id] || {
        title: node.id,
        category: node.category,
        description: `这是关于${node.id}的详细说明。该主题属于${node.category}类别，来自《${node.book || node.id}》。`
    };

    sidebar.html(`
        <div class="detail-content">
            <h2>${detail.title}</h2>
            <div class="detail-meta">
                ${detail.author ? `<p class="author"><strong>作者：</strong>${detail.author}</p>` : ''}
                ${detail.year ? `<p class="year"><strong>年代：</strong>${detail.year}</p>` : ''}
                ${detail.dynasty ? `<p class="dynasty"><strong>朝代：</strong>${detail.dynasty}</p>` : ''}
                ${detail.category ? `<p class="category"><strong>类别：</strong>${detail.category}</p>` : ''}
            </div>
            <div class="detail-main">
                <h3>内容简介</h3>
                <p class="description">${detail.description}</p>
                ${detail.significance ? `
                    <h3>历史地位</h3>
                    <p class="significance">${detail.significance}</p>
                ` : ''}
                ${detail.influence ? `
                    <h3>影响意义</h3>
                    <p class="influence">${detail.influence}</p>
                ` : ''}
            </div>
            ${detail.image ? `
                <div class="detail-image">
                    <img src="images/${detail.image}" alt="${detail.title}" 
                        style="max-width: 100%; border-radius: 8px; margin-top: 15px; box-shadow: 0 4px 15px var(--shadow-color);">
                </div>
            ` : ''}
        </div>
    `);
}

// 筛选网络
function filterNetwork(event, book) {
    // 更新按钮激活状态
    d3.selectAll('.switch-option')
        .classed('active', d => d === book);
    
    // 实现筛选逻辑
    const nodes = d3.selectAll('.nodes circle');
    const links = d3.selectAll('.links line');
    const texts = d3.selectAll('.nodes text');
    
    if (book === '全部') {
        nodes.style('opacity', 1);
        links.style('opacity', d => d.strength);
        texts.style('opacity', 1);
        
        // 移除所有按钮的激活状态
        d3.selectAll('.switch-option').classed('active', false);
        // 为"全部"按钮添加激活状态
        d3.selectAll('.switch-option').filter(d => d === '全部').classed('active', true);
    } else {
        nodes.style('opacity', d => 
            d.id === book || d.book === book ? 1 : 0.2
        );
        links.style('opacity', d => 
            (d.source.id === book || d.source.book === book ||
             d.target.id === book || d.target.book === book)
            ? d.strength : 0.1
        );
        texts.style('opacity', d => 
            d.id === book || d.book === book ? 1 : 0.2
        );
    }
}

// 导出初始化函数
window.initNetwork = initNetwork; 