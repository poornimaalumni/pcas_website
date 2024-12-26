export interface Story {
    id: number;
    date: string;
    title: string;
}
  
export interface Event {
    id: number;
    type: string;
    date: string;
    title: string;
    location: string;
}

export interface SuccessStory {
    id: number;
    name: string;
    desg: string;
    description: string;
    year: string;
    image: string;
    linkedin: string;
}

export interface Committee {
    id: number;
    name: string;
    position: string;
    desg: string; 
    linkedin: string;
    image: string;
}

export interface Glimpse {
    id: number;
    img: string;
    alt: string;
    title: string;
    photo: string;
    description: string;
};