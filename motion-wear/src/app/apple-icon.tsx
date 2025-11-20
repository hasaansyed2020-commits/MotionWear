import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        }}
      >
        <div style={{ fontSize: 80, marginBottom: 10 }}>👟</div>
        <div style={{ 
          fontSize: 28, 
          fontWeight: 'bold', 
          color: 'white',
          letterSpacing: '2px'
        }}>
          MOTION
        </div>
        <div style={{ 
          fontSize: 14, 
          fontWeight: '600', 
          color: '#E5E7EB',
          letterSpacing: '3px'
        }}>
          WEAR
        </div>
      </div>
    ),
    { ...size }
  );
}
