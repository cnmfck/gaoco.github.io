// script.js - 高擎三炬精密科技 交互与动效

// 1. 动态文字轮播 (精密测量 -> 智能控制 -> AI检测 -> 数字孪生)
const words = ["精密测量", "智能控制", "AI视觉检测", "数字孪生"];
let index = 0;
const wordElement = document.getElementById("changingWord");

function updateWord() {
    if (!wordElement) return;
    wordElement.style.opacity = "0";
    setTimeout(() => {
        index = (index + 1) % words.length;
        wordElement.textContent = words[index];
        wordElement.style.opacity = "1";
    }, 300);
}
if (wordElement) {
    setInterval(updateWord, 2800);
}

// 2. 鼠标跟随光晕
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

// 3. 按钮交互 + 平滑滚动
const exploreBtn = document.getElementById("exploreBtn");
const contactBtn = document.getElementById("contactBtn");

if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
        const techSection = document.getElementById("tech");
        if (techSection) {
            techSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        console.log("✨ GAOCO 探索前沿技术 | 高擎三炬 精密智造");
    });
}

if (contactBtn) {
    contactBtn.addEventListener("click", () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
            const footerContact = document.querySelector(".contact-card");
            if (footerContact) footerContact.scrollIntoView({ behavior: "smooth" });
        }
        console.log("📧 联系 GAOCO: gaoco@126.com | 期待与您合作");
    });
}

// 4. 卡片进入视口动效 (淡入+上浮)
const cards = document.querySelectorAll(".card");
const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -20px 0px"
};

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            cardObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1), transform 0.5s ease";
    cardObserver.observe(card);
});

// 5. 导航高亮 + 平滑滚动增强
const navLinks = document.querySelectorAll("nav a");
const sections = ["home", "tech", "about", "contact"];

function updateActiveNav() {
    let current = "";
    const scrollPos = window.scrollY + 120;
    for (let sec of sections) {
        const element = document.getElementById(sec);
        if (element) {
            const offsetTop = element.offsetTop;
            const offsetBottom = offsetTop + element.offsetHeight;
            if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
                current = sec;
                break;
            }
        }
    }
    navLinks.forEach(link => {
        link.style.color = "";
        const href = link.getAttribute("href")?.substring(1);
        if (href === current) {
            link.style.color = "#42a5f5";
            link.style.fontWeight = "600";
        } else {
            link.style.fontWeight = "500";
        }
    });
}

window.addEventListener("scroll", () => {
    requestAnimationFrame(updateActiveNav);
});
window.addEventListener("load", updateActiveNav);

// 6. 按钮点击微动效
const allBtns = document.querySelectorAll(".btn, .card-btn, .about-more-btn");
allBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        btn.style.transform = "scale(0.97)";
        setTimeout(() => {
            btn.style.transform = "";
        }, 150);
    });
});

// 7. 锚点平滑滚动拦截 (避免默认跳动)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        const targetId = this.getAttribute("href");
        if (targetId === "#" || targetId === "") return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: "smooth" });
            history.pushState(null, null, targetId);
        }
    });
});

// 8. 控制台品牌输出
console.log(
    "%c高擎三炬精密科技 | GAOCO 精准智造平台\n域名: gaoco.org | 纳米级测量 · 工业4.0解决方案 | 搜索引擎优化已集成结构化数据",
    "color: #42a5f5; font-size: 14px; font-weight: bold;"
);

// 9. 统计数字视觉高亮动效
const statNumbers = document.querySelectorAll(".stats strong");
if (statNumbers.length) {
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

// 10. 移动菜单预留扩展
console.log("GAOCO 高擎三炬 | 精密驱动未来 · 已为搜索引擎优化meta+jsonLD");