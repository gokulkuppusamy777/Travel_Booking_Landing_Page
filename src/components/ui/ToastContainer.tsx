import { useToast } from '../../context/ToastContext';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';

const icons = {
  success: CheckCircle,
  error: XCircle,
  info: Info,
};

const colors = {
  success: 'bg-emerald-50 border-emerald-200 text-emerald-800',
  error: 'bg-red-50 border-red-200 text-red-800',
  info: 'bg-primary-50 border-primary-200 text-primary-800',
};

const iconColors = {
  success: 'text-emerald-500',
  error: 'text-red-500',
  info: 'text-primary-500',
};

export default function ToastContainer() {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed top-20 right-4 z-[70] flex flex-col gap-3">
      <AnimatePresence>
        {toasts.map((toast) => {
          const Icon = icons[toast.type];
          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.9 }}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border shadow-lg min-w-[300px] ${colors[toast.type]}`}
            >
              <Icon className={`w-5 h-5 shrink-0 ${iconColors[toast.type]}`} />
              <span className="text-sm font-medium flex-1">{toast.message}</span>
              <button
                onClick={() => removeToast(toast.id)}
                className="shrink-0 hover:opacity-70 transition-opacity"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
