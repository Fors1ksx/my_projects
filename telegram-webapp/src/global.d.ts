interface TelegramWebApp {
    initDataUnsafe: { user?: { first_name: string; last_name?: string; username?: string } };
    expand: () => void;
    close: () => void;
}

interface Window {
    Telegram?: { WebApp: TelegramWebApp };
}
let userData: { first_name?: string; last_name?: string; username?: string } | undefined;
