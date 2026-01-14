import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AccessibilityToolbar from '@/components/AccessibilityToolbar';
import JsonLd from '@/components/JsonLd';
import StickyMobileCTA from '@/components/StickyMobileCTA';

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <JsonLd />
            <Header />
            <main>{children}</main>
            <WhatsAppButton />
            <AccessibilityToolbar />
            <StickyMobileCTA />
            <Footer />
        </>
    );
}
