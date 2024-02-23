export function formatURL(url: string): string {
    try {
        const validUrl = new URL(url);
        return validUrl.href;
    } catch (error) {
        throw `${url} is not a valid URL`;
    }
}

