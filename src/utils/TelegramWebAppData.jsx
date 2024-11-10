const TelegramWebAppData = () => {
    try {
        // Extract the hash part from the URL
        const urlHash = window.location.hash.substring(1) || "tgWebAppData=%7B%22id%22%3A123456880%2C%22first_name%22%3A%22gaurav%22%2C%22last_name%22%3A%22praja%22%2C%22username%22%3A%22gaurav%22%7D"; // Updated to include new main ID
        const urlParams = new URLSearchParams(urlHash);
        const tgWebAppData = urlParams.get('tgWebAppData');

        // Check if tgWebAppData exists and is properly formatted
        if (tgWebAppData) {
            const decodedData = decodeURIComponent(tgWebAppData);
            const jsonData = decodedData.includes("=") ? decodedData.split("=")[1] : decodedData;
            return JSON.parse(jsonData);
        }

        return null;
    } catch (error) {
        console.error('Error parsing Telegram Web App data:', error);
        return null;
    }
};

export default TelegramWebAppData;
