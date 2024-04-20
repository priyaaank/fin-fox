package com.priyaaank.finfox.api.goals.presenter

import io.micronaut.serde.annotation.Serdeable

@Serdeable
data class ErrorPresenter(val error: String, val message: String, val field: String)
