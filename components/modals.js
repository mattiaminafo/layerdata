"use client";
import { useEffect } from "react";

export default function Modal({ isOpen, onClose, title, children, size = "md" }) {
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Close modal when clicking outside
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  // Size classes with better mobile responsiveness
  const sizeClasses = {
    sm: "w-[90%] max-w-xs",
    md: "w-[90%] max-w-sm", 
    lg: "w-[90%] max-w-md",
    xl: "w-[90%] max-w-lg",
    full: "w-[90%] max-w-xl"
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3"
      onClick={handleBackdropClick}
    >
      <div className={`bg-base-100 p-4 rounded-xl relative ${sizeClasses[size]} max-h-[70vh] overflow-hidden flex flex-col`}>
        {/* Close button */}
        <button 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold transition-colors z-10"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Title */}
        {title && (
          <h3 className="font-bold text-base mb-3 pr-8">{title}</h3>
        )}

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}

// Example usage components for common modal types
export function InfoModal({ isOpen, onClose, title, content, details = [], size = "md" }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} size={size}>
      <div className="space-y-2">
        <p className="text-xs leading-relaxed">{content}</p>
        
        {details.length > 0 && (
          <div className="space-y-1 pt-2 border-t border-gray-200">
            {details.map((detail, index) => (
              <p key={index} className="text-xs">
                <strong>{detail.label}</strong> {detail.value}
              </p>
            ))}
          </div>
        )}
      </div>
    </Modal>
  );
}

export function FormModal({ isOpen, onClose, title, children, onSubmit }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <form onSubmit={onSubmit} className="space-y-2">
        {children}
      </form>
    </Modal>
  );
}

export function ImageModal({ isOpen, onClose, title, imageSrc, imageAlt, description }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} size="lg">
      <div className="space-y-2">
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className="w-full h-auto rounded-lg"
        />
        {description && (
          <p className="text-xs leading-relaxed">{description}</p>
        )}
      </div>
    </Modal>
  );
}
