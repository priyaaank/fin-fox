package com.priyaaank.finfox.api.networth

import com.priyaaank.finfox.api.assets.domain.Asset
import com.priyaaank.finfox.api.common.domain.Money
import com.priyaaank.finfox.api.liabilities.domain.Liability

class NetWorth(
    id: Long,
    assets: List<Asset>,
    liabilities: List<Liability>,
    totalValue: Money
) {
}