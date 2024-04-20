package com.priyaaank.finfox.api.goals.presenter

import io.micronaut.serde.annotation.Serdeable

@Serdeable
class AmountPresenter(val amount: Double, val currency: String) {

}
