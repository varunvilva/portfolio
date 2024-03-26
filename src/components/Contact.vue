<template>
    <div class="page">
        <div class="left-container">
            <div class="card">
                <div class="title">
                    <h2 class="contactme" style="color:#ff4a57;">Contact Me</h2>
                </div>
                <div class="svgs">
                    <a :href="githubLink">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="100"
                            viewBox="0 0 30 30" style="fill:#FFFFFF;padding-right:10px">
                            <path
                                d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z">
                            </path>
                        </svg>
                    </a>
                    <a :href="twitterlink">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="100"
                            viewBox="0 0 50 50" style="fill:#FFFFFF;padding-right:10px">
                            <path
                                d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z">
                            </path>
                        </svg>
                    </a>
                    <a :href="linkedinlink">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="100"
                            viewBox="0 0 50 50" style="fill:#FFFFFF;padding-right:10px">
                            <path
                                d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z">
                            </path>
                        </svg>
                    </a>
                    <a :href="discordlink">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="100"
                            viewBox="0 0 50 50" style="fill:#FFFFFF;padding-right:10px">
                            <path
                                d="M 30.980469 7 A 1.0001 1.0001 0 0 0 30.089844 7.5859375 C 30.089844 7.5859375 29.75543 8.3287993 29.546875 9.3964844 C 27.583844 9.08239 25.937423 9 25 9 C 24.062577 9 22.416156 9.08239 20.453125 9.3964844 C 20.24457 8.3287993 19.910156 7.5859375 19.910156 7.5859375 A 1.0001 1.0001 0 0 0 18.943359 7.0019531 A 1.0001 1.0001 0 0 0 18.919922 7.0039062 C 18.919922 7.0039062 12.553656 7.42053 8.3808594 10.714844 A 1.0001 1.0001 0 0 0 8.3125 10.773438 C 7.6051397 11.441499 7.0599467 12.483658 6.390625 13.972656 C 5.7213033 15.461655 5.0156888 17.355449 4.3671875 19.498047 C 3.0701848 23.783242 2 29.054167 2 34 A 1.0001 1.0001 0 0 0 2.1347656 34.5 C 3.6151076 37.06213 6.2964412 38.611763 8.8007812 39.582031 C 11.305121 40.552299 13.620576 40.938706 14.748047 40.998047 A 1.0001 1.0001 0 0 0 15.613281 40.583984 L 18.025391 37.222656 C 19.998188 37.682914 22.316458 38 25 38 C 27.683542 38 30.001812 37.682914 31.974609 37.222656 L 34.386719 40.583984 A 1.0001 1.0001 0 0 0 35.251953 40.998047 C 36.379424 40.938707 38.694879 40.552299 41.199219 39.582031 C 43.703559 38.611763 46.384892 37.06213 47.865234 34.5 A 1.0001 1.0001 0 0 0 48 34 C 48 29.054167 46.929815 23.783242 45.632812 19.498047 C 44.984311 17.355449 44.278697 15.461655 43.609375 13.972656 C 42.940053 12.483658 42.39486 11.4415 41.6875 10.773438 A 1.0001 1.0001 0 0 0 41.619141 10.714844 C 37.446345 7.4205261 31.080078 7.0039062 31.080078 7.0039062 A 1.0001 1.0001 0 0 0 30.980469 7 z M 18.263672 9.1445312 C 18.338023 9.3538231 18.416696 9.5349501 18.482422 9.7851562 C 16.221549 10.302605 13.725951 11.138257 11.384766 12.542969 A 1.0001 1.0001 0 1 0 12.414062 14.257812 C 17.145045 11.419224 23.026984 11 25 11 C 26.973016 11 32.854955 11.419224 37.585938 14.257812 A 1.0001 1.0001 0 1 0 38.615234 12.542969 C 36.274049 11.138257 33.778451 10.302605 31.517578 9.7851562 C 31.583304 9.5349501 31.661977 9.3538231 31.736328 9.1445312 C 32.883827 9.2845319 37.303989 9.8986933 40.330078 12.255859 C 40.530966 12.454191 41.167937 13.419879 41.785156 14.792969 C 42.409585 16.182095 43.092251 18.008223 43.71875 20.078125 C 44.94318 24.123544 45.923302 29.105367 45.96875 33.673828 C 44.812422 35.508607 42.668548 36.867546 40.476562 37.716797 C 38.412289 38.516568 36.571749 38.793003 35.630859 38.884766 L 34.033203 36.658203 C 34.86819 36.390791 35.623526 36.10522 36.287109 35.816406 C 38.812028 34.717478 40.158203 33.552734 40.158203 33.552734 A 1.0001 1.0001 0 1 0 38.841797 32.046875 C 38.841797 32.046875 37.788363 32.98135 35.488281 33.982422 C 34.575634 34.379637 33.469164 34.775673 32.181641 35.113281 A 1.0001 1.0001 0 0 0 32.138672 35.125 C 30.189141 35.632527 27.818222 36 25 36 C 22.20293 36 19.847555 35.638295 17.90625 35.136719 A 1.0001 1.0001 0 0 0 17.849609 35.121094 C 17.836929 35.117786 17.823191 35.114648 17.810547 35.111328 A 1.0001 1.0001 0 0 0 17.800781 35.109375 C 16.520565 34.772709 15.420357 34.377891 14.511719 33.982422 C 12.211637 32.98135 11.158203 32.046875 11.158203 32.046875 A 1.0001 1.0001 0 0 0 10.521484 31.791016 A 1.0001 1.0001 0 0 0 9.8417969 33.552734 C 9.8417969 33.552734 11.187972 34.717478 13.712891 35.816406 C 14.376474 36.10522 15.13181 36.390791 15.966797 36.658203 L 14.369141 38.884766 C 13.428251 38.793006 11.587711 38.516568 9.5234375 37.716797 C 7.3314524 36.867546 5.1875783 35.508607 4.03125 33.673828 C 4.076698 29.105367 5.0568205 24.123544 6.28125 20.078125 C 6.9077487 18.008223 7.5904155 16.182095 8.2148438 14.792969 C 8.8320633 13.419879 9.4690336 12.454191 9.6699219 12.255859 C 12.696011 9.8986933 17.116173 9.2845319 18.263672 9.1445312 z M 18.5 21 C 17.047619 21 15.834562 21.674201 15.085938 22.636719 C 14.337312 23.599237 14 24.805556 14 26 C 14 27.194444 14.337313 28.400763 15.085938 29.363281 C 15.834561 30.325799 17.047619 31 18.5 31 C 19.952381 31 21.165439 30.325799 21.914062 29.363281 C 22.662687 28.400763 23 27.194444 23 26 C 23 24.805556 22.662688 23.599237 21.914062 22.636719 C 21.165439 21.674201 19.952381 21 18.5 21 z M 31.5 21 C 28.968421 21 27 23.315152 27 26 C 27 28.684848 28.968421 31 31.5 31 C 34.031579 31 36 28.684848 36 26 C 36 23.315152 34.031579 21 31.5 21 z M 18.5 23 C 19.380952 23 19.917896 23.325799 20.335938 23.863281 C 20.753979 24.400763 21 25.194444 21 26 C 21 26.805556 20.753979 27.599237 20.335938 28.136719 C 19.917896 28.674201 19.380952 29 18.5 29 C 17.619048 29 17.082104 28.674201 16.664062 28.136719 C 16.246021 27.599237 16 26.805556 16 26 C 16 25.194444 16.246021 24.400763 16.664062 23.863281 C 17.082104 23.325799 17.619048 23 18.5 23 z M 31.5 23 C 32.768421 23 34 24.284848 34 26 C 34 27.715152 32.768421 29 31.5 29 C 30.231579 29 29 27.715152 29 26 C 29 24.284848 30.231579 23 31.5 23 z">
                            </path>
                        </svg>
                    </a>
                    <a :href="emaillink">
                        <svg fill="#FFFFFF" height="100px" width="50px" version="1.1" id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 75.294 75.294" xml:space="preserve">
                            <g>
                                <path d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9
        c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089
        H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065
        c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016
        c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102
        c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069
        c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z" />
                            </g>
                        </svg>
                    </a>
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
                        <textarea id="message" v-model="formData.message" rows="4" required></textarea>
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
            loading: false,
            githubLink: 'https://github.com/varunvilva',
            linkedinlink: 'https://www.linkedin.com/in/varunvilva/',
            twitterlink: 'https://twitter.com/Varun_Vilva',
            discordlink: 'https://discord.com/users/851812925844094989',
            emaillink: 'mailto:varunvilva1208@gmail.com',
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
    padding-top: 20px;
    justify-content: end;
    padding-right: 20px;
    flex-direction: column;
    align-items: flex-end;
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.contactme {
    font-size: 3rem;
    margin-bottom: 5px;
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
    background-color: rgba(0, 0, 0, 0.7);
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