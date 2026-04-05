import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Sparkles, X, Loader2, MessageSquare } from 'lucide-react';
import { getArchitecturalAdvice } from '../services/gemini';
import ReactMarkdown from 'react-markdown';

export const ThinkingAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; content: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const aiResponse = await getArchitecturalAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'ai', content: aiResponse || 'No response generated.' }]);
    setIsLoading(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-black text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-medium">
          Architectural AI
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-8 z-50 w-[450px] max-w-[calc(100vw-4rem)] h-[600px] bg-white border border-black/10 shadow-2xl rounded-2xl flex flex-col overflow-hidden"
          >
            <div className="p-4 bg-black text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <span className="font-bold uppercase tracking-widest text-sm">Tranquil Thinking Mode</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:opacity-70">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-[#FAFAFA]"
            >
              {messages.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-40">
                  <MessageSquare className="w-12 h-12" />
                  <p className="text-sm max-w-[200px]">
                    Ask our AI about complex architectural challenges or real estate investments.
                  </p>
                </div>
              )}
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-black text-white rounded-tr-none'
                        : 'bg-white border border-black/5 shadow-sm rounded-tl-none'
                    }`}
                  >
                    <div className="prose prose-sm max-w-none">
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-black/5 shadow-sm p-4 rounded-2xl rounded-tl-none flex items-center gap-3">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-xs font-medium animate-pulse">Thinking deeply...</span>
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-black/5">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a complex architectural question..."
                  className="w-full bg-brand-bg border border-black/10 rounded-xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-1 focus:ring-black/20"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black text-white rounded-lg disabled:opacity-30 transition-opacity"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
