const form=document.getElementById('employeeForm');
const empIdField=document.getElementById('empId');
const nameField=document.getElementById('fullName');
const emailField=document.getElementById('email');
const deptField=document.getElementById('department');
const dateField=document.getElementById('joiningDate');
const maleRadio=document.getElementById('male');
const femaleRadio=document.getElementById('female');
const otherRadio=document.getElementById('other');
const fullTimeck=document.getElementById('employmentTypef');
const halfTimeck=document.getElementById('employmentTypeh')



const empIdError=document.getElementById('empIdError');
const nameError=document.getElementById('nameError');
const emailError=document.getElementById('emailError');
const deptError=document.getElementById('departmentError');
const dateError=document.getElementById('dateError');
const genderError=document.getElementById('genderError');
const typeError=document.getElementById('typeError');
const successMsg=document.getElementById('successMessage');
const result=document.getElementById('result');

form.addEventListener('submit',function(e)
{
  e.preventDefault();
  let valid = true;

  if(!/^EMP\d{3}$/.test(empIdField.value.trim())){
   
    empIdError.style.display='block'; 
    valid=false;
  } 
  else{
    empIdError.style.display='none';
  }

  if(!/^[A-Za-z\s]+$/.test(nameField.value.trim())){
    nameError.style.display='block'; 
    valid=false;
  } 
  else{

    nameError.style.display='none';

  }
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value.trim())){
    emailError.style.display='block'; 
    valid=false;
  }
  
  else{
    
    emailError.style.display='none';
  }

  if(deptField.value===''){
    deptError.style.display='block';
    valid=false;
  } 
  else{

    deptError.style.display = 'none';
  }

  if(dateField.value===''){
    dateError.style.display='block';
     valid=false;
  } 
  else{
    
    dateError.style.display='none';
  }

  if(!(maleRadio.checked || femaleRadio.checked || otherRadio.checked)){
    genderError.style.display='block';
     valid=false;
  } 
  else {
    
    genderError.style.display='none';
  }
  if (fullTimeck.checked && halfTimeck.checked) {
    typeError.textContent = 'Please select only one employment type';
    typeError.style.display = 'block';
    valid = false;
  } else if (!fullTimeck.checked && !halfTimeck.checked) {
    typeError.textContent = 'Please select work type';
    typeError.style.display = 'block';
    valid = false;
  } else {
    typeError.style.display = 'none';
  }
  

  if(valid){
    successMsg.textContent='Employee registered successfully!';
    const gender=maleRadio.checked?'Male':femaleRadio.checked?'Female':'Other';
    const empType=fullTimeck.checked?'Full-Time':'Part-Time';

    result.innerHTML=`
      <h3>Registered Employee</h3>
      <p><strong>ID:</strong> ${empIdField.value.trim()}</p>
      <p><strong>Name:</strong>${nameField.value.trim()}</p>
      <p><strong>Email:</strong>${emailField.value.trim()}</p>
      <p><strong>Department:</strong>${deptField.value}</p>
      <p><strong>Joining Date:</strong>${dateField.value}</p>
      <p><strong>Gender:</strong>${gender}</p>
      <p><strong>Employment Type:</strong>${empType}</p>
    `;
    result.style.display='block';
  } else {
    successMsg.textContent='';
    result.style.display='none';
  }
});
