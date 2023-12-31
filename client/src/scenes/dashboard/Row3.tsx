import DashBoardBox from "@/components/DashBoardBox";
import {
  useGetKpisQuery,
  useGetProductsQuery,
  useGetTransactionsQuery,
} from "@/state/api";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import React, { useMemo } from "react";
import DashboardBox from "@/components/DashBoardBox";
import { Cell, Pie, PieChart } from "recharts";
import FlexBetween from "@/components/FlexBetween";
type Props = {};

const Row3 = (props: Props) => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[500]];

  const { data: kpiData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();
  const { data: transactionData } = useGetTransactionsQuery();

  const pieChartData = useMemo(() => {
    if(kpiData){
      const totalExpenses = kpiData[0].totalExpenses;
      return Object.entries(kpiData[0].expensesByCategory).map(([key, value]) => {
        return [
          {
            name: key,
            value: (value / totalExpenses) * 100,
          },
          {
            name: `${key} of Total`,
            value: totalExpenses - value,
          }
        ];
      })
    }

  },[kpiData])



  const productColumns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "expense",
      headerName: "Expense",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
  ];
  const transactionColumns = [
    {
      field: "_id",
      headerName: "id",
      flex: 1,
    },
    {
      field: "buyer",
      headerName: "Buyer",
      flex: 0.67,
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 0.35,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: "productIds",
      headerName: "Count",
      flex: 0.1,
      renderCell: (params: GridCellParams) =>
        (params.value as Array<string>).length,
    },
  ];
  console.log(transactionColumns);
  console.log(transactionData);

  return (
    <>
      <DashBoardBox gridArea="g">
        <DashboardBox
          sx={{
            display: "grid", // Switch to grid layout
            gridTemplateColumns: "1fr auto", // Create two columns, one flexible and one auto-sized
            alignItems: "flex-start", // Keep top-right alignment
            backgroundColor: "lightblue",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mr: 1,
              color: "darkblue",
              fontFamily: "Open Sans",
              fontSize: "26px",
            }}
          >
            List of Products
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "black", fontSize: "20px", paddingRight: "20px" }}
          >
            {productData?.length ?? 0} products
          </Typography>
        </DashboardBox>
        <Box
          mt="0.5rem"
          p="0 0.5rem"
          height="75%"
          sx={{
            "& .MuiDataGrid-root": {
              color: palette.grey[300],
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden",
            },
            // ...other styling
          }}
        >
          <DataGrid
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}
            rows={productData || []}
            columns={productColumns}
          />
        </Box>
      </DashBoardBox>

      <DashBoardBox gridArea="h">
        <DashboardBox
          sx={{
            display: "grid", // Switch to grid layout
            gridTemplateColumns: "1fr auto", // Create two columns, one flexible and one auto-sized
            alignItems: "flex-start", // Keep top-right alignment
            backgroundColor: "lightblue",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mr: 1,
              color: "darkblue",
              fontFamily: "Open Sans",
              fontSize: "26px",
            }}
          >
            List of Transactions
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "black",
              fontSize: "15px",
              paddingRight: "20px",
              margin: "auto",
            }}
          >
            {transactionData?.length ?? 0} Latest transactions
          </Typography>
        </DashboardBox>
        <Box
          mt="1rem"
          p="0 0.5rem"
          height="80%"
          sx={{
            "& .MuiDataGrid-root": {
              color: palette.grey[300],
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden",
            },
            // ...other styling
          }}
        >
          <DataGrid
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}
            rows={transactionData || []}
            columns={transactionColumns}
          />
        </Box>
      </DashBoardBox>

      <DashBoardBox gridArea="i">

        <DashboardBox
          sx={{
            display: "grid", // Switch to grid layout
            gridTemplateColumns: "1fr auto", // Create two columns, one flexible and one auto-sized
            alignItems: "flex-start", // Keep top-right alignment
            backgroundColor: "lightblue",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mr: 1,
              color: "darkblue",
              fontFamily: "Open Sans",
              fontSize: "26px",
            }}
          >
            Expenses Breakdown By Category
          </Typography>

        </DashboardBox>
        <FlexBetween mt="0.5rem" gap="0.5rem" p="0 1rem" textAlign="center">
          {pieChartData?.map((data, i) => (
            <Box key={`${data[0].name}-${i}`}>
              <PieChart width={110} height={100}>
                <Pie
                  stroke="none"
                  data={data}
                  innerRadius={18}
                  outerRadius={35}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index]} />
                  ))}
                </Pie>
              </PieChart>
              <Typography variant="h5">{data[0].name}</Typography>
            </Box>

          ))}

        </FlexBetween>
      </DashBoardBox>
      <DashBoardBox gridArea="j">


          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mr: 1,
              color: "greenyellow",
              fontFamily: "Open Sans",
              fontSize: "26px",
              margin: "1rem 1rem 0.4rem 1rem",
            }}
          >
            Overall Summary and Explanation Data

        </Typography>
        <Box
          height="15px"
          margin="1.25rem 1rem 0.4rem 1rem"
          bgcolor={palette.primary[800]}
          borderRadius="1rem"
        >
          <Box
            height="15px"
            bgcolor={palette.primary[600]}
            borderRadius="1rem"
            width="40%"
          ></Box>
        </Box>
        <Typography margin="0 1rem" variant="h6">
          40% of the way to our goal

        </Typography>


      </DashBoardBox>
    </>
  );
};
export default Row3;
