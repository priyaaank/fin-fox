package com.priyaaank.finfox.api.liabilities.domain

import com.priyaaank.finfox.api.common.domain.Money
import java.util.*

class Transaction(
    id: Long,
    value: Money,
    liability: Liability,
    txnDate: Date,
) {}