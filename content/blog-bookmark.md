---
title: "书签"
slug: bookmark
date: 2026-05-10
---

# 书签

<div><style>
/* 核心容器：保持清晰的物理边界 */
.bm-container { max-width: 800px; margin: 2rem auto; font-family: sans-serif; color: #333; line-height: 1.5; }
.bm-section { margin-bottom: 2.5rem; }
/* 分类标题：严密的逻辑分层 */
.bm-h2 { font-size: 1.2rem; font-weight: 800; margin-bottom: 1rem; padding-left: 10px; border-left: 4px solid #3b82f6; display: flex; align-items: center; gap: 8px; opacity: 0.8; }
/* 书签网格 */
.bm-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 12px; }
/* 单个书签卡片 */
.bm-card { display: flex; align-items: center; padding: 12px; background: rgba(128, 128, 128, 0.05); border: 1px solid rgba(128, 128, 128, 0.1); border-radius: 12px; text-decoration: none !important; color: inherit !important; transition: all 0.2s ease; position: relative; overflow: hidden; }
/* 悬停效果：物理反馈优先 */
.bm-card:hover { background: rgba(59, 130, 246, 0.08); border-color: #3b82f6; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
/* 图标占位符 */
.bm-icon { width: 24px; height: 24px; margin-right: 12px; border-radius: 6px; background: #eee; display: flex; align-items: center; justify-content: center; font-size: 12px; flex-shrink: 0; }
.bm-info { overflow: hidden; }
.bm-name { font-size: 0.9rem; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.bm-desc { font-size: 0.7rem; opacity: 0.5; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-top: 2px; }
/* 移动端适配 */
@media (max-width: 480px) { .bm-grid { grid-template-columns: 1fr 1fr; } }
</style>

<div class="bm-container">
    <!-- 分类：开发与工具 -->
    <section class="bm-section">
        <h2 class="bm-h2">🛠️ 开发与生产</h2>
        <div class="bm-grid">
            <a href="https://dash.cloudflare.com/" target="_blank" class="bm-card">
                <div class="bm-icon">CF</div>
                <div class="bm-info">
                    <div class="bm-name">Cloudflare</div>
                    <div class="bm-desc">D1 & Workers 管理</div>
                </div>
            </a>
            <a href="https://github.com/" target="_blank" class="bm-card">
                <div class="bm-icon">GH</div>
                <div class="bm-info">
                    <div class="bm-name">GitHub</div>
                    <div class="bm-desc">代码托管与同步</div>
                </div>
            </a>
            <a href="https://vocaloid.com" target="_blank" class="bm-card">
                <div class="bm-icon">V</div>
                <div class="bm-info">
                    <div class="bm-name">Vocaloid</div>
                    <div class="bm-desc">调声技术参考</div>
                </div>
            </a>
        </div>
    </section>

    <!-- 分类：灵感与日常 -->
    <section class="bm-section">
        <h2 class="bm-h2">🌌 灵感与静默</h2>
        <div class="bm-grid">
            <a href="https://www.bilibili.com" target="_blank" class="bm-card">
                <div class="bm-icon">B</div>
                <div class="bm-info">
                    <div class="bm-name">Bilibili</div>
                    <div class="bm-desc">术力口情报搬运</div>
                </div>
            </a>
            <a href="#" target="_blank" class="bm-card">
                <div class="bm-icon">🐱</div>
                <div class="bm-info">
                    <div class="bm-name">个人日记</div>
                    <div class="bm-desc">受控的数字记录</div>
                </div>
            </a>
        </div>
    </section>
</div></div>
