let product={
    pid:101,
    pimage:"",
    pname:"iphone",
    pprice:700000,
    qty:1
}
let htmlCode=`<nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
        <a href="#" class="navbar-brand "> Amazon</a>
    </div>
    </nav>
    <div class="container-fluid mt-3">
        <div class="row">
            <div class="col">
                <h1>Cart Module:-</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur veniam excepturi distinctio sequi, repudiandae atque? Sunt tempore totam debitis praesentium optio, minus impedit suscipit quisquam corporis doloremque est labore autem.</p>
        <button type="button" class="btn btn-secondary">Check out</button>
            </div>
        </div>
    </div>
    <div class="container-fluid mt-2">
        <div class="row">
            <div class="col">
                
                <table class="table text-center">
                    <thead class="table-dark">
                        <th>pid</th>
                        <th>Pimage</th>
                        <th>Pname</th>
                        <th>Pprice</th>
                        <th>Quantity</th>
                        <th> Total Price</th>
                    </thead>
                    <tbody>
                        <td>${product.pid}</td>
                        <td>${product.pimage}</td>
                        <td>${product.pname}</td>
                        <td>${product.pprice}</td>
                        <td ><i class="bi bi-dash-circle me-2 btn1"></i><span id="button">${product.qty}</span><i class="bi bi-plus-circle ms-2 btn2"></i></td>
                        <td><span id="price">70000</span></td>
                    </tbody>
                </table>

            </div>
        </div>
    </div>`
let divTag=document.querySelector('#display-tag')
divTag.innerHTML=htmlCode
let qtyBtn=document.querySelector('#button');
let increaseBtn=document.querySelector('.btn2')
let decreaseBtn=document.querySelector('.btn1')
let price=document.querySelector('#price')
let count=0
function increase(){
   count++
    qtyBtn.textContent=count;
    price.textContent=count*product.pprice;
}
function decrease(){
    if(count>1){
        count--
        qtyBtn.textContent=count;
        price.textContent=count*product.pprice;
        
    }

}
increaseBtn.addEventListener('click',increase)
decreaseBtn.addEventListener('click',decrease)