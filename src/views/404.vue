<!--  -->
<template>
    <div class="wrapper">
        <div class="error-page">
            <div class="error-content">
                <h1>404</h1>
                <h4>Opps! Page not found</h4>
                <p>Sorry, the page you are looking for doesn't exist.</p>
                <div class="btns">
                    <router-link to="/home" class="btns-a">return home</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}

</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

.wrapper {
    background: red;
}

.error-page {
    position: absolute;
    top: 10%;
    left: 17%;
    right: 17%;
    bottom: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
}

.error-page .error-content {
    max-width: 600px;
    text-align: center;
}

.error-content h1 {
    font-size: 8vw;
    line-height: 1em;
}
.error-content h4 {
    margin-bottom: 20px;
    text-transform: uppercase;
    color: #000000;
    max-width: 600px;
    font-size: 2em;
}
.error-content p{
    font-size: 1.2em;
    color: #0d0d0d;
}
.error-content .btns {
    margin: 25px 0;
    display: inline-flex;
}
.error-content .btns-a {
    display: inline-block;
    margin: 0 10px;
    text-decoration: none;
    border: 2px solid #69a6ce;
    color: #69a6ce;
    font-weight: 500;
    padding: 10px 25px;
    border-radius: 25px;
    text-transform: uppercase;
    transition: all 0.3s ease;
}
.error-content .btns-a:hover {
    color: #ffffff;
    background: #69a6ce;
}
</style>
