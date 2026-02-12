import { useChat } from '@/contexts/ChatContext';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Trash2, Download } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * DESIGN PHILOSOPHY: Soft Maximalism
 * - Vibrant gradients for template cards
 * - Smooth animations and transitions
 * - Playful layout with staggered animations
 */

interface ChatTemplateSelectorProps {
  personaId: string;
  personaName: string;
}

export function ChatTemplateSelector({
  personaId,
  personaName,
}: ChatTemplateSelectorProps) {
  const { templates, loadTemplate, deleteTemplate } = useChat();

  // Filter templates for current persona
  const personaTemplates = templates.filter(t => t.personaId === personaId);

  if (personaTemplates.length === 0) {
    return null;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="border-purple-200 hover:bg-purple-50"
        >
          <Download className="w-4 h-4 mr-2" />
          Chat Templates ({personaTemplates.length})
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Chat Templates untuk {personaName}</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {personaTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 border-2 border-purple-100 hover:border-purple-300 transition-all"
            >
              <div className="mb-3">
                <h4 className="font-bold text-gray-800 mb-1">{template.name}</h4>
                <p className="text-sm text-gray-600">{template.description}</p>
              </div>

              <div className="mb-3 p-2 bg-white rounded-lg border border-purple-100">
                <p className="text-xs text-gray-500 mb-1">
                  {template.messages.length} pesan
                </p>
                <div className="space-y-1 max-h-20 overflow-y-auto">
                  {template.messages.slice(0, 2).map((msg, idx) => (
                    <p
                      key={idx}
                      className="text-xs text-gray-600 line-clamp-1"
                    >
                      <span className="font-semibold">
                        {msg.role === 'user' ? 'Anda' : personaName}:
                      </span>{' '}
                      {msg.content}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  onClick={() =>
                    loadTemplate(template.id, personaId, personaName)
                  }
                  className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                >
                  <Download className="w-3 h-3 mr-1" />
                  Load
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => deleteTemplate(template.id)}
                  className="text-red-500 hover:bg-red-50"
                >
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
