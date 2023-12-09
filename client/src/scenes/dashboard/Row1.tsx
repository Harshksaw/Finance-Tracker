import React from 'react'
import Dashboard from '.'
import DashBoardBox from '@/components/DashBoardBox'

type Props = {}

const Row1 = (props: Props) => {
  return (
    <>
    <DashBoardBox gridArea="a"></DashBoardBox>
    <DashBoardBox gridArea="b"></DashBoardBox>
    <DashBoardBox gridArea="c"></DashBoardBox>
    </>
  )
}
export default Row1