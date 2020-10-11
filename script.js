//query select
let cardzz = document.querySelector("#cardz") 
let l2h = document.querySelector("#l2h")
let h2l = document.querySelector("#h2l")
let calz = document.querySelector("#calz")

l2h.addEventListener("click", (e)=>{
  console.log("click me")
  cardzz.innerHTML = ``
  cardzz.innerHTML = `    <!-- card 1 -->
    <div id="cardz">
                    <!-- card 4 -->
        <div class="card" id="mayo pasta" style="width: 18rem;">
          <img src="https://nuts.com/images/rackcdn/ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/33bd2f137ca869ba-yRVtb8fG-large.jpg" class="card-img-top" alt="A picture of fries">
          <div class="card-body">
            <p class="card-text">Gummies
               </p>
            <p class="card-text">Calories: 9
               </p>    
            <p class="card-text">Price: $.50
               </p>
          </div>
        </div>
             <!-- card 7 -->
        <div class="card" style="width: 18rem;">
          <img src="https://www.thespruceeats.com/thmb/e0rCKedUdPiX-xFKdfgZP5Dt0Yo=/4288x2412/smart/filters:no_upscale()/perfect-hard-boiled-eggs-995510-Hero_3-03d1b108d1ca489dad9e1f1d7fdba73f.jpg"style="width:290px;height:255px;">
          <div class="card-body">
            <p class="card-text">Boiled Egg 
               </p>
            <p class="card-text">Calories: 78 
               </p>    
            <p class="card-text">Price: $1
               </p>
          </div>
        </div>
             <!-- card 8 -->
        <div class="card" style="width: 18rem;">
          <img src="https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/Do_Apples_Affect_Diabetes_and_Blood_Sugar_Levels-732x549-thumbnail.jpg?w=756&h=567"style="width:290px;height:255px;">
          <div class="card-body">
            <p class="card-text">Apple 
               </p>
            <p class="card-text">Calories: 95 
               </p>    
            <p class="card-text">Price: $2
               </p>
          </div>
        </div>
        <!-- card 5 -->
        <div class="card" style="width: 18rem;">
          <img src="https://5i0b63wqszy3rogfx27pxco1-wpengine.netdna-ssl.com/wp-content/uploads/Basic-Hot-Dogs2-600x500.jpg" class="card-img-top" alt="A picture of fries">
          <div class="card-body">
            <p class="card-text">Hot Dog
               </p>
            <p class="card-text">Calories: 151
               </p>    
            <p class="card-text">Price: $3
               </p>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/9/5/1/WU0306H_perfect-french-fries_s4x3.jpg.rend.hgtvcom.826.620.suffix/1589465976850.jpeg" class="card-img-top" alt="A picture of fries">
          <div class="card-body">
            <p class="card-text">French Fries 
               </p>
            <p class="card-text">Calories: 365 
               </p>    
            <p class="card-text">Price: $6
               </p>      
          </div>
        </div>
        <!-- Card 3 -->
        <div class="card" style="width: 18rem;">
          <img src="https://www.dinneratthezoo.com/wp-content/uploads/2018/10/crab-stuffed-mushrooms-5.jpg"style="width:290px;height:255px;">
          <div class="card-body">
            <p class="card-text">Stuffed Mushrooms 
               </p>
            <p class="card-text">Calories: 85 
               </p>    
            <p class="card-text">Price: $7.50
               </p>
          </div>
        </div>
        <!-- card 6 -->
        <div class="card" style="width: 18rem;">
          <img src="https://detoxinista.com/wp-content/uploads/2013/05/cabbage-salad-recipe.jpg"style="width:290px;height:255px;">
          <div class="card-body">
            <p class="card-text">Salad
               </p>
            <p class="card-text">Calories: 450
               </p>    
            <p class="card-text">Price: $10
               </p>
          </div>
        </div>
        <!-- card 4 -->
        <div class="card" style="width: 18rem;">
          <img src="https://lilluna.com/wp-content/uploads/2017/10/penne-pasta-resize-3.jpg" class="card-img-top" alt="A picture of fries">
          <div class="card-body">
            <p class="card-text">Mayo Pasta
               </p>
            <p class="card-text">Calories: 90 
               </p>    
            <p class="card-text">Price: $12
               </p>
          </div>
        </div>
        <!-- card 2 -->
        <div class="card" style="width: 18rem;">
          <img src="https://thebigmansworld.com/wp-content/uploads/2020/03/2-ingredient-pizza-dough-13.jpg"style="width:290px;height:255px;">
          <div class="card-body">
            <p class="card-text">Pizza 
               </p>
            <p class="card-text">Calories: 285 
               </p>    
            <p class="card-text">Price: $16
               </p> 
          </div>
        </div>
    </div>`
})

h2l.addEventListener("click", (e)=>{
  console.log("click me")
  cardzz.innerHTML = ``
  cardzz.innerHTML = `
      <div id="cardz">
        <!-- card 2 -->
        <div class="card" style="width: 18rem;">
          <img src="https://thebigmansworld.com/wp-content/uploads/2020/03/2-ingredient-pizza-dough-13.jpg"style="width:290px;height:255px;">
          <div class="card-body">
            <p class="card-text">Pizza 
               </p>
            <p class="card-text">Calories: 285 
               </p>    
            <p class="card-text">Price: $16
               </p> 
          </div>
        </div>
        <!-- card 4 -->
        <div class="card" style="width: 18rem;">
          <img src="https://lilluna.com/wp-content/uploads/2017/10/penne-pasta-resize-3.jpg" class="card-img-top" alt="A picture of fries">
          <div class="card-body">
            <p class="card-text">Mayo Pasta
               </p>
            <p class="card-text">Calories: 90 
               </p>    
            <p class="card-text">Price: $12
               </p>
          </div>
        </div>
        <!-- card 6 -->
        <div class="card" style="width: 18rem;">
          <img src="https://detoxinista.com/wp-content/uploads/2013/05/cabbage-salad-recipe.jpg"style="width:290px;height:255px;">
          <div class="card-body">
            <p class="card-text">Salad
               </p>
            <p class="card-text">Calories: 450
               </p>    
            <p class="card-text">Price: $10
               </p>
          </div>
        </div>
        <!-- Card 3 -->
        <div class="card" style="width: 18rem;">
          <img src="https://www.dinneratthezoo.com/wp-content/uploads/2018/10/crab-stuffed-mushrooms-5.jpg"style="width:290px;height:255px;">
          <div class="card-body">
            <p class="card-text">Stuffed Mushrooms 
               </p>
            <p class="card-text">Calories: 85 
               </p>    
            <p class="card-text">Price: $7.50
               </p>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/9/5/1/WU0306H_perfect-french-fries_s4x3.jpg.rend.hgtvcom.826.620.suffix/1589465976850.jpeg" class="card-img-top" alt="A picture of fries">
          <div class="card-body">
            <p class="card-text">French Fries 
               </p>
            <p class="card-text">Calories: 365 
               </p>    
            <p class="card-text">Price: $6
               </p>      
          </div>
        </div>
        <!-- card 5 -->
        <div class="card" id="hot dog" style="width: 18rem;">
          <img src="https://5i0b63wqszy3rogfx27pxco1-wpengine.netdna-ssl.com/wp-content/uploads/Basic-Hot-Dogs2-600x500.jpg" class="card-img-top" alt="A picture of fries">
          <div class="card-body">
            <p class="card-text">Hot Dog
               </p>
            <p class="card-text">Calories: 151
               </p>    
            <p class="card-text">Price: $3
               </p>
          </div>
        </div>
             <!-- card 8 -->
        <div class="card" style="width: 18rem;">
          <img src="https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/Do_Apples_Affect_Diabetes_and_Blood_Sugar_Levels-732x549-thumbnail.jpg?w=756&h=567"style="width:290px;height:255px;">
          <div class="card-body">
            <p class="card-text">Apple 
               </p>
            <p class="card-text">Calories: 95 
               </p>    
            <p class="card-text">Price: $2
               </p>
          </div>
        </div>
             <!-- card 7 -->
        <div class="card" style="width: 18rem;">
          <img src="https://www.thespruceeats.com/thmb/e0rCKedUdPiX-xFKdfgZP5Dt0Yo=/4288x2412/smart/filters:no_upscale()/perfect-hard-boiled-eggs-995510-Hero_3-03d1b108d1ca489dad9e1f1d7fdba73f.jpg"style="width:290px;height:255px;">
          <div class="card-body">
            <p class="card-text">Boiled Egg 
               </p>
            <p class="card-text">Calories: 78 
               </p>    
            <p class="card-text">Price: $1
               </p>
          </div>
        </div>
                        <!-- card 4 -->
        <div class="card" id="mayo pasta" style="width: 18rem;">
          <img src="https://nuts.com/images/rackcdn/ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/33bd2f137ca869ba-yRVtb8fG-large.jpg" class="card-img-top" alt="A picture of fries">
          <div class="card-body">
            <p class="card-text">Gummies
               </p>
            <p class="card-text">Calories: 9
               </p>    
            <p class="card-text">Price: $.50
               </p>
          </div>
        </div>
      </div>
  `
    })

calz.addEventListener("click", (e)=>{
  console.log("click me")
  cardzz.innerHTML = ``
  cardzz.innerHTML = `
      <div id="cardz">
                      <!-- card 4 -->
        <div class="card" id="mayo pasta" style="width: 18rem;">
          <img src="https://nuts.com/images/rackcdn/ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/33bd2f137ca869ba-yRVtb8fG-large.jpg" class="card-img-top" alt="A picture of fries">
          <div class="card-body">
            <p class="card-text">Gummies
               </p>
            <p class="card-text">Calories: 9
               </p>    
            <p class="card-text">Price: $.50
               </p>
          </div>
        </div>
             <!-- card 7 -->
        <div class="card" style="width: 18rem;">
          <img src="https://www.thespruceeats.com/thmb/e0rCKedUdPiX-xFKdfgZP5Dt0Yo=/4288x2412/smart/filters:no_upscale()/perfect-hard-boiled-eggs-995510-Hero_3-03d1b108d1ca489dad9e1f1d7fdba73f.jpg"style="width:290px;height:255px;">
          <div class="card-body">
            <p class="card-text">Boiled Egg 
               </p>
            <p class="card-text">Calories: 78 
               </p>    
            <p class="card-text">Price: $1
               </p>
          </div>
        </div>
        <!-- Card 3 -->
        <div class="card" style="width: 18rem;">
          <img src="https://www.dinneratthezoo.com/wp-content/uploads/2018/10/crab-stuffed-mushrooms-5.jpg"style="width:290px;height:255px;">
          <div class="card-body">
            <p class="card-text">Stuffed Mushrooms 
               </p>
            <p class="card-text">Calories: 85 
               </p>    
            <p class="card-text">Price: $7.50
               </p>
          </div>
        </div>
        <!-- card 4 -->
        <div class="card" style="width: 18rem;">
          <img src="https://lilluna.com/wp-content/uploads/2017/10/penne-pasta-resize-3.jpg" class="card-img-top" alt="A picture of fries">
          <div class="card-body">
            <p class="card-text">Mayo Pasta
               </p>
            <p class="card-text">Calories: 90 
               </p>    
            <p class="card-text">Price: $12
               </p>
          </div>
        </div>
             <!-- card 8 -->
        <div class="card" style="width: 18rem;">
          <img src="https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/Do_Apples_Affect_Diabetes_and_Blood_Sugar_Levels-732x549-thumbnail.jpg?w=756&h=567"style="width:290px;height:255px;">
          <div class="card-body">
            <p class="card-text">Apple 
               </p>
            <p class="card-text">Calories: 95 
               </p>    
            <p class="card-text">Price: $2
               </p>
          </div>
        </div>
        <!-- card 5 -->
        <div class="card" style="width: 18rem;">
          <img src="https://5i0b63wqszy3rogfx27pxco1-wpengine.netdna-ssl.com/wp-content/uploads/Basic-Hot-Dogs2-600x500.jpg" class="card-img-top" alt="A picture of fries">
          <div class="card-body">
            <p class="card-text">Hot Dog
               </p>
            <p class="card-text">Calories: 151
               </p>    
            <p class="card-text">Price: $3
               </p>
          </div>
        </div>
        <!-- card 2 -->
        <div class="card" style="width: 18rem;">
          <img src="https://thebigmansworld.com/wp-content/uploads/2020/03/2-ingredient-pizza-dough-13.jpg"style="width:290px;height:255px;">
          <div class="card-body">
            <p class="card-text">Pizza 
               </p>
            <p class="card-text">Calories: 285 
               </p>    
            <p class="card-text">Price: $16
               </p> 
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/9/5/1/WU0306H_perfect-french-fries_s4x3.jpg.rend.hgtvcom.826.620.suffix/1589465976850.jpeg" class="card-img-top" alt="A picture of fries">
          <div class="card-body">
            <p class="card-text">French Fries 
               </p>
            <p class="card-text">Calories: 365 
               </p>    
            <p class="card-text">Price: $6
               </p>      
          </div>
        </div>
        <!-- card 6 -->
        <div class="card" style="width: 18rem;">
          <img src="https://detoxinista.com/wp-content/uploads/2013/05/cabbage-salad-recipe.jpg"style="width:290px;height:255px;">
          <div class="card-body">
            <p class="card-text">Salad
               </p>
            <p class="card-text">Calories: 450
               </p>    
            <p class="card-text">Price: $10
               </p>
          </div>
        </div>
      </div>
  `
    })


// function search() {
//   // Declare variables
// let input = document.querySelector("#userInput")
//   console.log(input)
//   cardzz.innerHTML = ``
//   cardzz.innerHTML = ` 

// }
