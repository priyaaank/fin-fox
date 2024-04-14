package com.priyaaank.finfox.api.assets.domain

import com.priyaaank.finfox.api.common.domain.Money
import com.priyaaank.finfox.api.goals.domain.Goal
import java.util.*

class AssetAllocation(
    id: String,
    goal: Goal,
    asset: Asset,
    allocatedMoneyValue: Money,
    allocatedPercent: Double,
    realizationDate: Date
) {


}