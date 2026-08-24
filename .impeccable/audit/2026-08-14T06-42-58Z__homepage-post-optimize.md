---
timestamp: 2026-08-14T06:42:58Z
target: route:/
mode: final-pre-polish-technical-audit
---

# MDOP homepage — audit sau harden, colorize và optimize

## Phạm vi và giới hạn kiểm chứng

- Đã kiểm tra `app/page.tsx`, `app/_components/home-client.tsx`, `app/_components/home-confidence.tsx`, toàn bộ CSS pass liên quan, các route đích, manifest build và các snapshot audit/critique trước đó.
- `npm run lint`, `npm run build` và Impeccable detector đều đạt; detector trả về `[]`.
- Môi trường không cho chạy browser/localhost, vì vậy crop ảnh, tràn ngang và thao tác bàn phím ở 360/390/430/768/1024/1280px chưa thể được chứng thực trực quan. Các kết luận responsive dưới đây dựa trên mã nguồn và build, không phải Lighthouse hay Web Vitals thực tế.

## Audit health score

| # | Dimension | Score | Key finding |
|---|---|---:|---|
| 1 | Accessibility | 3/4 | Các P1 semantic/focus trước đây đã được sửa; còn thiếu bằng chứng tương tác trình duyệt thực tế. |
| 2 | Performance | 3/4 | Hero là LCP duy nhất được ưu tiên; pipeline ảnh và ranh giới client/server đã được cải thiện, chưa có đo đạc CWV thực tế. |
| 3 | Responsive design | 3/4 | Breakpoint, touch target và chống overflow có chủ đích; cần xác nhận trên thiết bị/browser. |
| 4 | Theming | 3/4 | Token màu ngữ nghĩa và contrast đã tốt; vẫn còn các giá trị màu legacy ở các CSS pass cũ. |
| 5 | Implementation integrity | 4/4 | Detector sạch, routes đích tồn tại, trạng thái/persistence có kiểm soát và không có dữ liệu bịa đặt. |
| **Total** |  | **16/20** | **Good — sẵn sàng polish** |

## Implementation integrity verdict

**PASS.** Homepage vẫn giữ Drive Line và dữ liệu minh hoạ minh bạch. Không thấy giá, thông số, tồn kho, ưu đãi tài chính, bảo hành, testimonial, review, award, khan hiếm hay countdown được trình bày như fact đã xác thực. Các route chính `/models`, `/models/[model]`, `/configure`, `/configure/[model]`, `/inventory`, `/compare`, `/saved` và `/contact` đều tồn tại trong build.

## Xác minh các phát hiện trước đây

- **Skip link:** `#content` có `tabIndex={-1}`; handler gọi `focus()` rồi cuộn tới nội dung. Header là sibling của `main`.
- **Finder:** dùng `fieldset`/`legend`, progress có nhãn, live region `role=status` chỉ thông báo câu hỏi/kết quả; focus được chuyển sau thao tác bàn phím.
- **Compare / Save:** buttons có `aria-pressed`, giới hạn ba xe được đưa qua live notice; khi xóa bằng bàn phím focus chuyển về thao tác xóa tiếp theo hoặc CTA chọn xe. Saved/compare parse, lọc và ghi localStorage trong `try/catch` sau hydration.
- **Mobile navigation:** `details/summary` native, có nhãn nav và focus-visible; không có menu custom cần script quản lý focus.
- **Contrast:** các token đã tính lại đều vượt AA cho chữ nhỏ: demo light 8.76:1, demo dark 13.86:1, unknown light 7.02:1, unknown dark 14.09:1, muted light 7.44:1, muted dark 12.41:1, focus light 6.78:1, focus dark 7.26:1. CTA light/dark lần lượt 15.77:1 và 17.45:1.
- **Ảnh:** đúng một `priority` ở hero. Sáu lane dùng `next/image` với `fill`, `sizes` theo breakpoint và lazy mặc định. Không còn CSS `background-image: url(...)` cho product image. Featured, inventory và proof có `sizes` phù hợp với grid/rail hiện tại.
- **Client boundary:** Ownership + Proof là server component truyền qua route server; copy đặc trưng của chúng không xuất hiện trong client chunks. Finder, Compare, Save và CTA ngữ cảnh vẫn nằm trong client component do dùng chung state.
- **Runtime/motion:** không có scroll listener. Một `IntersectionObserver` được `disconnect`; các `requestAnimationFrame` được cancel. Reduced motion tắt reveal/parallax lớn nhưng giữ trạng thái và CTA.

## Remaining findings

### P2 — Cần xác nhận browser/device trước khi phát hành thực tế

- **Location:** giới hạn môi trường audit.
- **Category:** Responsive / performance validation.
- **Impact:** Không thể chứng minh trực tiếp crop hero/final, không có overflow ở các width yêu cầu, hay LCP/INP/CLS thực tế từ mã nguồn.
- **Recommendation:** Trước release thật, chạy audit trên browser-capable device matrix (360, 390, 430, 768, 1024, 1280+) với keyboard và reduced motion. Không phải blocker cho pass polish hiện tại.
- **Suggested command:** `$impeccable audit`.

### P2 — Một phần màu legacy vẫn nằm ở các CSS pass cũ

- **Location:** `app/globals.css`, `app/motion.css`, `app/adapt.css`.
- **Category:** Theming / maintainability.
- **Impact:** Token semantic đang kiểm soát màu quan trọng, nhưng các literal phục vụ image overlay/motion vẫn làm việc bảo trì màu kém tập trung hơn.
- **Recommendation:** Chỉ hợp nhất khi cần chạm tới các pass này; không nên thực hiện refactor cascade trong polish nếu không có thay đổi trực quan cần thiết.
- **Suggested command:** `$impeccable polish`.

## Positive findings

- Một `h1`, heading hierarchy rõ, và landmarks `header/nav/main/footer` hợp lệ.
- Link dùng cho điều hướng, button dùng cho thay đổi state; không có clickable generic element.
- Tất cả ảnh chính có alt phù hợp hoặc alt rỗng có chủ đích khi ảnh chỉ là lớp trang trí của lane đã có nhãn văn bản.
- Không có external Google Fonts CSS, dependency tree gọn và không có thư viện motion/state nặng.
- Build prerender homepage tĩnh thành công; không có TypeScript, duplicate-key, asset hoặc route error được build phát hiện.

## Recommended actions

1. **[P2] `$impeccable polish homepage`**: hoàn thiện craft ở mức nhỏ, không thay đổi kiến trúc đã xác minh.
2. **[P2] `$impeccable audit homepage`**: chạy lại trên môi trường browser-capable trước khi đưa vào môi trường production thực.

## Final verdict

**READY FOR `/impeccable polish homepage`**

- P0 remaining: 0
- P1 remaining: 0
- P2 intentionally deferred: browser/device evidence và dọn token legacy có chọn lọc.
