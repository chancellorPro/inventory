<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\ProductRequest;
use App\Models\Cms\Product;
use App\Traits\FilterBuilder;
use Illuminate\Http\Request;

/**
 * Class IndexController
 */
class IndexController extends Controller
{
    use FilterBuilder;

    const FILTER_FIELDS = [
        'id'   => 'equal',
        'name' => 'like_right',
        'page_limit'  => 'manual'
    ];

    /**
     * List of products
     *
     * @param Request $request Request
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(Request $request)
    {
        $data = $this->applyFilter(
            $request,
            Product::oldest('id')
        )->paginate($this->perPage);

        return view('product.index', [
            'data'         => $data,
            'filter'       => $this->getFilter(),
        ]);
    }

    /**
     * Create new product view
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function create()
    {
        return view('product.create', [
            'products' => Product::all(),
        ]);
    }

    /**
     * Save new product
     *
     * @param ProductRequest $request Request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(ProductRequest $request)
    {
        Product::create($request->all());

        pushNotify('success', __('Product') . ' ' . __('common.action.added'));

        return $this->success();
    }

    /**
     * Edit product view
     *
     * @param integer $id ID
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function edit(int $id)
    {
        return view('config.product.edit', [
            'model' => Product::find($id),
        ]);
    }

    /**
     * Update product
     *
     * @param ProductRequest $request Request
     * @param integer        $id      ID
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(ProductRequest $request, int $id)
    {
        $resource = Product::findOrFail($id);
        $resource->update($request->all());

        return $this->success();
    }

    /**
     * Delete product
     *
     * @param integer $id ID
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(int $id)
    {
        Product::destroy($id);

        return $this->success();
    }

    /**
     * Get upload folder
     *
     * @return string
     */
    protected static function getUploadFolder(): string
    {
        return Product::getUploadFolder();
    }

    /**
     * Fast save
     *
     * @param FastSaveRequest $request Request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function fastSave(FastSaveRequest $request)
    {
        $requestData = $request->getProducts();
        $products    = Product::findOrFail(array_keys($requestData));

        foreach ($products as $product) {
            $product->update($requestData[$product->id]);
        }

        return $this->success([
            'message' => __('Product') . __('common.action.updated'),
        ]);
    }
}
