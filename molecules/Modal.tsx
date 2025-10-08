import React, { useEffect, useRef } from "react";
import { clsx } from "clsx";

type Props = {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  children?: React.ReactNode;
  showCloseButton?: boolean;
};

function getFocusableElements(container: HTMLElement) {
  const selector =
    'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable]';
  return Array.from(container.querySelectorAll<HTMLElement>(selector)).filter(
    (el) =>
      el.offsetWidth > 0 ||
      el.offsetHeight > 0 ||
      el.getClientRects().length > 0,
  );
}

export default function Modal({ 
  open, 
  onClose, 
  title, 
  children, 
  showCloseButton = true 
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;

    const container = containerRef.current;
    if (container) {
      const focusable = getFocusableElements(container);
      if (focusable.length) focusable[0].focus();
      else container.focus();
    }

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === "Tab" && containerRef.current) {
        const focusable = getFocusableElements(containerRef.current);
        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      if (
        previouslyFocused.current &&
        typeof previouslyFocused.current.focus === "function"
      ) {
        previouslyFocused.current.focus();
      }
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />
      <div
        ref={containerRef}
        tabIndex={-1}
        className="relative z-10 w-full max-w-lg rounded bg-white p-6"
      >
        {title ? (
          <div className="flex justify-between items-center pb-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        ) : null}
        <div className={clsx("mt-4", title && "pt-2")}>{children}</div>
        {showCloseButton && (
          <div className="mt-6 flex justify-end space-x-3">
            <button
              className="px-4 py-2 rounded-md bg-gray-100 text-gray-900 border border-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
