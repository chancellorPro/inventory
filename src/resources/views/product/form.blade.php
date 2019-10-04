@php
    $currentModel = isset($model) ? $model : null;
@endphp

{{-- Name --}}
@include('layouts.form-fields.input', [
    'model' => $currentModel,
    'name'  => 'name',
    'label' => __('Name'),
])

{{-- Box size --}}
@include('layouts.form-fields.input', [
    'model' => $currentModel,
    'name'  => 'box_size',
    'label' => __('Box size'),
    'inputType' => 'number'
])

{{-- Description --}}
@include('layouts.form-fields.text', [
    'model' => $currentModel,
    'name'  => 'description',
    'label' => __('Description'),
])

@include('layouts.form-fields.select2', [
    'label' => __('Parent product'),
    'model' => $currentModel,
    'name' => 'parent_product',
    'collection' => $products,
    'id' => 'id',
    'value' => 'name',
    'addempty' => true,
])
