import { Photo } from './photo';

export interface User {
    id: number;
    username: string;
    knownAs: string;
    age: string;
    gender: string;
    created: Date;
    lastActive: Date;
    photoUrl: string;
    country: string;
    interests?: string;
    introduction?: string;
    lockingFor?: string;
    photos?: Photo[];
}
