let bmi = 0.0

// HTML Components that are changed
let bmi_value = document.getElementById('bmi-value')
let bmi_status = document.getElementById('bmi-status')
let diet = document.getElementById('diet')
let workout = document.getElementById('workout')

let button = document.querySelector('#bmi-btn')
button.addEventListener('click', (event) => {
    event.preventDefault();
    calculateBMI();
});

function validateData(){
    let gender = document.querySelector('input[name="gender"]:checked');
    let weight = parseInt(document.querySelector('#weight').value);
    let age = parseInt(document.querySelector('#age').value);
    let height = parseInt(document.querySelector('#height').value);
    
    let height_status=false, weight_status=false, age_status=false, gender_status=false;
    let validation=false;

    console.log(gender)

    if(gender == null){
        document.getElementById('gender_error').innerHTML = 'Please choose the gender';
    } else{
        document.getElementById('gender_error').innerHTML = '';
        gender_status = true;
    }
    
    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
    } else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status = true;
    }

    if(age === '' || isNaN(age) || (age <= 0)){
        document.getElementById('age_error').innerHTML = 'Please provide a valid age';
    } else{
        document.getElementById('age_error').innerHTML = '';
        age_status = true;
    }

    if(height=== '' || isNaN(height) || (height <= 0)){
        document.getElementById('height_error').innerHTML = 'Please provide a valid height';
    } else{
        document.getElementById('height_error').innerHTML = '';
        height_status = true;
    }
    
    if(gender_status==true && weight_status==true && age_status==true && height_status==true){
        validation=true;
    }else{
        validation=false;
    }

    return validation;
}

function calculateBMI(){

    let gender = document.querySelector('input[name="gender"]:checked');
    let weight = parseInt(document.querySelector('#weight').value);
    let age = parseInt(document.querySelector('#age').value);
    let height = parseInt(document.querySelector('#height').value);
    
    if(validateData()){
        bmi = (weight / ((height*height)/10000)).toFixed(2);

        if(bmi < 18.5){
            bmi_status.innerHTML = 'Under weight';
            bmi_value.innerHTML = bmi;
            diet.innerHTML = '<ol>' +
                '<li><strong>Increase Caloric Intake:</strong> Focus on consuming more calories than you burn. Add healthy, calorie-dense foods like nuts, seeds, avocados, whole-fat dairy, and lean proteins.</li>' +
                '<li><strong>Frequent Meals:</strong> Aim for 5-6 smaller meals throughout the day rather than 3 large ones to make it easier to consume more calories.</li>' +
                '<li><strong>Healthy Fats:</strong> Incorporate sources of healthy fats such as olive oil, fatty fish (salmon, mackerel), and nuts into your meals.</li>' +
                '<li><strong>Protein-rich Foods:</strong> Consume protein-rich foods like chicken, fish, eggs, tofu, and legumes to help build muscle mass.</li>' +
            '</ol>';
            workout.innerHTML = '<ol>' +
                '<li><strong>Strength Training:</strong> Focus on resistance exercises to build muscle mass. Include exercises like squats, deadlifts, bench presses, and rows.</li>' +
                '<li><strong>Compound Exercises:</strong> Perform compound movements that engage multiple muscle groups simultaneously.</li>' +
                '<li><strong>Progressive Overload:</strong> Gradually increase the weight or resistance you use to continuously challenge your muscles.</li>' +
                '<li><strong>Rest and Recovery:</strong> Ensure you\'re getting enough rest between workout sessions to allow your muscles to recover and grow.</li>' +
            '</ol>';
        }else if(bmi >= 18.5 && bmi < 25.0){
            bmi_status.innerHTML = 'Normal (Ideal) weight';
            bmi_value.innerHTML = bmi;
            diet.innerHTML = '<ol>' +
                '<li><strong>Balanced Diet:</strong> Maintain a balanced diet consisting of lean proteins, whole grains, fruits, vegetables, and healthy fats.</li>' +
                '<li><strong>Portion Control:</strong> Be mindful of portion sizes to prevent overeating and maintain your current weight.</li>' +
                '<li><strong>Hydration:</strong> Drink plenty of water throughout the day to stay hydrated and support overall health.</li>' +
                '<li><strong>Moderation:</strong> Enjoy treats and indulgences in moderation to maintain a healthy balance in your diet.</li>' +
            '</ol>';
            workout.innerHTML = '<ol>' +
                '<li><strong>Cardiovascular Exercise:</strong> Engage in cardiovascular activities like jogging, cycling, swimming, or brisk walking for at least 150 minutes per week.</li>' +
                '<li><strong>Strength Training:</strong> Incorporate strength training exercises 2-3 times per week to maintain muscle mass and bone density.</li>' +
                '<li><strong>Flexibility and Mobility:</strong> Include stretching and mobility exercises to improve flexibility and prevent injury.</li>' +
                '<li><strong>Variety:</strong> Keep your workouts varied and interesting by trying different types of exercises and activities.</li>' +
            '</ol>';
        } else if(bmi >= 25.0 && bmi < 30.0){
            bmi_status.innerHTML = 'Over weight';
            bmi_value.innerHTML = bmi;
            diet.innerHTML = '<ol>' +
                '<li><strong>Balanced Diet:</strong> Maintain a balanced diet consisting of lean proteins, whole grains, fruits, vegetables, and healthy fats.</li>' +
                '<li><strong>Portion Control:</strong> Be mindful of portion sizes to prevent overeating and manage your weight.</li>' +
                '<li><strong>Hydration:</strong> Drink plenty of water throughout the day to support overall health and aid in weight management.</li>' +
                '<li><strong>Moderation:</strong> Enjoy treats and indulgences in moderation while focusing on nutrient-dense foods.</li>' +
            '</ol>';
            workout.innerHTML = '<ol>' +
                '<li><strong>Cardiovascular Exercise:</strong> Engage in cardiovascular activities like jogging, cycling, swimming, or brisk walking for at least 150 minutes per week.</li>' +
                '<li><strong>Strength Training:</strong> Incorporate strength training exercises 2-3 times per week to build muscle mass and increase metabolism.</li>' +
                '<li><strong>Flexibility and Mobility:</strong> Include stretching and mobility exercises to improve flexibility and reduce the risk of injury.</li>' +
                '<li><strong>Variety:</strong> Keep your workouts varied to prevent boredom and maximize results.</li>' +
            '</ol>';
        } else {
            bmi_status.innerHTML = 'Obese';
            bmi_value.innerHTML = bmi;
            diet.innerHTML = '<ol>' +
                '<li><strong>Balanced Diet:</strong> Focus on eating a balanced diet consisting of lean proteins, whole grains, fruits, vegetables, and healthy fats.</li>' +
                '<li><strong>Portion Control:</strong> Monitor portion sizes to manage calorie intake and promote weight loss.</li>' +
                '<li><strong>Hydration:</strong> Drink plenty of water throughout the day to stay hydrated and support overall health.</li>' +
                '<li><strong>Moderation:</strong> Practice moderation when consuming high-calorie or unhealthy foods, and focus on incorporating nutrient-dense options into your diet.</li>' +
            '</ol>';
            workout.innerHTML = '<ol>' +
                '<li><strong>Cardiovascular Exercise:</strong> Engage in regular cardiovascular activities such as walking, cycling, or swimming to improve heart health and burn calories.</li>' +
                '<li><strong>Strength Training:</strong> Incorporate strength training exercises into your routine to build muscle mass and increase metabolism.</li>' +
                '<li><strong>Flexibility and Mobility:</strong> Include stretching and mobility exercises to improve flexibility, range of motion, and reduce the risk of injury.</li>' +
                '<li><strong>Consistency:</strong> Stick to a regular exercise routine and make physical activity a priority for long-term weight management and overall health.</li>' +
            '</ol>';
        }
    }
}