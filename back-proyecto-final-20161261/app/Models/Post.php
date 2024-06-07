<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Post extends Model
{
    use HasFactory;

    public function user():BelongsTo
    {
        return $this->BelongsTo(User::class, 'user_id');
    }
    
    public function images():HasMany
    {
        return $this->hasMany((Image::class));
    }

    public function comentarios():HasMany
    {
        return $this->hasMany((Comentario::class));
    }

    public function categories():BelongsToMany
    {
        return $this->belongsToMany(Category::class);
    }
}
