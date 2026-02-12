import { useState, useRef, useEffect } from 'react';
import { useChat } from '@/contexts/ChatContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Trash2, Save, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * DESIGN PHILOSOPHY: Soft Maximalism
 * - Vibrant gradients and smooth animations
 * - Organic message bubbles with playful styling
 * - Smooth scroll and fade-in animations for messages
 * - Gradient accents for visual hierarchy
 */

interface ChatBoxProps {
  personaId: string;
  personaName: string;
  personaAvatar?: string;
  personaCategory?: string;
}

export function ChatBox({
  personaId,
  personaName,
  personaAvatar,
  personaCategory,
}: ChatBoxProps) {
  const { currentSession, addMessage, clearMessages, createTemplate } = useChat();
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showSaveTemplate, setShowSaveTemplate] = useState(false);
  const [templateName, setTemplateName] = useState('');

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollRef.current) {
      setTimeout(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [currentSession?.messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || !currentSession) return;

    // Add user message
    addMessage('user', inputValue);
    setInputValue('');
    setIsLoading(true);

    // Simulate API response delay
    setTimeout(() => {
      const responses = [
        `Halo! Saya ${personaName}. ${inputValue}? Menarik sekali!`,
        `Bagus pertanyaannya! Menurut saya, ${inputValue.toLowerCase()} adalah hal yang penting.`,
        `Wah, kamu tanya tentang ${inputValue.toLowerCase()}? Aku suka banget topik ini!`,
        `Oke deh, tentang ${inputValue.toLowerCase()}... Aku punya beberapa ide nih.`,
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      addMessage('assistant', randomResponse);
      setIsLoading(false);
    }, 800);
  };

  const handleSaveTemplate = () => {
    if (templateName.trim()) {
      createTemplate(templateName, `Template dari ${personaName}`);
      setTemplateName('');
      setShowSaveTemplate(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!currentSession) {
    return (
      <div className="flex items-center justify-center h-full bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl">
        <div className="text-center">
          <p className="text-gray-500 mb-4">Pilih persona untuk memulai chat</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-white rounded-3xl shadow-lg overflow-hidden border-2 border-purple-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 p-4 text-white">
        <div className="flex items-center gap-3">
          {personaAvatar && (
            <img
              src={personaAvatar}
              alt={personaName}
              className="w-12 h-12 rounded-full object-cover border-2 border-white"
            />
          )}
          <div className="flex-1">
            <h3 className="font-bold text-lg">{personaName}</h3>
            {personaCategory && (
              <p className="text-xs opacity-90">{personaCategory}</p>
            )}
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          <AnimatePresence>
            {currentSession.messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={`flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-br-none'
                      : 'bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.role === 'user'
                        ? 'text-purple-100'
                        : 'text-gray-500'
                    }`}
                  >
                    {new Date(message.timestamp).toLocaleTimeString('id-ID', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-bl-none">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                </div>
              </div>
            </motion.div>
          )}

          <div ref={scrollRef} />
        </div>
      </ScrollArea>

      {/* Action Buttons */}
      <div className="border-t border-gray-200 p-3 bg-gray-50 flex gap-2">
        <Button
          size="sm"
          variant="outline"
          onClick={clearMessages}
          className="flex-1"
          title="Hapus semua pesan"
        >
          <Trash2 className="w-4 h-4 mr-2" />
          Bersihkan
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => setShowSaveTemplate(!showSaveTemplate)}
          className="flex-1"
          title="Simpan sebagai template"
        >
          <Save className="w-4 h-4 mr-2" />
          Template
        </Button>
      </div>

      {/* Save Template Input */}
      {showSaveTemplate && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-gray-200 p-3 bg-gradient-to-r from-purple-50 to-pink-50"
        >
          <div className="flex gap-2">
            <Input
              placeholder="Nama template..."
              value={templateName}
              onChange={(e) => setTemplateName(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') handleSaveTemplate();
              }}
              className="flex-1"
            />
            <Button
              size="sm"
              onClick={handleSaveTemplate}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white"
            >
              Simpan
            </Button>
          </div>
        </motion.div>
      )}

      {/* Input Area */}
      <div className="border-t border-gray-200 p-4 bg-white">
        <div className="flex gap-2">
          <Input
            placeholder="Ketik pesan..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
            className="flex-1 rounded-full"
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isLoading}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full w-10 h-10 p-0"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
