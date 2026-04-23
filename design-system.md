# Design System — Personal Portfolio

> 基於 shadcn 風格的暖色調設計系統，支援 Light / Dark 雙主題。

---

## 1. 色彩系統 Color Tokens

所有顏色以 CSS HSL 變數定義，透過 `hsl(var(--token))` 使用。

### Light Theme（預設）

| Token | HSL 值 | 說明 |
|-------|--------|------|
| `--background` | `37 36% 94%` | 頁面底色，暖米白 |
| `--foreground` | `240 28% 14%` | 主要文字，深靛藍 |
| `--card` | `0 0% 100%` | 卡片底色，純白 |
| `--card-foreground` | `240 28% 14%` | 卡片文字 |
| `--muted` | `40 27% 89%` | 次要背景、縮圖底色 |
| `--muted-foreground` | `60 3% 52%` | 次要文字、標籤、說明文 |
| `--border` | `37 26% 83%` | 邊框 |
| `--input` | `40 20% 90%` | 表單輸入框底色 |
| `--primary` | `20 65% 47%` | 主色調，暖橙棕 |
| `--primary-foreground` | `0 0% 100%` | 主色上的文字 |
| `--ring` | `20 65% 47%` | focus 外框顏色 |
| `--accent` | `hsl(20 65% 47% / 0.08)` | 主色調低透明度背景 |
| `--nav-bg` | `hsl(37 36% 94% / 0.85)` | Navbar 半透明背景 |

### Dark Theme（`.dark`）

| Token | HSL 值 | 說明 |
|-------|--------|------|
| `--background` | `240 10% 8%` | 近黑底色 |
| `--foreground` | `37 30% 94%` | 暖白文字 |
| `--card` | `240 8% 12%` | 深灰卡片 |
| `--card-foreground` | `37 30% 94%` | 卡片文字 |
| `--muted` | `240 6% 16%` | 次要背景 |
| `--muted-foreground` | `240 5% 65%` | 次要文字 |
| `--border` | `240 6% 20%` | 邊框 |
| `--input` | `240 6% 16%` | 輸入框底色 |
| `--primary` | `20 80% 60%` | 主色調，亮橙色 |
| `--primary-foreground` | `240 10% 8%` | 主色上的文字 |
| `--accent` | `hsl(20 80% 60% / 0.12)` | 主色低透明度背景 |
| `--nav-bg` | `hsl(240 10% 8% / 0.85)` | Navbar 半透明背景 |

### 陰影 Shadows

| Token | 值 | 使用情境 |
|-------|----|---------|
| `--shadow-sm` | `0 1px 2px 0 hsl(240 10% 8% / 0.04)` | 細微層次 |
| `--shadow-md` | `0 8px 24px hsl(240 10% 8% / 0.08)` | 卡片 hover、下拉選單 |
| `--shadow-lg` | `0 16px 40px hsl(240 10% 8% / 0.1)` | 卡片 hover 強調 |

---

## 2. 字體排版 Typography

### 字體家族

| 角色 | 字體 | CSS |
|------|------|-----|
| 主要內文 | Noto Sans TC | `font-family: "Noto Sans TC", sans-serif` |
| 標題 / 強調 | Noto Serif TC | `font-family: "Noto Serif TC", serif` |

使用 `.serif` class 可將任何元素切換為襯線字體。

### 基礎設定

| 屬性 | 值 |
|------|----|
| 基礎字級 | `16px` |
| 行高 | `1.8` |
| 字體平滑 | `-webkit-font-smoothing: antialiased` |

### 字體比例

| 用途 | 字級 | 字重 | 字距 | 行高 | 字體 |
|------|------|------|------|------|------|
| Hero 主標題 | `clamp(3.5rem, 8vw, 7rem)` | 700 | `-0.03em` | `1.08` | Serif |
| About 頁標題 | `clamp(2.5rem, 6vw, 4.5rem)` | 700 | `-0.03em` | — | Serif |
| 專案頁標題 | `clamp(2.2rem, 5vw, 3.5rem)` | 700 | `-0.02em` | — | Serif |
| 聯絡標題 | `clamp(1.8rem, 4vw, 2.6rem)` | 700 | `-0.02em` | — | Sans |
| 內文 H2 | `28px` | 600 | — | — | Serif |
| 內文 H3 | `22px` | 600 | — | — | Serif |
| 卡片標題 | `20px` | 600 | `-0.01em` | — | Serif |
| Timeline 職稱 | `20px` | 600 | — | — | Serif |
| Navbar Logo | `22px` | 700 | `-0.02em` | — | Serif |
| Section Label | `13px` | 600 | `0.1em` | — | Sans（全大寫）|
| 導覽連結 | `14px` | 500 | — | — | Sans |
| 內文段落 | `16px` | 400 | — | `1.8–1.9` | Sans |
| 次要說明 | `15px` | 400 | — | `1.7–1.8` | Sans |
| 小標籤 / 日期 | `13–14px` | 400–500 | — | — | Sans |
| Tag 標籤 | `12px` | 500 | — | — | Sans |

---

## 3. 間距 Spacing

### 全域佈局

| 用途 | 值 |
|------|----|
| 容器最大寬度 | `1080px` |
| 容器水平內距 | `24px` |
| Section 垂直間距 | `96px 0`（手機：`64px 0`）|
| Navbar 高度 | `64px` |
| Hero 頂部間距 | `180px`（手機：`140px`）|

### 元件常用間距

| 用途 | 值 |
|------|----|
| 卡片 body padding | `20px 24px 24px` |
| 按鈕 padding | `14px 36px` |
| 輸入框 padding | `14px 20px` |
| Textarea padding | `16px 20px` |
| Section title 下距 | `48px`（手機：`32px`）|
| 表單群組下距 | `20px` |
| 導覽連結間距 | `32px` |

---

## 4. 圓角 Border Radius

| Token | 值 | 用途 |
|-------|----|------|
| `--radius` | `0.5rem` (8px) | 卡片、按鈕、輸入框 |
| `calc(var(--radius) - 2px)` | `6px` | Tag、下拉選單項目、Stakeholder icon |
| `calc(var(--radius) + 4px)` | `12px` | 單行輸入框 input |
| `50%` | — | 圓形圖示（Stakeholder icon、Timeline dot）|

---

## 5. 動態效果 Motion

### 緩動函數

| Token | 值 | 使用情境 |
|-------|----|---------|
| `--ease-out-expo` | `cubic-bezier(0.22, 1, 0.36, 1)` | 卡片浮起、scroll reveal、圖片縮放 |
| `--transition-theme` | `0.3s ease` | 主題切換時所有顏色過渡 |

### 常用動畫時長

| 情境 | 時長 |
|------|------|
| 顏色、邊框切換 | `0.2s ease` |
| 主題切換 | `0.3s ease` |
| 卡片 transform | `0.3s var(--ease-out-expo)` |
| 圖片縮放 | `0.4s var(--ease-out-expo)` |
| Icon 旋轉 | `0.4s var(--ease-out-expo)` |
| Scroll Reveal | `0.7s var(--ease-out-expo)` |

### Scroll Reveal 延遲

需加 `html.js` class 啟用（JS 載入失敗時保持可見）。

```html
<div class="reveal" data-delay="1">...</div>
```

| `data-delay` | 延遲時間 |
|-------------|---------|
| `1` | 0.08s |
| `2` | 0.16s |
| `3` | 0.24s |
| `4` | 0.32s |
| `5` | 0.40s |
| `6` | 0.48s |

---

## 6. 元件清單 Components

### Navbar

- 固定於頂部，`z-index: 100`
- `backdrop-filter: blur(12px)` 毛玻璃效果
- 包含：Logo、導覽連結（含下拉）、Theme Toggle、漢堡選單（手機）
- 下拉選單：`opacity / visibility` 控制顯示，hover 觸發

### Theme Toggle

- 尺寸：`38 × 38px`，圓角 `--radius`
- Light → 顯示月亮圖示；Dark → 顯示太陽圖示
- hover：背景換 `--accent`，邊框換 primary
- active：`scale(0.95)`
- SVG 尺寸：`18 × 18px`

### Tag

```html
<span class="tag">UI Design</span>
```

- 顏色：primary 文字 + accent 背景
- padding：`4px 12px`，圓角 `--radius - 2px`
- 字級：`12px`，字重 `500`

### Button

```html
<button class="btn">送出</button>
<button class="btn btn--full">送出</button>
```

- 尺寸：`min-height: 48px`，padding `14px 36px`
- 底色：`--primary`，文字：`--primary-foreground`
- hover：上移 `1px` + primary shadow
- active：恢復原位

### Project Card

```html
<a class="project-card" href="...">
  <div class="project-card__thumb">...</div>
  <div class="project-card__body">
    <div class="project-card__tags">...</div>
    <h2 class="project-card__title">...</h2>
  </div>
</a>
```

- 縮圖比例：`16 / 10`
- hover：上移 `6px` + `shadow-lg` + primary 邊框
- 圖片 hover：`scale(1.04)`

### Contact Form

- 雙欄佈局（手機變單欄）
- input：圓角 `--radius + 4px`（較圓）
- textarea：圓角 `--radius`，`min-height: 180px`
- focus ring：`3px hsl(var(--primary) / 0.15)`

### Timeline

- 左側 `2px border` 時間軸
- 節點：`10px` 實心圓，顏色 primary
- hover：節點 `scale(1.25)`

### Stakeholder Card / Result Stat

- 三欄網格（手機單欄），`gap: 20px`
- padding：`32px 24px`，文字置中
- hover：上移 `4px` + `shadow-md` + primary 邊框

### Challenge Block

- 左右 padding：`28px 32px`，上下 `28px`
- Label：`12px` 全大寫，primary 色
- 一組 Challenge = `.challenge-pair`（問題 + 解法兩個 block）

### Process Flow

- 橫向 flex 排列（手機垂直排列），`gap: 16px`
- 數字：`32px` Serif 字體，primary 色
- hover：上移 `3px`

### TOC（目錄側欄）

- 固定在左側 `left: 24px`，頁面寬度 `< 1199px` 隱藏
- active 連結：primary 左側指示線 `2px`，字重 `500`
- `scroll-margin-top: 88px`（錨點捲動補償 Navbar 高度）

### Project Nav（上一篇 / 下一篇）

- 頂部 border，flex 左右對齊
- hover：primary 色 + 水平位移 `±2px`

### Footer

- 垂直 padding：`48px`，頂部 border
- 字級：`13px`，顏色 `--muted-foreground`

---

## 7. 響應式斷點 Breakpoints

| 斷點 | 說明 |
|------|------|
| `≤ 1199px` | TOC 側欄隱藏 |
| `≤ 768px` | 漢堡選單取代導覽列、單欄佈局、字級調整 |

### 手機版主要調整

- Navbar：連結改為展開選單，`position: absolute` 下推
- Hero / About / Project：`padding-top: 140px`
- Section：`padding: 64px 0`
- Projects Grid：單欄
- Contact Form：單欄
- Stakeholder / Results Grid：單欄
- Process Flow：垂直排列
- Btn：全寬 `width: 100%`

---

## 8. 無障礙 Accessibility

- 所有互動元素支援 `focus-visible` 外框（`2px solid --ring`，`offset: 2px`）
- 按鈕、連結最小點擊區域：`min-height: 44px`
- `prefers-reduced-motion`：關閉所有 reveal 動畫與 transition
- `color-scheme: light dark` 宣告讓瀏覽器滾動條 / 表單元件跟隨主題

---

## 9. 設計原則

1. **暖色調中性**：主色為橙棕（Hue 20），背景使用暖米色，避免純白的冷調感
2. **細節動態**：每個互動都有對應的 transform + shadow，讓界面有生命感
3. **Typography 主導**：Serif 用於標題製造溫度，Sans 用於內文保持清晰
4. **主題一致性**：所有元件透過 CSS 變數統一切換，無需 JS 干預顏色
5. **內容優先**：容器最大寬 `1080px`，專案內容限制 `640px`，確保長篇閱讀舒適度
