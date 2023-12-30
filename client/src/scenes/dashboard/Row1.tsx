import React, { useMemo } from 'react'

import DashBoardBox from '@/components/DashBoardBox'
import BoxHeader from '@/components/DashBoardBox'

import { useGetKpisQuery } from '@/state/api'
import { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer , Line, Legend, LineChart, BarChart, Bar, Rectangle } from 'recharts';
import { useTheme } from '@mui/material';
import { Margin } from '@mui/icons-material';


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

  const revenueProfit = useMemo(() => {
    return(
      data && 
      data[0].monthlyData.map(({month , revenue , expenses})=>{
        return{
          name: month.substring(0,3),
          revenue: revenue,
          profit: (revenue - expenses).toFixed(2),
        }
      
      })
    )

  },[data])

  const revenue = useMemo(() => {
    return(
      data && 
      data[0].monthlyData.map(({month , revenue })=>{
        return{
          name: month.substring(0,3),
          revenue: revenue,

        }
      
      })
    )

  },[data])
  
  return (
    <>
    <DashBoardBox gridArea="a">
      <BoxHeader title="Revenue & Expenses" 
      subtitle="Monthly revenue and expenses"

      />
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

    <DashBoardBox gridArea="b">

      <BoxHeader title="Profit & Revenue" 
      subtitle="Monthly revenue and expenses"
      sideText="+5%"
      />
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={400}
          data={revenueProfit}
          margin={{
            top: 20,
            right: 0,
            left: -10,
            bottom: 55,
          }}
        >
       
          <CartesianGrid vertical={false} stroke ={palette.grey[600]} />
          <XAxis dataKey="name" tickLine={false} style={{fontSize:"10px"}} />
          <YAxis tickLine={false} yAxisId="left"  style={{fontSize:"10px"}} axisLine={false} orientation='left'/>
          <YAxis tickLine={false} yAxisId="right"  orientation='right' style={{fontSize:"10px"}} axisLine={false} />

          <Tooltip />
          <Legend height={20} wrapperStyle={{ margin: '0 0 10px 0'}} />

          <Line  yAxisId="left"  type="monotone"  dataKey="profit" stroke={palette.tertiary[300]}/>
          <Line  yAxisId="right"  type="monotone"  dataKey="revenue" stroke={palette.primary.main}/>

        </LineChart>
      </ResponsiveContainer>


    </DashBoardBox>

    <DashBoardBox gridArea="c">
    <BoxHeader title="Revenue Month by Month" subtitle="Revenue Month by Month" sideText="+5%" />
    <ResponsiveContainer width="100%" height="100%">
    <BarChart
          width={500}
          height={300}
          data={revenue}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
            <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={palette.primary.main} stopOpacity={0.7}/>
              <stop offset="95%" stopColor={palette.primary.main} stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={palette.secondary.main} stopOpacity={0.8}/>
              <stop offset="95%" stopColor={palette.secondary.main} stopOpacity={0}/>
            </linearGradient>
          </defs>

          <CartesianGrid vertical={false} stroke={palette.grey[800]}/>
          <XAxis dataKey="name"  axisLine={false} tickLine={false} style={{fontSize : "10px"}}/>
          <YAxis  axisLine={false} tickLine={false} style={{fontSize : "10px"}}/>

          <Tooltip />

          <Bar dataKey="revenue"  fill="#3498ad" activeBar={<Rectangle fill="lightgreen" stroke="yellow" />} />

        </BarChart>



      </ResponsiveContainer>
    </DashBoardBox>
    </>
  )
}
export default Row1