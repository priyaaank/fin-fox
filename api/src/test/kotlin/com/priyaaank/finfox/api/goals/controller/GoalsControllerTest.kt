package com.priyaaank.finfox.api.goals.controller

import com.jayway.jsonpath.JsonPath
import com.jayway.jsonpath.ReadContext
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
    fun `should return a list of all the goals`() {
        val response: String = client.toBlocking().retrieve("/goals/all")

        // Parse the response into a DocumentContext object
        val ctx: ReadContext = JsonPath.parse(response)

        // Extract values from the JSON document using JSONPath expressions
        val id: Int = ctx.read("$.id")
        val name: String = ctx.read("$.name")
        val status: String = ctx.read("$.status")
        val targetAmount: Double = ctx.read("$.targetAmount.amount")

        // Assert that the extracted values are as expected
        assertEquals(1, id)
        assertEquals("My Goal", name)
        assertEquals("ACTIVE", status)
        assertEquals(12342.23, targetAmount, 0.01)
    }

}