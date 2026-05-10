<style>
.bm-container { margin: 1.5rem 0; font-family: sans-serif; }
.bm-section { margin-bottom: 2rem; }
.bm-h2 { font-size: 1.1rem; font-weight: 700; margin-bottom: 1rem; padding-left: 10px; border-left: 4px solid #3b82f6; opacity: 0.8; display: flex; align-items: center; }
.bm-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 10px; }
.bm-card { display: flex; align-items: center; padding: 10px; background: rgba(128, 128, 128, 0.05); border: 1px solid rgba(128, 128, 128, 0.1); border-radius: 10px; text-decoration: none !important; color: inherit !important; transition: all 0.2s ease; }
.bm-card:hover { background: rgba(59, 130, 246, 0.08); border-color: #3b82f6; transform: translateY(-1px); }
.bm-icon { width: 20px; height: 20px; margin-right: 10px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; opacity: 0.7; }
.bm-icon img { width: 100%; height: 100%; object-fit: contain; }
.bm-name { font-size: 0.85rem; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
@media (max-width: 480px) { .bm-grid { grid-template-columns: 1fr 1fr; } }
</style>

<div class="bm-container">
  {{ $path := .Get "path" | default "bookmarks" }}
  {{ range (readDir (print "content/" $path)) }}
    {{ if (findRE ".md$" .Name) }}
      {{ $data := $.Page.GetPage (print $path "/" .Name) }}
      <section class="bm-section">
        <h2 class="bm-h2">{{ $data.Title }}</h2>
        <div class="bm-grid">
          {{ range $data.Params.items }}
          <a href="{{ .url }}" target="_blank" class="bm-card">
            <div class="bm-icon">
              <img src="https://www.google.com/s2/favicons?domain={{ .url }}&sz=32" alt="">
            </div>
            <div class="bm-name">{{ .name }}</div>
          </a>
          {{ end }}
        </div>
      </section>
    {{ end }}
  {{ end }}
</div>
