// src/data/downloads.ts
export interface DownloadFile {
  fileName: string;
  filePath: string;
  size: string; // en MB ou format lisible
  sizeBytes: number;
  sha256: string;
  version: string;
  platform: 'windows' | 'macos' | 'linux';
}

export const downloadFiles: Record<string, DownloadFile> = {
  windows: {
    fileName: 'filesentinel-setup-v0.1.0-alpha.exe',
    filePath: './downloads/filesentinel-setup-v0.1.0-alpha.exe',
    size: '2,79 Mo', // Remplacez par la vraie taille
    sizeBytes: 2936832, // Remplacez par la vraie taille en bytes
    sha256: 'A2F805AD3AE82B79D1EEB37FDEC464090CE4F19BDC2AFFC9F9B87F2F3C01EFBC', // Votre vrai checksum
    version: 'v0.1.0-alpha',
    platform: 'windows'
  },
  macos: {
    fileName: 'FileSentinel_macOS_Universal.dmg',
    filePath: '/downloads/FileSentinel_macOS_Universal.dmg',
    size: '12.3 MB',
    sizeBytes: 12897484,
    sha256: 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b',
    version: 'v0.1.0-alpha',
    platform: 'macos'
  },
  linux: {
    fileName: 'FileSentinel_x86_64.AppImage',
    filePath: '/downloads/FileSentinel_x86_64.AppImage',
    size: '9.2 MB',
    sizeBytes: 9646899,
    sha256: 'b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c',
    version: 'v0.1.0-alpha',
    platform: 'linux'
  }
};