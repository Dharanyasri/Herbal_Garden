import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, Send, Bot, User, Leaf, X, Minimize2, Maximize2 } from 'lucide-react';
import { plants } from '@/data/plants';


interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

interface HerbalChatbotProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const HerbalChatbot = ({ isOpen, onToggle }: HerbalChatbotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Hello! I\'m your AI Herbal Assistant. I can help you with information about medicinal plants, their uses, preparation methods, and traditional remedies. What would you like to know?',
      timestamp: new Date(),
      suggestions: [
        'Tell me about Tulsi benefits',
        'How to prepare turmeric tea?',
        'Plants for digestive health',
        'Ayurvedic remedies for stress'
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Find relevant plant
    const relevantPlant = plants.find(plant => 
      plant.name.toLowerCase().includes(message) ||
      plant.commonNames.some(name => message.includes(name.toLowerCase())) ||
      plant.medicinalUses.some(use => message.includes(use.toLowerCase()))
    );

    // Health condition responses
    if (message.includes('stress') || message.includes('anxiety')) {
      return `For stress and anxiety relief, I recommend these herbs:

🌿 **Ashwagandha** - Known as a powerful adaptogen that helps the body manage stress
🌿 **Tulsi (Holy Basil)** - Helps reduce cortisol levels and promotes mental clarity  
🌿 **Brahmi** - Supports cognitive function and reduces anxiety
🌿 **Lavender** - Promotes relaxation and better sleep

**Preparation**: Try Ashwagandha powder (1/2 tsp) with warm milk before bed, or brew Tulsi tea throughout the day.

Would you like specific preparation instructions for any of these herbs?`;
    }

    if (message.includes('digestive') || message.includes('stomach')) {
      return `For digestive health, these traditional remedies are very effective:

🌿 **Ginger** - Excellent for nausea and improving digestion
🌿 **Fennel** - Helps with bloating and gas
🌿 **Peppermint** - Soothes stomach irritation
🌿 **Turmeric** - Anti-inflammatory properties for gut health

**Quick remedy**: Ginger tea after meals or chew fennel seeds for immediate relief.

What specific digestive issue would you like help with?`;
    }

    if (message.includes('immunity') || message.includes('immune')) {
      return `To boost your immune system naturally:

🌿 **Tulsi** - Powerful immune modulator and antimicrobial
🌿 **Neem** - Natural antibiotic and blood purifier
🌿 **Amla** - High in Vitamin C, strengthens immunity
🌿 **Turmeric** - Anti-inflammatory and antioxidant properties

**Daily routine**: Start your day with Tulsi tea and include turmeric in your cooking.

Would you like a specific immunity-boosting recipe?`;
    }

    // Plant-specific responses
    if (relevantPlant) {
      return `**${relevantPlant.name}** (${relevantPlant.scientificName})

${relevantPlant.description}

**Traditional Uses:**
${relevantPlant.medicinalUses.slice(0, 4).map(use => `• ${use}`).join('\n')}

**Parts Used:** ${relevantPlant.parts.join(', ')}

**Preparation Methods:**
${relevantPlant.preparation.slice(0, 3).map(prep => `• ${prep}`).join('\n')}

**⚠️ Precautions:** ${relevantPlant.precautions[0]}

Would you like detailed preparation instructions or information about other similar plants?`;
    }

    // Preparation method responses
    if (message.includes('prepare') || message.includes('how to make')) {
      return `Here are common herbal preparation methods:

**🫖 Tea/Infusion**: Pour hot water over herbs, steep 5-10 minutes
**🔥 Decoction**: Boil roots/bark for 15-20 minutes
**🥄 Powder**: Dry herbs completely, grind to fine powder
**🫗 Oil**: Infuse herbs in carrier oil for topical use

Which specific plant would you like preparation instructions for?`;
    }

    // Default responses
    const defaultResponses = [
      `I'd be happy to help you with herbal medicine! You can ask me about:

• Specific plants and their benefits
• Health conditions and natural remedies  
• Preparation methods and dosages
• Traditional AYUSH system practices
• Safety and precautions

What specific topic interests you most?`,
      
      `As your herbal assistant, I can provide information about traditional plant medicine. Try asking about specific plants like "Tell me about Neem" or health topics like "herbs for better sleep."

What would you like to explore today?`
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: generateBotResponse(inputValue),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className={`w-96 transition-all duration-300 ${isMinimized ? 'h-16' : 'h-[600px]'} shadow-2xl border-herb-primary/20`}>
        <CardHeader className="flex flex-row items-center justify-between p-4 bg-herb-primary text-white rounded-t-lg">
          <div className="flex items-center gap-2">
            <div className="p-1 bg-white/20 rounded-full">
              <Bot className="h-4 w-4" />
            </div>
            <CardTitle className="text-sm">AI Herbal Assistant</CardTitle>
          </div>
          <div className="flex items-center gap-1">
            <Button
              size="sm"
              variant="ghost"
              className="h-6 w-6 p-0 text-white hover:bg-white/20"
              onClick={() => setIsMinimized(!isMinimized)}
            >
              {isMinimized ? <Maximize2 className="h-3 w-3" /> : <Minimize2 className="h-3 w-3" />}
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="h-6 w-6 p-0 text-white hover:bg-white/20"
              onClick={onToggle}
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-[calc(600px-64px)]">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.type === 'user'
                          ? 'bg-herb-primary text-white'
                          : 'bg-muted text-foreground'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {message.type === 'bot' && (
                          <Leaf className="h-4 w-4 text-herb-primary mt-0.5 flex-shrink-0" />
                        )}
                        <div className="text-sm whitespace-pre-wrap">{message.content}</div>
                      </div>
                      
                      {message.suggestions && (
                        <div className="mt-3 space-y-2">
                          <p className="text-xs opacity-80">Try asking:</p>
                          <div className="flex flex-wrap gap-1">
                            {message.suggestions.map((suggestion, index) => (
                              <Button
                                key={index}
                                size="sm"
                                variant="outline"
                                className="text-xs h-6 px-2 bg-white/10 border-white/20 hover:bg-white/20"
                                onClick={() => handleSuggestionClick(suggestion)}
                              >
                                {suggestion}
                              </Button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                      <div className="flex items-center gap-2">
                        <Leaf className="h-4 w-4 text-herb-primary animate-pulse" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-herb-primary rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-herb-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-herb-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div ref={messagesEndRef} />
            </ScrollArea>

            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about herbal remedies..."
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-herb-primary hover:bg-herb-secondary"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};