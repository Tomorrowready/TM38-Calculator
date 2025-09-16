import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'ConcreteNZ TM38 Calculator',
  description: 'Engineering Calculations for Point Loads based on ConcreteNZ TM38 guidance.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
        {/* This script handles the SPA redirect for GitHub Pages. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(l) {
                if (l.search) {
                  var q = {};
                  l.search.slice(1).split('&').forEach(function(v) {
                    var a = v.split('=');
                    q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
                  });
                  if (q.p !== undefined) {
                    window.history.replaceState(null, null,
                      l.pathname.slice(0, -1) + (q.p || '') + (q.q ? '?' + q.q : '') + l.hash
                    );
                  }
                }
              }(window.location))
            `,
          }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
