package com.priyaaank.finfox.api.goals.controller

import com.jayway.jsonpath.JsonPath
import com.jayway.jsonpath.ReadContext
import com.priyaaank.finfox.api.goals.entity.GoalsEntity
import com.priyaaank.finfox.api.goals.repository.GoalsRepository
import io.micronaut.http.client.HttpClient
import io.micronaut.http.client.annotation.Client
import io.micronaut.test.extensions.junit5.annotation.MicronautTest
import jakarta.inject.Inject
import org.flywaydb.core.Flyway
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test


@MicronautTest
class GoalsControllerTest {

    @Inject
    @field:Client("/")
    lateinit var client: HttpClient

    @Inject
    lateinit var goalsRepository: GoalsRepository

    @Inject
    lateinit var flyway: Flyway

    @BeforeEach
    fun setUp() {
        flyway.clean()
        flyway.migrate()
        createGoals()
    }

    @Test
    fun `should return a list of all the goals`() {
        val response: String = client.toBlocking().retrieve("/goals/all")

        // Parse the response into a DocumentContext object
        val ctx: ReadContext = JsonPath.parse(response)

        // Extract values from the JSON document using JSONPath expressions
        val id: Int = ctx.read("$.body[0].id")
        val name: String = ctx.read("$.body[0].name")
        val status: String = ctx.read("$.body[0].status")
        val targetAmount: Double = ctx.read("$.body[0].targetAmount.amount")

        // Assert that the extracted values are as expected
        assertEquals(1, id)
        assertEquals("My Goal", name)
        assertEquals("ACTIVE", status)
        assertEquals(12342.23, targetAmount, 0.01)
    }

    private fun createGoals() {
        val retirement = GoalsEntity(
            name = "My Goal",
            description = "My retirement goal",
            targetAmount = 220000000.23,
            currentAmount = 50000000.19
        )

        val studies = GoalsEntity(
            name = "Son's studies",
            description = "My son's education goal",
            targetAmount = 2100000.22,
            currentAmount = 500000.19
        )

        goalsRepository.save(retirement)
    }


}