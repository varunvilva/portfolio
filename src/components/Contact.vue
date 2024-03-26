<template>
    <div class="page">
        <div class="left-container">
            <div class="card">
                <div class="title">
                    <h2 class="contactme" style="color:#ff4a57;">Contact Me</h2>
                </div>
                <form @submit.prevent="submitForm">
                    <div class="text">
                        <label for="email">Email:</label><br>
                        <input type="email" id="email" v-model="formData.email" required>
                    </div>
                    <div class="text">
                        <label for="subject">Subject:</label><br>
                        <input type="text" id="subject" v-model="formData.subject" required>
                    </div>
                    <div class="text">
                        <label for="message">Message:</label><br>
                        <textarea id="message" v-model="formData.message" rows="6" required></textarea>
                    </div>
                    <button type="submit" :class="{ loading: loading }" style="font-size: 1rem" :disabled="loading">
                        <span v-if="!loading">Submit</span>
                        <span v-else>Loading...</span>
                    </button>
                </form>
                <p v-if="submissionError">{{ submissionError }}</p>
                <p v-if="submissionSuccess">Message sent successfully!</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                email: '',
                subject: '',
                message: ''
            },
            submissionError: '',
            submissionSuccess: false,
            loading: false
        };
    },
    methods: {
        submitForm() {
            this.loading = true;
            fetch('https://formspree.io/f/xrgnybgv', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.formData)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    this.submissionSuccess = true;
                    this.submissionError = '';
                    this.resetForm();
                })
                .catch(error => {
                    console.error('There was a problem with your fetch operation:', error);
                    this.submissionError = 'Failed to send message. Please try again later.';
                }).finally(() => {
                    this.loading = false; // Set loading back to false when the form submission is completed
                });
        },
        resetForm() {
            this.formData.email = '';
            this.formData.subject = '';
            this.formData.message = '';
        }
    }
};
</script>

<style scoped>
.page {
    padding-top: 50px;
    justify-content: end;
    padding-right: 20px;
    flex-direction: column;
    align-items: flex-end;
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.contactme {
    font-size: 3rem;
    margin-bottom: 10px;
    color: #ff4a57,
}

.left-container {
    /* grid-column: 1; */
    padding-left: 20px;
    /* Left container */
}

.card {
    padding: 20px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.text {
    color: #ff4a57;
    font-size: 2rem;
    margin-bottom: 20px;
    padding-right: 20px;
    font-family: inherit;
}

form {
    display: flex;
    flex-direction: column;
}

input[type="email"],
input[type="text"],
textarea {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    /* Change background color */
    border: 1px solid #ccc;
    /* Add border for better contrast */
    padding: 10px;
    /* Add padding for better appearance */
    color: #fff;
    /* Set text color */
    font-family: inherit;
}

button {
    background-color: #ff4a57;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #e03647;
}

button.loading::after {
    content: "";
    border: 2px solid #fff;
    border-radius: 50%;
    border-top: 2px solid transparent;
    width: 16px;
    height: 16px;
    display: inline-block;
    animation: spin 1s linear infinite;
    margin-left: 5px;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>