class BilibiliTV {
    constructor() {
        this.API_ENDPOINT = 'https://api.bilibili.com/x/web-interface/ranking/v2';
        this.videoGrid = document.getElementById('video-grid');
        
        // 初始化电视端功能
        this.initTVNavigation();
        this.loadVideos();
    }

    async loadVideos() {
        try {
            const response = await fetch(this.API_ENDPOINT);
            const data = await response.json();
            this.renderVideos(data.data.list);
        } catch (error) {
            console.error('视频加载失败:', error);
        }
    }

    renderVideos(videos) {
        this.videoGrid.innerHTML = videos.map(video => `
            <div class="tv-card" tabindex="0">
                <img src="${video.pic}" 
                     class="tv-card-image" 
                     alt="${video.title}"
                     loading="lazy">
                <div class="tv-card-info">
                    <h3 class="tv-card-title">${video.title}</h3>
                    <div class="tv-card-stats">
                        <span>👁 ${this.formatNumber(video.stat.view)}</span>
                        <span>💬 ${this.formatNumber(video.stat.danmaku)}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    formatNumber(num) {
        return num > 10000 ? (num/10000).toFixed(1) + '万' : num;
    }
}

// 初始化应用
new BilibiliTV();
