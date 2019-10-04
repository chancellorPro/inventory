@php
    $currentModel = isset($model) ? $model : null;
@endphp

{{-- Name --}}
@include('layouts.form-fields.input', [
    'model' => $currentModel,
    'name'  => 'name',
    'label' => __('Name'),
])

{{-- Description --}}
@include('layouts.form-fields.text', [
    'model' => $currentModel,
    'name'  => 'description',
    'label' => __('Description'),
])

<hr>

{{-- product_id_1 --}}
@include('layouts.form-fields.select2', [
    'label' => __('Product 1'),
    'model' => $currentModel,
    'name' => 'product_id_1',
    'collection' => $products,
    'id' => 'id',
    'value' => 'name',
    'addempty' => true,
])

{{-- color_id_1 --}}
@include('layouts.form-fields.select2', [
    'label' => __('Color 1'),
    'model' => $currentModel,
    'name' => 'color_id_1',
    'collection' => $colors,
    'id' => 'id',
    'value' => 'name',
    'addempty' => true,
])

{{-- material_id_1 --}}
@include('layouts.form-fields.select2', [
    'label' => __('Material 1'),
    'model' => $currentModel,
    'name' => 'material_id_1',
    'collection' => $materials,
    'id' => 'id',
    'value' => 'name',
    'addempty' => true,
])

{{-- count 1 --}}
@include('layouts.form-fields.input', [
    'model' => $currentModel,
    'name'  => 'count_1',
    'label' => __('Count 1'),
    'inputType' => 'number'
])

<hr>

{{-- product_id_2 --}}
@include('layouts.form-fields.select2', [
    'label' => __('Product 2'),
    'model' => $currentModel,
    'name' => 'product_id_2',
    'collection' => $products,
    'id' => 'id',
    'value' => 'name',
    'addempty' => true,
])

{{-- color_id_2 --}}
@include('layouts.form-fields.select2', [
    'label' => __('Color 2'),
    'model' => $currentModel,
    'name' => 'color_id_2',
    'collection' => $colors,
    'id' => 'id',
    'value' => 'name',
    'addempty' => true,
])

{{-- material_id_2 --}}
@include('layouts.form-fields.select2', [
    'label' => __('Material 2'),
    'model' => $currentModel,
    'name' => 'material_id_2',
    'collection' => $materials,
    'id' => 'id',
    'value' => 'name',
    'addempty' => true,
])

{{-- count 2 --}}
@include('layouts.form-fields.input', [
    'model' => $currentModel,
    'name'  => 'count_2',
    'label' => __('Count 2'),
    'inputType' => 'number'
])
