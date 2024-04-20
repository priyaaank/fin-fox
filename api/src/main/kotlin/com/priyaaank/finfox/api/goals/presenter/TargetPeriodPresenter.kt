package com.priyaaank.finfox.api.goals.presenter

import io.micronaut.serde.annotation.Serdeable

@Serdeable
class TargetPeriodPresenter(val periodType: String, val periodValue: Int) {

}
