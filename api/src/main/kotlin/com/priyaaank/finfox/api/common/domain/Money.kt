package com.priyaaank.finfox.api.common.domain

import java.math.BigDecimal
import java.math.RoundingMode
import java.util.Currency

data class Money(private val amount: BigDecimal, val currency: Currency) {
    operator fun compareTo(money: Money): Int {
        if (currency != money.currency) {
            throw IncompatibleCurrencies("Incompatible currencies compared")
        }
        return amount.compareTo(money.amount)
    }

    fun amount(): BigDecimal {
        return amount.setScale(2, RoundingMode.HALF_DOWN)
    }
}

class IncompatibleCurrencies(errorMsg: String) : Throwable() {
    override val message: String = errorMsg
}
