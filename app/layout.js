export const metadata = {
  title: 'Building Design - Ground Floor Plan',
  description: 'Interactive ground floor building design with hall and rooms',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
