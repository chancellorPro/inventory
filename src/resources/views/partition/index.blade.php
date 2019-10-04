@extends('layouts.pages.config', [
    'title' => 'Partitions',
    'data' => $data,
    'filter' => $filter,
])

@section('controls')
    {{-- Create --}}
    @include('common.buttons.create', [
        'route' => 'partition.create',
        'name' => __('Partition'),
        'class' => 'ajax-modal-action show-form',
        'dataset' => [
            'header' => __('Create partition'),
            'reload' => 1,
        ],
    ])
@endsection

@section('content')

    <div class="table-responsive">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>@lang('Name')</th>
                    <th>@lang('First product')</th>
                    <th>@lang('First color')</th>
                    <th>@lang('First material')</th>
                    <th>@lang('First count')</th>
                    <th>@lang('Second product')</th>
                    <th>@lang('Second color')</th>
                    <th>@lang('Second material')</th>
                    <th>@lang('Second count')</th>
                    <th>@lang('Description')</th>
                    <th class="actions">@lang('Actions')</th>
                </tr>
                <tr>
                    <th>@include('layouts.filter-col', ['filterType' => 'int', 'field' => 'Name'])</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th class="filter-actions">@include('layouts.filter-col', ['filterType' => 'actions'])</th>
                </tr>
            </thead>
            <tbody class="fast-save-page-container">
                @foreach($data as $item)
                    <tr>
                        <td>{{ $item->name }}</td>
                        <td>{{ $item->firstProduct->name ?? ''}}</td>
                        <td>{{ $item->firstColor->name ?? ''}}</td>
                        <td>{{ $item->firstMaterial->name ?? ''}}</td>
                        <td>{{ $item->count_1 ?? ''}}</td>
                        <td>{{ $item->secondProduct->name ?? ''}}</td>
                        <td>{{ $item->secondColor->name ?? ''}}</td>
                        <td>{{ $item->secondMaterial->name ?? ''}}</td>
                        <td>{{ $item->count_2 ?? ''}}</td>
                        <td>{{ $item->description ?? ''}}</td>
                        <td>
                            @include('common.buttons.edit', [
                                'route' => 'partition.edit',
                                'route_params' => [
                                    'id' => $item->id,
                                ],
                                'class' => 'ajax-modal-action show-form',
                                'dataset' => [
                                    'header' => $item->name,
                                ],
                            ])
                            @include('common.buttons.delete', [
                                'route' => 'partition.destroy',
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
            init_filter_col("{{ route('partition.index') }}");
        })
    </script>
@endpush
