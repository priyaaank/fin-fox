package com.priyaaank.finfox.api.goals.domain

import com.priyaaank.finfox.api.common.domain.Money

class Goal {

    var id: String? = null
    var name: String? = null
    var currentAmount: Money? = null
    var targetAmount: Money? = null
    var assumedInflationPercent: Double? = null
    var targetYear: Int? = null
    var status: GoalStatus = GoalStatus.ACTIVE

}