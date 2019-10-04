<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class Partition
 */
class Partition extends Model
{

    /**
     * Fillable
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'product_id_1',
        'color_id_1',
        'material_id_1',
        'count_1',
        'product_id_2',
        'color_id_2',
        'material_id_2',
        'count_2',
        'description',
    ];

    /**
     * firstProduct relation
     *
     * @return BelongsTo
     */
    public function firstProduct()
    {
        return $this->belongsTo(Product::class, 'product_id_1');
    }

    /**
     * secondProduct relation
     *
     * @return BelongsTo
     */
    public function secondProduct()
    {
        return $this->belongsTo(Product::class, 'product_id_2');
    }

    /**
     * firstColor relation
     *
     * @return BelongsTo
     */
    public function firstColor()
    {
        return $this->belongsTo(Color::class, 'color_id_1');
    }

    /**
     * secondColor relation
     *
     * @return BelongsTo
     */
    public function secondColor()
    {
        return $this->belongsTo(Color::class, 'color_id_2');
    }

    /**
     * firstMaterial relation
     *
     * @return BelongsTo
     */
    public function firstMaterial()
    {
        return $this->belongsTo(Material::class, 'material_id_1');
    }

    /**
     * secondMaterial relation
     *
     * @return BelongsTo
     */
    public function secondMaterial()
    {
        return $this->belongsTo(Material::class, 'material_id_2');
    }

}
