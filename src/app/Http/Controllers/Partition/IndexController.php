<?php

    namespace App\Http\Controllers\Partition;

    use App\Http\Controllers\Controller;
    use App\Models\Color;
    use App\Models\Customer;
    use App\Models\Material;
    use App\Models\Partition;
    use App\Models\Product;
    use App\Traits\FilterBuilder;
    use Illuminate\Contracts\View\Factory;
    use Illuminate\Http\JsonResponse;
    use Illuminate\Http\Request;
    use Illuminate\View\View;

    /**
     * Class IndexController
     */
    class IndexController extends Controller
    {
        use FilterBuilder;

        const FILTER_FIELDS = [
            'id'         => 'equal',
            'name'       => 'like_right',
            'page_limit' => 'manual'
        ];

        /**
         * List of products
         *
         * @param Request $request Request
         *
         * @return Factory|View
         */
        public function index(Request $request)
        {
            $data = $this->applyFilter(
                $request,
                Partition::with('firstProduct', 'secondProduct', 'firstColor', 'secondColor', 'firstMaterial', 'secondMaterial')
                    ->oldest('id')
            )->paginate($this->perPage);

            return view('partition.index', [
                'data'   => $data,
                'filter' => $this->getFilter(),
            ]);
        }

        /**
         * Create new product view
         *
         * @return Factory|View
         */
        public function create()
        {
            return view('partition.create', [
                'products'   => Product::all(),
                'colors'     => Color::all(),
                'materials'  => Material::all(),
                'partitions' => Partition::all(),
                'customers'  => Customer::all(),
            ]);
        }

        /**
         * Save new product
         *
         *
         * @param Request $request
         * @return JsonResponse
         */
        public function store(Request $request)
        {
            Partition::create($request->all());

            pushNotify('success', __('Product') . ' ' . __('common.action.added'));

            return $this->success();
        }

        /**
         * Edit product view
         *
         * @param integer $id ID
         *
         * @return Factory|View
         */
        public function edit(int $id)
        {
            return view('partition.edit', [
                'model'      => Partition::find($id),
                'products'   => Product::all(),
                'colors'     => Color::all(),
                'materials'  => Material::all(),
                'partitions' => Partition::all(),
                'customers'  => Customer::all(),
            ]);
        }

        /**
         * Update product
         *
         * @param Request $request Request
         * @param integer $id ID
         *
         * @return JsonResponse
         */
        public function update(Request $request, int $id)
        {
            $resource = Partition::findOrFail($id);
            $resource->update($request->all());

            return $this->success();
        }

        /**
         * Delete product
         *
         * @param integer $id ID
         *
         * @return JsonResponse
         */
        public function destroy(int $id)
        {
            Partition::destroy($id);

            return $this->success();
        }
    }
