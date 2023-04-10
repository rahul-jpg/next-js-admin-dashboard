import ThemeContext from '@/context/themeContext'
import { ResponsiveBar } from '@nivo/bar'
import { useContext } from 'react'

const MyResponsiveBar = ({ data }) => {
    const { themeMode } = useContext(ThemeContext)
    return (
        < ResponsiveBar
            data={data}
            theme={{
                axis: {
                    domain: {
                        line: {
                            stroke: themeMode === "dark" ? "#e0e0e0" : "#141414"
                        }
                    },
                    legend: {
                        text: {
                            fill: themeMode === "dark" ? "#e0e0e0" : "#141414",
                        },
                    },
                    ticks: {
                        line: {
                            stroke: themeMode === "dark" ? "#e0e0e0" : "#141414",
                            strokeWidth: 1,
                        },
                        text: {
                            fill: themeMode === "dark" ? "#e0e0e0" : "#141414",
                        },
                    },
                },
                legends: {
                    text: {
                        fill: themeMode === "dark" ? "#e0e0e0" : "#141414",
                    },
                },


            }}
            keys={
                [
                    'hot dog',
                    'burger',
                    'sandwich',
                    'kebab',
                    'fries',
                    'donut'
                ]}
            indexBy="country"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'nivo' }}
            defs={
                [
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#eed312',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
            fill={
                [
                    {
                        match: {
                            id: 'fries'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'sandwich'
                        },
                        id: 'lines'
                    }
                ]}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'brighter',
                        '1.6'
                    ]
                ]
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legendPosition: 'middle',
                legendOffset: -40
            }}
            enableLabel={false}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            }}
            legends={
                [
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 112,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={function (e) { return e.id + ": " + e.formattedValue + " in country: " + e.indexValue }}
        />
    )

}

export default MyResponsiveBar