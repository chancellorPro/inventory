<form method="POST" action="{{ route('partition.store') }}" class="form-horizontal">
    {{ csrf_field() }}

    @include ('partition.form')

    <div class="pull-right">
        @include('common.buttons.cancel')
        @include('common.buttons.save', [
            'route' => 'partition.store',
            'name' => __('Create'),
        ])
    </div>
</form>
