import { ResponsiveChoropleth } from '@nivo/geo'
import { geoFeatures } from "../../../geoFeature"
import { useContext } from 'react'
import ThemeContext from '@/context/themeContext'

const GeoChart = ({ data, legendsDisplay, projectionValue }) => {
    const { themeMode } = useContext(ThemeContext)
    return (
        <ResponsiveChoropleth
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
            features={geoFeatures.features}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            colors="nivo"
            domain={[0, 1000000]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            projectionTranslation={[0.5, 0.5]}
            projectionScale={projectionValue}
            projectionRotation={[0, 0, 0]}
            graticuleLineColor="#dddddd"
            borderWidth={0.5}
            borderColor="#152538"
            defs={[
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
                },
                {
                    id: 'gradient',
                    type: 'linearGradient',
                    colors: [
                        {
                            offset: 0,
                            color: '#000'
                        },
                        {
                            offset: 100,
                            color: 'inherit'
                        }
                    ]
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'CAN'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'CHN'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'ATA'
                    },
                    id: 'gradient'
                }
            ]}
            legends={
                legendsDisplay ?
                    [
                        {
                            anchor: 'bottom-left',
                            direction: 'column',
                            justify: true,
                            translateX: 20,
                            translateY: -100,
                            itemsSpacing: 0,
                            itemWidth: 94,
                            itemHeight: 18,
                            itemDirection: 'left-to-right',
                            itemTextColor: themeMode === "dark" ? "rgb(224, 224, 224)" : "#3d3d3d",
                            itemOpacity: 0.85,
                            symbolSize: 18,
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: "#4cceac",
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ] :
                    []
            }
        />
    )
}
export default GeoChart