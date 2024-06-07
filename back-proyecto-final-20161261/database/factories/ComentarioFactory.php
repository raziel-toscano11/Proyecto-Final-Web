<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\odel=Comentario>
 */
class ComentarioFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'contenido' => fake()->paragraph(),
            'likes' => fake()->numberBetween(0, 5000),
            'dislikes' =>fake()->numberBetween(0, 5000),
            'post_id' => User::all()->random()->id
        ];
    }
}
