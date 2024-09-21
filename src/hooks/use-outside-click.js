import { useEffect } from "react";

export const useOutsideClick = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      // Cek apakah klik terjadi di luar elemen
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
