import type { PersonSummary } from '@/entities/person/model/types';

export interface SwapPeopleResponse {
    message: string;
    total_records: number;
    total_pages: number;
    previous: string | null;
    next: string | null;
    results: PersonSummary[];
}

export interface SwapiSupport {
    contact: string;
    donate: string;
    partnerDiscounts: Record<string, string>;
}

export interface SwapiSocial {
    discord: string;
    reddit: string;
    github: string;
}

export interface SwapiApiResponse<T> {
    apiVersion: string;
    message: string;
    result: T[];
    social: SwapiSocial;
    support: SwapiSupport;
    timestamp: string;
} 