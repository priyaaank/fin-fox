package com.priyaaank.finfox.api.goals.controller

import io.micronaut.http.client.HttpClient
import io.micronaut.http.client.annotation.Client
import io.micronaut.test.extensions.junit5.annotation.MicronautTest
import jakarta.inject.Inject
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test


@MicronautTest
class GoalsControllerTest {

    @Inject
    @field:Client("/")
    lateinit var client: HttpClient

    @Test
    fun `should return 200`() {
        val response: String = client.toBlocking() // (3)
            .retrieve("/goals/all")
        assertEquals("Welcome to Goals Controller", response) // (4)
    }

}