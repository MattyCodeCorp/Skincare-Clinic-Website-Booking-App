import { motion } from 'motion/react';
import { Clock, Zap, DollarSign } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TreatmentCardProps {
  image: string;
  title: string;
  description: string;
  downtime: string;
  pain: string;
  startingPrice: string;
  onBook: () => void;
}

export function TreatmentCard({
  image,
  title,
  description,
  downtime,
  pain,
  startingPrice,
  onBook,
}: TreatmentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border"
    >
      {/* Image with overlay */}
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Quick action button */}
        <button
          onClick={onBook}
          className="absolute bottom-4 right-4 px-5 py-2 bg-primary text-primary-foreground rounded-full text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-primary/90"
        >
          Book Now
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <h4 className="font-serif text-2xl mb-3 text-foreground">{title}</h4>
        <p className="text-muted-foreground text-sm mb-5 leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary/50 rounded-full text-xs">
            <Clock className="w-3.5 h-3.5" />
            Downtime: {downtime}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary/50 rounded-full text-xs">
            <Zap className="w-3.5 h-3.5" />
            Pain: {pain}
          </span>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Starting at</p>
            <p className="text-xl font-medium text-primary">{startingPrice}</p>
          </div>
          <button
            onClick={onBook}
            className="px-6 py-2 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-all text-sm"
          >
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
}
