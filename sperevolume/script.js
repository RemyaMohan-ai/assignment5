function calculate(){
    let r= document.getElementById("radius").value;
    let result=4/3*3.14*r*r*r
    document.getElementById("volume").value=result;
}