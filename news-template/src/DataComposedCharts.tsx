import { FunctionComponent } from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "2017-2018",
    TotalGrantApproved: 6809025 ,
    TotalApplicationApproved: 4
  },
  {
    name: "2018-2019",
    TotalGrantApproved: 12836945 ,
    TotalApplicationApproved: 7,
  },
  {
    name: "2019-2020",
    TotalGrantApproved: 19489236 ,
    TotalApplicationApproved: 13
  },
  {
    name:"2020-2021",
    TotalGrantApproved: 13567369 ,
    TotalApplicationApproved: 10
  },
  {
    name: "2021-2022",
    TotalGrantApproved: 22176084,
    TotalApplicationApproved: 13
  },
  {
    name: "2022-2023",
    TotalGrantApproved: 17117402 ,
    TotalApplicationApproved: 10
  },
  {
    name: "2023-2024",
    TotalGrantApproved: 14529830,
    TotalApplicationApproved: 8
  }
];

const DataFormater = (number: number) => {
    if(number > 1000000000){
      return (number/1000000000).toString() + 'B';
    }else if(number > 1000000){
      return (number/1000000).toString() + 'M';
    }else if(number > 1000){
      return (number/1000).toString() + 'K';
    }else{
      return number.toString();
    }
  }

export function DataComposedChart(props: {width: number}) {
  return (
    <ComposedChart
    width={props.width}
    barCategoryGap={10}
    height={600}
    data={data}
    stackOffset="sign"
    margin={{
      top: 10,
      right: 0,
      left: 20,
      bottom: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" scale="band" />
      <YAxis tickFormatter={DataFormater} domain={[0, 4800000]} tickCount={15} interval={1} fontSize={20} />
      <Tooltip />
      <Legend />
      <Bar dataKey="TotalGrantApproved" barSize={20} fill="#30B0F0" />
      <Line type="monotone" dataKey="TotalApplicationApproved" stroke="#4328E7" />
    </ComposedChart>
  );
}
