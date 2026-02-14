export async function onRequest(context) {
    try {
        // Access environment variables from Cloudflare
        const { env } = context;
        
        // Return all configuration as JSON
        const config = {
            // Section URLs from environment variables
            urls: {
                '1D': env.URL_1D || '',
                '1M': env.URL_1M || '',
                '1N': env.URL_1N || '',
                '1E': env.URL_1E || '',
                '2D': env.URL_2D || '',
                '2M': env.URL_2M || '',
                '2N': env.URL_2N || '',
                '2E': env.URL_2E || ''
            },
            // Secret password and URL from environment variables
            secrets: {
                specialPassword: env.SPECIAL_PASSWORD || 'lfjc2025lfjc', // Fallback
                specialUrl: env.SPECIAL_URL || 'https://work-7ru.pages.dev/' // Fallback
            }
        };
        
        return new Response(JSON.stringify(config), {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to load configuration' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
