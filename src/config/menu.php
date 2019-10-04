<?php
//return [
//    [
//        'name' => 'Admin',
//        'child' => [
//            ['name' => 'Products', 'route' => 'product.index', 'icon' => 'fa-cubes'],
//            ['name' => 'Action log', 'route' => 'action-log.index', 'icon' => 'fa-history'],
//            ['name' => 'Partitions', 'route' => 'partition.index', 'icon' => 'fa-th'],
//            ['name' => 'Colors', 'route' => 'color.index', 'icon' => 'fa-paint-brush'],
//            ['name' => 'Materials', 'route' => 'material.index', 'icon' => 'fa-puzzle-piece'],
//            ['name' => 'Customers', 'route' => 'customer.index', 'icon' => 'fa-users'],
//            ['name' => 'Plan', 'route' => 'plan.index', 'icon' => 'fa-bullhorn'],
//            ['name' => 'Users', 'route' => 'user.index', 'icon' => 'fa-users'],
//        ],
//    ],
//
//];
return [
    [
        'name' => 'Admin',
        'child' => [
            ['name' => 'Товары', 'route' => 'product.index', 'icon' => 'fa-cubes'],
            ['name' => 'События', 'route' => 'action-log.index', 'icon' => 'fa-history'],
            ['name' => 'Ячейки', 'route' => 'partition.index', 'icon' => 'fa-th'],
            ['name' => 'Цвета', 'route' => 'color.index', 'icon' => 'fa-paint-brush'],
            ['name' => 'Материалы', 'route' => 'material.index', 'icon' => 'fa-puzzle-piece'],
            ['name' => 'Заказчики', 'route' => 'customer.index', 'icon' => 'fa-fax'],
            ['name' => 'План', 'route' => 'plan.index', 'icon' => 'fa-bullhorn'],
            ['name' => 'Менеджеры', 'route' => 'user.index', 'icon' => 'fa-users'],
        ],
    ],

];
