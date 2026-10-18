import { feed } from '../../lib/feed';

export const GET = (context: Parameters<typeof feed>[1]) => feed('en', context);
