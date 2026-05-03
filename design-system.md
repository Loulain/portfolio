# Design System — LOU Portfolio
**Version 2.0 · Updated 2026-05-03**

> 此文件是 AI 維持視覺一致性的主要參照依據。所有修改必須嚴格遵循以下規則。

---

## 0. AI 使用規則（必讀）

### 必須遵守
- **所有顏色**只能使用 `hsl(var(--token))` 語法，不得寫死任何 hex 或 rgb 值
- **所有圓角**必須使用 `--radius` 衍生值，不得自行定義新的像素值
- **主色調**永遠是 Hue 20（橙棕色），禁止引入藍色、綠色或其他色系作為主色
- **標題**使用 `Noto Serif TC`，**內文**使用 `Noto Sans TC`，禁止引入新字體
- **間距**必須使用 4px 倍數，優先選用已定義的 `--space-*` 值
- **新元件**必須支援 Light 和 Dark 兩個主題
- **動畫緩動**只能使用 `var(--ease-out-expo)` 或 `ease`，不得使用其他 cubic-bezier

### 禁止模式
- ❌ `color: #D97757` → ✅ `color: hsl(var(--primary))`
- ❌ `background: white` → ✅ `background-color: hsl(var(--card))`
- ❌ `border-radius: 10px` → ✅ `border-radius: var(--radius)`
- ❌ `font-family: 'Roboto'` → ✅ `font-family: var(--font-sans)`
- ❌ 新增 `@keyframes` 未告知 → ✅ 重用 scroll reveal 或 ds-fade 機制
- ❌ 使用 `box-shadow: 0 2px 4px rgba(0,0,0,0.1)` → ✅ `box-shadow: var(--shadow-sm)`

### Token 選用決策樹

```
需要背景色？
├─ 頁面底色 → --background
├─ 卡片/浮層 → --card
├─ 次要底色/縮圖 → --muted
└─ 表單輸入框 → --input

需要文字顏色？
├─ 主要內文 → --foreground
├─ 次要說明/標籤 → --muted-foreground
├─ 卡片內文字 → --card-foreground
└─ 主色強調文字 → --primary

需要邊框？
└─ 所有邊框 → --border

需要強調色？
├─ 按鈕/連結/重點 → --primary
├─ 主色背景(低透明) → --accent (var形式，非hsl)
└─ focus ring → --ring
```

---

## 1. 色彩系統 Color Tokens

所有顏色以 CSS HSL 變數定義，透過 `hsl(var(--token))` 使用。

### Light Theme（預設 `:root`）

| Token | HSL 值 | Hex 近似值 | 說明 |
|-------|--------|-----------|------|
| `--background` | `37 36% 94%` | `#FAFAF7` | 頁面底色，暖米白 |
| `--foreground` | `240 28% 14%` | `#1A1A2E` | 主要文字，深靛藍調 |
| `--card` | `0 0% 100%` | `#FFFFFF` | 卡片底色，純白 |
| `--card-foreground` | `240 28% 14%` | `#1A1A2E` | 卡片文字 |
| `--muted` | `40 27% 89%` | `#EDE9DF` | 次要背景、縮圖底色 |
| `--muted-foreground` | `60 3% 52%` | `#858570` | 次要文字、標籤、說明文 |
| `--border` | `37 26% 83%` | `#DDD8CE` | 邊框 |
| `--input` | `40 20% 90%` | `#E8E4DC` | 表單輸入框底色 |
| `--primary` | `20 65% 47%` | `#C4643A` | 主色調，暖橙棕 |
| `--primary-foreground` | `0 0% 100%` | `#FFFFFF` | 主色上的文字 |
| `--ring` | `20 65% 47%` | `#C4643A` | focus 外框顏色 |
| `--accent` | `hsl(20 65% 47% / 0.08)` | — | 主色調低透明度背景（直接用 `var(--accent)`）|
| `--nav-bg` | `hsl(37 36% 94% / 0.85)` | — | Navbar 半透明背景 |

### Dark Theme（`.dark` class）

| Token | HSL 值 | Hex 近似值 | 說明 |
|-------|--------|-----------|------|
| `--background` | `240 10% 8%` | `#12131A` | 近黑底色 |
| `--foreground` | `37 30% 94%` | `#EDEBE4` | 暖白文字 |
| `--card` | `240 8% 12%` | `#1C1D26` | 深灰卡片 |
| `--card-foreground` | `37 30% 94%` | `#EDEBE4` | 卡片文字 |
| `--muted` | `240 6% 16%` | `#252630` | 次要背景 |
| `--muted-foreground` | `240 5% 65%` | `#9A9BAD` | 次要文字 |
| `--border` | `240 6% 20%` | `#2E2F3D` | 邊框 |
| `--input` | `240 6% 16%` | `#252630` | 輸入框底色 |
| `--primary` | `20 80% 60%` | `#E8845A` | 主色調，亮橙色 |
| `--primary-foreground` | `240 10% 8%` | `#12131A` | 主色上的文字（深色）|
| `--accent` | `hsl(20 80% 60% / 0.12)` | — | 主色低透明度背景 |
| `--nav-bg` | `hsl(240 10% 8% / 0.85)` | — | Navbar 半透明背景 |

### 陰影 Shadows

| Token | 值 | 使用情境 |
|-------|----|---------|
| `--shadow-sm` | `0 1px 2px 0 hsl(240 10% 8% / 0.04)` | 細微層次 |
| `--shadow-md` | `0 8px 24px hsl(240 10% 8% / 0.08)` | 卡片 hover、下拉選單 |
| `--shadow-lg` | `0 16px 40px hsl(240 10% 8% / 0.1)` | 卡片 hover 強調效果 |

---

## 2. 字體排版 Typography

### 字體家族

| 變數 | 字體 | 使用情境 |
|------|------|---------|
| `--font-serif` | `'Fraunces', 'Noto Serif TC', serif` | — |
| `--font-serif-tc` | `'Noto Serif TC', 'Fraunces', serif` | 標題、強調文字 |
| `--font-sans` | `'Inter', 'Noto Sans TC', system-ui, sans-serif` | 內文、介面元素 |
| `--font-mono` | `'JetBrains Mono', monospace` | 程式碼 |

**規則：標題 → Serif TC，介面文字 → Sans，禁止混用。**

### 基礎設定

```css
body {
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.8;
  -webkit-font-smoothing: antialiased;
}
```

### 字體比例（Type Scale）

| 用途 | 字級 | 字重 | 字距 | 行高 | 字體 |
|------|------|------|------|------|------|
| Hero 主標題 | `clamp(3.5rem, 8vw, 7rem)` | 700 | `-0.03em` | `1.08` | Serif TC |
| About / Page H1 | `clamp(2.5rem, 6vw, 4.5rem)` | 700 | `-0.03em` | — | Serif TC |
| 專案頁標題 | `clamp(2.2rem, 5vw, 3.5rem)` | 700 | `-0.02em` | — | Serif TC |
| 聯絡標題 | `clamp(1.8rem, 4vw, 2.6rem)` | 700 | `-0.02em` | — | Sans |
| 內文 H2 | `28px` | 600 | — | — | Serif TC |
| 內文 H3 | `22px` | 600 | — | — | Serif TC |
| 卡片標題 | `20px` | 600 | `-0.01em` | — | Serif TC |
| Timeline 職稱 | `20px` | 600 | — | — | Serif TC |
| Navbar Logo | `22px` | 700 | `-0.02em` | — | Serif TC |
| Section Label | `13px` | 600 | `0.1em` | — | Sans（全大寫）|
| 導覽連結 | `14px` | 500 | — | — | Sans |
| 內文段落 | `16px` | 400 | — | `1.8–1.9` | Sans |
| 次要說明 | `15px` | 400 | — | `1.7–1.8` | Sans |
| 小標籤 / 日期 | `13–14px` | 400–500 | — | — | Sans |
| Tag 標籤 | `12px` | 500 | — | — | Sans |

---

## 3. 間距 Spacing

### 間距比例（4px Grid）

| Token | 值 | 常見用途 |
|-------|----|---------|
| `--space-1` | `4px` | tag padding 垂直 |
| `--space-2` | `8px` | form label margin-bottom |
| `--space-3` | `12px` | tag padding 水平、dropdown 內距 |
| `--space-4` | `16px` | form gap、小元件 gap |
| `--space-5` | `24px` | container padding、card body |
| `--space-6` | `32px` | nav link gap、projects grid gap |
| `--space-7` | `48px` | section title 下距、footer padding |
| `--space-8` | `64px` | section padding 手機版 |
| `--space-9` | `96px` | section padding 桌面版 |
| `--space-10` | `128px` | — |

### 全域佈局

| 用途 | 值 |
|------|----|
| Container max-width | `1080px` |
| Container padding | `0 24px` |
| Section 垂直間距 | `96px 0`（手機：`64px 0`）|
| Navbar 高度 | `64px` |
| Hero padding-top | `180px`（手機：`140px`）|
| Project 閱讀寬度 | `640–720px` |

### 元件常用間距

| 用途 | 值 |
|------|----|
| 卡片 body padding | `20px 24px 24px` |
| 按鈕 padding | `14px 36px` |
| 按鈕最小高度 | `48px` |
| 輸入框 padding | `14px 20px` |
| Textarea padding | `16px 20px`，`min-height: 180px` |
| Section title 下距 | `48px`（手機：`32px`）|
| 表單群組下距 | `20px` |

---

## 4. 圓角 Border Radius

| 值 | 表達式 | 用途 |
|----|--------|------|
| `6px` | `calc(var(--radius) - 2px)` | Tag、下拉選單項目 |
| `8px` | `var(--radius)` | 卡片、按鈕、Theme Toggle |
| `12px` | `calc(var(--radius) + 4px)` | 單行 input 欄位 |
| `50%` | `50%` | 圓形圖示、Timeline dot |
| `99px` | `99px` | Pill badge、outlined button |

---

## 5. 動態效果 Motion

### 緩動函數

| Token | 值 | 使用情境 |
|-------|----|---------|
| `--ease-out-expo` | `cubic-bezier(0.22, 1, 0.36, 1)` | 卡片浮起、scroll reveal、圖片縮放 |
| `--transition-theme` | `0.3s ease` | 主題切換顏色過渡 |

### 動畫時長規則

| 情境 | 時長 | 緩動 |
|------|------|------|
| 顏色、邊框、hover 微互動 | `0.2s` | `ease` |
| 主題切換 | `0.3s` | `ease` |
| 卡片浮起（transform） | `0.3s` | `var(--ease-out-expo)` |
| 圖片縮放、icon 旋轉 | `0.4s` | `var(--ease-out-expo)` |
| Scroll Reveal（入場） | `0.7s` | `var(--ease-out-expo)` |

### Scroll Reveal 使用規則

```html
<!-- JS 必須載入 main.js 才有效果 -->
<div class="reveal" data-delay="1">第一個元素</div>
<div class="reveal" data-delay="2">第二個元素</div>
```

| `data-delay` | 延遲時間 | 用途 |
|-------------|---------|------|
| `1` | 0.08s | 第一個元素 |
| `2` | 0.16s | 第二個元素 |
| `3` | 0.24s | 第三個元素 |
| `4` | 0.32s | 第四個元素 |
| `5` | 0.40s | 第五個元素 |
| `6` | 0.48s | 第六個元素（最多） |

---

## 6. 元件清單 Components

### 6.1 Navbar

```html
<nav class="navbar">
  <div class="container">
    <a href="/" class="navbar__logo">LOU</a>
    <ul class="navbar__links">
      <li><a href="/" class="active">Work</a></li>
      <li class="navbar__dropdown">
        <a href="#">Projects</a>
        <ul class="navbar__dropdown-menu">...</ul>
      </li>
    </ul>
    <div class="navbar__actions">
      <button class="theme-toggle" data-theme-toggle aria-label="切換主題">...</button>
      <button class="navbar__hamburger" aria-label="選單">...</button>
    </div>
  </div>
</nav>
```

**規格：**
- 固定頂部，`z-index: 100`，`height: 64px`
- `backdrop-filter: blur(12px)` 毛玻璃
- 下拉選單：hover 觸發，`opacity/visibility` 切換

### 6.2 Tag

```html
<span class="tag">UI Design</span>
```

- 字級 `12px` · 字重 `500` · 顏色 `--primary` · 背景 `--accent`
- padding `4px 12px` · 圓角 `6px`

### 6.3 Button

```html
<button class="btn">主要按鈕</button>
<button class="btn btn--full">全寬按鈕</button>
<button class="btn btn--outlined">次要按鈕</button>
```

- 最小高度 `48px` · padding `14px 36px`
- hover：`translateY(-1px)` + primary shadow
- active：回到原位，shadow 消失

### 6.4 Project Card

```html
<a class="project-card" href="works/project-1.html">
  <div class="project-card__thumb">
    <img src="..." alt="...">
  </div>
  <div class="project-card__body">
    <div class="project-card__tags">
      <span class="tag">Design System</span>
    </div>
    <h2 class="project-card__title">建構品牌元件庫</h2>
    <p class="project-card__desc">專案簡介說明文字。</p>
  </div>
</a>
```

- 縮圖比例 `16/10` · Grid `repeat(2, 1fr)` · gap `32px`
- hover：`translateY(-6px)` + `shadow-lg` + primary border

### 6.5 Timeline

```html
<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-item__date">2024 — 現在</div>
    <div class="timeline-item__role">Senior Product Designer</div>
    <div class="timeline-item__company">公司名稱</div>
    <div class="timeline-item__desc">職責描述。</div>
  </div>
</div>
```

- 左側 `2px border` · 節點 `10px` 實心圓
- hover：節點 `scale(1.25)`

### 6.6 Stakeholder Card / Result Stat

```html
<div class="stakeholder-grid">
  <div class="stakeholder-card">
    <div class="stakeholder-card__icon">PM</div>
    <div class="stakeholder-card__role">Product Manager</div>
    <div class="stakeholder-card__quote">引述文字</div>
  </div>
</div>

<div class="results-grid">
  <div class="result-stat">
    <div class="result-stat__number">↑40%</div>
    <div class="result-stat__text">說明文字</div>
  </div>
</div>
```

- 三欄網格（手機單欄）· padding `32px 24px` · 文字置中
- hover：`translateY(-4px)` + `shadow-md`

### 6.7 Challenge Block

```html
<div class="challenge-pair">
  <div class="challenge-block">
    <div class="challenge-block__label">Challenge</div>
    <div class="challenge-block__title">問題標題</div>
    <div class="challenge-block__desc">問題描述。</div>
  </div>
  <div class="challenge-block">
    <div class="challenge-block__label">Solution</div>
    <div class="challenge-block__title">解法標題</div>
    <div class="challenge-block__desc">解法描述。</div>
  </div>
</div>
```

- padding `28px 32px` · Label `12px` 全大寫 · primary 色

### 6.8 Process Flow

```html
<div class="process-flow">
  <div class="process-step">
    <div class="process-step__num">01</div>
    <div class="process-step__text">步驟說明</div>
  </div>
</div>
```

- 橫向 flex（手機垂直）· gap `16px`
- 數字 `32px` Serif · hover：`translateY(-3px)`

### 6.9 TOC（目錄側欄）

```html
<nav class="toc">
  <ul class="toc__list">
    <li><a href="#section-1">章節名稱</a></li>
  </ul>
</nav>
```

- 固定 `left: 24px`，螢幕 `< 1200px` 自動隱藏
- active 連結：primary 左側線 `2px` · 字重 `500`
- 錨點需設 `scroll-margin-top: 88px`

### 6.10 Contact Form

```html
<form class="contact-form">
  <div class="contact-form__row">
    <div class="form-group">
      <label for="name">姓名</label>
      <input type="text" id="name">
    </div>
  </div>
  <div class="form-group">
    <label for="msg">內容</label>
    <textarea id="msg"></textarea>
  </div>
  <button type="submit" class="btn btn--full">送出</button>
</form>
```

- 雙欄（手機單欄）· input 圓角 `12px`
- focus ring：`3px hsl(var(--primary) / 0.15)`

---

## 7. 響應式斷點 Breakpoints

| 斷點 | 說明 |
|------|------|
| `> 1199px` | TOC 側欄顯示 |
| `≤ 1199px` | TOC 隱藏 |
| `≤ 768px` | 漢堡選單、單欄佈局、字級調整 |

### Mobile（≤ 768px）主要調整

| 元素 | 桌面 | 手機 |
|------|------|------|
| Navbar | 橫向列表 | 漢堡 + 展開選單 |
| Hero padding-top | `180px` | `140px` |
| Section padding | `96px 0` | `64px 0` |
| Projects grid | `2fr` | `1fr` |
| Form | 雙欄 | 單欄 |
| Stakeholder / Results | 三欄 | 單欄 |
| Process Flow | 橫向 | 垂直 |
| Button | 自動寬度 | `width: 100%` |

---

## 8. 無障礙 Accessibility

**所有互動元素必須滿足：**

- `focus-visible` 外框：`2px solid hsl(var(--ring))` + `outline-offset: 2px`
- 最小點擊區域：`min-height: 44px`（或 `min-width: 44px`）
- 圖示按鈕需有 `aria-label`
- Theme Toggle 需有 `aria-pressed` 狀態
- `prefers-reduced-motion` 媒體查詢：關閉所有 reveal 動畫與 transition
- `color-scheme: light dark` 聲明讓瀏覽器元件跟隨主題

**必要的 ARIA 屬性：**

```html
<!-- Icon-only button -->
<button aria-label="切換主題" aria-pressed="false">...</button>

<!-- Image with context -->
<img src="..." alt="描述圖片內容的文字">

<!-- Nav with active state -->
<a href="/" aria-current="page">Work</a>
```

---

## 9. 設計原則 Design Principles

1. **暖色調中性**：主色 Hue 20（橙棕），背景用暖米白，避免冷調純白或高飽和色
2. **Typography 主導層次**：Serif 標題製造溫度，Sans 內文保持清晰，大小落差明確
3. **細節動態**：每個互動（hover/focus/active）都有對應的 transform 或顏色回饋
4. **主題無縫切換**：所有元件透過 CSS 變數切換，不用 JS 干預顏色
5. **內容呼吸感**：容器最大寬 `1080px`，閱讀寬度 `640–720px`，版心不塞滿
6. **一致的 hover 語言**：
   - 卡片 → `translateY(-4 to -6px)` + shadow
   - 按鈕 → `translateY(-1px)` + shadow
   - 文字連結 → underline 展開
   - 圖示 → scale 或 rotate

---

## 10. 新頁面 Checklist（給 AI）

建立新頁面時，逐一確認：

- [ ] `<html lang="zh-Hant">` 語言屬性
- [ ] 主題初始化 script（inline，避免 FOUC）
- [ ] 引入 `style.css`
- [ ] 引入 `main.js`（defer 或底部）
- [ ] Navbar 結構正確，含 `.theme-toggle`
- [ ] Hero section `padding-top: 180px`（手機 140px）
- [ ] 所有圖片有 `alt` 屬性
- [ ] 互動元素有 `focus-visible` 支援（style.css 已全域套用）
- [ ] 新增元件有 Light/Dark 雙主題支援
- [ ] 滾動進場元素加 `.reveal` + `data-delay`
- [ ] 長篇內文使用 `max-width: 640–720px`
- [ ] Footer 統一格式

---

## 11. 修改頁面 Checklist（給 AI）

修改現有頁面時，確認：

- [ ] 未硬寫任何顏色值（hex / rgb）
- [ ] 未引入新字體
- [ ] 新元件與現有元件視覺風格一致
- [ ] hover 動畫使用相同緩動函數
- [ ] 手機斷點 `≤ 768px` 已測試
- [ ] Dark mode 外觀正確
- [ ] 沒有破壞現有 CSS 的 cascade
