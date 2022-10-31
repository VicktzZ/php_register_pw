<?php 

    class Usuario 
    {
        private $id;
        private $nome;
        private $senha;
        private $pdo;
    }

    public function __construct()
    {
        try {
            $dns = "mysql:dbname=meuusuario;host = localhost";
            $user = "root";
            $pass = "";

            $this->pdo = new PDO($dns, $user, $pass);
            echo "Conectado";
        } catch (Exception $e) {
            echo "Não entrei (leia COM A VZO DO asamuel;.)"
        }
    }

?>