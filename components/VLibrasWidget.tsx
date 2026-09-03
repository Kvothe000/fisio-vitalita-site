"use client";
import Script from "next/script";

declare module "react" {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        vw?: string;
        "vw-access-button"?: string;
        "vw-plugin-wrapper"?: string;
    }
}

declare global {
    interface Window {
        VLibras?: {
            Widget: new (url: string) => void;
        };
    }
}

export default function VLibrasWidget() {
    return (
        <>
            <Script
                src="https://vlibras.gov.br/app/vlibras-plugin.js"
                strategy="afterInteractive"
                onLoad={() => {
                    if (window.VLibras) {
                        new window.VLibras.Widget("https://vlibras.gov.br/app");
                    }
                }}
            />
            <div vw="true" className="enabled">
                <div vw-access-button="true" className="active"></div>
                <div vw-plugin-wrapper="true">
                    <div className="vw-plugin-top-wrapper"></div>
                </div>
            </div>
        </>
    );
}
