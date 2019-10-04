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

{{-- Price --}}
@include('layouts.form-fields.input', [
    'model' => $currentModel,
    'name'  => 'price',
    'label' => __('Price'),
])

{{-- Type --}}
@include('layouts.form-fields.select2', [
    'model'      => $currentModel,
    'name'       => 'type',
    'label'      => __('Type'),
    'id'         => 'id',
    'value'      => 'value',
    'collection' => $types,
])

{{-- Currency --}}
@include('layouts.form-fields.select2', [
    'model'      => $currentModel,
    'name'       => 'currency',
    'label'      => __('Currency'),
    'id'         => 'id',
    'value'      => 'value',
    'collection' => $currency,
])

{{-- Award --}}
@include('common.award.button-template', [
    'award_id' => $currentModel['award_id'] ?? null
])

{{-- Preview URL --}}
<div class="form-group">
    <label class="col-md-4 control-label">
        @lang('Preview')
    </label>
    <div class="col-md-6">
        <input type="hidden" name="preview_url" id="preview-url" value="{{ $currentModel['preview_url'] or null }}">
        <div
            id="dropzone"
            class="dropzone"
            data-url="{{ route('product-file.upload') }}"
            data-folder="{{ $upload_folder }}"
        >
            <a class="close dropzone-cancel">
                <span>×</span>
            </a>
        </div>
    </div>
</div>
