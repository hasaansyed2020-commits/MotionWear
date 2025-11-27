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
        <div
          style={{
            fontSize: '60px',
            fontWeight: 'bold',
            color: 'white',
            letterSpacing: '3px',
            marginBottom: '8px',
          }}
        >
          MW
        </div>
        <div
          style={{
            fontSize: '16px',
            fontWeight: '600',
            color: 'white',
            letterSpacing: '4px',
            opacity: 0.9,
          }}
        >
          MOTION WEAR
        </div>
      </div>
    ),
    { ...size }
  );
}
