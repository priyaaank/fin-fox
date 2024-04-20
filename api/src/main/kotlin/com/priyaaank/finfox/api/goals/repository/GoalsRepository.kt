package com.priyaaank.finfox.api.goals.repository

import com.priyaaank.finfox.api.goals.entity.GoalsEntity
import io.micronaut.data.annotation.Repository
import io.micronaut.data.repository.CrudRepository

@Repository
interface GoalsRepository : CrudRepository<GoalsEntity, Int>