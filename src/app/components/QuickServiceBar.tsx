import { motion } from 'motion/react';
import { Sparkles, Zap, Sun, Droplets } from 'lucide-react';

interface QuickServiceBarProps {
  onServiceClick: (service: string) => void;
}

const concerns = [
  { id: 'acne', name: 'Acne', icon: Zap, color: 'bg-red-50 text-red-600 hover:bg-red-100' },
  { id: 'aging', name: 'Anti-Aging', icon: Sun, color: 'bg-amber-50 text-amber-600 hover:bg-amber-100' },
  { id: 'pigmentation', name: 'Pigmentation', icon: Sparkles, color: 'bg-purple-50 text-purple-600 hover:bg-purple-100' },
  { id: 'hydration', name: 'Hydration', icon: Droplets, color: 'bg-blue-50 text-blue-600 hover:bg-blue-100' },
];

export function QuickServiceBar({ onServiceClick }: QuickServiceBarProps) {
  return (
    <div className="sticky top-20 z-30 bg-background/90 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
          <p className="text-sm font-medium text-muted-foreground whitespace-nowrap">
            Quick Access:
          </p>
          <div className="flex gap-3">
            {concerns.map((concern) => {
              const Icon = concern.icon;
              return (
                <motion.button
                  key={concern.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onServiceClick(concern.name)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all ${concern.color} whitespace-nowrap`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{concern.name}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
