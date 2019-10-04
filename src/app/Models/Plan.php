<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Plan
 */
class Plan extends Model
{

    /**
     * Custom table name
     *
     * @var string
     */
    protected $table = 'plan';

    /**
     * Fillable
     *
     * @var array
     */
    protected $fillable = [
        'date',
        'product_id',
        'material_id',
        'color_id',
    ];

}
