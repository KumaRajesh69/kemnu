import * as React from "react";
import { Html, Head, Main, NextScript } from "next/document";
import theme from "../utils/theme";

export default function Document() {
    return (
        <Html>
            <Head>
                <meta content={theme.palette.primary.main} name="theme-color" />
                <script src="https://smtpjs.com/v3/smtp.js">
                </script>
                {/* <link rel={"manifest"} href={"/manifest.webmanifest"} /> */}
                <link href="../../public/favicon.ico" rel="shortcut icon" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />

            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}