import { registerPlugin } from '@capacitor/core';

import type { Media } from './definitions';

const Media = registerPlugin<MediaPlugin>('Media', {
});

export * from './definitions';
export * from './plugin';
export { Media }
