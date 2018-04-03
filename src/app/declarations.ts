export interface Guest {
  name: string;
  nickname?: string;
  phonenumber?: string;
  photo_url?: string;
  landmarked_photo_url?: string;
  landmark_url?: string;
  thumbnail_url?: string;
  willAttend: boolean;
  hasResponded: boolean;
  formComplete: boolean;
  isLoggedIn: boolean;
  relationship_description?: string;
  id?: string;
}

export interface PlayerStats {
  points: number;
  tens: number;
  responses: number;
}

export interface HighScoreEntry {
  guestId: string;
  points: number;
  position: number;
}
