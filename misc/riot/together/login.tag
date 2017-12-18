<login>

    <h1>Welcome to the login!</h1>

    <input name="email" type="text" placeholder="e-mail address" />

    <input name="password" type="password" placeholder="password..." />

    <button onclick="{ click }">Login</button>

    <style scoped>
        :scope {
            display: block;
            background: aliceblue;
        }
        
        

    </style>

    <script>
        click(e) {
            console.log(this.email.value);
            console.log(this.password.value);
            riot.route('/');
        }
    </script>
</login>