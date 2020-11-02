$(document).ready(function(){
    const loginForm = $('form.loginform')
    const emailInput = $('input#email-input')
    const passwordInput = $('input#password-input')
    const navbar = $('nav.navbar')

    loginForm.on('submit', function(event){
        event.preventDefault()
        console.log('Hello')
        const userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        }
        console.log(userData)
        if (!userData.email || !userData.password){
            return
        }
        loginUser(userData.email, userData.password)
        emailInput.val('')
        passwordInput.val('')
    })

    function loginUser(email, password){
        $.post('/api/login', {
            email: email,
            password: password
        }).then(function(){
            window.location.replace('/bids')
            console.log('no errors')
            const newLocal = `
            <a href="/" class="navbar-brand mb-0 h1">Fandomzzz</a>
            <div class="nav-search-field ">
                <div class="input-group">
                    <input id = "searchBox" type="text" class="form-control" placeholder="Search Item" size="50" maxlength="300" aria-label="Search for anything" placeholder="Search for anything">
                    <button class="input-group-text" id="searchBtn">
                    <i class="fas fa-search"></i>
                </div>
            </div>
            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <a class="nav-link" href="/bids">All Products</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/bids">Add Product</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/login">Logout</a>
                </li>
                <li class="nav-item" id = "cart">
        
                    <a href="./cart.html" class="nav-link navbar-link-2 waves-effect">
                        <span id = "cartCounter"class="badge badge-pill red">0</span>
                        <i class="fas fa-shopping-cart pl-0"></i>
                    </a>
                        
                </li>
                <li class="nav-item pl-2 mb-2 mb-md-0" id="usericon">
                    <a href="/signup"><i class="far fa-user-circle"></i></a>
                </li>
            </ul>
            `
            navbar.html(newLocal)

        }).catch(function(err){
            console.log(err)
        })
    }

})