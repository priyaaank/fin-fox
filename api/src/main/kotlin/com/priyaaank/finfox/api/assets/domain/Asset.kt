package com.priyaaank.finfox.api.assets.domain

import com.priyaaank.finfox.api.common.domain.Money
import java.util.*

class Asset(
    id: Long,
    name: String,
    type: String,
    estAvgReturnPercent: Double,
    currentMoneyValue: Money,
    startDate: Date,
    untilDate: Date,
) {
}