import React, { createContext, useContext, useState, useCallback } from 'react';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface ChatSession {
  id: string;
  personaId: string;
  personaName: string;
  messages: ChatMessage[];
  createdAt: number;
  updatedAt: number;
}

export interface ChatTemplate {
  id: string;
  name: string;
  personaId: string;
  personaName: string;
  description: string;
  messages: ChatMessage[];
}

interface ChatContextType {
  currentSession: ChatSession | null;
  sessions: ChatSession[];
  templates: ChatTemplate[];
  
  // Session management
  createSession: (personaId: string, personaName: string) => ChatSession;
  deleteSession: (sessionId: string) => void;
  switchSession: (sessionId: string) => void;
  
  // Message management
  addMessage: (role: 'user' | 'assistant', content: string) => void;
  clearMessages: () => void;
  
  // Template management
  createTemplate: (name: string, description: string) => void;
  loadTemplate: (templateId: string, personaId: string, personaName: string) => void;
  deleteTemplate: (templateId: string) => void;
  
  // Persistence
  saveToLocalStorage: () => void;
  loadFromLocalStorage: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [currentSession, setCurrentSession] = useState<ChatSession | null>(null);
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [templates, setTemplates] = useState<ChatTemplate[]>([]);

  // Session management
  const createSession = useCallback((personaId: string, personaName: string): ChatSession => {
    const newSession: ChatSession = {
      id: `session-${Date.now()}`,
      personaId,
      personaName,
      messages: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    
    setSessions(prev => [newSession, ...prev]);
    setCurrentSession(newSession);
    return newSession;
  }, []);

  const deleteSession = useCallback((sessionId: string) => {
    setSessions(prev => prev.filter(s => s.id !== sessionId));
    if (currentSession?.id === sessionId) {
      setCurrentSession(null);
    }
  }, [currentSession]);

  const switchSession = useCallback((sessionId: string) => {
    const session = sessions.find(s => s.id === sessionId);
    if (session) {
      setCurrentSession(session);
    }
  }, [sessions]);

  // Message management
  const addMessage = useCallback((role: 'user' | 'assistant', content: string) => {
    if (!currentSession) return;

    const newMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      role,
      content,
      timestamp: Date.now(),
    };

    setCurrentSession(prev => {
      if (!prev) return null;
      const updated = {
        ...prev,
        messages: [...prev.messages, newMessage],
        updatedAt: Date.now(),
      };
      
      // Update in sessions list
      setSessions(prevSessions =>
        prevSessions.map(s => s.id === updated.id ? updated : s)
      );
      
      return updated;
    });
  }, [currentSession]);

  const clearMessages = useCallback(() => {
    if (!currentSession) return;

    setCurrentSession(prev => {
      if (!prev) return null;
      const updated = {
        ...prev,
        messages: [],
        updatedAt: Date.now(),
      };
      
      setSessions(prevSessions =>
        prevSessions.map(s => s.id === updated.id ? updated : s)
      );
      
      return updated;
    });
  }, [currentSession]);

  // Template management
  const createTemplate = useCallback((name: string, description: string) => {
    if (!currentSession) return;

    const newTemplate: ChatTemplate = {
      id: `template-${Date.now()}`,
      name,
      personaId: currentSession.personaId,
      personaName: currentSession.personaName,
      description,
      messages: currentSession.messages,
    };

    setTemplates(prev => [newTemplate, ...prev]);
  }, [currentSession]);

  const loadTemplate = useCallback((templateId: string, personaId: string, personaName: string) => {
    const template = templates.find(t => t.id === templateId);
    if (!template) return;

    const newSession: ChatSession = {
      id: `session-${Date.now()}`,
      personaId,
      personaName,
      messages: template.messages.map(msg => ({
        ...msg,
        id: `msg-${Date.now()}-${Math.random()}`,
      })),
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    setSessions(prev => [newSession, ...prev]);
    setCurrentSession(newSession);
  }, [templates]);

  const deleteTemplate = useCallback((templateId: string) => {
    setTemplates(prev => prev.filter(t => t.id !== templateId));
  }, []);

  // Persistence
  const saveToLocalStorage = useCallback(() => {
    const data = {
      currentSession,
      sessions,
      templates,
    };
    localStorage.setItem('arutala-chat-data', JSON.stringify(data));
  }, [currentSession, sessions, templates]);

  const loadFromLocalStorage = useCallback(() => {
    const stored = localStorage.getItem('arutala-chat-data');
    if (stored) {
      try {
        const data = JSON.parse(stored);
        if (data.sessions) setSessions(data.sessions);
        if (data.currentSession) setCurrentSession(data.currentSession);
        if (data.templates) setTemplates(data.templates);
      } catch (error) {
        console.error('Failed to load chat data from localStorage:', error);
      }
    }
  }, []);

  const value: ChatContextType = {
    currentSession,
    sessions,
    templates,
    createSession,
    deleteSession,
    switchSession,
    addMessage,
    clearMessages,
    createTemplate,
    loadTemplate,
    deleteTemplate,
    saveToLocalStorage,
    loadFromLocalStorage,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

export function useChat() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within ChatProvider');
  }
  return context;
}
