import './globals.css'

export const metadata = {
  title: 'SuperEnergy - Green & Clean Energy Specialist',
  description: 'As the world\'s largest green and clean energy specialist, SuperEnergy provides oil extraction, pipeline building, and oil refinement services.',
  keywords: ['energy', 'oil', 'green energy', 'clean energy', 'extraction', 'pipelines', 'refinement'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}