import { useState, useMemo } from 'react'
import { effects, CSSFormat } from './data/effects'
import { Sidebar } from './components/Sidebar'
import { PreviewArea } from './components/PreviewArea'
import { CodeEditor } from './components/CodeEditor'

function App() {
  const [selectedHash, setSelectedHash] = useState<Record<string, string>>({}); // Stores edited Pure CSS
  const [selectedId, setSelectedId] = useState(effects[0].id);
  const [selectedFormat, setSelectedFormat] = useState<CSSFormat>('pure-css');

  const selectedEffect = useMemo(() => 
    effects.find(e => e.id === selectedId) || effects[0], 
    [selectedId]
  );

  // Logic to determine which code to show
  const currentCode = useMemo(() => {
    // If it's pure CSS, check for user edits first, then fall back to initialCode
    if (selectedFormat === 'pure-css') {
      return selectedHash[selectedId] !== undefined 
        ? selectedHash[selectedId] 
        : selectedEffect.initialCode;
    }
    
    // For other formats, return the specific code or a placeholder
    switch (selectedFormat) {
      case 'tailwind':
        return selectedEffect.tailwindCode || '/* Tailwind version coming soon... */';
      case 'styled-components':
        return selectedEffect.styledComponentCode || '/* Styled Components version coming soon... */';
      case 'vanilla-extract':
        return selectedEffect.vanillaExtractCode || '/* Vanilla Extract version coming soon... */';
      default:
        return '';
    }
  }, [selectedFormat, selectedHash, selectedId, selectedEffect]);

  // Only allow editing for Pure CSS for now (since we don't have converters back and forth)
  const isReadOnly = selectedFormat !== 'pure-css';

  const handleCodeChange = (newCode: string) => {
    if (selectedFormat === 'pure-css') {
      setSelectedHash(prev => ({
        ...prev,
        [selectedId]: newCode
      }));
    }
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
            // Always use Pure CSS for the live preview for now, 
            // unless we dynamically implement other renderers.
            // Using user-edited pure CSS ensures the preview stays live.
            cssCode={selectedHash[selectedId] ?? selectedEffect.initialCode} 
          />
        </div>
        <div style={{ flex: '1 1 40%', minHeight: 0, borderTop: '1px solid #444' }}>
          <CodeEditor 
            code={currentCode} 
            onChange={handleCodeChange} 
            format={selectedFormat}
            onFormatChange={setSelectedFormat}
            readOnly={isReadOnly}
          />
        </div>
      </div>
    </div>
  )
}

export default App
