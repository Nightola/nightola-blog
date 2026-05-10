+++
title = "低配安卓软件"
slug = "low-end-android-app"
+++

<style>
:root {
  --accent-color: #3b82f6;
  --text-main: #2c3e50;
  --text-desc: #1a1a1a; 
  --text-sub: #888;
  --border-color: rgba(0,0,0,0.06);
  --btn-bg: #1f2937; 
}
@media (prefers-color-scheme: dark) {
  :root {
    --text-main: #eee;
    --text-desc: #ffffff; 
    --text-sub: #aaa;
    --border-color: rgba(255,255,255,0.12);
  }
}

.phone-info {
  display: flex;
  background: transparent; 
  border: 1px solid var(--border-color); 
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 20px;
  gap: 15px;
  align-items: flex-start; 
}
.phone-image-large {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  flex-shrink: 0;
  margin-top: 2px;
}
.phone-details { flex: 1; min-width: 0; }
.phone-model-title {
  font-size: 1.15em;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: var(--text-main);
  line-height: 1.1;
}
.phone-specs-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px 10px;
}
.phone-specs-list li { font-size: 0.82em; color: var(--text-sub); }
.phone-specs-list strong { color: var(--text-main); margin-right: 2px; }

@media (max-width: 600px) {
  .phone-info { padding: 12px; gap: 10px; }
  .phone-image-large { width: 75px; height: 75px; margin-top: 1px; }
  .phone-model-title { font-size: 1.05em; }
  .phone-specs-list li { font-size: 0.75em; }
}
</style>

<div class="phone-info">
  <img src="https://pic1.imgdb.cn/item/6927efd53203f7be00372206.png" class="phone-image-large">
  <div class="phone-details">
    <div class="phone-model-title">红米 8A (LineageOS)</div>
    <ul class="phone-specs-list">
      <li><strong>发布：</strong>2019.10</li>
      <li><strong>屏幕：</strong>6.22"</li>
      <li><strong>内存：</strong>4GB</li>
      <li><strong>存储：</strong>64GB</li>
      <li><strong>CPU：</strong>骁龙439</li>
      <li><strong>电池：</strong>5000mAh</li>
    </ul>
  </div>
</div>

## 📦 应用推荐

资源密码：fkx1

{{< app_list >}}
