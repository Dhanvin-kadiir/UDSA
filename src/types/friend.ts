import type { Platform } from './game';

export type OnlineStatus = 'online' | 'in_game' | 'away' | 'offline';

export interface Friend {
  id: string;
  username: string;
  avatarUrl: string;
  status: OnlineStatus;
  currentGame?: string;
  currentGameId?: string;
  lastSeen?: string;
  platform: Platform;
  achievementsThisWeek: number;
  mutualFriends: number;
}
