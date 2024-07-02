<?php

// Importar o arquivo de configuração
require_once '../configs/application.php';

// Conexão com o banco de dados usando as constantes definidas
$connection = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);

// Verificar a conexão
if (!$connection) {
    die('Erro ao conectar ao banco de dados: ' . mysqli_connect_error());
};