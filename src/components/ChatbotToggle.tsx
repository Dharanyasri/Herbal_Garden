import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { HerbalChatbot } from './HerbalChatbot';

export const ChatbotToggle = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <>
      {!isChatbotOpen && (
        <div className="fixed bottom-4 right-4 z-40">
          <Button
            onClick={() => setIsChatbotOpen(true)}
            className="h-14 w-14 rounded-full bg-herb-primary hover:bg-herb-secondary shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          >
            <MessageCircle className="h-6 w-6 text-white" />
          </Button>
        </div>
      )}
      
      <HerbalChatbot 
        isOpen={isChatbotOpen} 
        onToggle={() => setIsChatbotOpen(!isChatbotOpen)} 
      />
    </>
  );
};