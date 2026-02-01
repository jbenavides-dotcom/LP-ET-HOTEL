
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, ExternalLink } from 'lucide-react';
import { Message } from '../types';
import { getConciergeResponse } from '../services/gemini';
import { CONTACT_INFO } from '../constants';

const ConciergeChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "¡Bienvenido a La Palma & El Tucán! Soy tu Concierge virtual. ¿En qué puedo ayudarte hoy?" }
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

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await getConciergeResponse(userMsg);
    
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[60]">
      {/* Chat Window */}
      <div className={`absolute bottom-16 sm:bottom-20 right-0 w-[calc(100vw-2rem)] sm:w-80 md:w-96 max-w-[360px] glass-morphism rounded-2xl overflow-hidden flex flex-col shadow-2xl transition-all duration-300 transform ${
        isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none translate-y-10'
      }`}>
        {/* Header */}
        <div className="p-4 bg-white/5 border-b border-white/10 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-pink flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-bold tracking-tight text-white">CONCIERGE AI</p>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-medium">En línea</span>
              </div>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-neutral-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="h-72 sm:h-96 overflow-y-auto p-3 sm:p-4 flex flex-col gap-3 sm:gap-4 custom-scrollbar bg-brand-dark/95">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                msg.role === 'user' 
                ? 'bg-brand-pink text-white' 
                : 'bg-neutral-800 text-neutral-200'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-neutral-800 p-3 rounded-2xl flex gap-1">
                <span className="w-1 h-1 bg-neutral-400 rounded-full animate-bounce"></span>
                <span className="w-1 h-1 bg-neutral-400 rounded-full animate-bounce delay-100"></span>
                <span className="w-1 h-1 bg-neutral-400 rounded-full animate-bounce delay-200"></span>
              </div>
            </div>
          )}
        </div>

        {/* WhatsApp Shortcut */}
        <div className="px-4 py-2 bg-brand-pink/10 border-t border-white/5">
          <a 
            href={CONTACT_INFO.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-pink hover:text-white transition-colors"
          >
            ¿Necesitas ayuda humana? WhatsApp <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Input */}
        <div className="p-4 bg-white/5 border-t border-white/10 flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Pregunta sobre el tour, clima..."
            className="flex-grow bg-neutral-900 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-brand-pink/50 transition-colors"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading}
            className="w-10 h-10 bg-brand-pink text-white rounded-full flex items-center justify-center hover:bg-white hover:text-brand-pink transition-all disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-pink text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 relative group"
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat con Concierge AI"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        {!isOpen && (
          <span className="absolute -top-2 -left-2 bg-brand-dark text-white text-[10px] px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/20">
            Habla con el Concierge
          </span>
        )}
      </button>
    </div>
  );
};

export default ConciergeChat;
