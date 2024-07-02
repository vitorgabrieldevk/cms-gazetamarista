<!DOCTYPE html>
<html>
<head>

    <title>Faça seu login - Gazeta Marista</title>

    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="../../public/css/Auth.css">

</head>
<body>
    
    <form class="form-signin ">
        <img class="mb-4" src="../../public/img/logo.png" alt="Logo Marista" width="72" height="auto">
        <h1 class="h3 mb-3 fw-normal">Painel Administrativo</h1>

        <div class="form-floating">
        <input type="text" class="form-control" id="UsernameInput">
        <label for="UsernameInput">Username</label>
        </div>
        <div class="form-floating">
        <input type="password" class="form-control" id="SenhaInput">
        <label for="SenhaInput">Senha</label>
        </div>

        <div class="form-check text-start my-3">
        <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
            Lembrar Acesso
        </label>
        </div>
        <button class="btn btn-primary w-100 py-2" type="submit">
            <i class="bi bi-shield-lock-fill"></i>
            Autenticar
        </button>
        <p class="mt-5 mb-3 text-body-secondary">&copy;Gazeta Marista - Marista Escola Social Ir. Acácio</p>
    </form>

</body>
</html>