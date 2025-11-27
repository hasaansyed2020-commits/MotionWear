import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default async function AppleIcon() {
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
          padding: '20px',
        }}
      >
        <img
          src={logoDataUrl}
          alt="Motion Wear"
          width="140"
          height="140"
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
