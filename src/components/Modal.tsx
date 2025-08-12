// components/Modal.tsx
import React from "react";
import { FaCheckCircle, FaTimesCircle, FaSpinner } from "react-icons/fa";

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
  if (!isOpen) return null;

  const isLoading = status === "loading";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-sm relative">
        {!isLoading && (
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-400 hover:text-black text-xl"
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
            <FaSpinner className="w-10 h-10 text-blue-500 animate-spin" />
          )}

          <h2 className="text-lg font-semibold capitalize">{status}</h2>
          <p className="text-gray-700">{message}</p>
        </div>
      </div>
    </div>
  );
}
