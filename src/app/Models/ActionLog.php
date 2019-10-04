<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class ActionLog
 */
class ActionLog extends Model
{

    /**
     * Custom table name
     *
     * @var string
     */
    protected $table = 'action_log';

    /**
     * Fillable
     *
     * @var array
     */
    protected $fillable = [
        'income',
        'product_id',
        'color_id',
        'material_id',
        'count',
        'partition_id',
        'customer_id',
        'description',
        'updated_by',
    ];

    /**
     * Product relation
     *
     * @return BelongsTo
     */
    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }

    /**
     * Color relation
     *
     * @return BelongsTo
     */
    public function color()
    {
        return $this->belongsTo(Color::class, 'color_id');
    }

    /**
     * Material relation
     *
     * @return BelongsTo
     */
    public function material()
    {
        return $this->belongsTo(Material::class, 'material_id');
    }

    /**
     * Partition relation
     *
     * @return BelongsTo
     */
    public function partition()
    {
        return $this->belongsTo(Partition::class, 'partition_id');
    }

    /**
     * Customer relation
     *
     * @return BelongsTo
     */
    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_id');
    }


}
