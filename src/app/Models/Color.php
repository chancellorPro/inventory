<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Color
 */
class Color extends Model
{

    /**
     * Fillable
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'color',
    ];

}
