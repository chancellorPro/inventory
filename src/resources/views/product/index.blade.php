@extends('layouts.pages.config', [
    'title' => 'Products',
    'data' => $data,
    'filter' => $filter,
])

@section('controls')
    {{-- Create --}}
    @include('common.buttons.create', [
        'route' => 'product.create',
        'name' => 'Product',
        'class' => 'ajax-modal-action show-form',
        'dataset' => [
            'header' => __('Create Product'),
            'reload' => 1,
            'event' => 'PRODUCT_SHOW_FORM',
        ],
    ])

    {{-- Save --}}
    @include('common.buttons.base', [
        'route' => 'product.fast-save',
        'name' => 'Save',
        'class' => 'fast-save-page',
        'btn_class' => 'btn-primary btn-sm',
        'fa_class' => 'fa-save',
    ])
@endsection

@section('content')

    <div class="table-responsive">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th class="id">@lang('Id')</th>
                    <th>@lang('Preview')</th>
                    <th>@lang('Name')</th>
                    <th>@lang('Description')</th>
                    <th>@lang('Price')</th>
                    <th>@lang('Award')</th>
                    <th>@lang('Enabled')</th>
                    <th class="actions">@lang('Actions')</th>
                </tr>
                <tr>
                    <th>@include('layouts.filter-col', ['filterType' => 'int', 'field' => 'id'])</th>
                    <th></th>
                    <th>@include('layouts.filter-col', ['filterType' => 'string', 'field' => 'name'])</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th class="filter-actions">@include('layouts.filter-col', ['filterType' => 'actions'])</th>
                </tr>
            </thead>
            <tbody class="fast-save-page-container">
                @foreach($data as $item)
                    @php
                        $preview_url = \App\Models\Cms\Product::getUploadFolder() . '/' . getSubFolder($item->preview_url) . '/' . $item->preview_url;
                    @endphp
                    <tr>
                        <td>{{ $item->id }}</td>
                        <td>
                            @include('common.image.preview', [
                                'url' => $preview_url,
                            ])
                        </td>
                        <td>
                            @include('layouts.form-fields.input', [
                                'name' => "product[{$item->id}][name]",
                                'label' => false,
                                'value' => $item->name ?? ''
                            ])
                        </td>
                        <td>
                            @include('layouts.form-fields.input', [
                                'name' => "product[{$item->id}][description]",
                                'label' => false,
                                'value' => $item->description ?? ''
                            ])
                        </td>
                        <td>
                            <input type="hidden"
                                   class="product-price"
                                   name="product[{{$item->id}}][price]"
                                   value="{{$item->price}}"
                            />
                            @include('layouts.form-fields.input', [
                                'name' => "",
                                'label' => false,
                                'class' => 'product-price-view',
                                'value' => $item->price / 100 ?? ''
                            ])
                        </td>
                        <td>
                            @if(!empty($item->award_id))
                                @include('common.award.info', [
                                    'award' => $item->award,
                                ])
                            @endif
                        </td>
                        <td>
                            <input type="checkbox"
                                   {{ !empty($item->enabled) ? 'checked' : '' }}
                                   name="product[{{$item->id}}][enabled]"
                                   value="1"
                            />
                        </td>
                        <td>
                            @if(!$liveProducts->contains($item->id))
                                @include('common.buttons.edit', [
                                    'route' => 'product.edit',
                                    'route_params' => [
                                        'id' => $item->id,
                                    ],
                                    'class' => 'ajax-modal-action show-form',
                                    'dataset' => [
                                        'header' => $item->name,
                                        'event' => 'PRODUCT_SHOW_FORM',
                                    ],
                                ])
                            @endif
                            @include('common.buttons.delete', [
                                'route' => 'product.destroy',
                                'route_params' => [
                                    'id' => $item->id,
                                ],
                                'dataset' => [
                                    'header' => $item->name,
                                ],
                            ])
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>

@endsection

@push('scripts')
    <script src="{{ asset("js/filter-col.js") }}"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            init_filter_col("{{ route('product.index') }}");
        })
    </script>
@endpush
