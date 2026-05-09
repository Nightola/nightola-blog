+++
title = "主页"
menu = "main"
weight = 1
+++

<div class="homepage">
  <section class="about-section">
    <div class="about-card">
      <div class="about-header">
        <img src="https://nightola.pages.dev/file/blog_avatar/1766510318687_avatar.webp" alt="亚离解星" class="about-avatar">
        <div class="about-intro">
          <h1>亚离解星</h1>
          <p class="blog-subtitle">ISTP · ACG · 音游 · 猫控</p>
          <p class="intro-text">一个自我剖析、记录生活的地方。</p>
          <a href="https://nightola.bearblog.dev/about-me/" target="_blank" class="view-more-link">查看更多关于我 →</a>
        </div>
      </div>
    </div>
  </section>

  <section class="blog-info-section">
    <div class="blog-info-card">
      <div class="blog-info-item">
        <div class="info-icon">📅</div>
        <div class="info-content">
          <div class="info-label">博客创建于</div>
          <div class="info-value">2025-12-26</div>
        </div>
      </div>
      <div class="blog-info-item">
        <div class="info-icon">✏️</div>
        <div class="info-content">
          <div class="info-label">最后更新于</div>
          <div class="info-value">刚刚</div>
        </div>
      </div>
      <div class="blog-info-item">
        <div class="info-icon">📝</div>
        <div class="info-content">
          <div class="info-label">最后发布于</div>
          <div class="info-value">刚刚</div>
        </div>
      </div>
    </div>
  </section>

  <div class="modern-divider"></div>

  <section class="gallery-section">
    <div class="section-header">
      <h2 class="title-with-icon">📸 精选照片</h2>
    </div>
    <div class="square-gallery">
      <img src="https://pic1.imgdb.cn/item/69257e7c3203f7be0031fca9.jpg" alt="1" loading="lazy">
      <img src="https://pic1.imgdb.cn/item/694689df29a616e52861bf1b.jpg" alt="2" loading="lazy">
      <img src="https://pic1.imgdb.cn/item/6925caec3203f7be0032cc00.jpg" alt="3" loading="lazy">
      <img src="https://pic1.imgdb.cn/item/6925cebc3203f7be0032d3a8.jpg" alt="4" loading="lazy">
      <img src="https://pic1.imgdb.cn/item/6925ce493203f7be0032d2d7.jpg" alt="5" loading="lazy">
      <img src="https://pic1.imgdb.cn/item/69262e0a3203f7be00331dc0.jpg" alt="6" loading="lazy">
    </div>
  </section>

  <div class="modern-divider"></div>

  <section class="gallery-section">
    <div class="section-header">
      <h2 class="title-with-icon">🎬 精选视频</h2>
    </div>
    <div class="square-gallery">
      <div class="video-container">
        <a href="https://www.bilibili.com/video/BV1m94y1Q7tr/" target="_blank" class="video-item">
          <img src="https://pic1.imgdb.cn/item/6926fca73203f7be003442b4.jpg" alt="1">
          <div class="video-overlay"><div class="play-icon">▶</div></div>
        </a>
        <p class="video-title">【六花】见世物ライフ</p>
      </div>
      <div class="video-container">
        <a href="https://www.bilibili.com/video/BV1gtzzYvEm1/" target="_blank" class="video-item">
          <img src="https://pic1.imgdb.cn/item/6926fcac3203f7be003442b9.jpg" alt="2">
          <div class="video-overlay"><div class="play-icon">▶</div></div>
        </a>
        <p class="video-title">让小fufu说话喵</p>
      </div>
      <div class="video-container">
        <a href="https://www.bilibili.com/video/BV1BbGRzNEUM/" target="_blank" class="video-item">
          <img src="https://pic1.imgdb.cn/item/6926fca93203f7be003442b7.jpg" alt="3">
          <div class="video-overlay"><div class="play-icon">▶</div></div>
        </a>
        <p class="video-title">【未抒】织风者</p>
      </div>
    </div>
  </section>

  <div class="modern-divider"></div>

  <section class="contact-section">
    <div class="section-header">
      <h2 class="title-with-icon">✉️ 联系我</h2>
    </div>
    <div class="contact-buttons">
      <div class="contact-btn qq-btn" onclick="copyQQ()">
        <span class="btn-icon">🐧</span><span class="btn-text">QQ</span>
        <span class="copy-tip" id="qqTip">点击复制</span>
      </div>
      <a href="https://space.bilibili.com/1054210524" class="contact-btn bili-btn" target="_blank">
        <span class="btn-icon">📺</span><span class="btn-text">哔哩哔哩</span>
      </a>
    </div>
  </section>
</div>

<style>
/* 这里保留你的 CSS 内容 */
:root{--accent-color:#3b82f6;--db-btn-bg:rgba(31,41,55,0.7);--db-btn-text:#fff;--text-main:#2c3e50;--text-sub:#666;--border-color:rgba(0,0,0,0.08)}
@media(prefers-color-scheme:dark){:root{--db-btn-bg:rgba(243,244,246,0.7);--db-btn-text:#111827;--text-main:#fff;--text-sub:#bbb;--border-color:rgba(255,255,255,0.12)}}
.homepage{max-width:1000px;margin:0 auto;color:var(--text-main);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;padding:0 10px 20px}
.section-header{margin:0 0 15px}
.title-with-icon{font-size:1.15em;font-weight:600;margin:0;display:flex;align-items:center;gap:8px}
.modern-divider{height:1.5px;width:100%;margin:25px 0;background:radial-gradient(circle at center,var(--border-color) 0,transparent 85%);border:none;opacity:0.8}
.about-section{margin:15px 0 20px}
.about-card{padding:25px;border-radius:20px;border:1px solid var(--border-color)}
.about-header{display:flex;align-items:flex-start;gap:25px}
.about-avatar{width:110px;height:110px;border-radius:50%;object-fit:cover;border:1px solid var(--border-color);flex-shrink:0}
.about-intro{flex:1}
.about-intro h1{font-size:1.8em;margin:0 0 5px;font-weight:700}
.blog-subtitle{color:var(--accent-color);font-size:1em;margin:0 0 10px;font-weight:600}
.intro-text{color:var(--text-sub);font-size:0.95em;line-height:1.6;margin:0 0 15px}
.view-more-link{display:inline-block;background:rgba(31, 41, 55, 0.9);color:var(--db-btn-text)!important;text-decoration:none;font-size:0.85em;font-weight:600;padding:8px 20px;border-radius:10px;transition:all .3s ease}
.blog-info-card{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.blog-info-item{display:flex;align-items:center;gap:12px;padding:12px;border-radius:15px;border:1px solid var(--border-color)}
.info-icon{font-size:1.1em;width:36px;height:36px;display:flex;align-items:center;justify-content:center;background:rgba(128,128,128,0.05);border-radius:10px}
.info-label{font-size:0.75em;color:var(--text-sub);margin-bottom:2px}
.info-value{font-size:0.85em;font-weight:700}
.gallery-section{margin-bottom:20px}
.square-gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.square-gallery img{width:100%;aspect-ratio:1/1;object-fit:cover;border-radius:10px;transition:all .3s ease;border:1px solid var(--border-color)}
.square-gallery img:hover{transform:scale(1.03)}
.video-container{display:flex;flex-direction:column;gap:8px}
.video-item{position:relative;display:block;width:100%;aspect-ratio:1/1;border-radius:10px;overflow:hidden;border:1px solid var(--border-color)}
.video-item img{width:100%;height:100%;object-fit:cover}
.video-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.2);display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .3s}
.video-item:hover .video-overlay{opacity:1}
.play-icon{color:#fff;font-size:1.1em;background:var(--db-btn-bg);width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;padding-left:3px}
.video-title{margin:0;font-size:0.8em;text-align:center;font-weight:600}
.contact-section{margin-top:25px}
.contact-buttons{display:flex;gap:12px;margin-top:10px}
.contact-btn{flex:1;display:flex;align-items:center;justify-content:center;gap:10px;padding:12px;border-radius:12px;text-decoration:none;font-weight:600;font-size:0.9em;transition:all .3s;cursor:pointer;position:relative;border:1px solid var(--border-color)}
.qq-btn{background:#12b7f5;color:#fff}
.bili-btn{background:#fb7299;color:#fff}
.copy-tip{position:absolute;top:-40px;left:50%;transform:translateX(-50%);background:#333;color:#fff;padding:5px 12px;border-radius:8px;font-size:12px;opacity:0;transition:opacity .3s;pointer-events:none}
.contact-btn:hover .copy-tip{opacity:1}
@media(max-width:768px){.about-header{flex-direction:column;align-items:center;text-align:center}.blog-info-card{grid-template-columns:1fr}.square-gallery{grid-template-columns:repeat(2,1fr)}.contact-buttons{flex-direction:column}}
</style>

<script>
function copyQQ(){
  const e=document.createElement("textarea");
  e.value="448772008";
  e.style.position="fixed";
  document.body.appendChild(e);
  e.select();
  try{
    document.execCommand("copy");
    const t=document.getElementById("qqTip");
    t.textContent="✅ 已复制!";
    setTimeout(()=>{t.textContent="点击复制"},2000);
  }catch(e){}
  document.body.removeChild(e);
}
</script>