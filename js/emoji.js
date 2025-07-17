function getEmojiForMood(mood) {
    const map = {
        happy: "images/joy.jpeg",
        sad: "images/sad.jpeg",
        angry: "images/angry.jpeg",
        scared: "images/scared.jpeg",
        surprised: "images/surprised.jpeg",
        envy: "images/envy.jpeg",
        tired: "images/tired.jpeg",
        fear: "images/fear.jpeg",
        anxiety: "images/anxiety.jpeg",
        love: "images/lov.jpeg",
        embarrassed: "images/embarrassed.jpeg",
        confused: "images/confused.jpeg",
        neutral: "images/neutral.jpeg",
        cry: "images/cry.jpeg",
        relaxed: "images/relaxed.jpeg",
        excited: "images/excited.jpeg",
        curious: "images/curious.jpeg",
        hopeful: "images/hopeful.jpeg",
        grateful: "images/grateful.jpeg",
        proud: "images/proud.jpeg",
        disappointed: "images/disappointed.jpeg",
        sick: "images/sick.jpeg",
        inspired: "images/inspired.jpeg",
        relieved: "images/releived.jpeg",
        lonely: "images/lonely.jpeg",
        anger: "images/Anger.png", 
        embarrassment: "images/Embarrassment.png" 
    };
    return map[mood.toLowerCase()] || null;
}

function getMoodQoute(mood){
    const quotes = {
        happy: "Happiness is not something ready-made. It comes from your own actions.",
        sad: "Sadness is but a wall between two gardens.",
        angry: "Anger is a wind which blows out the lamp of the mind.",
        scared: "Fear is only as deep as the mind allows.",
        surprised: "Surprise is the greatest gift which life can grant us.",
        envy: "Envy is ignorance, imitation is suicide.",
        tired: "Tiredness is the price of progress.",
        fear: "Fear is the mind-killer.",
        anxiety: "Anxiety is the dizziness of freedom.",
        love: "Love is composed of a single soul inhabiting two bodies.",
        emberassed: "Embarrassment is the price you pay for being honest.",
        confused: "Confusion is the welcome mat at the door of creativity.",
        neutral: "Sometimes being neutral is the best way to grow.",
        cry: "Tears are words the heart can't express.",
        relaxed: "Relaxation is the key to a peaceful mind.",
        excited: "Excitement is the spark that lights the fire of success.",
        curious: "Curiosity is the wick in the candle of learning.",
        hopeful: "Hope is being able to see that there is light despite all of the darkness.",
        grateful: "Gratitude turns what we have into enough.",
        proud: "Be proud of how far you’ve come.",
        disappointed: "Disappointment is just the action of your brain adjusting to reality.",
        sick: "Rest and self-care are so important.",
        inspired: "Inspiration exists, but it has to find you working.",
        relieved: "Relief is a short-lived emotion, but it feels so good.",
        lonely: "Loneliness expresses the pain of being alone."
    };
    return quotes[mood.toLowerCase()] || "No quote available.";
}

function getMoodColor(mood) {
    const colors = {
        happy: "#ffeb3b",
        sad: "#2196f3",
        angry: "#f44336",
        scared: "#9c27b0",
        surprised: "#3f51b5",
        envy: "#4caf50",
        tired: "#607d8b",
        fear: "#9e9e9e",
        anxiety: "#ff9800",
        love: "#e91e63",
        emberassed: "#ff4081",
        confused: "#9e9e9e",
        neutral: "#bdbdbd",
        cry: "#90caf9",
        relaxed: "#a5d6a7",
        excited: "#ffd54f",
        curious: "#ce93d8",
        hopeful: "#81d4fa",
        grateful: "#ffe082",
        proud: "#ffb300",
        disappointed: "#757575",
        sick: "#a5d6a7",
        inspired: "#ff8a65",
        relieved: "#b2dfdb",
        lonely: "#90a4ae",
        anger: "#f44336", 
        embarrassment: "#ff4081" 
    };
    return colors[mood.toLowerCase()] || "#000000";
}

function showPopupCard(mood) {
    const imgSrc = getEmojiForMood(mood);
    const quote = getMoodQoute(mood);
    const color = getMoodColor(mood);

    document.body.innerHTML = `
        <div class="emoji-display" style="top: 50%; left: 50%; transform: translate(-50%, -50%); min-height: 220px; min-width: 500px; position: fixed; display: flex; flex-direction: column; align-items: center; justify-content: center; background: ${color}; border-radius: 16px; padding: 20px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); z-index: 1000;">
            <button id="close-popup" style="position: absolute; top: 16px; right: 24px; background: none; border: none; font-size: 28px; color: white; cursor: pointer;">&times;</button>
            <div style="display: flex; width: 100%; max-width: 600px; height: 220px; background: ${color};">
                <div style="width: 50%; height: 100%; display: flex; align-items: stretch; justify-content: center; overflow: hidden;">
                    ${imgSrc ? `<img src="${imgSrc}" alt="${mood}" style="width: 100%; height: 100%; object-fit: cover;">` : ""}
                </div>
                <div style="width: 50%; height: 100%; display: flex; align-items: center; justify-content: center; background: ${color}; ">
                    <span style="color: white; font-size: 22px; text-align: center;">${quote}</span>
                </div>
            </div>
        </div>
    `;

    document.getElementById('close-popup').onclick = () => {
        location.reload();
    };
}

let input_text = document.querySelector('input[name="input-text"]');
let submit_button = document.querySelector('.submit-button');

submit_button.addEventListener('click', (event) => {
    event.preventDefault();
    let currentMood = input_text.value;
    showPopupCard(currentMood);
});