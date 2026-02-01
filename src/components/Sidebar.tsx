import React, { useMemo, useState } from 'react';
import { Effect, Category } from '../data/effects';

interface SidebarProps {
  effects: Effect[];
  selectedId: string;
  onSelect: (id: string) => void;
}

const CATEGORIES: Category[] = ['easy', 'normal', 'hard', 'animation'];

const CATEGORY_LABELS: Record<Category, string> = {
  easy: 'Easy',
  normal: 'Normal',
  hard: 'Hard',
  animation: 'Animation'
};

export const Sidebar: React.FC<SidebarProps> = ({ effects, selectedId, onSelect }) => {
  // Group effects by category
  const groupedEffects = useMemo(() => {
    const groups: Record<Category, Effect[]> = {
      easy: [],
      normal: [],
      hard: [],
      animation: []
    };
    effects.forEach(effect => {
      groups[effect.category].push(effect);
    });
    return groups;
  }, [effects]);

  // Collapsible state (all open by default)
  const [openCategories, setOpenCategories] = useState<Record<Category, boolean>>({
    easy: true,
    normal: true,
    hard: true,
    animation: true
  });

  const toggleCategory = (cat: Category) => {
    setOpenCategories(prev => ({ ...prev, [cat]: !prev[cat] }));
  };

  return (
    <div style={{
      width: '240px',
      borderRight: '1px solid #333',
      background: '#1a1a1a',
      height: '100vh',
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <h2 style={{ 
        padding: '1.5rem 1rem', 
        borderBottom: '1px solid #333', 
        margin: 0,
        fontSize: '1.2rem',
        background: '#111'
      }}>
        CSS Tips
      </h2>
      
      <div style={{ flex: 1 }}>
        {CATEGORIES.map(category => (
          <div key={category} style={{ borderBottom: '1px solid #2a2a2a' }}>
            <div 
              onClick={() => toggleCategory(category)}
              style={{
                padding: '0.8rem 1rem',
                background: '#222',
                cursor: 'pointer',
                fontWeight: 'bold',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: '#ddd',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              <span>{CATEGORY_LABELS[category]}</span>
              <span style={{ fontSize: '0.8em', color: '#666' }}>
                {openCategories[category] ? '▼' : '▶'}
              </span>
            </div>
            
            {openCategories[category] && (
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {groupedEffects[category].map(effect => (
                  <li
                    key={effect.id}
                    onClick={() => onSelect(effect.id)}
                    style={{
                      padding: '0.8rem 1rem 0.8rem 1.5rem',
                      cursor: 'pointer',
                      background: effect.id === selectedId ? '#2c3e50' : 'transparent',
                      color: effect.id === selectedId ? '#fff' : '#aaa',
                      borderLeft: effect.id === selectedId ? '3px solid #3498db' : '3px solid transparent',
                      transition: 'all 0.2s',
                      fontSize: '0.9rem'
                    }}
                  >
                    <div style={{ fontWeight: effect.id === selectedId ? '600' : '400' }}>
                      {effect.title}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
