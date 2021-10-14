function ShowHideDiv() {
  var contact_type = document.getElementById("contact_type");
  var new_class = document.getElementById("new_class");
  new_class.style.display = contact_type.value == "新しいクラスの情報" ? "block" : "none";
}
var phoneNumber = document.getElementById("phone_number")
var checkedPhone = document.getElementById("checked-phone");
var email = document.getElementById("email")
var validEmail = document.getElementById("valid_email");
var confirmEmail = document.getElementById("confirm_email");
var checkedEmail = document.getElementById("checked-email");

    //To get Phone Number Validation
      phoneNumber.onkeyup = function() {
      var numbers = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            if(phoneNumber.value.match(numbers)) { 
              document.getElementById("checked-phone").style.display = "none";
            } else{ 
              document.getElementById("checked-phone").style.display = "block";
              return false;
            } 
          }  

    //To get Email Validation
  email.onkeyup = function() {
  var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(emailFormat)) { 
        document.getElementById("valid_email").style.display = "none";
    } else{ 
      document.getElementById("valid_email").style.display = "block";
      return false;
     } 
} 
  confirmEmail.onkeyup = function(){
    if(email.value !== confirmEmail.value) { 
      checkedEmail.style.display ="block";
  } else if(email.value == confirmEmail.value){ 
      checkedEmail.style.display ="none";
   }  
  }
  
var contactForm = document.getElementById("contact_form")
contactForm.addEventListener('submit',onsubmit);
function onsubmit(e){
  e.preventDefault();
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var gender1 = document.getElementById("gender-1");
  var gender2 = document.getElementById("gender-2");
  var zip1 = document.getElementById("zip1").value;
  var zip2 = document.getElementById("zip2").value;
  var addressText = document.getElementById("address-text").value;
  var phoneNumber = document.getElementById("phone_number").value;  
  var email = document.getElementById("email").value;
  var confirmEmail = document.getElementById("confirm_email").value;
  var checkedEmail = document.getElementById("checked-email");
  var level_boxText = document.getElementById("level_box").value;
  var output_levelWarp = document.getElementById("output-level_warp");
  var contact_contentText = document.getElementById("contact_content").value;
  var checkbox = document.getElementById("checkbox");

    //To get Name
      if(firstName, lastName === '') {
       window.alert('お名前を入れてください。');
        return false;
      } else {
        document.getElementById("output-name").innerHTML = firstName + " " + lastName;
      }

    //To get Gender 
      if(gender1.checked == true) {
        document.getElementById("output-gender").innerHTML = "男性";
      } else {
        document.getElementById("output-gender").innerHTML = "女性";
      }
  
    //To get Address
    document.getElementById("output-address").innerHTML = "テ"+ zip1 +" －"+ + zip2 + addressText;

    //To get Phone Number
      if(phoneNumber === '') {
        window.alert('電話番号を入れてください。');
        return false;
      } else {
        document.getElementById("output-phone").innerHTML = phoneNumber;
      } 
      
    //To get Email
      if(email !== confirmEmail) {
        checkedEmail.style.display = "block";
        return false;
      }
      if(email === '') {
        window.alert('メールアドレスを入れてください。')
        return false;
      }else {
        document.getElementById("output-email").innerHTML = email;
        document.getElementById("output-confirmEmail").innerHTML = confirmEmail;
      }
       
    //To get Contact Type
      if (document.getElementById("contact_type").value == "勉強会について") {
       document.getElementById("output-contact-type").innerHTML = "勉強会について";
      }
      
      if (document.getElementById("contact_type").value == "レクチャー用の書類提出") {
       document.getElementById("output-contact-type").innerHTML = "レクチャー用の書類提出";
      }
      
      if (document.getElementById("contact_type").value == "新しいクラスの情報")  {
        document.getElementById("level_box").style.display = "block";
       document.getElementById("output-contact-type").innerHTML = "新しいクラスの情報";
      }
      
       if (document.getElementById("contact_type").value == "個人プロジェクトの窓口")  {
        document.getElementById("output-contact-type").innerHTML = "個人プロジェクトの窓口";
      }
   
      if (document.getElementById("contact_type").value == "定例ミーティングの欠席に関する連絡")  {
       document.getElementById("output-contact-type").innerHTML = "定例ミーティングの欠席に関する連絡";
      }
     
      if (document.getElementById("contact_type").value == "それぞれのご意見")  {
       document.getElementById("output-contact-type").innerHTML = "それぞれのご意見";
      } 

  //To get Level Box
  if(level_boxText === '' && (document.getElementById("contact_type").value == "新しいクラスの情報")) {
    window.alert('レベルと資格を入れてください。');
    return false;
  } if (document.getElementById("contact_type").value != "新しいクラスの情報"){
    document.getElementById("output-level_warp").style.display = "none";
  } else  {
    document.getElementById("output-level_warp").style.display = "block";
    document.getElementById("output-level_box").innerHTML = level_boxText;
  } 

  //To get Contact Content
  document.getElementById("output-contact-content").innerHTML = contact_contentText;

  //To get Checkbox
  if(checkbox.checked == true) {
    document.getElementById("output-checkbox").innerHTML = "true";
  } else {
    document.getElementById("output-checkbox").innerHTML = "false";
  }

      var contact_dataInput, contact_dataOutput;
      contact_dataInput = document.getElementById("contact-data-input");
      contact_dataOutput = document.getElementById("contact-data-output");


      if (contact_dataOutput.style.display === "none") {
        contact_dataOutput.style.display = "block";
        contact_dataInput.style.display = "none"
      }
}

    
