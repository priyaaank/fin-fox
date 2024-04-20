package com.priyaaank.finfox.api.goals.entity

import jakarta.persistence.*
import org.jetbrains.annotations.NotNull

@Entity
@Table(name = "goals")
data class GoalsEntity(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    val id: Int = 0,

    @NotNull
    @Column(name = "name")
    val name: String,

    val description: String,
    val targetAmount: Double,
    val currentAmount: Double,
)