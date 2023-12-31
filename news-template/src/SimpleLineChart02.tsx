import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis, Legend } from "recharts";
import { FunctionComponent } from 'react';


const data = [
    {
        Year: '2013',
        Buildings: 18,
      },
      {
        Year: '2014',
        Buildings: 18,
      },
      {
        Year: '2015',
        Buildings: 18,
      },
      {
        Year: '2016',
        Buildings: 18,
      },
      {
        Year: '2017',
        Buildings: 25,
      },
      {
        Year: '2019',
        Buildings: 25,
      },
      {
        Year: '2020',
        Buildings: 26,
      },
      {
        Year: '2021',
        Buildings: 26,
      },
      {
        Year: '2022',
        Buildings: 26,
      },
      {
        Year: '2023',
        Buildings: 27,
      },
  ];

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

export function SimpleLineChart02 (props: {width: number}){

    return (
    <LineChart width={props.width} height={300} data={data}
    margin={{
        top: 10,
        right: 20,
        left: 20,
        bottom: 50
    }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Year" tick={<CustomizedAxisTick />} interval={0} />
        <YAxis domain={[0, 30]} tickCount={15} interval={1} fontSize={20}/>
        <Tooltip content={<CustomTooltip />}/>
        <Legend wrapperStyle={{paddingTop: 30}} />
        <Line type="monotone" dataKey="Buildings" stroke="#4A77C6"/> 
    </LineChart>
    )
}