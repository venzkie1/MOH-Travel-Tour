function openChat() {
    document.getElementById('chatModal').style.display = 'block';
    document.querySelector('.map-container').style.display = 'block';
}

function closeChat() {
    document.getElementById('chatModal').style.display = 'none';
    document.querySelector('.map-container').style.display = 'none';
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // generate the email parameters
    const serviceID = 'service_94ftlk8'; 
    const templateID = 'template_xqrwb6d'; 
    const templateParams = {
       name: document.getElementById('name').value,
       email: document.getElementById('email').value,
       mobile: document.getElementById('mobile').value,
       subject: document.getElementById('subject').value,
       message: document.getElementById('message').value
    };
    // send the email
    emailjs.send(serviceID, templateID, templateParams)
       .then(function(response) {
          alert('Your message has been sent!');
       }, function(error) {
          alert('Error: ' + error.status + ' ' + error.text);
       });
 });