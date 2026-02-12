import { useState } from 'react';
import { useLocation } from 'wouter';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

interface PersonaCardProps {
  id: string;
  name: string;
  category: string;
  avatar: string;
  description: string;
  quote: string;
  gradientClass: string;
  staggerClass: string;
}

export function PersonaCard({
  id,
  name,
  category,
  avatar,
  description,
  quote,
  gradientClass,
  staggerClass,
}: PersonaCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [, setLocation] = useLocation();

  return (
    <>
      <div
        className={`persona-card fade-in-up ${staggerClass} bg-white rounded-3xl p-6 cursor-pointer border-2 border-transparent hover:border-purple-200`}
        onClick={() => setIsOpen(true)}
      >
        {/* Gradient Background Accent */}
        <div className={`absolute inset-0 rounded-3xl opacity-0 hover:opacity-5 transition-opacity ${gradientClass}`} />

        {/* Content */}
        <div className="relative z-10">
          {/* Avatar */}
          <div className="flex justify-center mb-4">
            <img
              src={avatar}
              alt={name}
              className="character-avatar w-24 h-24 rounded-full object-cover shadow-lg"
            />
          </div>

          {/* Category Badge */}
          <div className="flex justify-center mb-3">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${gradientClass}`}>
              {category}
            </span>
          </div>

          {/* Name */}
          <h3 className="persona-name text-center mb-2">{name}</h3>

          {/* Description */}
          <p className="persona-description text-center mb-4 line-clamp-3">{description}</p>

          {/* Quote Preview */}
          <p className="persona-quote text-center italic text-sm">"{quote.substring(0, 40)}..."</p>
        </div>
      </div>

      {/* Modal Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl modal-content">
          <DialogHeader>
            <DialogTitle className="text-2xl">{name}</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col md:flex-row gap-6 py-4">
            {/* Avatar Section */}
            <div className="flex-shrink-0 flex justify-center md:justify-start">
              <img
                src={avatar}
                alt={name}
                className="w-32 h-32 rounded-full object-cover shadow-lg"
              />
            </div>

            {/* Content Section */}
            <div className="flex-1">
              <div className="mb-4">
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold text-white ${gradientClass}`}>
                  {category}
                </span>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-4 border border-purple-100">
                <p className="persona-quote text-lg">"{quote}"</p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200 flex gap-3">
                <Button
                  onClick={() => {
                    setIsOpen(false);
                    setLocation(`/chat/${id}`);
                  }}
                  className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Mulai Chat
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIsOpen(false)}
                  className="flex-1"
                >
                  Tutup
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
