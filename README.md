# 🏁 MDOP — Automotive Discovery & Configuration Product Study

> A portfolio product study for exploring, comparing and configuring premium vehicles for a Vietnam-focused audience.

[![Next.js](https://img.shields.io/badge/Next.js-16.3.1-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61dafb?style=flat-square&logo=react)](https://react.js.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![GSAP](https://img.shields.io/badge/Motion-GSAP_3.15-88ce02?style=flat-square&logo=greensock)](https://greensock.com/gsap/)
[![License](https://img.shields.io/badge/License-Private-lightgrey?style=flat-square)]()

---

## 📖 Giới thiệu (Overview)

**MDOP (Make Dreams. Own Porsche.)** is a design study / automotive-commerce interface. It demonstrates a discovery-to-intent flow for a premium-vehicle product concept and is not affiliated with Porsche or a vehicle retailer.

$$\textbf{DESIRE} \longrightarrow \textbf{DISCOVERY} \longrightarrow \textbf{EVALUATION} \longrightarrow \textbf{CONFIDENCE} \longrightarrow \textbf{INTENT} \longrightarrow \textbf{ACTION}$$

Mỗi giao diện trong MDOP tuân thủ nguyên tắc: **Sản phẩm luôn cuốn hút — Bước tiếp theo luôn rõ ràng.**

---

## ✨ Tính năng nổi bật (Key Features)

- 🏎️ **Khám phá dải sản phẩm (Model Range Explorer):** Trực quan hóa đầy đủ 6 dòng xe huyền thoại: `911`, `Taycan`, `Macan`, `Cayenne`, `Panamera`, `718`.
- 🧭 **Trình tìm kiếm xe thông minh (Interactive Porsche Finder):** Wizard tương tác 3 bước (Kiểu dáng thân xe, Thói quen di chuyển, Hệ truyền động mong muốn) để gợi ý mẫu xe phù hợp nhất.
- ⚖️ **So sánh trực quan (Model Comparison Tray):** Khả năng chọn và so sánh nhanh 2–3 mẫu xe đồng thời với trạng thái lưu trữ qua `localStorage`.
- 💾 **Bộ sưu tập xe đã lưu (Saved Vehicles):** Đánh dấu và quản lý danh sách xe yêu thích xuyên suốt phiên duyệt web.
- 📦 **Kho xe có sẵn (Simulated Inventory & Delivery Flow):** Khám phá các mẫu xe sẵn sàng bàn giao ngay, đặt lịch lái thử (Test Drive) hoặc yêu cầu chuyên viên tư vấn.
- 🎬 **Chuyển động điện ảnh & Tối ưu hiệu năng (Choreographed Motion):**
  - Tích hợp GSAP + ScrollTrigger mượt mà cho hiệu ứng reveal, parallax và layout transitions.
  - Tự động phát hiện và tôn trọng cài đặt `prefers-reduced-motion` của hệ điều hành.
- 📱 **Trải nghiệm Responsive toàn diện:** Giao diện tối ưu từ Mobile, Tablet đến Màn hình lớn (Desktop / 4K), hỗ trợ Bottom Action Bar thông minh trên thiết bị di động.
- ♿ **Chuẩn Accessibility (A11y) & SEO:**
  - Semantic HTML, hỗ trợ điều hướng hoàn toàn bằng bàn phím (Keyboard Navigation).
  - OpenGraph / Twitter Cards / Dynamic Metadata cho từng dòng xe.

---

## 🛠️ Công nghệ sử dụng (Tech Stack)

| Thành phần | Công nghệ / Thư viện | Mô tả |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) | Server Components & Routing tốc độ cao |
| **Giao diện** | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) | Khung ứng dụng type-safe |
| **Hiệu ứng & Motion** | [GSAP 3.15](https://greensock.com/gsap/) + ScrollTrigger | Điều hướng animation mượt mà |
| **Kiểu chữ (Typography)** | `@fontsource-variable/exo-2` | Font chữ thể thao, công nghệ và hiện đại |
| **Biểu tượng (Icons)** | `simple-icons` + Custom SVG System | Vector tinh giản, chuẩn thương hiệu |
| **Styling** | Modular Vanilla CSS | Tối ưu hóa hiệu năng render, LCP cực thấp |

---

## 📂 Cấu trúc thư mục (Project Structure)

```text
MDOP/
├── app/                        # Next.js App Router
│   ├── _components/            # UI Components dùng chung
│   │   ├── home-client.tsx     # Homepage Client Engine & GSAP Controller
│   │   ├── home-confidence.tsx # Khối bảo chứng niềm tin & dịch vụ
│   │   ├── icons.tsx           # Bộ SVG icon chuẩn hóa
│   │   └── prototype-handoff.tsx # Màn hình handoff chi tiết
│   ├── models/                 # Trang danh sách & chi tiết dòng xe (/models/[model])
│   ├── configure/              # Trình cấu hình xe cá nhân hóa (/configure/[model])
│   ├── compare/                # Trang so sánh thông số các mẫu xe
│   ├── inventory/              # Trang danh mục xe có sẵn bàn giao
│   ├── saved/                  # Trang quản lý xe đã lưu
│   ├── contact/                # Trang liên hệ / đặt lịch tư vấn
│   ├── layout.tsx              # Root Layout & Metadata / OpenGraph config
│   ├── page.tsx                # Trang chủ (Homepage Server wrapper)
│   └── *.css                   # Hệ thống Style Module (globals, motion, adapt, colorize...)
├── public/
│   └── images/                 # Tài nguyên hình ảnh xe chất lượng cao (v2 / mockups)
├── DESIGN.md                   # Tài liệu định hướng thiết kế (Design System & Motion)
├── PRODUCT.md                  # Tài liệu định vị sản phẩm & phân khúc người dùng
├── MDOP_BRIEF.md               # Bản đặc tả chi tiết dự án
├── next.config.mjs             # Cấu hình Next.js (Image optimization, cache TTL)
├── package.json                # Dependencies & scripts
└── tsconfig.json               # Cấu hình TypeScript
```

---

## 🚀 Hướng dẫn cài đặt & Khởi chạy (Getting Started)

### 1. Yêu cầu môi trường
- **Node.js**: Phiên bản `>= 18.18.0` hoặc `>= 20.x`
- **Package manager**: `npm`, `yarn`, `pnpm` hoặc `bun`

### 2. Cài đặt Dependencies

```bash
# Clone repository
git clone https://github.com/HoangMylb/MDOP.git
cd MDOP

# Cài đặt chính xác dependency lockfile
npm ci
```

### 3. Chạy ở môi trường phát triển (Development)

```bash
npm run dev
```

Mở trình duyệt và truy cập [http://localhost:3000](http://localhost:3000) để trải nghiệm ứng dụng.

### 4. Build sản phẩm (Production)

```bash
# Kiểm tra linting
npm run lint

# Kiểm tra TypeScript và behavior của state persistence
npm run typecheck
npm run test

# Tạo bản build tối ưu
npm run build

# Khởi chạy server production
npm run start
```

### Live demo

[Explore MDOP live](https://mdop-indol.vercel.app/)

This deployment is provided for portfolio review. MDOP is a product study and does not process real vehicle purchases, reservations, or commercial transactions.

---

## 🎨 Hệ thống Thiết kế & CSS Kiến trúc (Architecture Highlights)

Dự án áp dụng phong cách thiết kế phân tầng CSS tinh gọn và chuyên sâu:
- `globals.css`: Reset CSS, thiết lập biến màu semantic (`--color-bg`, `--color-accent`,...).
- `hero-option-one.css` & `option-three-assets.css`: Cấu hình viewport hero & visual frames.
- `typeset.css`: Tỉ lệ hiển thị typographic & tabular numerals cho các thông số xe.
- `motion.css`: Định nghĩa keyframes và token thời gian chuyển động (140ms / 240ms / 620ms).
- `adapt.css` & `layout-pass.css`: Xử lý breakpoint linh hoạt cho mobile, tablet và desktop.
- `colorize.css` & `polish.css`: Tinh chỉnh độ tương phản, dark mode và viền tương tác sắc nét.
- `harden-a11y.css`: Hỗ trợ focus states, accessibility contrast và reduced-motion.

## Engineering decisions

### State management & persistence

Interaction state is intentionally local to the client: saved models and the comparison tray are persisted in `localStorage`, with malformed or unknown values discarded before rendering. The pure selection rules live in `app/_lib/model-selection.ts`; this keeps the large animated home component focused on UI orchestration and makes the behavior testable without a browser.

### Accessibility

The homepage includes a skip link, semantic buttons for interactive controls, keyboard focus recovery after comparison removal, and a `prefers-reduced-motion` path that bypasses the intro and GSAP motion. These controls are not merely visual affordances—the interaction remains usable when motion is reduced.

### Testing & CI

Vitest covers persistence sanitisation and comparison behavior (add, remove, and the three-model limit). GitHub Actions runs `npm ci`, lint, TypeScript checking, tests, and a production build on pull requests and protected branches.

### Performance & trade-offs

The project uses Next.js `Image` for the image-heavy discovery experience and avoids reading browser storage until hydration. GSAP is retained because animation is part of the design study; it is gated for reduced-motion users. The compare and saved routes currently communicate prototype scope rather than duplicating the homepage state into a larger data layer—an intentional scope boundary for this portfolio study.

---

## 📌 Ghi chú (Disclaimer)

> Dự án **MDOP** là một nghiên cứu thiết kế & thử nghiệm giao diện số (Design Study & Portfolio Project). Các thông tin về hình ảnh, bảng giá minh hoạ và cấu hình mô phỏng được sử dụng nhằm mục đích trình diễn trải nghiệm người dùng cao cấp, không phải là hệ thống giao dịch thương mại chính thức.

---

<p align="center">
  Được xây dựng với niềm đam mê dành cho kỹ nghệ & thiết kế xe thể thao <b>Porsche</b> 🇩🇪
</p>
