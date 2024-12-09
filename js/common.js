// 创建雪花效果
function createSnowflakes() {
    const container = document.createElement('div');
    container.id = 'snowflakes';
    document.body.appendChild(container);

    // 初始化雪花
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = ['❄', '❅', '❆', '✧', '✦'][Math.floor(Math.random() * 5)];
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.top = -50 + Math.random() * window.innerHeight + 'px';
        snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
        snowflake.style.opacity = Math.random();
        snowflake.style.fontSize = (Math.random() * 20 + 10) + 'px';
        container.appendChild(snowflake);
    }

    // 持续创建新雪花
    setInterval(() => {
        for (let i = 0; i < 2; i++) {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            snowflake.textContent = ['❄', '❅', '❆', '✧', '✦'][Math.floor(Math.random() * 5)];
            snowflake.style.left = Math.random() * 100 + 'vw';
            snowflake.style.top = '-50px';
            snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
            snowflake.style.opacity = Math.random();
            snowflake.style.fontSize = (Math.random() * 20 + 10) + 'px';
            
            container.appendChild(snowflake);
            setTimeout(() => snowflake.remove(), 5000);
        }
    }, 200);
}

// 页面加载时初始化雪花效果
document.addEventListener('DOMContentLoaded', createSnowflakes); 