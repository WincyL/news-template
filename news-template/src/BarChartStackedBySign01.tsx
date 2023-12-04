import { FunctionComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';

const data = [
  {
    Year: '2008-2009 ',
    Buildings: 1,
  },
  {
    Year: '2009-2010',
    Buildings: 7,
  },
  {
    Year: '2010-2011',
    Buildings: 1,
  },
  {
    Year: '2011-2012',
    Buildings: 10,
  },
  {
    Year: '2012-2013',
    Buildings: 7,
  },
  {
    Year: '2013-2014',
    Buildings: 10,
  },
  {
    Year: '2014-2015',
    Buildings: 9,
  },
  {
    Year: '2015-2016',
    Buildings: 4,
  },
  {
    Year: '2017-2018',
    Buildings: 4,
  },
  {
    Year: '2018-2019',
    Buildings: 7,
  },
  {
    Year: '2019-2020',
    Buildings: 13,
  },
  {
    Year: '2021-2022',
    Buildings: 10,
  },
  {
    Year: '2018-2019',
    Buildings: 13,
  },
  {
    Year: '2022-2023',
    Buildings: 10,
  },
  {
    Year: '2023-2024',
    Buildings: 8,
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
      <XAxis dataKey="Year" tick={<CustomizedAxisTick />} interval={0} />
      <YAxis domain={[0, 20]} tickCount={15} interval={1} fontSize={20} />
      <Tooltip content={<CustomTooltip />}  />
      <Legend wrapperStyle={{paddingTop: 30}} />
      <ReferenceLine y={0} stroke="#000" />
      <Bar dataKey="Buildings" fill="#7A87D4" stackId="stack" />
    </BarChart>
  );
}
