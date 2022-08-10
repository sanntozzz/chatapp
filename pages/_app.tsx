import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
    const metaData = {
        title: 'Chat App',
        description: '',
        type: 'website',
        url: '',
        image: 'g',
    }
    return (
        <>
            <Head>
                <title>{metaData.title}</title>
                <meta name="title" content={metaData.title} />
                <meta name="description" content={metaData.description} />
                <meta property="og:type" content={metaData.type} />
                <meta property="og:url" content={metaData.url} />
                <meta property="og:title" content={metaData.title} />
                <meta
                    property="og:description"
                    content={metaData.description}
                />
                <meta property="og:image" content={metaData.image} />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={metaData.url} />
                <meta property="twitter:title" content={metaData.title} />
                <meta
                    property="twitter:description"
                    content={metaData.description}
                />
                <meta property="twitter:image" content={metaData.image} />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
