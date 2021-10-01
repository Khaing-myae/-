function ShowHideDiv() {
  var contact_type = document.getElementById("contact_type");
  var new_class = document.getElementById("new_class");
  new_class.style.display = contact_type.value == "新しいクラスの情報" ? "block" : "none";
}
var contactForm = document.getElementById("contact_form")
contactForm.addEventListener('submit',onsubmit);
function onsubmit(e){
  e.preventDefault();
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;

      if(firstName, lastName === '') {
       window.alert('お名前を入れてください。');
        return false;
      } else {
        document.getElementById("output-name").innerHTML = firstName + " " + lastName;
      }

      var gender1 = document.getElementById("gender-1");
      var gender2 = document.getElementById("gender-2");
      if(gender1.checked == true) {
        document.getElementById("output-gender").innerHTML = "男性";
      } else {
        document.getElementById("output-gender").innerHTML = "女性";
      }
  
  var zip1 = document.getElementById("zip1").value;
  var zip2 = document.getElementById("zip2").value;
  var addressText = document.getElementById("address-text").value;
    document.getElementById("output-address").innerHTML = "テ"+ zip1 +" －"+ + zip2 + addressText;

  var phoneNumber = document.getElementById("phone_number").value;    
      if(phoneNumber === '') {
        window.alert('電話番号を入れてください。');
        return false;
      } else {
        document.getElementById("output-phone").innerHTML = phoneNumber;
      }

  var email = document.getElementById("email").value;
  var confirmEmail = document.getElementById("confirm_email").value;
  var checkedEmail = document.getElementById("checked-email");
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

  var level_boxText = document.getElementById("level_box").value;
  if(level_boxText === '') {
    window.alert('レベルと資格を入れてください。');
    return false;
  } else {
    document.getElementById("output-level_box").innerHTML = level_boxText;
  }

  var contact_contentText = document.getElementById("contact_content").value;
  document.getElementById("output-contact-content").innerHTML = contact_contentText;

  var checkbox = document.getElementById("checkbox");
  if(checkbox.checked == true) {
    document.getElementById("output-checkbox").innerHTML = "true";
  } else {
    document.getElementById("output-checkbox").innerHTML = "false";
  }

      var x, y;
      x = document.getElementById("contact-data-input");
      y = document.getElementById("contact-data-output");


      if (y.style.display === "none") {
        y.style.display = "block";
        x.style.display = "none"
      }
}

    
