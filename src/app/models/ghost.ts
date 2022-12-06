export interface Ghost {
    id: number,
    name: string,
    name_ru?: string,
    evidence: number[],
    speed: boolean | null,
    video?: string,
    image?: string,
}