Projeto Front-End - Rental Wife

Link do projeto - [Rental Wife](https://rental-wife-blue.vercel.app).

Rental Wife é um projeto criado pensando no bem estar feminino e na expansão do mercado de trabalho manual. Nos tempos modernos, muitas mulheres não têm tempo para se dedicarem a ter diversas habilidades, enquanto outras têm essas mesmas habilidades como fonte de renda, sendo que, o mercado de trabalho manual e braçal, muitas vezes, opta por priorizar homens nesse tipo de função, limitando as vagas femininas.

O projeto prevê que a cliente tenha uma segurança maior no momento de contratação para um serviço doméstico, propondo-o a outra mulher que tenha o conhecimento necessário e que esteja devidamente avaliada na plataforma. Antes de propôr o serviço necessitado, a cliente pode entrar no perfil e ver as competências, descrição pessoal e avaliações de outros contratantes para aquela pessoa, assegurando a qualidade do serviço que lhe será prestado. Além disso, a colaboradora, ao receber a proposta, pode analisar se quer aceitar ou recusar, trazendo também a ela essa mesma segurança que a cliente já detém, podendo ocorrer até um contato prévio.

Apesar de ser um site voltado para as mulheres, não há oposições para o cadastro, até por priorizar a segurança e acarretar renda extra aos trabalhadores da área. A prioridade do Rental Wife é disponibilizar um momento pacífico e controlado, gerindo tensões e incômodos antes que estes ocorram.

Autores:

TL - [Mário Lucas](https://github.com/mariolucass)

SM - [Danilo Cardoso](https://github.com/DaniloCardoso93)

PO - [Juliana Diorio](https://github.com/JulianaDiorio)

QA - [Juan Sgarbi](https://github.com/JuanSgarbi)

QA - [Alexson Pereira](https://github.com/AlexsonPereira)

QA - [Alfredo Fontinele](https://github.com/Alfredo-Fontinele)

QA - [Sidnei Alves](https://github.com/dexter2k8/)


Funcionalidades:

Temas dark e light

Preview em tempo real

Modo tela cheia

Multiplataforma

Apêndice

Enviar solicatação de contratação

Aceitar/Recusar solicitação de contratação

Concluir e Avaliar o serviço prestado

O projeto foi realizado utilizando as tecnologias:

1- Axios

2- React Dom

3- Hook Form

4- Yup

5- TypeScript

6- React Router Dom

7- React Icons

8- Styled Components

9- Framer Motion

10- React Toastify

11- MUI

12- React Spinner

13- AnimateCss


Outras ferramentas utilizadas:

1 - [Trello](https://trello.com/b/2nQZbSbc/projeto)

2 - [JSON Server](https://github.com/Kenzie-Academy-Brasil-Developers/api-project-front-end)

3 - [linktr.ee](https://linktr.ee/daniloacardoso)

4 - [Herokuapp](https://rental-wife.herokuapp.com/)

5 - [Vercel](https://rental-wife-blue.vercel.app/)

6 - [Figma](https://www.figma.com/file/joCi1q3T60dxbVvd5c7oSn/Untitled?node-id=0%3A1)


Complexidade:

8/10

## Documentação de cores

| Cor         | Hexadecimal                                                            |
| ----------- | ---------------------------------------------------------------------- |
| Cor exemplo | ![#5C0884](https://via.placeholder.com/10/5C0884?text=+) #5C0884       |
| Cor exemplo | ![#5C088470](https://via.placeholder.com/10/5C088470?text=+) #5C088470 |
| Cor exemplo | ![#D9D9D9](https://via.placeholder.com/10/D9D9D9?text=+) #D9D9D9       |

Documentação da API RentalWife
ROTAS QUE NÃO PRECISAM DE AUTENTICAÇÃO
Login

POST baseURL/login

      body:{
        "email":"danilo@mail.com",
        "password": "12345"
      }

Resposta:

    {
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhbmlsb0BtYWlsLmNvbSIsImlhdCI6MTY2NzMzNTkwOSwiZXhwIjoxNjY3MzM5NTA5LCJzdWIiOiI0In0.37JuLsHiBzT_Zy1VdAY7ZjNGusFXRlD_Jjamxo0VmzE",
        "user": {
            "email": "teste@mail.com",
            "name": "Teste",
            "avatar_img": "https://cdn-icons-png.flaticon.com/512/219/219969.png",
            "is_hired": false,
            "location": "Rio de Janeiro",
            "contact": "21 999999999",
    		"gender":"Feminino"
            "id": 4
        }
    }

Register

POST baseURL/register

      body:{
        "name": "teste",
        "email": "teste@mail.com",
        "password": "123456",
        "is_hired": false
      }

Resposta:

    {
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhbmlsbzNAbWFpbC5jb20iLCJpYXQiOjE2NjczMzU4ODIsImV4cCI6MTY2NzMzOTQ4Miwic3ViIjoiNiJ9.Yznjle11SfQmsqXbuev9iOIFNQwgQBB9KkQTt3L7qko",
        "user": {
            "email": "teste@mail.com",
            "name": "teste",
            "is_hired": false,
            "id": 4
        }
    }

Listar todos os usuários

GET baseURL/users
Resposta:

    [{
    	"name": "Kenzinho",
    	"email": "kenzinho@mail.com",
    	"password": "$2a$10$YQiiz0ANVwIgpOjYXPxc0O9H2XeX3m8OoY1xk7OGgxTnOJnsZU7FO",
    	"id": 1,
    	"avatar_img": "https://cdn-icons-png.flaticon.com/512/219/219969.png",
    	"is_hired": true,
    	"location": "Curitiba",
    	"contact": "21 999999999"
    	"gender":"Feminino"
    },
    {
    	"name": "Kenzinho Contract",
    	"email": "kenzinho@mail.com",
    	"password": "$2a$10$YQiiz0ANVwIgpOjYXPxc0O9H2XeX3m8OoY1xk7OGgxTnOJnsZU7FO",
    	"id": 2,
    	"avatar_img": "https://cdn-icons-png.flaticon.com/512/219/219969.png",
    	"is_hired": false,
    	"location": "Curitiba"
    	"gender":"Feminino"
    }]

Listar um usuário específico

GET baseURL/users/{id}
Resposta:

    {
      "name": "Kenzinho",
      "email": "kenzinho@mail.com",
      "password": "$2a$10$YQiiz0ANVwIgpOjYXPxc0O9H2XeX3m8OoY1xk7OGgxTnOJnsZU7FO",
      "id": 1,
      "avatar_img": "https://cdn-icons-png.flaticon.com/512/219/219969.png",
      "is_hired": true,
      "location": "Curitiba",
      "contact": "21 999999999"
      "gender":"Feminino"
    }

Listar todas as trabalhadoras

GET baseURL/users?is_hired=true
Resposta:

[
{
"name": "Kenzinho",
"email": "kenzinho@mail.com",
"password": "$2a$10$YQiiz0ANVwIgpOjYXPxc0O9H2XeX3m8OoY1xk7OGgxTnOJnsZU7FO",
"id": 1,
"avatar_img": "https://cdn-icons-png.flaticon.com/512/219/219969.png",
"is_hired": true,
"location": "Curitiba",
"contact": "",
"gender":"Feminino"
"services": [
{
"id": 1,
"userId": 1,
"description": "Eletricista"
}
]
}
]
Listar todos os contratantes

GET baseURL/users?is_hired=false
Resposta:

[
{
"name": "Kenzinho Contract",
"email": "kenzinho@mail.com",
"password": "$2a$10$YQiiz0ANVwIgpOjYXPxc0O9H2XeX3m8OoY1xk7OGgxTnOJnsZU7FO",
"id": 2,
"avatar_img": "https://cdn-icons-png.flaticon.com/512/219/219969.png",
"is_hired": false,
"location": "Curitiba"
"gender":"Feminino"
},
{
"email": "danilo@mail.com",
"password": "$2a$10$ohifQ6jGVYJBRpBxUZNkSORHcWQvditqmFPoG/HBPK/Mj43OHJtr2",
"name": "Danilo",
"avatar_img": "https://cdn-icons-png.flaticon.com/512/219/219969.png",
"is_hired": false,
"location": "Rio de Janeiro",
"contact": "",
"gender":"Masculino"
"id": 4,
"services": "Eletricista"
},
{
"email": "danilo2@mail.com",
"password": "$2a$10$0BpYxlTLp0p1kcJeX12MIe96tM7UIasfMZOy9wDKBvVmwH5/tsj1i",
"name": "danilo2",
"is_hired": false,
"id": 5,
"avatar_img": "https://cdn-icons-png.flaticon.com/512/219/219969.png"
},
{
"email": "danilo3@mail.com",
"password": "$2a$10$eXl7zlUbVQm1hOmXf2Tyte/t/Pp7cb58k/etWeshvTofnKA7b9F4O",
"name": "danilo3",
"is_hired": false,
"id": 6
}
]
ROTAS QUE PRECISAM DE ATUTENTICAÇÃO
Rotas que necessitam de autorização deve ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

    				Authorization Bearer {token}

Editar perfil do usuário logado

PATCH baseURL/users/{myId}

    body{
    	"services": "Eletricista"
    }

Resposta:
{
"name": "Kenzinho",
"email": "kenzinho@mail.com",
"password": "$2a$10$YQiiz0ANVwIgpOjYXPxc0O9H2XeX3m8OoY1xk7OGgxTnOJnsZU7FO",
"id": 1,
"avatar_img": "https://cdn-icons-png.flaticon.com/512/219/219969.png",
"is_hired": true,
"location": "Curitiba",
"contact": "",
"gender":"Feminino"
"services": "Eletricista"
}
Listar todas as propostas

GET baseURL/proposals
Resposta:

[
{
"userId": 5,
"is_active": true,
"title": "Troca de lampada",
"description": "Necessito de uma troca de lampada, pois o antigo quebrou",
"user": {
"avatar_img": "https://cdn-icons-png.flaticon.com/512/219/219969.png",
"username": "Contratante",
"contact": ""
"idUser":"3"
},
"id": 2
},
{
"userId": 4,
"is_active": true,
"title": "Troca de chuveiro",
"description": "Necessito de uma troca de chuveiro, pois o antigo quebrou",
"user": {
"avatar_img": "https://cdn-icons-png.flaticon.com/512/219/219969.png",
"username": "Contratante",
"contact": ""
"idUser":"3"
},
"id": 3
},
{
"userId": 4,
"is_active": true,
"title": "Troca de tomada",
"description": "Necessito de uma troca de tomada, pois o antigo queimou",
"user": {
"avatar_img": "https://cdn-icons-png.flaticon.com/512/219/219969.png",
"username": "Contratante",
"contact": "",
"idUser":3
},
"id": 4
},
{
"userId": 4,
"is_active": false,
"title": "Troca de tomada",
"description": "Necessito de uma troca de tomada, pois o antigo queimou",
"user": {
"avatar_img": "https://cdn-icons-png.flaticon.com/512/219/219969.png",
"username": "Contratante",
"contact": ""
"idUser":"3"
},
"id": 5
}
]
Listar todas as propostas de uma trabalhadora

GET baseURL/proposals?userId={id}
Resposta:

[
{
"userId": 5,
"is_active": true,
"title": "Troca de lampada",
"description": "Necessito de uma troca de lampada, pois o antigo quebrou",
"user": {
"avatar_img": "https://cdn-icons-png.flaticon.com/512/219/219969.png",
"username": "Contratante",
"contact": ""
"idUser":"3"
},
"id": 2
}
]
Enviar proposta para uma trabalhadora

POST baseURL/proposals

    body{
    	"userId": 4,
    	"is_active": true,
    	"title": "Troca de tomada",
    	"description": "Necessito de uma troca de tomada, pois o antigo queimou",
    	"user": {
    		"avatar_img": "https://cdn-icons-png.flaticon.com/512/219/219969.png",
    		"username": "Contratante",
    		"contact": "",
    		"idUser":"4"

}
}

(ATENÇÃO!!
userID tem q ser o ID do trabalhador
objeto user é o contratante
)
Resposta:

{
"userId": 4,
"is_active": true,
"title": "Troca de tomada",
"description": "Necessito de uma troca de tomada, pois o antigo queimou",
"user": {
"avatar_img": "https://cdn-icons-png.flaticon.com/512/219/219969.png",
"username": "Contratante",
"contact": ""
"idUser":"3"
},
"id": 5
}
Editar proposta

PATCH baseURL/proposals/{id}
ATENÇÃO!!(O ID DO PARAMETRO É A ID DA PROPOSTA)

    body{
    "is_active": false
    }

Resposta:

{
"userId": 4,
"is_active": false,
"title": "Troca de tomada",
"description": "Necessito de uma troca de tomada, pois o antigo queimou",
"user": {
"avatar_img": "https://cdn-icons-png.flaticon.com/512/219/219969.png",
"username": "Contratante",
"contact": ""
"idUser":"3"
},
"id": 5
}
Deletar proposta

DELETE baseURL/proposals/{id}
ATENÇÃO!!(O ID DO PARAMETRO É A ID DA PROPOSTA)
Listar todos os comentários e notas

GET baseURL/ratings
Resposta:
[
{
"id": 1,
"userId": 1,
"note": "4.5",
"description": "lorem"
},
{
"userId": 1,
"note": "4",
"description": "Serviço muito bom, mas foi caro",
"id": 2
},
{
"userId": 1,
"note": "4",
"description": "Serviço muito bom, mas foi caro",
"id": 3
},
{
"userId": 4,
"note": "4",
"description": "Serviço muito bom, mas foi caro",
"id": 4
}
]
Listar comentários e notas de uma trabalhadora

GET baseURL/ratings?userId={id}
Resposta:

    [
    {
    	"id": 1,
    	"userId": 1,
    	"note": "4.5",
    	"description": "lorem"
    },
    {
    	"userId": 1,
    	"note": "4",
    	"description": "Serviço muito bom, mas foi caro",
    	"id": 2
    },
    {
    	"userId": 1,
    	"note": "4",
    	"description": "Serviço muito bom, mas foi caro",
    	"id": 3
    }

]
Enviar comentário e nota

POST baseURL/ratings
body{
"userId": 4,
"note": "4",
"description": "Serviço muito bom, mas foi caro"
}
Resposta:
{
"userId": 4,
"note": "4",
"description": "Serviço muito bom, mas foi caro",
"id": 4
}


