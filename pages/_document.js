import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <link rel="shortcut icon" href="/assets/images/favicon.ico" />
            <title>Med Jaaf Solutions</title>
            <link rel="preconnect" href="https://fonts.bunny.net" />
            <link href="https://fonts.bunny.net/css?family=dm-sans:400,400i,500,500i,700,700i" rel="stylesheet" />
            <body className='Med-Jaaf'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
