package com.priyaaank.finfox.api.goals

import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Get

@Controller("/goals")
class GoalsController {

    @Get("/")
    fun index(): String {
        return "Welcome to Goals Controller"
    }
}