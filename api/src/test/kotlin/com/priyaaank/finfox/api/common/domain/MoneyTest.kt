package com.priyaaank.finfox.api.common.domain

import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test
import java.math.BigDecimal
import java.util.*

class MoneyTest {

    @Test
    fun shouldCompareMoneyToBeLesserThanGivenValue() {
        assertTrue(
            Money(BigDecimal(10), Currency.getInstance("INR")) < Money(
                BigDecimal(11),
                Currency.getInstance("INR")
            )
        )
    }

    @Test
    fun shouldRaiseErrorWhenComparingDifferentCurrencies() {
        val exception = assertThrows(IncompatibleCurrencies::class.java) {
            Money(BigDecimal(10), Currency.getInstance("INR")) < Money(BigDecimal(11), Currency.getInstance("USD"))
        }
        assertEquals("Incompatible currencies compared", exception.message)
    }

    @Test
    fun shouldReturnAmountInPrecisionOfTwoOnly() {
        assertEquals(BigDecimal("10.12"), Money(BigDecimal(10.1234), Currency.getInstance("INR")).amount())
    }
}