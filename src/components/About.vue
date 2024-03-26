<template>
    <div class="about">
        <div class="left-container">
            <div class="content">
                <div class="card">
                    <h2 class="card-title" style="color: #ff4a57;">About me</h2>
                    <p class="card-content">
                        <span style="color:aqua">Hey there!</span> I'm all about machine learning and get a real kick out of diving into math and stats to power up my AI passion. You'll often catch me geeking out over core computer stuff and staying super curious about the latest tech buzz worldwide. Spent a cool six months doing backend development during my internship at ComputeLib, which was a blast. I'm totally pumped about the fast-paced tech scene and always up for tackling new challenges. Bringing together theory and real-world applications? Count me in - I'm all about making a mark in this ever-evolving tech world!
                    </p>

                </div>
            </div>
        </div>
        <div class="right-container">
            <img src="../assets/mypic.jpeg" class="rounded-image" alt="myimage"></img>
        </div>
    </div>
</template>

<script>
export default {
    // No JavaScript logic for this simplified version
};
</script>

<style scoped>
.about {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.left-container {
    grid-column: 1;
    /* Left container */
}

.right-container {
    grid-column: 2;
    /* Right container */
}

.content {
    display: flex;
    justify-content: left;
    gap: 20px;
    width: 100%;
    padding-left: 20px;
    font-size: 1.5rem;
    padding-top:75px;
}


.rounded-image {
    border-radius: 50%;
    max-width: 400px;
    padding-left: 10%;
    padding-top: 10%;
}

.card {
    padding: 20px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.7);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-title {
    font-size: 3rem;
    margin-bottom: 10px;
    color:#ff4a57,
}

.card-content {
    font-size: 1.5rem;
    color:white;
}
</style>