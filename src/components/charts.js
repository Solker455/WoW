import React from "react"
import { PveChart } from "./charts/pveChart"
import { PvpChart } from "./charts/pvpChart"
import { StatsHeroChart } from "./charts/statsHeroChart"

export function Charts() {
    return (
        <div>
          <PveChart />
          <PvpChart />
          <StatsHeroChart />
        </div>
    )
}