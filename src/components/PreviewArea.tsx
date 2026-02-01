import React from 'react';

interface PreviewAreaProps {
  htmlSnippet: string;
  cssCode: string;
}

export const PreviewArea: React.FC<PreviewAreaProps> = ({ htmlSnippet, cssCode }) => {
  return (
    <div className="preview-container">
      <style>{cssCode}</style>
      <div
        dangerouslySetInnerHTML={{ __html: htmlSnippet }}
        style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      />
    </div>
  );
};
