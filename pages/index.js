import Head from 'next/head'
// Import components
import Navbar from '../components/Layout/Navbar/Navbar'
import Table from '../components/Table/Table'
import Searchbar from '../components/Searchbar/Searchbar'
// Import styles
import { Main } from '../styles/Home.styled'

const Home = () => {
  return (
    <>
      <Head>
        <title>Women Editor</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Main>
        <Searchbar/>
        <Table/>
      </Main>
    </>
  )
}

export default Home