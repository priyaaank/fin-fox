package com.priyaaank.finfox.api.liabilities.domain

import com.priyaaank.finfox.api.common.domain.Money
import com.priyaaank.finfox.api.common.domain.PaymentFrequency
import java.time.Duration

class Liability(
    id: Long,
    name: String,
    rateOfInterestPercent: Double,
    currentOutstanding: Money,
    remainingDuration: Duration,
    paymentFrequency: PaymentFrequency,
    periodicPayment: Money,
) {
}