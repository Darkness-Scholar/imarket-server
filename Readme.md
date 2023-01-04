> Tech:

    - Typescript
    - Express
    - MySQL
    - Websocket
    - Jsonwebtoken
    - Cache
    - Queue

> Running application on local environment:

    - yarn
    - yarn dev:server

> API:
``` Typescript
    // 1. Sign in: (POST) /auth/signin
    function Example () {
        axios.post("http://localhost:8888/auth/signin", { email:"test@gmail.com", password: "123123" })
        .then(data => console.log(data))
    }
    // 2. Sign up: (POST) /auth/signup
    function Example () {
        axios.post("http://localhost:8888/auth/signup", { email:"test@gmail.com", password: "123123" })
        .then(data => console.log(data))
    }

    // 3. Get products: (GET) /product
    function Example_GetAllProduct () {
        axios.get("http://localhost:8888/product")
        .then(data => console.log(data))
    }
    function Example_GetProductById () {
        axios.get("http://localhost:8888/product?product_id=1")
        .then(data => console.log(data))
    }

    // 4. Create product: (POST) /product
    function Example () {
        axios.post("http://localhost:8888/product", {
            product_name, product_brand, product_image, product_image, product_price, product_description
        }, { headers: {
            accesstoken:"jsonwebtoken.example"
        }}).then(data => console.log(data))
    }
```