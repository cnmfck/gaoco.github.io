// script.js - GAOCO interactions and bilingual switching v20260626-01
const translations = {'zh': {'navHome': '首页', 'navProducts': '产品', 'navCredentials': '资质荣誉', 'navRoadmap': '发展方向', 'navContact': '联系', 'homeBadge': '先进材料 · 精密成型 · 光通信器件', 'homeTitleLine1': '苏州高擎三炬', 'homeTitleHighlight': '精密科技', 'homeFocusPrefix': '聚焦', 'homeFocusSuffix': '与精密制造', 'homeSubtitle': '以 CIM 陶瓷精密注塑成型、塑胶齿轮与光通信陶瓷器件为核心，服务高一致性、高效率、高可靠性的先进制造需求。', 'homeProductBtn': '查看产品', 'homeContactBtn': '联系合作', 'statCim': '陶瓷精密注塑', 'statMaterials': '氧化铝 / 氮化铝', 'statOptical': '光通信陶瓷器件', 'businessLabel': '产品业务', 'businessTitle': '三大核心业务', 'businessCeramicTitle': '先进陶瓷器', 'businessCeramicText': '覆盖 5G/6G 陶瓷介质滤波器、半导体陶瓷管壳、陶瓷劈刀、陶瓷连接器与陶瓷吸嘴。', 'businessGearTitle': '塑胶齿轮', 'businessGearText': '面向 DVD 机芯、自动窗帘机、齿轮、齿条、框架结构件、齿轮箱体与机构件。', 'businessOpticalTitle': '光通信', 'businessOpticalText': '聚焦 MT 插芯、SC/LC 陶瓷套筒、SC/LC 陶瓷插芯及 AlN 氮化铝相关器件。', 'goProducts': '进入产品中心', 'honorsLabel': '资质荣誉', 'honorsTitle': '荣誉、知识产权与认证资料', 'goCredentials': '查看全部', 'homeCtaTag': '项目合作', 'homeCtaTitle': '正在寻找先进陶瓷、塑胶齿轮或光通信器件方案？', 'homeCtaText': '欢迎提供应用场景、材料要求、尺寸公差、产量预期与图纸资料，我们将尽快评估并反馈。', 'homeCtaBtn': '发送需求', 'productsBadge': '产品中心', 'productsTitle': '三大产品线：先进陶瓷器、塑胶齿轮、光通信', 'productsSubtitle': '', 'productSelectorLabel': '产品分类', 'productSelectorTitle': '选择一个方向查看具体产品', 'tabAdvancedCeramics': '先进陶瓷器', 'tabPlasticGears': '塑胶齿轮', 'tabOpticalCommunication': '光通信', 'advancedTag': '先进陶瓷', 'advancedTitle': '先进陶瓷器件', 'advancedIntro': '以陶瓷粉体、CIM 陶瓷精密注塑成型、Al2O3 氧化铝、AlN 氮化铝和微型精密结构为基础，面向通信、封装、光连接与自动化场景提供关键陶瓷器件能力。', 'gearTag': '塑胶齿轮', 'gearTitle': 'DVD 机芯与精密塑胶传动零部件', 'gearIntro': '围绕微型传动系统中的齿轮、齿条、支架与精密结构件，提供从模具开发到批量成型的一体化制造能力。', 'dvdTitle': 'DVD 机芯', 'dvdText': '从多级传动齿轮到机芯框架结构件，我们关注啮合顺滑度、装配稳定性与批量一致性，适配小型精密机构对尺寸、材料和寿命的综合要求。', 'clickExpandStars': '点击展开零部件', 'curtainTitle': '自动窗帘机', 'curtainText': '此方向将用于展示自动窗帘机的齿轮、齿轮箱体与机构件。当前暂作占位，等待后续产品图片后替换为同样的展开式零部件展示。', 'opticalTag': '光通信', 'opticalTitle': '光通信陶瓷与精密连接器件', 'opticalIntro': '围绕 MT 插芯、SC/LC 陶瓷套筒、SC/LC 陶瓷插芯和 AlN 氮化铝器件，服务光连接、定位、散热与封装一体化需求。', 'floatBackTop': '产品分类', 'floatCollapse': '收起', 'credentialsBadge': '资质荣誉', 'credentialsTitle': '荣誉 · 知识产权 · 认证资料', 'credentialsSubtitle': '集中展示我们的企业荣誉、发明专利、ISO 9001 质量认证、软著、商标及合作资料。', 'contactsBadge': '联系我们', 'contactsTitle': '期待与您探讨精密制造的下一步', 'contactsSubtitle': '如需产品咨询、项目合作、图纸评估或技术支持，请通过以下方式联系我们。', 'contactInternationalEmail': '国际邮箱', 'contactDomesticEmail': '国内邮箱', 'contactPhoneTitle': '电话', 'contactWechatTitle': '微信号', 'contactAddressTitle': '地址', 'contactAddressMain': '中国·苏州·常熟东南开发区', 'roadmapBadge': '发展方向', 'roadmapTitle': '围绕材料、工艺与关键器件持续延展', 'roadmapSubtitle': '我们聚焦先进陶瓷、CIM 陶瓷精密注塑成型、精密塑胶传动、光通信核心器件与半导体材料。', 'roadmap1Title': '先进陶瓷与 CIM 工艺深化', 'roadmap1Text': '持续提升陶瓷粉体、喂料、注塑成型、烧结与后加工能力，支撑复杂陶瓷器件稳定交付。', 'roadmap2Title': '6G、7G 陶瓷介质滤波器研发', 'roadmap2Text': '以 5G 陶瓷介质滤波器配方与制备工艺的早期经验为基础，面向 6G、7G 通信方向推进陶瓷介质材料、CIM 成型工艺与规模化一致性研发。', 'roadmap3Title': '精密塑胶齿轮与传动组件', 'roadmap3Text': '围绕 DVD 机芯、自动窗帘机及更多小型精密传动系统，扩展齿轮、齿条、框架结构件与机构件能力。', 'roadmap4Title': '光通信连接与陶瓷器件', 'roadmap4Text': '面向 1.6T 及更高阶通信连接器设计开发，围绕 MT 插芯、陶瓷插芯与 AlN 材料，布局光通信连接、定位与散热应用。', 'footerCompany': '苏州高擎三炬精密科技有限公司', 'footerContactPrefix': '联系方式','footerInternationalEmail':'国际邮箱','footerDomesticEmail':'国内邮箱','footerPhone':'电话','footerWechat':'微信','floatBackCredentials':'回到分类','footerOwnership':'© 2025 苏州高擎三炬精密科技有限公司 GAOCO. 保留一切权利。'}, 'en': {'navHome': 'Home', 'navProducts': 'Products', 'navCredentials': 'Credentials', 'navRoadmap': 'Roadmap', 'navContact': 'Contact', 'homeBadge': 'Advanced Materials · Precision Molding · Optical Components', 'homeTitleLine1': 'Suzhou Gaoqing Sanju', 'homeTitleHighlight': 'Precision Technology', 'homeFocusPrefix': 'Focused on', 'homeFocusSuffix': 'and precision manufacturing', 'homeSubtitle': 'Built around CIM ceramic injection molding, plastic gears, and optical communication ceramic components for consistent, efficient, and reliable advanced manufacturing.', 'homeProductBtn': 'View Products', 'homeContactBtn': 'Contact Us', 'statCim': 'Ceramic injection molding', 'statMaterials': 'Alumina / Aluminum nitride', 'statOptical': 'Optical ceramic components', 'businessLabel': 'Product Business', 'businessTitle': 'Three Core Business Lines', 'businessCeramicTitle': 'Advanced Ceramic Components', 'businessCeramicText': 'Covering 5G/6G ceramic dielectric filters, semiconductor ceramic packages, ceramic capillaries, ceramic connectors, and ceramic nozzles.', 'businessGearTitle': 'Plastic Gears', 'businessGearText': 'Serving DVD mechanisms, automatic curtain systems, gears, racks, frame structures, gearbox housings, and mechanism parts.', 'businessOpticalTitle': 'Optical Communication', 'businessOpticalText': 'Focusing on MT ferrules, SC/LC ceramic sleeves, SC/LC ceramic ferrules, and AlN aluminum nitride components.', 'goProducts': 'Open Product Center', 'honorsLabel': 'Credentials', 'honorsTitle': 'Honors, intellectual property, and certifications', 'goCredentials': 'View All', 'homeCtaTag': 'Cooperation', 'homeCtaTitle': 'Looking for advanced ceramics, plastic gears, or optical communication components?', 'homeCtaText': 'Share your application, material requirements, dimensional tolerance, volume expectation, and drawings. We will evaluate and respond promptly.', 'homeCtaBtn': 'Send Inquiry', 'productsBadge': 'Products', 'productsTitle': 'Three Product Lines: Advanced Ceramics, Plastic Gears, Optical Communication', 'productsSubtitle': '', 'productSelectorLabel': 'Product categories', 'productSelectorTitle': 'Choose one direction to view product details', 'tabAdvancedCeramics': 'Advanced Ceramics', 'tabPlasticGears': 'Plastic Gears', 'tabOpticalCommunication': 'Optical Communication', 'advancedTag': 'Advanced ceramics', 'advancedTitle': 'Advanced Ceramic Components', 'advancedIntro': 'Built on ceramic powders, CIM ceramic injection molding, Al2O3 alumina, AlN aluminum nitride, and miniature precision structures for communication, packaging, optical connection, and automation applications.', 'gearTag': 'Plastic gears', 'gearTitle': 'DVD Mechanisms and Precision Plastic Transmission Parts', 'gearIntro': 'Focused on compact transmission assemblies, including gears, racks, frames, and precision plastic structures, with integrated capability from mold development to volume molding.', 'dvdTitle': 'DVD Mechanism', 'dvdText': 'From multi-stage transmission gears to mechanism frame structures, we focus on smooth meshing, assembly stability, and batch consistency for compact precision mechanisms.', 'clickExpandStars': 'Click to expand parts', 'curtainTitle': 'Automatic Curtain System', 'curtainText': 'This area will show gears, gearbox housings, and mechanism parts for automatic curtain systems. It is kept as a placeholder until product photos are provided.', 'opticalTag': 'Optical communication', 'opticalTitle': 'Optical Communication Ceramic and Precision Connector Components', 'opticalIntro': 'Centered on MT ferrules, SC/LC ceramic sleeves, SC/LC ceramic ferrules, and AlN aluminum nitride components for integrated optical connection, positioning, heat dissipation, and packaging needs.', 'floatBackTop': 'Categories', 'floatCollapse': 'Collapse', 'credentialsBadge': 'Credentials', 'credentialsTitle': 'Honors · Intellectual Property · Certifications', 'credentialsSubtitle': 'A central page for our honors, invention patents, ISO 9001 quality certification, software copyrights, trademarks, and cooperation materials.', 'contactsBadge': 'Contact Us', 'contactsTitle': 'Let’s Discuss the Next Step in Precision Manufacturing', 'contactsSubtitle': 'For product inquiries, project cooperation, drawing review, or technical support, please contact us through the following channels.', 'contactInternationalEmail': 'International Email', 'contactDomesticEmail': 'Domestic Email', 'contactPhoneTitle': 'Phone', 'contactWechatTitle': 'WeChat ID', 'contactAddressTitle': 'Address', 'contactAddressMain': 'Southeast Development Zone, Changshu, Suzhou, China', 'roadmapBadge': 'Roadmap', 'roadmapTitle': 'Extending across materials, processes, and critical components', 'roadmapSubtitle': 'Our roadmap focuses on advanced ceramics, CIM ceramic injection molding, precision plastic transmission, optical communication core components, and semiconductor materials.', 'roadmap1Title': 'Advanced ceramics and deeper CIM process capability', 'roadmap1Text': 'Continue improving ceramic powder, feedstock, injection molding, sintering, and post-processing capabilities for stable delivery of complex ceramic components.', 'roadmap2Title': 'R&D of 6G/7G Ceramic Dielectric Filters', 'roadmap2Text': 'Based on early experience in 5G ceramic dielectric filter formulation and preparation, we are advancing ceramic dielectric materials, CIM molding processes, and scalable consistency R&D for 6G/7G communication.', 'roadmap3Title': 'Precision plastic gears and transmission assemblies', 'roadmap3Text': 'Expand capabilities in gears, racks, frame structures, and mechanism parts for DVD mechanisms, automatic curtain systems, and more compact precision transmission systems.', 'roadmap4Title': 'Optical communication connection and ceramic components', 'roadmap4Text': 'For 1.6T and higher-speed communication connector design and development, we focus on MT ferrules, ceramic ferrules, and AlN materials for optical connection, positioning, and thermal applications.', 'footerCompany': 'Suzhou Gaoqing Sanju Precision Technology Co., Ltd.', 'footerContactPrefix': 'Contact','footerInternationalEmail':'International Email','footerDomesticEmail':'Domestic Email','footerPhone':'Phone','footerWechat':'WeChat','floatBackCredentials':'Categories','footerOwnership':'© 2025 Suzhou Gaoqing Sanju Precision Technology Co., Ltd. GAOCO. All rights reserved.'}};
const dynamicWords = {'zh': ['先进陶瓷', 'CIM陶瓷精密注塑', '塑胶齿轮', '光通信器件', 'MT插芯'], 'en': ['advanced ceramics', 'CIM ceramic injection molding', 'plastic gears', 'optical components', 'MT ferrules']};
let currentLang = getInitialLanguage();
let wordIndex = 0;
let wordTimer = null;
function getInitialLanguage() {
    const saved = localStorage.getItem('gaocoLanguage');
    if (saved === 'zh' || saved === 'en') return saved;
    const langs = (navigator.languages || [navigator.language || '']).join(',').toLowerCase();
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    return langs.includes('zh') || tz === 'Asia/Shanghai' ? 'zh' : 'en';
}
function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('gaocoLanguage', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) el.textContent = translations[lang][key];
    });
    document.querySelectorAll('[data-bi]').forEach(el => {
        const value = el.getAttribute(lang === 'zh' ? 'data-zh' : 'data-en');
        if (value) el.textContent = value;
    });
    const toggleText = document.getElementById('languageToggleText');
    if (toggleText) toggleText.textContent = lang === 'zh' ? 'EN' : '中';
    const wordEl = document.getElementById('changingWord');
    if (wordEl) { wordIndex = 0; wordEl.textContent = dynamicWords[lang][0]; }
}
function initDynamicWords() {
    const wordEl = document.getElementById('changingWord');
    if (!wordEl) return;
    clearInterval(wordTimer);
    wordTimer = setInterval(() => {
        wordIndex = (wordIndex + 1) % dynamicWords[currentLang].length;
        wordEl.style.opacity = '0';
        setTimeout(() => { wordEl.textContent = dynamicWords[currentLang][wordIndex]; wordEl.style.opacity = '1'; }, 160);
    }, 2200);
}
function initMobileMenu() {
    const btn = document.querySelector('[data-menu-toggle]');
    const nav = document.getElementById('mainNav');
    if (!btn || !nav) return;
    btn.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}
function initCursorGlow() {
    const glow = document.querySelector('.cursor-glow');
    if (!glow) return;
    window.addEventListener('mousemove', e => { glow.style.left = e.clientX + 'px'; glow.style.top = e.clientY + 'px'; }, { passive: true });
}
function initHonorCarousel() {
    const root = document.querySelector('[data-honor-carousel]');
    if (!root) return;
    const items = Array.from(root.querySelectorAll('[data-carousel-item]'));
    if (!items.length) return;
    let active = 0;
    let paused = false;
    let timer = null;
    function render() {
        items.forEach((item, i) => {
            item.classList.remove('pos-center','pos-left1','pos-right1','pos-left2','pos-right2','is-paused');
            let raw = (i - active + items.length) % items.length;
            if (raw > items.length / 2) raw -= items.length;
            if (raw === 0) item.classList.add('pos-center');
            else if (raw === -1) item.classList.add('pos-left1');
            else if (raw === 1) item.classList.add('pos-right1');
            else if (raw === -2) item.classList.add('pos-left2');
            else if (raw === 2) item.classList.add('pos-right2');
            if (paused && raw === 0) item.classList.add('is-paused');
        });
    }
    function start() { clearInterval(timer); timer = setInterval(() => { if (!paused) { active = (active + 1) % items.length; render(); } }, 3200); }
    items.forEach((item, i) => item.addEventListener('click', e => {
        e.preventDefault(); e.stopPropagation();
        active = i; paused = true; render();
    }));
    document.addEventListener('click', e => { if (!root.contains(e.target) && paused) { paused = false; render(); } });
    render(); start();
}
function initProductTabs() {
    const tabs = Array.from(document.querySelectorAll('[data-product-tab]'));
    const panels = Array.from(document.querySelectorAll('[data-product-panel]'));
    if (!tabs.length) return;
    function openPanel(id) {
        tabs.forEach(t => t.classList.toggle('active', t.dataset.productTab === id));
        panels.forEach(p => p.classList.toggle('active', p.dataset.productPanel === id));
    }
    tabs.forEach(tab => tab.addEventListener('click', () => openPanel(tab.dataset.productTab)));
    const hash = decodeURIComponent(location.hash.replace('#',''));
    const initial = tabs.some(t => t.dataset.productTab === hash) ? hash : 'advanced-ceramics';
    openPanel(initial);
}
function initStarAssembly() {
    document.querySelectorAll('[data-star-assembly]').forEach(root => {
        const btn = root.querySelector('[data-star-toggle]');
        if (!btn) return;
        btn.addEventListener('click', () => {
            const open = root.classList.toggle('expanded');
            btn.setAttribute('aria-expanded', open ? 'true' : 'false');
            const label = btn.querySelector('[data-i18n="clickExpandStars"]');
            if (label) label.textContent = open ? (currentLang === 'zh' ? '再次点击收起零部件' : 'Click again to collapse') : translations[currentLang].clickExpandStars;
        });
    });
}

function initStarPartFocus() {
    document.querySelectorAll('[data-star-assembly]').forEach(root => {
        root.querySelectorAll('.star-part').forEach(part => {
            part.setAttribute('tabindex', '0');
            function focusPart(event) {
                event.stopPropagation();
                root.querySelectorAll('.star-part').forEach(p => p.classList.remove('is-focused'));
                part.classList.add('is-focused');
            }
            part.addEventListener('click', focusPart);
            part.addEventListener('keydown', event => {
                if (event.key === 'Enter' || event.key === ' ') focusPart(event);
            });
        });
    });
}
function initCredentialPreview() {
    const modal = document.querySelector('[data-preview-modal]');
    if (!modal) return;
    const img = modal.querySelector('[data-preview-image]');
    const title = modal.querySelector('[data-preview-title]');
    function close() {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        if (img) img.src = '';
    }
    document.querySelectorAll('[data-preview-src]').forEach(btn => {
        btn.addEventListener('click', () => {
            const src = btn.getAttribute('data-preview-src');
            const t = btn.getAttribute(currentLang === 'zh' ? 'data-preview-title-zh' : 'data-preview-title-en') || btn.getAttribute('data-preview-title-zh') || '';
            if (img) { img.src = src; img.alt = t; }
            if (title) title.textContent = t;
            modal.classList.add('is-open');
            modal.setAttribute('aria-hidden', 'false');
        });
    });
    modal.querySelectorAll('[data-preview-close]').forEach(el => el.addEventListener('click', close));
    document.addEventListener('keydown', event => { if (event.key === 'Escape' && modal.classList.contains('is-open')) close(); });
}

function initCredentialTabs() {
    const tabs = Array.from(document.querySelectorAll('[data-credential-tab]'));
    const panels = Array.from(document.querySelectorAll('[data-credential-panel]'));
    if (!tabs.length) return;
    function open(cat) {
        tabs.forEach(t => t.classList.toggle('active', t.dataset.credentialTab === cat));
        panels.forEach(p => p.classList.toggle('active', p.dataset.credentialPanel === cat));
    }
    tabs.forEach(t => t.addEventListener('click', () => open(t.dataset.credentialTab)));
    open(tabs[0].dataset.credentialTab);
}
document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang);
    initDynamicWords();
    initMobileMenu();
    initCursorGlow();
    initHonorCarousel();
    initProductTabs();
    initStarAssembly();
    initStarPartFocus();
    initCredentialTabs();
    initCredentialPreview();
    const toggle = document.getElementById('languageToggle');
    if (toggle) toggle.addEventListener('click', () => { applyLanguage(currentLang === 'zh' ? 'en' : 'zh'); initDynamicWords(); });
});
