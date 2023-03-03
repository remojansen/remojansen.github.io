import React from "react";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";
import Data from "./inversify-download-counts.json";

const keys = Object.keys(Data.inversify);

const data = keys
  .map((k) => {
    return {
      x: k,
      y: (Data.inversify as any)[k],
    };
  })
  .filter((v, i) => i % 7 === 0);

export function Chart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 50 }}
      >
        <Line dataKey="y" stroke="#ffbd39" dot={false} width={3} />
        <Tooltip
          content={(props: any) => {
            return props.active && props.payload[0] ? (
              <div className="chart-tooltip">
                <b>{props.payload[0].payload.y}</b> downloads on{" "}
                <b>
                  {new Date(
                    Date.parse(props.payload[0].payload.x)
                  ).toLocaleDateString()}
                </b>
              </div>
            ) : null;
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
