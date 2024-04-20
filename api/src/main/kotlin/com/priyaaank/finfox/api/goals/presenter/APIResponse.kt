package com.priyaaank.finfox.api.goals.presenter

import io.micronaut.serde.annotation.Serdeable

@Serdeable
data class APIResponse<B>(val body: B, val status: StatusPresenter, val errors: List<ErrorPresenter> = emptyList())
