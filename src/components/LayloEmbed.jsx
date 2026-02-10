import { useEffect, useState } from 'react';

const LayloEmbed = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This ensures code runs only on client side
  }, []);

  if (!isClient) {
    // Return a placeholder during SSR and initial hydration
    return (
      <div style={{
        width: '100%',
        maxWidth: '1000px',
        height: '200px',
        background: 'rgba(74, 144, 226, 0.1)',
        border: '1px solid rgba(74, 144, 226, 0.3)',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#7bb3f0',
        fontSize: '14px'
      }}>
        Loading...
      </div>
    );
  }

  return (
    <div className="laylo-embed-wrapper">
      <iframe
        id="laylo-drop-fw8dL"
        title="Subscribe for Updates"
        frameBorder="0"
        scrolling="no"
        allow="web-share"
        allowTransparency={true}
        style={{
          width: '1px',
          minWidth: '100%',
          maxWidth: '1000px',
          height: '500px',
          border: 'none',
          display: 'block'
        }}
        src="https://embed.laylo.com?dropId=fw8dL&color=FF6200&minimal=false&theme=dark&background=solid"
        loading="lazy"
      />
    </div>
  );
};

export default LayloEmbed;
