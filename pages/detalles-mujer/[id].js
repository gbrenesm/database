import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'

// Import components
import General from '../../components/Detail/General/General'

// Import styles
import { Page } from '../../styles/Pages.styled'

// Import query
import { GET_WOMAN_DETAILS } from '../../services/queries'
import Title from '../../components/Layout/Title/Title'


const DetailPage = () => {
  const router = useRouter()
  const { id } = router.query

  const { data, loading } = useQuery(GET_WOMAN_DETAILS, {
    variables: {
      id
    }
  })

  if (loading) return <p>Cargando...</p>
  return (
    <Page>
      <Title
        title={data?.getWomanDetail.name}
      />
      <General
        woman={data?.getWomanDetail}/>
    </Page>
  )
}

export default DetailPage
