document.addEventListener("DOMContentLoaded", function() {
    const productsUrl = "products.json";
  
    function loadProducts(callback) {
      fetch(productsUrl)
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error("Ошибка загрузки данных о товарах:", error));
    }
  
    function displayProductsWarhammer(products) {
      const productGridWarhammer = document.getElementById("product-grid-warhammer");
      productGridWarhammer.innerHTML = "";
      const filteredProducts = products.filter(product => product.category === "warhammer");  
      
      filteredProducts.forEach(product => {
        const col = document.createElement("div");
        col.classList.add("col");
  
        const card = document.createElement("div");
        card.classList.add("card");
  
        const img = document.createElement("img");
        img.classList.add("card-img-top");
        img.src = product.image;
        img.alt = product.name;
  
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
  
        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = product.name;
  
        const description = document.createElement("p");
        description.classList.add("card-text");
        description.textContent = product.description;
  
        const price = document.createElement("h6");
        price.classList.add("card-price");
        price.textContent = `$${product.price}`;
  
        const addToCartBtn = document.createElement("button");
        addToCartBtn.classList.add("btn", "btn-primary");
        addToCartBtn.textContent = "Add to Cart";
  
        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(price);
        cardBody.appendChild(addToCartBtn);
  
        card.appendChild(img);
        card.appendChild(cardBody);
  
        col.appendChild(card);
        productGridWarhammer.appendChild(col);
      });
    }

    function displayProductsDnD(products) {
        const productGridDnD = document.getElementById("product-grid-dnd");
        productGridDnD.innerHTML = "";
        const filteredProducts = products.filter(product => product.category === "dnd");    
        
        filteredProducts.forEach(product => {
          const col = document.createElement("div");
          col.classList.add("col");
    
          const card = document.createElement("div");
          card.classList.add("card");
    
          const img = document.createElement("img");
          img.classList.add("card-img-top");
          img.src = product.image;
          img.alt = product.name;
    
          const cardBody = document.createElement("div");
          cardBody.classList.add("card-body");
    
          const title = document.createElement("h5");
          title.classList.add("card-title");
          title.textContent = product.name;
    
          const description = document.createElement("p");
          description.classList.add("card-text");
          description.textContent = product.description;
    
          const price = document.createElement("h6");
          price.classList.add("card-price");
          price.textContent = `$${product.price}`;
    
          const addToCartBtn = document.createElement("button");
          addToCartBtn.classList.add("btn", "btn-primary");
          addToCartBtn.textContent = "Add to Cart";
    
          cardBody.appendChild(title);
          cardBody.appendChild(description);
          cardBody.appendChild(price);
          cardBody.appendChild(addToCartBtn);
    
          card.appendChild(img);
          card.appendChild(cardBody);
    
          col.appendChild(card);
          productGridDnD.appendChild(col);
        });
      }

      function displayProductsFigures(products) {
        const productGridFigures = document.getElementById("product-grid-figures");    
        productGridFigures.innerHTML = "";    
        const filteredProducts = products.filter(product => product.category === "figures");    
        
        filteredProducts.forEach(product => {
          const col = document.createElement("div");
          col.classList.add("col");
    
          const card = document.createElement("div");
          card.classList.add("card");
    
          const img = document.createElement("img");
          img.classList.add("card-img-top");
          img.src = product.image;
          img.alt = product.name;
    
          const cardBody = document.createElement("div");
          cardBody.classList.add("card-body");
    
          const title = document.createElement("h5");
          title.classList.add("card-title");
          title.textContent = product.name;
    
          const description = document.createElement("p");
          description.classList.add("card-text");
          description.textContent = product.description;
    
          const price = document.createElement("h6");
          price.classList.add("card-price");
          price.textContent = `$${product.price}`;
    
          const addToCartBtn = document.createElement("button");
          addToCartBtn.classList.add("btn", "btn-primary");
          addToCartBtn.textContent = "Add to Cart";
    
          cardBody.appendChild(title);
          cardBody.appendChild(description);
          cardBody.appendChild(price);
          cardBody.appendChild(addToCartBtn);
    
          card.appendChild(img);
          card.appendChild(cardBody);
    
          col.appendChild(card);
          productGridFigures.appendChild(col);
        });
      }
  
    loadProducts(displayProductsWarhammer);
    loadProducts(displayProductsDnD);
    loadProducts(displayProductsFigures);
  });
  