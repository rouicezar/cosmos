import { useEffect } from "react";
import { X } from "@phosphor-icons/react";

// 通用模态：背景遮罩点击关闭、Esc 关闭、锁定背景滚动。
export function Modal({ title, onClose, children }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="modal-head">
          <strong>{title}</strong>
          <button type="button" onClick={onClose} aria-label="关闭"><X weight="bold" /></button>
        </header>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}
