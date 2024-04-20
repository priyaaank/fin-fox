package com.priyaaank.finfox.api.goals.presenter

import io.micronaut.serde.annotation.Serdeable
import java.time.LocalDate

@Serdeable
data class GoalsPresenter(
    val id: Long,
    val name: String,
    val description: String,
    val status: String,
    val assumedInflationPercent: Double,
    val targetPeriod: TargetPeriodPresenter,
    val targetAmount: AmountPresenter,
    val currentAmount: AmountPresenter,
    val plannedAmount: AmountPresenter,
    val plannedDate: LocalDate,
    val createdDate: LocalDate,
    val lastModifiedDate: LocalDate,
    val createdBy: String,
    val lastModifiedBy: String,
    val version: Int
)