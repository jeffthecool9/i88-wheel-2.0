
import { Prize } from './types';

export const PRIZES: Prize[] = [
  { id: 1, label: '100 FREE SPINS', value: 'ON SLOT', color: '#ee1c25' },
  { id: 2, label: 'i88 REWARD', value: 'MYSTERY PRIZE', color: '#c41212' },
  { id: 3, label: 'i88 FORTUNE', value: 'PROSPERITY 88', color: '#ee1c25' },
  { id: 4, label: 'i88 BONUS', value: 'LUCKY DRAW', color: '#c41212' },
  { id: 5, label: 'i88 REWARD', value: 'MYSTERY PRIZE', color: '#ee1c25' },
  { id: 6, label: 'i88 FORTUNE', value: 'PROSPERITY 88', color: '#c41212' },
  { id: 7, label: 'i88 BONUS', value: 'LUCKY DRAW', color: '#ee1c25' },
  { id: 8, label: 'i88 REWARD', value: 'MYSTERY PRIZE', color: '#c41212' },
];

export const WHEEL_SIZE = 600;
export const OUTER_BORDER_WIDTH = 25;
export const MAX_SPINS = 1; // Limit to 1 spin per session as requested for the promotion
