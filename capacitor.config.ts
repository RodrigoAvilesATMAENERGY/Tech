import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.atmaenergy.tech',
  appName: 'ATMA Tech',
  webDir: 'www',
  server: {
    url: 'https://atma-energy.com/tech',
    cleartext: false,
  },
  android: {
    allowMixedContent: false,
  },
};

export default config;
