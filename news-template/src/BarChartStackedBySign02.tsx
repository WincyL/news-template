import { FunctionComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';

const data = [
    {
      Year: "Jan-22",
      Visitor: 10461
    },
    {
      Year: "Feb-22",
      Visitor: 5871
    },
    {
      Year: "Mar-22",
      Visitor: 4623
    },
    {
      Year: "Apr-22",
      Visitor: 10370
    },
    {
      Year: "May-22",
      Visitor: 15086
    },
    {
      Year: "Jun-22",
      Visitor: 18072
    },
    {
      Year: "Jul-22",
      Visitor: 16502
    },
    {
      Year: "Aug-22",
      Visitor: 12181
    },
    {
      Year: "Sep-22",
      Visitor: 12451
    },
    {
      Year: "Oct-22",
      Visitor: 20158
    },
    {
      Year: "Nov-22",
      Visitor: 25169
    },
    {
      Year: "Dec-22",
      Visitor: 27515
    },
    {
      Year: "Jan-23",
      Visitor: 29100
    },
    {
      Year: "Feb-23",
      Visitor: 34419
    },
    {
      Year: "Mar-23",
      Visitor: 35486
    },
    {
      Year: "Apr-23",
      Visitor: 43673
    },
    {
      Year: "May-23",
      Visitor: 33590
    },
    {
      Year: "Jun-23",
      Visitor: 27128
    },
    {
      Year: "Jul-23",
      Visitor: 29076
    }
  ];

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

// const DataFormater = (number: number) => {
//   if(number > 25){
//     return (number >= 30);
//   }else if(number > 20){
//     return (number >= 20);
//   }else if(number > 15){
//     return (number >= 15);
//   }else{
//     return number;
//   }
// }

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

export function BarChartStackedBySign02 (props: {width: number}) {

  return (
    <BarChart
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
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Year" tick={<CustomizedAxisTick />} interval={0} />
      <YAxis domain={[0, 45000]} tickCount={15} interval={1} fontSize={20} />
      <Tooltip content={<CustomTooltip />}  />
      <Legend wrapperStyle={{paddingTop: 30}} />
      <ReferenceLine y={0} stroke="#000" />
      <Bar dataKey="Buildings" fill="#7A87D4" stackId="stack" />
    </BarChart>
  );
}
