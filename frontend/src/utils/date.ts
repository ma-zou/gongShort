export function dateFormatter(dateInput: Date | string) {
    const dateObject = new Date(dateInput);
  
    return {
        formatToLocaleDate: () => {
            const day = dateObject.getDate().toString().padStart(2, '0');
            const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
            const year = dateObject.getFullYear();
            return `${day}.${month}.${year}`;
        },
        formatToLocaleTime: () => {
            const hours = dateObject.getHours().toString().padStart(2, '0');
            const minutes = dateObject.getMinutes().toString().padStart(2, '0');
            return `${hours}:${minutes}`;
        },
        formatToDateTime: () => {
            const day = dateObject.getDate().toString().padStart(2, '0');
            const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
            const year = dateObject.getFullYear();
            const hours = dateObject.getHours().toString().padStart(2, '0');
            const minutes = dateObject.getMinutes().toString().padStart(2, '0');
            return `${day}.${month}.${year} ${hours}:${minutes}`;
        },
        displayTimeAgo: () => {
            const now = new Date();
            const diff = now.getTime() - dateObject.getTime();
            const seconds = Math.floor(diff / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);
            const days = Math.floor(hours / 24);
            return days > 0 ? `${days} days ago` : hours > 0 ? `${hours} hours ago` : minutes > 0 ? `${minutes} minutes ago` : `${seconds} seconds ago`;
        },
        // Add more format methods as needed
    };
}
