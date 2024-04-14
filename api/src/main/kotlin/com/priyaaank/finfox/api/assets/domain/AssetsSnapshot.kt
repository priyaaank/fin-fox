package com.priyaaank.finfox.api.assets.domain

import com.priyaaank.finfox.api.common.domain.Money
import java.util.*

class AssetsSnapshot(
    id: String,
    asset: Asset,
    date: Date,
    value: Money,
    percentChangeOverPrev: Double,
) {

}