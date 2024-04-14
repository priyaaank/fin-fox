package com.priyaaank.finfox.api.goals.domain

import com.priyaaank.finfox.api.common.domain.Money

class Goal(
    id: Long,
    name: String,
    currentAmount: Money,
    targetAmount: Money,
    assumedInflationPercent: Double,
    targetYear: Int,
    status: GoalStatus
) {


}