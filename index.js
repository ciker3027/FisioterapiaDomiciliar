/*

function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_37vog3i";
  const templateID = "template_zk1r29m";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err)); 

}




// ANDERSON
// ============== EMAIL JS ====================== //


// ==== Exemplo 1 =====

const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
  e.preventDefault()
  
  // ServiceID - templateID - #form - publickkey
  emailjs.sendForm('service_37vog3i','template_zk1r29m','#contact-form','G7qtk4NYjaJ9zHP03')
}
contactForm.addEventListener('submit', sendEmail)



// ==== Exemplo 2 ===== 


document.getElementById('contact-form').addEventListener('submit', function(e) {
   e.preventDefault();
   // Preencha os detalhes do email e envie-o usando o emailJS
   emailjs.sendForm('service_37vog3i', 'template_zk1r29m', this)
      .then(function() {
         alert('Email enviado com sucesso!');
      }, function(error) {
         alert('Ocorreu um erro ao enviar o email: ', error);
      });
});


*/