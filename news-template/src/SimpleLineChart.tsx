import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis, Legend } from "recharts";
import { FunctionComponent } from 'react';


const data = [
    {
      Year: "Jan-22",
      Telephone: 125,
      Written: 26,
      Archives : 9,
      Tours: 0,
      Lectures: 2,
      Workshops: 0
    },
    {
      Year: "Feb-22",
      Telephone: 89,
      Written: 22,
      Archives : 1,
      Tours: 0,
      Lectures: 1,
      Workshops: 0
    },
    {
      Year: "Mar-22",
      Telephone: 65,
      Written: 16,
      Archives : 1,
      Tours: 0,
      Lectures: 1,
      Workshops: 0
    },
    {
      Year: "Apr-22",
      Telephone: 153,
      Written: 32,
      Archives : 14,
      Tours: 1,
      Lectures: 5,
      Workshops: 2
    },
    {
      Year: "May-22",
      Telephone: 221,
      Written: 27,
      Archives : 11,
      Tours: 1,
      Lectures: 1,
      Workshops: 4
    },
    {
      Year: "Jun-22",
      Telephone: 241,
      Written: 32,
      Archives : 14,
      Tours: 0,
      Lectures: 2,
      Workshops: 7
    },
    {
      Year: "Jul-22",
      Telephone: 206,
      Written: 27,
      Archives : 4,
      Tours: 5,
      Lectures: 2,
      Workshops: 2
    },
    {
      Year: "Aug-22",
      Telephone: 157,
      Written: 24,
      Archives : 16,
      Tours: 7,
      Lectures: 4,
      Workshops: 2
    },
    {
      Year: "Sep-22",
      Telephone: 174,
      Written: 32,
      Archives : 14,
      Tours: 5,
      Lectures: 3,
      Workshops: 8
    },
    {
      Year: "Oct-22",
      Telephone: 181,
      Written: 33,
      Archives : 9,
      Tours: 1,
      Lectures: 7,
      Workshops: 5
    },
    {
      Year: "Nov-22",
      Telephone: 153,
      Written: 20,
      Archives : 4,
      Tours: 9,
      Lectures: 5,
      Workshops: 10
    },
    {
      Year: "Dec-22",
      Telephone: 149,
      Written: 24,
      Archives : 1,
      Tours: 1,
      Lectures: 3,
      Workshops: 5
    },
    {
      Year: "Jan-23",
      Telephone: 223,
      Written: 34,
      Archives : 5,
      Tours: 37,
      Lectures: 1,
      Workshops: 9
    },
    {
      Year: "Feb-23",
      Telephone: 200,
      Written: 36,
      Archives : 10,
      Tours: 57,
      Lectures: 4,
      Workshops: 5
    },
    {
      Year: "Mar-23",
      Telephone: 200,
      Written: 49,
      Archives : 8,
      Tours: 150,
      Lectures: 2,
      Workshops: 24
    },
    {
      Year: "Apr-23",
      Telephone: 148,
      Written: 39,
      Archives : 4,
      Tours: 92,
      Lectures: 1,
      Workshops: 8
    },
    {
      Year: "May-23",
      Telephone: 161,
      Written: 25,
      Archives : 6,
      Tours: 70,
      Lectures: 3,
      Workshops: 5
    },
    {
      Year: "Jun-23",
      Telephone: 1076,
      Written: 187,
      Archives : 4,
      Tours: 125,
      Lectures: 5,
      Workshops: 4
    },
    {
      Year: "Jul-23",
      Telephone: 381,
      Written: 40,
      Archives : 3,
      Tours: 144,
      Lectures: 2,
      Workshops: 6
    }
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

export function SimpleLineChart(props: {width: number}){

    return (
    <LineChart width={props.width} height={300} data={data}
    margin={{
        top: 20,
        right: 20,
        left: 20,
        bottom: 50
    }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Year" tick={<CustomizedAxisTick />} interval={0} />
        <YAxis />
        <Tooltip content={<CustomTooltip />}/>
        <Legend wrapperStyle={{paddingTop: 30}} />
        <Line type="monotone" dataKey="Telephone" stroke="#4A77C6"/> 
        <Line type="monotone" dataKey="Written" stroke="#ED7D31"/>
        <Line type="monotone" dataKey="Archives" stroke="#A5A5A5"/>
        <Line type="monotone" dataKey="Tours" stroke="#FFBC00"/>
        <Line type="monotone" dataKey="Lectures" stroke="#5295D3"/>
        <Line type="monotone" dataKey="Workshops" stroke="#70AD47"/>
    </LineChart>
    )
}