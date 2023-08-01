import { SearchBox } from '@/components/search-box'
import { Container } from '@/components/container'
import { Navbar } from '@/components/navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={inter.className}>
        <Container>
          <SearchBox />
        </Container>
      </main>
    </>
  )
}
