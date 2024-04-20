package com.priyaaank.finfox.api.goals.domain

import com.priyaaank.finfox.api.common.domain.Money
import java.util.*

class Goal(
    id: Long,
    name: String,
    plannedDate: Date,
    plannedAmount: Money,
    currentAmount: Money,
    targetAmount: Money,
    assumedInflationPercent: Double,
    targetYear: Int,
    status: GoalStatus,
    createdDate: Date,
    lastModifiedDate: Date,
    createdBy: String,
    updatedBy: String,
    version: Long
) {


}