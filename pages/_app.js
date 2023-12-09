import MainLayout from '@/src/components/layout/main-layout'
import '../styles/global.css'
import '../styles/general.sass'
export default function App({ Component, pageProps }) {
  return (
    <>
    <MainLayout>
    <Component {...pageProps} />
    </MainLayout>
    </>
  )
}
