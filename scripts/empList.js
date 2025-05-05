function deleteRow(button){
  if(confirm("Are you sure you want to delete this row")){
    const row=button.closest("tr");
    row.remove();
  }
}
function editRow(button){
  const row=button.closest("tr");
  const rowCol=row.querySelectorAll("td");
  
  const data={
    id:rowCol[0].textContent,name:rowCol[1].textContent,email:rowCol[2].textContent,department:rowCol[3].textContent,joiningDate:rowCol[4].textContent,gender:rowCol[5].textContent,type:rowCol[6].textContent
  };

  const Nid=prompt("Edit ID: ",data.id);
  const Nname=prompt("Edit Name: ",data.name);
  const Nemail=prompt("Edit Email: ",data.email);
  const Ndepartment=prompt("Edit Department: ",data.department);
  const NjoiningData=prompt("Edit Joining Date",data.joiningDate);
  const Ngender=prompt("Edit gender: ",data.gender);
  const Ntype=prompt("Edit Employment Type: ",data.type);


  if(Nid && Nname && Nemail && Ndepartment && NjoiningData && Ngender && Ntype)
  {
    if(confirm("Are you sure you want to change this?"))
    {
       rowCol[0].textContent=Nid;
       rowCol[1].textContent=Nname;
       rowCol[2].textContent=Nemail;
       rowCol[3].textContent=Ndepartment;
       rowCol[4].textContent=NjoiningData;
       rowCol[5].textContent=Ngender;
       rowCol[6].textContent=Ntype;

    }
    else {
      alert("Edit cancelled");
    }
  }
}