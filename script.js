// script.js - 高擎三炬精密科技 交互与动效

// 1. 动态文字轮播 (精密测量 -> 智能控制 -> AI检测 -> 数字孪生)
const words = ["精密测量", "智能控制", "AI视觉检测", "数字孪生"];
let index = 0;
const wordElement = document.getElementById("changingWord");

function updateWord() {
    if (!wordElement) return;
    // 淡出效果
    wordElement.style.opacity = "0";
    setTimeout(() => {
        index = (index + 1) % words.length;
        wordElement.textContent = words[index];
        wordElement.style.opacity = "1";
    }, 300);
}
// 每2.8秒切换一次
if (wordElement) {
    setInterval(updateWord, 2800);
}

// 2. 鼠标跟随光晕 (高级动效)
const glow = document.querySelector(".cursor-glow");
if (glow) {
    document.addEventListener("mousemove", (e) => {
        // 使用 requestAnimationFrame 保证平滑性能
        requestAnimationFrame(() => {
            glow.style.left = e.clientX + "px";
            glow.style.top = e.clientY + "px";
        });
    });
    
    // 鼠标移出窗口时稍微隐藏光晕避免突兀 (可选)
    document.addEventListener("mouseleave", () => {
        glow.style.opacity = "0";
    });
    document.addEventListener("mouseenter", () => {
        glow.style.opacity = "1";
    });
}

// 3. 按钮交互 + 平滑滚动提醒 + 控制台占位演示
const exploreBtn = document.getElementById("exploreBtn");
const contactBtn = document.getElementById("contactBtn");

if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
        // 优雅提示 + 滚动到核心技术区域
        const techSection = document.getElementById("tech");
        if (techSection) {
            techSection.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            // 如果不存在则后备
            window.location.href = "#tech";
        }
        // 简洁的控制台占位输出（体现占位符但又不影响用户）
        console.log("✨ GAOCO 探索前沿技术 | 高擎三炬 精密智造");
    });
}

if (contactBtn) {
    contactBtn.addEventListener("click", () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
            // 后备 fallback 联系区域也可在 footer 附近
            const footerContact = document.querySelector(".contact-card");
            if (footerContact) footerContact.scrollIntoView({ behavior: "smooth" });
        }
        console.log("📧 联系 GAOCO: contact@gaoco.org | 期待与您合作");
    });
}

// 4. 为卡片增加细腻的进入视口动效 (淡入+上浮，提升占位符精致度)
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
    // 初始状态透明 + 微沉
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1), transform 0.5s ease";
    cardObserver.observe(card);
});

// 5. 导航高亮 + 平滑滚动增强 (优化用户体验)
const navLinks = document.querySelectorAll("nav a");
const sections = ["home", "tech", "about", "contact"];

function updateActiveNav() {
    let current = "";
    const scrollPos = window.scrollY + 120; // 偏移量适应sticky header

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

// 6. 为联系卡片/按钮添加额外的小交互动画（点击波纹简单效果）
const allBtns = document.querySelectorAll(".btn, .card-btn, .about-more-btn");
allBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        // 微妙的按压感 (不是必须，但增加占位符细节)
        btn.style.transform = "scale(0.97)";
        setTimeout(() => {
            btn.style.transform = "";
        }, 150);
    });
});

// 7. 给所有带导航的链接增加平滑滚动拦截（防止默认跳转闪烁）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        const targetId = this.getAttribute("href");
        if (targetId === "#" || targetId === "") return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: "smooth" });
            // 更新URL hash而不引起跳转（可选，不影响美观）
            history.pushState(null, null, targetId);
        }
    });
});

// 8. 额外占位提示：控制台输出企业域名，让开发者一目了然
console.log(
    "%c高擎三炬精密科技 | GAOCO 占位页面已加载\n域名: gaoco.org\n精密智造，定义微米级未来",
    "color: #42a5f5; font-size: 14px; font-weight: bold;"
);

// 9. 为数字统计增加简单的动态计数（装饰增强）
const statNumbers = document.querySelectorAll(".stats strong");
if (statNumbers.length) {
    // 只执行一次的小动效，不复杂，当数字进入可视区时略微高亮
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

// 10. 针对移动端菜单简单处理（尽管目前无折叠菜单但提供良好的基础结构，可扩展）
const mobileBtn = document.getElementById("mobileMenuBtn");
if (mobileBtn) {
    const navMenu = document.querySelector("nav");
    mobileBtn.addEventListener("click", () => {
        if (navMenu) {
            navMenu.classList.toggle("open");
            const expanded = navMenu.classList.contains("open");
            mobileBtn.setAttribute("aria-expanded", expanded);
        }
    });
}

// 说明：因为原html中并无mobileMenuBtn元素，为了避免错误，已有判断包裹；
// 后续如需增加移动菜单按钮，样式即可无缝支持。