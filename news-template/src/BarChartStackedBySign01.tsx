import { FunctionComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';

const data = [
  {
    name: '2013',
    Number: 18,
  },
  {
    name: '2014',
    Number: 18,
  },
  {
    name: '2015',
    Number: 18,
  },
  {
    name: '2016',
    Number: 18,
  },
  {
    name: '2017',
    Number: 25,
  },
  {
    name: '2019',
    Number: 25,
  },
  {
    name: '2020',
    Number: 26,
  },
  {
    name: '2021',
    Number: 26,
  },
  {
    name: '2022',
    Number: 26,
  },
  {
    name: '2023',
    Number: 27,
  },
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

const DataFormater = (number: number) => {
  if(number > 25){
    return (number >= 30);
  }else if(number > 20){
    return (number >= 20);
  }else if(number > 15){
    return (number >= 15);
  }else{
    return number;
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

export function BarChartStackedBySign01 (props: {width: number}) {

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
      <XAxis dataKey="name" tick={<CustomizedAxisTick />} interval={1} />
      <YAxis tickFormatter={DataFormater} domain={[0, 30]} tickCount={15} interval={1} fontSize={20} />
      <Tooltip content={<CustomTooltip />}  />
      <Legend wrapperStyle={{paddingTop: 30}} />
      <ReferenceLine y={0} stroke="#000" />
      <Bar dataKey="Number" fill="#7A87D4" stackId="stack" />
      {/* <Bar dataKey="Female" fill="#D47ABB" stackId="stack" /> */}
    </BarChart>
  );
}
