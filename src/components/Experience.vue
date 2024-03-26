<template>
    <div class="about">
        <h2 class="card-title" style="color: #ff4a57;">Experiences</h2>
        <div class="left-container">
            <div class="content">
                <div class="card">
                    
                    <ul>
                        <li v-for="(experience, index) in leftExperiences" :key="index">
                            <h3 style="color:#ff4a57">{{ experience.title }}</h3>
                            <p>{{ experience.description }}</p>
                            <p>{{ experience.time }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="right-container">
            <div class="content">
                <div class="card">
                    <ul>
                        <li v-for="(experience, index) in rightExperiences" :key="index">
                            <h3 style="color:#ff4a57">{{ experience.title }}</h3>
                            <p>{{ experience.description }}</p>
                            <p>{{ experience.time }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Experience',
    data() {
        return {
            experiences: [
                { title: 'Project Collaborator - ISRO Safe Ship Navigation', description: "built the whole backend of the app using Flask in Python. I also worked on important stuff like the A* algorithm. Plus, I used interpolation and cost function tricks to make things run better.", time: "May '23 - Present" },
                { title: 'Intern - ComputeLib', description: ' Created small, specialized services for an online store to make it work smoothly. These services helped translate data between different platforms, making sure everything synced up correctly. ', time: "Oct '23 - Mar '24" },
                { title: 'Teaching Assistant - Linear Algebra', description: "Tutored first year students with Linear Algebra and core concepts required for further courses. Learnt teaching, managing skills form this experience.", time: "Jan'24 - Present" },
                { title: 'Towards Explainability of Federated Learning', description: 'Understanding Federated setup on different scenarios and eplaining with conversational memory elements.', time: "Oct'23 - Present" },
            ],
        };
    },
    computed: {
        leftExperiences() {
            // Return the first three experiences
            return this.experiences.slice(0, 2);
        },
        rightExperiences() {
            // Return the remaining experiences after the first three
            return this.experiences.slice(2);
        }
    }
}
</script>

<style scoped>
.about {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.left-container {
    grid-column: 1;
    height: 700px;
    /* Left container */
}

.right-container {
    grid-column: 2;
    padding-left: 2px;
    height: 900px;
    padding-right:2px;
    /* Right container */
}

.content {
    display: flex;
    justify-content: left;
    gap: 20px;
    width: 100%;
    padding-left: 20px;
    font-size: 1.5rem;
    padding-top: 30px;
    color: white;
    height:530px;
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
    margin-bottom: 0px;
    color: #ff4a57;
    padding-left: 20px;
}

.card-content {
    font-size: 1.5rem;
    color: white;
}
</style>
