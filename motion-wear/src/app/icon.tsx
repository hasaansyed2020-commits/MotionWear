import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default async function Icon() {
  // Fetch the logo image
  const logoUrl = 'https://www.genspark.ai/api/files/s/6nihDxKs?cache_control=3600';
  
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'white',
          borderRadius: '6px',
          padding: '4px',
        }}
      >
        <img
          src={logoUrl}
          alt="Motion Wear"
          width="28"
          height="28"
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
