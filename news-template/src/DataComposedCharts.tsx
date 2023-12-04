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
    Year: '2008-2009 ',
    TotalGrantApproved: 711000,
    TotalApplicationApproved: 1
  },
  {
    Year: '2009-2010',
    TotalGrantApproved: 5751000 ,
    TotalApplicationApproved: 7
  },
  {
    Year: '2010-2011',
    TotalGrantApproved: 1000000 ,
    TotalApplicationApproved: 1
  },
  {
    Year: '2011-2012',
    TotalGrantApproved: 9297000,
    TotalApplicationApproved: 10
  },
  {
    Year: '2012-2013',
    TotalGrantApproved: 6929960 ,
    TotalApplicationApproved: 7
  },
  {
    Year: '2013-2014',
    TotalGrantApproved: 9417440 ,
    TotalApplicationApproved: 10
  },
  {
    Year: '2014-2015',
    TotalGrantApproved: 11790100 ,
    TotalApplicationApproved: 9
  },
  {
    Year: '2015-2016',
    TotalGrantApproved: 4793800 ,
    TotalApplicationApproved: 4
  },
  {
    name: "2017-2018",
    TotalGrantApproved: 4809025 ,
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

  export const CustomizedAxisTick: FunctionComponent<any> = (props: any) => {
    const { x, y, payload } = props;
  
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
          fontSize={20}
        >
          {payload.value}
        </text>
      </g>
    );
  };

  const CustomTooltip: FunctionComponent<any> = (props: any) => {

    const { active, payload, label } = props;
  
    if (active && payload && payload.length) {
      return (
        <div className=" flex flex-col justify-start items-starts rounded-md bg-[#ffffffb7] p-1">
  
            <p className=" font-bold">{label}</p>
  
            {
                payload.map((pld: any) => (
                    <div className=" flex justify-start items-center gap-5"
                      style={{
                        color: pld.color
                      }}>
                        <div>
                          {pld.dataKey}:
                        </div>
                        <div>{pld.value < 0 ? pld.value * -1 : pld.value}</div>
                    </div>
                ))
            }
        </div>
      );
    }
  
    return null;
  };

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
      <XAxis dataKey="name" tick={<CustomizedAxisTick />} interval={0} />
      <YAxis yAxisId="left-axis" tickFormatter={DataFormater} domain={[0, 4800000]} tickCount={15} interval={1} fontSize={20} />
      <YAxis yAxisId="right-axis"
             orientation="right"
             domain={[0, 20]} tickCount={15} interval={0} fontSize={15} />
      <Tooltip content={<CustomTooltip />} />
      <Legend wrapperStyle={{paddingTop: 30}} />
      <Bar yAxisId="left-axis" 
           dataKey="TotalGrantApproved" barSize={20} fill="#30B0F0" />
      <Line yAxisId="right-axis"
            type="monotone" dataKey="TotalApplicationApproved" stroke="#4328E7" />
    </ComposedChart>
  );
}
