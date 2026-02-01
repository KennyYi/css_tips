import React, { useState } from 'react';

interface CodeEditorProps {
  code: string;
  onChange: (code: string) => void;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({ code, onChange }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{
        background: '#111',
        padding: '0.5rem 1rem',
        borderBottom: '1px solid #444',
        fontSize: '0.9rem',
        fontWeight: 'bold',
        color: '#888',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span>CSS Editor</span>
        <button
          onClick={handleCopy}
          style={{
            background: copied ? '#27ae60' : '#444',
            color: copied ? 'white' : '#ddd',
            border: 'none',
            padding: '0.4rem 0.8rem',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.8rem',
            fontWeight: 'normal',
            transition: 'all 0.2s',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem'
          }}
          onMouseEnter={(e) => {
            if (!copied) {
              e.currentTarget.style.background = '#555';
            }
          }}
          onMouseLeave={(e) => {
            if (!copied) {
              e.currentTarget.style.background = '#444';
            }
          }}
        >
          {copied ? (
            <>
              <span>✓</span>
              <span>Copied!</span>
            </>
          ) : (
            <>
              <span>📋</span>
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <textarea
        value={code}
        onChange={(e) => onChange(e.target.value)}
        spellCheck={false}
        style={{
          flex: 1,
          width: '100%',
          background: '#1e1e1e',
          color: '#d4d4d4',
          border: 'none',
          padding: '1rem',
          fontFamily: 'monospace',
          fontSize: '14px',
          resize: 'none',
          outline: 'none',
          lineHeight: '1.5'
        }}
      />
    </div>
  );
};
