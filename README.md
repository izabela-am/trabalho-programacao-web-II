## Exemplos de requisições

#### Criação de usuários
Parâmetros passados pelo CORPO da requisição:
- nome: string;
- email: string;
- endereco: string;

```
curl --request POST \
  --url http://localhost:3333/users \
  --header 'Content-Type: application/json' \
  --data '{
	"nome": "Izabela",
	"email": "izabela@email.com",
	"endereco": "Rua Dos Bobos, 0"
}'
```

----

#### Listar todos os usuários
Rota sem parâmetros
```
curl --request GET \
  --url http://localhost:3333/users
```

----

#### Buscar usuário
Parâmetros passados pela URL:
- id: string
```
curl --request GET \
  --url http://localhost:3333/users/88d9e48c-369d-4c9f-9a2a-03abc3ca8299
```

----

#### Deletar usuário
Parâmetros passados pela URL:
- id: string
```
curl --request DELETE \
  --url http://localhost:3333/users/88d9e48c-369d-4c9f-9a2a-03abc3ca8299
```

----

#### Editar usuário
Parâmetros passados pela URL:
- id: string
Parâmetros passados pelo corpo da requisição (todos os parâmetros são opcionais):
- nome: string;
- email: string;
- endereco: string;
```
curl --request PATCH \
  --url http://localhost:3333/users/eb6541c7-3f88-4d03-be09-39087f0d417b \
  --header 'Content-Type: application/json' \
  --data '{
	"nome": "Izabelaaaaaaaaaaa"
}'
```
