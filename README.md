# SISTEMA DE LOGIN

Vamos criar uma pasta "login" dentro de  `c:\xampp\htdocs` <br>
Dentro desta pasta vamos criar mais 3 pastas: `CSS, JS e IMG`. <br><br>

Com as pastas criadas, vamos partir para a criação do `Banco de Dados`. Nossa tabela do banco de dados terá apenas os atributos `ID, Nome e Senha`. <br>

O campo senha serpa `VARCHAR(32)` para podermos usar o sistema de criptografia `MD5`. <br><br>

O processo de login funciona da seguinte maneira: <br><br>

Quando o usuário preenche os dados de login o sistema procura em uma tabela no banco se ele existe, se existir, checa se a senha digitada pelo usuário coincide com a senha gravada no banco.<br>

Se existir o usuário e a senha coincidir, a gente cria uma `SESSÃO`. Caso não exista, a gente pede para fazer o login novamente, até que se digite login e a senha corretamente; <br>

Feito isso, a gente cria uma sessão, e com a sessão criada, em todos os módulos a primeira coisa que checamos é se existe uma sessão. Caso não exista, significa que o usuário não passou pelo login ou não existe. Nesse caso mandamos ele para o login novamente.

---

Toda vez que eu tenho que cadastrar qualuqer titpo de dado em uma tabela, eu tenho que crirar uma classe.<br>
Além de facilitar a compreensão e a manuntenção do código, facilita também para criar aplicativos no padrão MVC. <br>
Dentro de uma classe, temos todos os métodos para implementar um CRUD