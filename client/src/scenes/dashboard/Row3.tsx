import DashBoardBox from '@/components/DashBoardBox'
import React from 'react'

type Props = {}

const Row3 = (props: Props) => {
  return (
    <>
        <DashBoardBox gridArea="g"></DashBoardBox>
        <DashBoardBox gridArea="h"></DashBoardBox>
        <DashBoardBox gridArea="i"></DashBoardBox>
        <DashBoardBox gridArea="j"></DashBoardBox>
    </>
  )
}
export default Row3;