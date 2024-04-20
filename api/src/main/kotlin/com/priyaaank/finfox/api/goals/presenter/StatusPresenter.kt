package com.priyaaank.finfox.api.goals.presenter

import io.micronaut.serde.annotation.Serdeable

@Serdeable
data class StatusPresenter(val code: String, val message: String, val page: Int, val pageSize: Int, val totalRecords: Int, val totalPages: Int)