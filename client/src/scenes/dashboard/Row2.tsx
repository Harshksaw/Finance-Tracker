import DashBoardBox from '@/components/DashBoardBox'
import { useGetProductsQuery } from '@/state/api'
import React from 'react'

type Props = {}

const Row2 = (props: Props) => {
  const {data} = useGetProductsQuery()
  console.log(data)

  return (
    <>
        <DashBoardBox gridArea="d"></DashBoardBox>
        <DashBoardBox gridArea="e"></DashBoardBox>
        <DashBoardBox gridArea="f"></DashBoardBox>
    </>
  )
}
export default Row2;