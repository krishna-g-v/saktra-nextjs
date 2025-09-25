// components/Modal.tsx
import { FaCheckCircle, FaTimesCircle, FaSpinner } from "react-icons/fa";
import { useRef } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  status: "success" | "error" | "loading";
  message: string;
};

export default function Modal({
  isOpen,
  onClose,
  status,
  message,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const isLoading = status === "loading";

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // if user clicks outside modal content -> close
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30"
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className="bg-white shadow-xl p-6 w-full max-w-sm relative"
      >
        {!isLoading && (
          <button
            onClick={onClose}
            className="absolute top-0 right-0 cursor-pointer bg-red-400 px-[8px] py-[1px] text-gray-100 hover:text-black text-2xl"
          >
            &times;
          </button>
        )}
        <div className="flex flex-col items-center gap-4 text-center">
          {status === "success" && (
            <FaCheckCircle className="w-12 h-12 text-green-500" />
          )}
          {status === "error" && (
            <FaTimesCircle className="w-12 h-12 text-red-500" />
          )}
          {isLoading && (
            <FaSpinner className="w-10 h-10 text-blue-800 animate-spin" />
          )}

          <h2 className="text-lg font-semibold capitalize text-gray-700">
            {status}
          </h2>
          <p className="text-gray-700">{message}</p>
        </div>
      </div>
    </div>
  );
}
