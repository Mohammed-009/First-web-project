/*CONTACT.HTML PAGE*/
function check() {
    var username= document.form1.username.value;
    var email= document.form1.email.value;
    var phone= document.form1.phone.value;
    var message= document.form1.message.value;


    if(username==null || username=="" || email==null || email=="" || phone==null || phone=="" || message==null || message=="") {
        alert("Fill out all the fields!")
        return false
    }
    else if(phone.length< 6) {
        alert("Please check the length of your phone number number!")
        return false
    }   
}
/*FOOTER EMAIL*/
function validation(){
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var myemail= document.form2.email.value;
    
    if(myemail==null || myemail=="") {
        alert("Email is required!")
        return false
    }
}

/*LOG IN*/
    function Login() {

        var username= document.formget.username.value;
        var password= document.formget.password.value;
    
        if(username=="" && password=="") {
            window.alert("Username and password is required!");
            return false;
            }
    
        else if(username=="") {
            window.alert("Username is required!");
            document.formget.username.focus();
            return false;
        }
    
        else if(password=="") {
            window.alert("Password is required!");
            document.formget.password.focus();
            return false;
        }
        else if(password.length<6) {
            alert("Password must be at least 6 chacters!");
            return false;
        }
        
}

/*LOG OUT*/
function Logout() {
    var escape= confirm("Do you want to logout?");
    if(escape== true) {
        window.location= "cover.html";
        return true;
    }
    else {
        return false;
    }
}
/*PAGES*/
function valid() {
    window.alert("login!");
    return false;
}


function Read() {
    document.getElementById("proceed").innerText= "from make-ahead lunches and midweek meals to stressfree your mind."
}

/*SIGN UP*/
function Signup() {
    var first= document.form3.firstname.value;
    var last= document.form3.lastname.value;
    var email= document.form3.email.value;
    var gender= document.form3.gender.value;
    var password1= document.form3.password.value;
    var password2= document.form3.password2.value;

    if(first== null || first=="" || last== null || last=="" || email== null || email=="" ||  gender== null || gender=="" || password1=="" || password1==null || password2==null || password2=="") {
        alert("Please fill out all the fields!");
        document.form3.focus();
        return false;
    }
    else if(password1.length<6) {
        alert("Password must be at least 6 chacters!");
        return false;
    }
    else if(password1 != password2) {
        alert("Password does not match!!");
        return false;
    }
}
/*FORGET PASSWOWD*/
function Forget() {
    var oldpass= document.form4.pass1.value;
    var newpass= document.form4.pass2.value;
    var confirmpass= document.form4.pass3.value;

    if(oldpass== null || oldpass=="" || newpass==null || newpass=="" || confirmpass==null || confirmpass=="") {
        alert("Fill out all the fields!");
        return false;
    }
    else if(newpass.length<6) {
        alert("Password must be at least 6 characters long");
        document.form4.focus();
        return false;
    }
    else if(newpass != confirmpass) {
        alert("Whoops!! password does not match");
        document.form4.focus()
        return false;
    }
    }




/*ORDER TOP BUTTON*/
function Menu() {
    window.location= "menus.html";
    return true;
}


//CART
let cartItems = [];
let cartTotal = 0;

function addToCart(itemName, itemPrice) {
  cartItems.push({ name: itemName, price: itemPrice });
  cartTotal += itemPrice;
  updateCart();
}

function updateCart() {
  let cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';
  cartItems.forEach(item => {
    let li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });
  document.getElementById('cart-total').textContent = cartTotal;
}

function checkout() {
  alert(`Total amount: $${cartTotal}\nThank you for shopping with us!`);
  cartItems = [];
  cartTotal = 0;
  updateCart();
}