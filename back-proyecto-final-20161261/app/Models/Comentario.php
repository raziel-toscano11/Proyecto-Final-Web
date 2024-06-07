<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Comentario extends Model
{
    use HasFactory;
    public function posts(): BelongsTo
    {
        return $this->belongsTo((Post::class));
    }

    public function replies()
    {
        return $this->hasMany(Comentario::class, 'parent_id');
    }
}
