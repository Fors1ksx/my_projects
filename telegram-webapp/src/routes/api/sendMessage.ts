type RequestBody = {
    chatId: string;
    text: string;
};
import type { RequestEvent } from '@sveltejs/kit';

export async function POST({ request }: RequestEvent) {
    const { chatId, text }: RequestBody = await request.json();
    const token = '<Ваш токен от BotFather>';

    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: chatId,
            text: text
        })
    });

    return new Response(JSON.stringify(await res.json()));
}

