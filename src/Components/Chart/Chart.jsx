import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function PriceChart ({data}) {
    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 45,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="avg" stroke="#F94A29" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="min" stroke="#711A75" />
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}

