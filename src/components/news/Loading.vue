<template>
    <div class="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>

<style>
.loading {
    height: 40px;
    margin: 100px auto;
    text-align: center;
}
.loading span {
    width: 8px;
    height: 100%;
    border-radius: 4px;
    background: lightgreen;
    animation: load 1s ease infinite;
    margin: 0 2px;
    display: inline-block;
}
@keyframes load {
    0%,
    100% {
        transform: scaleY(1.5);
        background: limegreen;
    }
    50% {
        transform: scaleY(1);
        background: lightblue;
    }
}
.loading span:nth-child(2){
    animation-delay: 0.2s;
}
.loading span:nth-child(2){
    animation-delay: 0.4s;
}
.loading span:nth-child(2){
    animation-delay: 0.6s;
}
.loading span:nth-child(2){
    animation-delay: 0.8s;
}
</style>