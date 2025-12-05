export interface Student {
  id: number;
  name: string;
  avatar: string;
  direction: string;
  skills: string[];
  points: number;
  achievements: Achievement[];
  level: number;
}

export interface Achievement {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Note {
  id: number;
  title: string;
  subject: string;
  author: string;
  authorAvatar: string;
  likes: number;
  downloads: number;
  date: string;
}

export interface Message {
  id: number;
  from: string;
  avatar: string;
  text: string;
  time: string;
  unread: boolean;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'academic' | 'sport' | 'cultural';
}
