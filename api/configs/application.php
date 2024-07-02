<?php

define('ENVIRONMENT', 'local');

// Configurações de conexão para diferentes ambientes
$config = [
    'production' => [
        'host' => 'prod_db_host',
        'user' => 'prod_db_user',
        'pass' => 'prod_db_pass',
        'name' => 'prod_db_name',
    ],
    'local' => [
        'host' => '127.0.0.1',
        'user' => 'root',
        'pass' => '',
        'name' => 'JornalWeb',
    ],
];

// Definir constantes com base no ambiente atual
$env_config = $config[ENVIRONMENT];
define('DB_HOST', $env_config['host']);
define('DB_USER', $env_config['user']);
define('DB_PASS', $env_config['pass']);
define('DB_NAME', $env_config['name']);