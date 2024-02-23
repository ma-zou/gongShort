import { UUID } from "crypto";

export interface ShortenedUrl {
    url: string,
    clicks: number,
    shortUrl: string,
    createdAt: Date,
    id: UUID
}
