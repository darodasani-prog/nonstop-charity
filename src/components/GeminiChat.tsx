import { cn } from '@/src/lib/utils';
import { askGemini } from '@/src/services/gemini';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X, Bot } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function GeminiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: 'Hi! I\'m the NonStop AI assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const aiResponse = await askGemini(userMessage);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-20 right-0 w-[350px] h-[500px] bg-white rounded-3xl shadow-2xl border border-neutral-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D4D0BAQGxeBZYlcydKQ/company-logo_200_200/company-logo_200_200/0/1667474791245?e=1775692800&v=beta&t=GEqoDHd4gsfysVe7eLzj32owSX3VcthB4MHGb6ii0do" 
                  alt="Logo" 
                  referrerPolicy="no-referrer"
                  className="w-6 h-6 rounded-md object-cover"
                />
                <span className="font-display font-bold">NonStop AI</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={cn(
                    'max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed',
                    msg.role === 'ai'
                      ? 'bg-neutral-100 text-neutral-800 self-start rounded-tl-none'
                      : 'bg-primary text-white self-end ml-auto rounded-tr-none'
                  )}
                >
                  {msg.text}
                </div>
              ))}
              {isLoading && (
                <div className="bg-neutral-100 text-neutral-800 p-3 rounded-2xl rounded-tl-none text-sm self-start animate-pulse">
                  Thinking...
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-neutral-100 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="flex-grow px-4 py-2 bg-neutral-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-primary text-white p-2 rounded-xl hover:bg-primary/90 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform animate-pulse-soft overflow-hidden"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <img 
            src="https://media.licdn.com/dms/image/v2/D4D0BAQGxeBZYlcydKQ/company-logo_200_200/company-logo_200_200/0/1667474791245?e=1775692800&v=beta&t=GEqoDHd4gsfysVe7eLzj32owSX3VcthB4MHGb6ii0do" 
            alt="AI" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        )}
      </button>
    </div>
  );
}
