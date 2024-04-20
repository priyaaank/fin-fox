package com.priyaaank.finfox.api.goals.controller

import com.priyaaank.finfox.api.goals.presenter.*
import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Get
import java.time.LocalDate

@Controller("/goals")
class GoalsController {

    @Get("/all")
    fun index(): APIResponse<List<GoalsPresenter>> {
        val goal = GoalsPresenter(
            id = 1,
            name = "My Goal",
            targetAmount = AmountPresenter(amount = 12342.23, currency = "INR"),
            status = "ACTIVE",
            targetPeriod = TargetPeriodPresenter(periodType = "YEARS", periodValue = 10),
            plannedAmount = AmountPresenter(amount = 12342.23, currency = "INR"),
            plannedDate = LocalDate.of(2020, 12, 12),
            createdDate = LocalDate.of(2020, 12, 12),
            lastModifiedDate = LocalDate.of(2020, 12, 12),
            createdBy = "Priyank",
            lastModifiedBy = "Priyank",
            version = 1,
            description = "some desc",
            assumedInflationPercent = 2.34,
            currentAmount = AmountPresenter(amount = 1242.23, currency = "INR")
        )

        return APIResponse(
            listOf(goal),
            StatusPresenter(code = "200", message = "SUCCESS", 1, 1, 1, 1),
            emptyList()
        )
    }

}