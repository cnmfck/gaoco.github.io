// script.js - 高擎三炬精密科技 GAOCO 交互、动效与中英文切换

const translations = {
    zh: {
        navHome: "首页",
        navProducts: "产品",
        navTech: "技术",
        navAbout: "关于",
        navContact: "联系",

        homeBadge: "精密驱动未来 · 智造无限可能",
        homeTitleLine1: "高擎三炬",
        homeTitleHighlight: "精密科技",
        homeTitleLine2: " · 卓越之选",
        homeFocusPrefix: "专注",
        homeFocusSuffix: "技术生态",
        homeSubtitle: "纳米级制造 · 智能检测 · 工业4.0全栈方案",
        homeProductBtn: "产品",
        homeContactBtn: "联系专家",
        statPrecision: "重复精度",
        statCertification: "国际认证",
        statSupport: "技术支持",

        techLabel: "核心技术",
        techTitle: "高精尖 · 智造中枢",
        techCard1Title: "超高精度测量",
        techCard1Text: "纳米级检测，提升关键零部件质量稳定性。",
        techCard2Title: "智能自动化产线",
        techCard2Text: "柔性工站与自动化流程，适配多品种生产。",
        techCard3Title: "AI视觉检测",
        techCard3Text: "机器视觉识别缺陷，辅助品质追踪与判断。",
        techCard4Title: "数字孪生平台",
        techCard4Text: "实时映射设备与产线状态，支持预测性维护。",
        techCard5Title: "微纳加工支持",
        techCard5Text: "面向高精密结构件提供工艺与检测协同方案。",
        techCard6Title: "工业4.0集成",
        techCard6Text: "连接设备、数据与管理系统，构建智能制造闭环。",
        goProducts: "查看产品",
        goAbout: "了解公司",
        goContacts: "全部方式",

        aboutTag: "关于 GAOCO",
        aboutTitle: "以精密丈量世界 · 创新驱动未来",
        aboutText: "高擎三炬精密科技有限公司总部位于苏州，专注于高端精密仪器、超精密加工及智能检测系统，为半导体、医疗、航空航天提供一站式解决方案。",
        feature1: "研发占比>20%",
        feature2: "国家高新企业",
        feature3: "全球服务网络",

        contactCardTitle: "联系合作",
        wechatLabel: "微信号：",
        addressText: "苏州·常熟市沙家浜镇久隆路7号13幢",
        viewAllContacts: "查看全部联系方式",

        productsBadge: "产品中心",
        productsTitle: "面向高端制造的精密产品矩阵",
        productsSubtitle: "从测量、检测到自动化与数据平台，GAOCO 为精密制造场景提供可扩展的产品与系统方案。",
        product1Title: "纳米级精密测量系统",
        product1Text: "适用于微小尺寸、复杂结构与关键零部件的高精度尺寸检测，支持稳定重复测量与质量追溯。",
        product1Point1: "重复精度可达 ±0.001mm",
        product1Point2: "适配半导体、医疗器械、航空航天零部件",
        product1Point3: "支持数据导出与质量分析",
        product2Title: "AI视觉检测系统",
        product2Text: "结合机器视觉与智能算法，对外观缺陷、装配偏差、尺寸异常进行快速识别。",
        product2Point1: "缺陷识别与分级",
        product2Point2: "多相机、多工位集成",
        product2Point3: "适合产线在线检测",
        product3Title: "智能自动化产线",
        product3Text: "围绕高精密装配、检测与搬运场景，提供柔性自动化工作站及整线集成能力。",
        product3Point1: "柔性工站设计",
        product3Point2: "机械臂与检测设备协同",
        product3Point3: "支持多品种小批量生产",
        product4Title: "数字孪生与数据平台",
        product4Text: "对设备、产线与工艺参数进行实时映射，帮助企业提升生产透明度与预测维护能力。",
        product4Point1: "设备状态可视化",
        product4Point2: "工艺数据追踪",
        product4Point3: "异常预警与维护建议",
        product5Title: "微纳加工检测方案",
        product5Text: "面向精密结构件加工后的检测、筛选与质量评价，形成工艺与检测联动闭环。",
        product5Point1: "微小结构检测",
        product5Point2: "加工误差分析",
        product5Point3: "质量数据库沉淀",
        product6Title: "工业4.0系统集成",
        product6Text: "连接检测设备、自动化工站与管理系统，帮助企业构建智能制造数据链路。",
        product6Point1: "设备联网与数据采集",
        product6Point2: "MES/ERP系统对接支持",
        product6Point3: "可按项目定制部署",
        productsCtaTitle: "需要定制化产品方案？",
        productsCtaText: "欢迎联系我们，根据您的行业、工艺与检测目标提供适配建议。",
        productsCtaBtn: "联系 GAOCO",

        contactsBadge: "联系 GAOCO",
        contactsTitle: "期待与您探讨精密制造的下一步",
        contactsSubtitle: "如需产品咨询、项目合作或技术支持，请通过以下方式联系我们。",
        contactPhoneTitle: "电话",
        contactPhoneText: "欢迎致电咨询产品与项目合作。",
        contactWechatTitle: "微信",
        contactWechatText: "添加微信时可备注来意，便于快速对接。",
        contactEmailTitle: "邮箱",
        contactEmailText: "适合发送需求说明、项目资料与合作文件。",
        contactAddressTitle: "地址",
        contactAddressMain: "苏州·常熟市沙家浜镇久隆路7号13幢",
        contactAddressText: "高擎三炬精密科技有限公司。",
        contactsCtaTitle: "准备开始合作？",
        contactsCtaText: "告诉我们您的应用场景、精度要求与项目阶段，我们会尽快为您提供建议。",
        contactsCtaBtn: "发送邮件",

        aboutPageBadge: "关于 GAOCO",
        aboutPageTitle: "以精密技术沉淀长期价值",
        aboutPageSubtitle: "这里将展示高擎三炬精密科技的发展历程、荣誉资质、技术积累与未来规划。当前内容为占位版本，后续可替换为真实资料。",
        companyOverviewTag: "公司概况",
        companyOverviewTitle: "专注精密制造场景的技术型企业",
        companyOverviewText1: "高擎三炬精密科技有限公司位于苏州常熟，围绕精密测量、智能检测、自动化集成与数字化平台，为高端制造客户提供系统化解决方案。",
        companyOverviewText2: "公司将持续投入研发能力、工艺能力与交付能力，面向半导体、医疗、航空航天与先进制造行业建立长期合作。",
        honorTag: "荣誉与资质",
        honor1Title: "荣誉资质占位",
        honor1Text: "此处后续可填写高新技术企业、专利证书、行业奖项或认证信息。",
        honor2Title: "体系认证占位",
        honor2Text: "此处后续可填写 ISO、质量管理体系、行业准入资质等。",
        honor3Title: "技术成果占位",
        honor3Text: "此处后续可填写研发成果、软件著作权、专利或重点项目。",
        timelineLabel: "发展时间轴",
        timelineTitle: "从技术积累到产业落地",
        timelineYear1: "阶段一",
        timeline1Title: "公司筹备与技术方向确立",
        timeline1Text: "占位内容：确立精密测量、智能检测与工业自动化方向，建立核心团队与研发基础。",
        timelineYear2: "阶段二",
        timeline2Title: "产品原型与项目验证",
        timeline2Text: "占位内容：完成关键模块验证，形成面向实际制造场景的产品原型与解决方案。",
        timelineYear3: "阶段三",
        timeline3Title: "客户交付与系统集成",
        timeline3Text: "占位内容：推进项目交付，积累半导体、医疗、航空航天或先进制造行业案例。",
        timelineYear4: "未来规划",
        timeline4Title: "平台化与全球服务",
        timeline4Text: "占位内容：完善产品矩阵、强化数据平台能力，逐步拓展全球技术服务网络。",
        aboutCtaTitle: "想了解我们的产品与合作方式？",
        aboutCtaText: "您可以查看产品中心，或直接联系我们沟通具体需求。",
        aboutCtaProducts: "查看产品",
        aboutCtaContacts: "联系我们",

        footerCopyright: "© 2025 高擎三炬精密科技有限公司 GAOCO Precision. 保留一切权利。"
    },

    en: {
        navHome: "Home",
        navProducts: "Products",
        navTech: "Technology",
        navAbout: "About",
        navContact: "Contact",

        homeBadge: "Precision Drives the Future · Intelligent Manufacturing Without Limits",
        homeTitleLine1: "GAOCO",
        homeTitleHighlight: "Precision Technology",
        homeTitleLine2: " · Built for Excellence",
        homeFocusPrefix: "Focused on",
        homeFocusSuffix: "technology ecosystems",
        homeSubtitle: "Nano-scale manufacturing · Intelligent inspection · Full-stack Industry 4.0 solutions",
        homeProductBtn: "Products",
        homeContactBtn: "Contact Experts",
        statPrecision: "Repeatability",
        statCertification: "Certification",
        statSupport: "Technical Support",

        techLabel: "Core Technology",
        techTitle: "Precision · Intelligence · Manufacturing Backbone",
        techCard1Title: "Ultra-precision Measurement",
        techCard1Text: "Nano-scale inspection to improve quality stability for critical components.",
        techCard2Title: "Smart Automation Lines",
        techCard2Text: "Flexible workstations and automated workflows for mixed production.",
        techCard3Title: "AI Vision Inspection",
        techCard3Text: "Machine vision detects defects and supports quality tracking.",
        techCard4Title: "Digital Twin Platform",
        techCard4Text: "Real-time mapping of equipment and production status for predictive maintenance.",
        techCard5Title: "Micro/Nano Processing Support",
        techCard5Text: "Process-and-inspection solutions for high-precision structural components.",
        techCard6Title: "Industry 4.0 Integration",
        techCard6Text: "Connect equipment, data, and management systems into a smart manufacturing loop.",
        goProducts: "View Products",
        goAbout: "About Company",
        goContacts: "All Contacts",

        aboutTag: "About GAOCO",
        aboutTitle: "Measuring the World with Precision · Innovating for the Future",
        aboutText: "GAOCO Precision Technology is headquartered in Suzhou and focuses on high-end precision instruments, ultra-precision processing, and intelligent inspection systems for semiconductor, medical, and aerospace applications.",
        feature1: "R&D ratio >20%",
        feature2: "High-tech enterprise",
        feature3: "Global service network",

        contactCardTitle: "Contact & Cooperation",
        wechatLabel: "WeChat: ",
        addressText: "Building 13, No. 7 Jiulong Road, Shajiabang Town, Changshu, Suzhou, China",
        viewAllContacts: "View all contact details",

        productsBadge: "Products",
        productsTitle: "Precision Product Matrix for Advanced Manufacturing",
        productsSubtitle: "From measurement and inspection to automation and data platforms, GAOCO provides scalable products and system solutions for precision manufacturing.",
        product1Title: "Nano-scale Precision Measurement System",
        product1Text: "Designed for high-precision dimensional inspection of small features, complex structures, and critical components, with stable repeatability and quality traceability.",
        product1Point1: "Repeatability up to ±0.001mm",
        product1Point2: "For semiconductor, medical device, and aerospace components",
        product1Point3: "Supports data export and quality analysis",
        product2Title: "AI Vision Inspection System",
        product2Text: "Combines machine vision and intelligent algorithms to identify surface defects, assembly deviations, and dimensional anomalies.",
        product2Point1: "Defect recognition and classification",
        product2Point2: "Multi-camera and multi-station integration",
        product2Point3: "Suitable for inline production inspection",
        product3Title: "Smart Automation Line",
        product3Text: "Provides flexible automation workstations and full-line integration for precision assembly, inspection, and handling scenarios.",
        product3Point1: "Flexible workstation design",
        product3Point2: "Robot and inspection equipment coordination",
        product3Point3: "Supports high-mix, low-volume production",
        product4Title: "Digital Twin & Data Platform",
        product4Text: "Maps equipment, production lines, and process parameters in real time to improve production transparency and predictive maintenance.",
        product4Point1: "Equipment status visualization",
        product4Point2: "Process data tracking",
        product4Point3: "Abnormality alerts and maintenance suggestions",
        product5Title: "Micro/Nano Inspection Solution",
        product5Text: "Supports inspection, screening, and quality evaluation after precision processing, linking manufacturing and inspection into a closed loop.",
        product5Point1: "Micro-structure inspection",
        product5Point2: "Processing error analysis",
        product5Point3: "Quality database accumulation",
        product6Title: "Industry 4.0 System Integration",
        product6Text: "Connects inspection equipment, automation workstations, and management systems to build an intelligent manufacturing data chain.",
        product6Point1: "Equipment networking and data acquisition",
        product6Point2: "MES/ERP integration support",
        product6Point3: "Custom deployment by project",
        productsCtaTitle: "Need a customized product solution?",
        productsCtaText: "Contact us with your industry, process, and inspection goals. We will recommend a suitable solution.",
        productsCtaBtn: "Contact GAOCO",

        contactsBadge: "Contact GAOCO",
        contactsTitle: "Let’s Discuss the Next Step in Precision Manufacturing",
        contactsSubtitle: "For product inquiries, project cooperation, or technical support, please contact us through the following channels.",
        contactPhoneTitle: "Phone",
        contactPhoneText: "Call us for product and project inquiries.",
        contactWechatTitle: "WeChat",
        contactWechatText: "Please include your inquiry when adding us on WeChat for faster response.",
        contactEmailTitle: "Email",
        contactEmailText: "Best for sending requirements, project materials, and cooperation documents.",
        contactAddressTitle: "Address",
        contactAddressMain: "Building 13, No. 7 Jiulong Road, Shajiabang Town, Changshu, Suzhou, China",
        contactAddressText: "GAOCO Precision Technology Co., Ltd.",
        contactsCtaTitle: "Ready to cooperate?",
        contactsCtaText: "Tell us your application scenario, precision requirements, and project stage. We will respond with recommendations.",
        contactsCtaBtn: "Send Email",

        aboutPageBadge: "About GAOCO",
        aboutPageTitle: "Building Long-term Value Through Precision Technology",
        aboutPageSubtitle: "This page will present GAOCO’s development history, honors, technical capabilities, and future roadmap. Current content is placeholder text and can be replaced with official materials later.",
        companyOverviewTag: "Company Overview",
        companyOverviewTitle: "A technology-driven company focused on precision manufacturing",
        companyOverviewText1: "Located in Changshu, Suzhou, GAOCO provides systematic solutions for advanced manufacturing through precision measurement, intelligent inspection, automation integration, and digital platforms.",
        companyOverviewText2: "GAOCO will continue investing in R&D, process capability, and delivery capacity to build long-term partnerships across semiconductor, medical, aerospace, and advanced manufacturing industries.",
        honorTag: "Honors & Qualifications",
        honor1Title: "Honor Placeholder",
        honor1Text: "This area can later include high-tech enterprise recognition, patent certificates, industry awards, or certification records.",
        honor2Title: "Certification Placeholder",
        honor2Text: "This area can later include ISO, quality management system, or industry qualification information.",
        honor3Title: "Technical Achievement Placeholder",
        honor3Text: "This area can later include R&D achievements, software copyrights, patents, or major projects.",
        timelineLabel: "Development Timeline",
        timelineTitle: "From technical accumulation to industrial application",
        timelineYear1: "Stage 1",
        timeline1Title: "Preparation and technical direction",
        timeline1Text: "Placeholder: define directions in precision measurement, intelligent inspection, and industrial automation while building the core team and R&D foundation.",
        timelineYear2: "Stage 2",
        timeline2Title: "Product prototype and project validation",
        timeline2Text: "Placeholder: complete key module validation and form product prototypes and solutions for real manufacturing scenarios.",
        timelineYear3: "Stage 3",
        timeline3Title: "Customer delivery and system integration",
        timeline3Text: "Placeholder: advance project delivery and accumulate cases in semiconductor, medical, aerospace, or advanced manufacturing fields.",
        timelineYear4: "Roadmap",
        timeline4Title: "Platformization and global service",
        timeline4Text: "Placeholder: improve the product matrix, strengthen data platform capabilities, and gradually expand the global service network.",
        aboutCtaTitle: "Want to learn about our products and cooperation model?",
        aboutCtaText: "You can visit the product center or contact us directly to discuss specific requirements.",
        aboutCtaProducts: "View Products",
        aboutCtaContacts: "Contact Us",

        footerCopyright: "© 2025 GAOCO Precision Technology Co., Ltd. All rights reserved."
    }
};

const dynamicWords = {
    zh: ["精密测量", "智能控制", "AI视觉检测", "数字孪生"],
    en: ["precision measurement", "intelligent control", "AI vision inspection", "digital twins"]
};

let currentLang = getInitialLanguage();
let wordIndex = 0;
const wordElement = document.getElementById("changingWord");

function getInitialLanguage() {
    const savedLang = localStorage.getItem("gaocoLanguage");
    if (savedLang === "zh" || savedLang === "en") return savedLang;

    const browserLanguages = navigator.languages || [navigator.language || ""];
    const languageText = browserLanguages.join(",").toLowerCase();
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";

    if (languageText.includes("zh") || timezone === "Asia/Shanghai") {
        return "zh";
    }

    return "en";
}

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("gaocoLanguage", lang);

    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    const toggleText = document.getElementById("languageToggleText");
    if (toggleText) {
        toggleText.textContent = lang === "zh" ? "EN" : "中";
    }

    if (wordElement) {
        wordIndex = 0;
        wordElement.textContent = dynamicWords[lang][wordIndex];
    }

    updateDocumentMeta(lang);
}

function updateDocumentMeta(lang) {
    const page = document.body.getAttribute("data-page");

    const metaData = {
        zh: {
            home: {
                title: "高擎三炬精密科技 | GAOCO - 纳米级精密测量·智能检测·工业4.0解决方案",
                description: "高擎三炬精密科技(GAOCO)专注超高精度测量、智能自动化产线、数字孪生平台，为半导体/医疗/航空航天提供工业4.0全栈方案。"
            },
            products: {
                title: "产品中心 | 高擎三炬精密科技 GAOCO",
                description: "高擎三炬精密科技 GAOCO 产品中心，涵盖精密测量系统、AI视觉检测系统、智能自动化产线、数字孪生平台与工业4.0集成方案。"
            },
            contacts: {
                title: "联系 GAOCO | 高擎三炬精密科技",
                description: "联系高擎三炬精密科技 GAOCO。电话：+86 134-5161-9866，微信：Gaoliang_Edwin，邮箱：gaoco@126.com。"
            },
            about: {
                title: "关于 GAOCO | 高擎三炬精密科技",
                description: "了解高擎三炬精密科技 GAOCO 的公司发展、荣誉资质、技术积累与未来规划。"
            }
        },
        en: {
            home: {
                title: "GAOCO Precision Technology | Precision Measurement · Intelligent Inspection · Industry 4.0",
                description: "GAOCO focuses on ultra-precision measurement, intelligent automation lines, digital twin platforms, and Industry 4.0 solutions."
            },
            products: {
                title: "Products | GAOCO Precision Technology",
                description: "Explore GAOCO products including precision measurement systems, AI vision inspection, smart automation lines, digital twin platforms, and Industry 4.0 integration."
            },
            contacts: {
                title: "Contact GAOCO | GAOCO Precision Technology",
                description: "Contact GAOCO by phone, WeChat, email, or address for precision measurement, intelligent inspection, and Industry 4.0 cooperation."
            },
            about: {
                title: "About GAOCO | GAOCO Precision Technology",
                description: "Learn about GAOCO’s development, honors, technical capabilities, and future roadmap."
            }
        }
    };

    const currentMeta = metaData[lang][page];
    if (!currentMeta) return;

    document.title = currentMeta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
        description.setAttribute("content", currentMeta.description);
    }
}

function updateWord() {
    if (!wordElement) return;

    wordElement.style.opacity = "0";
    setTimeout(() => {
        const words = dynamicWords[currentLang] || dynamicWords.zh;
        wordIndex = (wordIndex + 1) % words.length;
        wordElement.textContent = words[wordIndex];
        wordElement.style.opacity = "1";
    }, 300);
}

if (wordElement) {
    setInterval(updateWord, 2800);
}

const glow = document.querySelector(".cursor-glow");
if (glow) {
    document.addEventListener("mousemove", (e) => {
        requestAnimationFrame(() => {
            glow.style.left = e.clientX + "px";
            glow.style.top = e.clientY + "px";
        });
    });

    document.addEventListener("mouseleave", () => {
        glow.style.opacity = "0";
    });

    document.addEventListener("mouseenter", () => {
        glow.style.opacity = "1";
    });
}

const languageToggle = document.getElementById("languageToggle");
if (languageToggle) {
    languageToggle.addEventListener("click", () => {
        const nextLang = currentLang === "zh" ? "en" : "zh";
        applyLanguage(nextLang);
    });
}

const animatedCards = document.querySelectorAll(".card, .product-card, .contact-detail-card, .about-company-card, .honor-card, .timeline-item");
const observerOptions = {
    threshold: 0.16,
    rootMargin: "0px 0px -20px 0px"
};

if ("IntersectionObserver" in window) {
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                cardObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedCards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "opacity 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1), transform 0.5s ease";
        cardObserver.observe(card);
    });
}

const navLinks = document.querySelectorAll("nav a");
const sections = ["home", "tech", "about-preview", "contact"];

function updateActiveNav() {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    navLinks.forEach(link => {
        link.style.color = "";
        link.style.fontWeight = "500";

        const href = link.getAttribute("href") || "";

        if (
            (currentPath === "index.html" && href === "index.html") ||
            (currentPath === "" && href === "index.html") ||
            (currentPath === "products.html" && href === "products.html") ||
            (currentPath === "contacts.html" && href === "contacts.html") ||
            (currentPath === "about.html" && href === "about.html")
        ) {
            link.style.color = "#42a5f5";
            link.style.fontWeight = "600";
        }
    });

    if (currentPath !== "index.html" && currentPath !== "") return;

    let currentSection = "";
    const scrollPos = window.scrollY + 130;

    for (let sec of sections) {
        const element = document.getElementById(sec);
        if (element) {
            const offsetTop = element.offsetTop;
            const offsetBottom = offsetTop + element.offsetHeight;
            if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
                currentSection = sec;
                break;
            }
        }
    }

    if (currentSection) {
        navLinks.forEach(link => {
            const href = link.getAttribute("href") || "";
            if (href === `#${currentSection}` || href === `index.html#${currentSection}`) {
                link.style.color = "#42a5f5";
                link.style.fontWeight = "600";
            }
        });
    }
}

window.addEventListener("scroll", () => {
    requestAnimationFrame(updateActiveNav);
});

window.addEventListener("load", updateActiveNav);

const allClickableBtns = document.querySelectorAll(".btn, .float-btn, .section-link");
allClickableBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(0.97)";
        setTimeout(() => {
            btn.style.transform = "";
        }, 150);
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        const targetId = this.getAttribute("href");
        if (targetId === "#" || targetId === "") return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            history.pushState(null, null, targetId);
        }
    });
});

const statNumbers = document.querySelectorAll(".stats strong");
if (statNumbers.length && "IntersectionObserver" in window) {
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.textShadow = "0 0 6px rgba(66,165,245,0.8)";
                setTimeout(() => {
                    entry.target.style.textShadow = "";
                }, 600);
                statObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => statObserver.observe(stat));
}

applyLanguage(currentLang);

console.log(
    "%cGAOCO 高擎三炬 | Precision Manufacturing Website\nVersion: 20260610-2 | About page, mobile layout, sitemap-ready structure enabled.",
    "color: #42a5f5; font-size: 14px; font-weight: bold;"
);