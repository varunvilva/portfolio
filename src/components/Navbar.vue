<template>
    <header>
        <div class="logo">
            <p><a href="/" class="logoname">Varun<span :style="{ color: '#ff4a57' }">.me</span></a></p>
        </div>
        <nav>
            <ul>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/projects">Projects</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
                <li><router-link to="/experience">Experiences</router-link></li>
                <li><a href="https://drive.google.com/file/d/1zPKrEudAXhIww2ma5XddIhbLC0VO08sr/view?usp=sharing">Resume</a></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    font-family: Georgia, 'Times New Roman', Times, serif;
    box-sizing: border-box;
}

header {
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, 0);
}

.logo {
    color: rgb(0, 0, 0); /*white*/
    font-size: 1.5rem;
    margin-left: 20px;
}

nav li {
    display: inline-block;
    list-style: none;
    padding: 0px 20px;
}

a {
    font-size: 20px;
    font-weight: 500;
    color: white;
    text-decoration: none;

}

a.logoname {
    font-size: 2rem;
    font-weight: 700;
    color: white;
    text-decoration: none;
}
a:hover {
    color: #ff4a57;
    transition: color 0.4s ease;
}
</style>