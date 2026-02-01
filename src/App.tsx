import { useState, useMemo } from 'react'
import { effects } from './data/effects'
import { Sidebar } from './components/Sidebar'
import { PreviewArea } from './components/PreviewArea'
import { CodeEditor } from './components/CodeEditor'

function App() {
  const [selectedHash, setSelectedHash] = useState<Record<string, string>>({});
  const [selectedId, setSelectedId] = useState(effects[0].id);

  const selectedEffect = useMemo(() => 
    effects.find(e => e.id === selectedId) || effects[0], 
    [selectedId]
  );

  const currentCode = selectedHash[selectedId] !== undefined 
    ? selectedHash[selectedId] 
    : selectedEffect.initialCode;

  const handleCodeChange = (newCode: string) => {
    setSelectedHash(prev => ({
      ...prev,
      [selectedId]: newCode
    }));
  };

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <Sidebar 
        effects={effects} 
        selectedId={selectedId} 
        onSelect={setSelectedId} 
      />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: '1 1 60%', minHeight: 0 }}>
          <PreviewArea 
            htmlSnippet={selectedEffect.htmlSnippet} 
            cssCode={currentCode} 
          />
        </div>
        <div style={{ flex: '1 1 40%', minHeight: 0, borderTop: '1px solid #444' }}>
          <CodeEditor 
            code={currentCode} 
            onChange={handleCodeChange} 
          />
        </div>
      </div>
    </div>
  )
}

export default App
