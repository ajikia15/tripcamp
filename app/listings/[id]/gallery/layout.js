
export const metadata = {
    title: "Gallery",
    description: "Pictures of the listing",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
