package com.priyaaank.finfox.api.networth

import com.priyaaank.finfox.api.common.domain.Money
import java.util.*

class NetWorthSnapshot(
    id: Long,
    netWorth: NetWorth,
    date: Date,
    totalValue: Money,
    roiPercentOverPrev: Double,
) {
}