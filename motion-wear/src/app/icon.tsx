import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default async function Icon() {
  // Read logo from local file
  const logoPath = join(process.cwd(), 'public', 'updated_logo.png');
  const logoBuffer = await readFile(logoPath);
  const logoBase64 = logoBuffer.toString('base64');
  const logoDataUrl = `data:image/png;base64,${logoBase64}`;
  
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
          borderRadius: '4px',
          padding: '2px',
        }}
      >
        <img
          src={logoDataUrl}
          alt="MW"
          width="30"
          height="30"
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
