import React, { useMemo } from 'react'
import Dashboard from '.'
import DashBoardBox from '@/components/DashBoardBox'
import { useGetKpisQuery } from '@/state/api'
import { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from '@mui/material';


type Props = {}

const Row1 = (props: Props) => {
  const{data} = useGetKpisQuery();
  console.log("🚀 ~ file: Row1.tsx:10 ~ Row1 ~ data:", data)

  const {palette}  = useTheme()

  const revenueExpenses = useMemo(() => {
    return(
      data && 
      data[0].monthlyData.map(({month , revenue , expenses})=>{
        return{
          name: month.substring(0,3),
          revenue: revenue,
          expenses: expenses
        }
      
      })
    )

  },[data])
  
  return (
    <>
    <DashBoardBox gridArea="a">
    <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={revenueExpenses}
          margin={{
            top: 15,
            right: 25,
            left: -10,
            bottom: 60,
          }}
        >
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={palette.primary.main} stopOpacity={0.8}/>
              <stop offset="95%" stopColor={palette.primary.main} stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={palette.secondary.main} stopOpacity={0.8}/>
              <stop offset="95%" stopColor={palette.secondary.main} stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tickLine={false} style={{fontSize:"10px"}} />
          <YAxis tickLine={false} style={{fontSize:"10px"}} axisLine={{strokeWidth: "0"}} domain={[8000, 23000]} />
          <Tooltip />
          <Area type="monotone" dot={true} dataKey="revenue" stroke={palette.primary.main} fill="url(#colorRevenue)" />
          <Area type="monotone" dot={true} dataKey="expenses" stroke={palette.primary.main} fill="url(#colorExpenses)" />
        </AreaChart>
      </ResponsiveContainer>
    </DashBoardBox>
    <DashBoardBox gridArea="b"></DashBoardBox>
    <DashBoardBox gridArea="c"></DashBoardBox>
    </>
  )
}
export default Row1