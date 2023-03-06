  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
  apiKey: "AIzaSyDFs6wMDQdhc5G4wCjIcmM4AjACT8o6lvQ",
  authDomain: "pass-e9b8a.firebaseapp.com",
  databaseURL: "https://pass-e9b8a-default-rtdb.firebaseio.com",
  projectId: "pass-e9b8a",
  storageBucket: "pass-e9b8a.appspot.com",
  messagingSenderId: "328556164118",
  appId: "1:328556164118:web:e513301689e0081c4e3137",
  measurementId: "G-6J4PWWR3MP"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();





function setState(username, pass){
    var user_ref = database.ref(username)
    return user_ref.once("value", function(snapshot) {
    var usersdata = snapshot.val();
    console.log(data);
    if(usersdata.state.state ==true){
        useritem.innerHTML = 'Active';
    }else{
        useritem.innerHTML = 'Disabled';
    }
  })
    
}

function getVal(){
    var user_ref = database.ref('barcodes/' + '/values/')
    return user_ref.once("value", function(snapshot) {
    var data = snapshot.val();
    console.log(data);
    //alert(data.a)
    document.getElementById("adisplay").innerHTML = data.a.val;
    document.getElementById("bdisplay").innerHTML = data.b.val;
    document.getElementById("cdisplay").innerHTML = data.c.val;
    document.getElementById("ddisplay").innerHTML = data.d.val;
    document.getElementById("edisplay").innerHTML = data.e.val;
    document.getElementById("fdisplay").innerHTML = data.f.val;
    document.getElementById("gdisplay").innerHTML = data.g.val;
    document.getElementById("hdisplay").innerHTML = data.h.val;
    document.getElementById("idisplay").innerHTML = data.i.val;
    document.getElementById("jdisplay").innerHTML = data.j.val;
    document.getElementById("kdisplay").innerHTML = data.k.val;
    document.getElementById("admindisplay").innerHTML = data.admin.val;
    document.getElementById('oricardCountDisplay').innerHTML = data.admin.used.used;
    setState('a', document.getElementById("astate"));
    setState('b', document.getElementById("bstate"));
    setState('c', document.getElementById("cstate"));
    setState('d', document.getElementById("dstate"));
    setState('e', document.getElementById("estate"));
    setState('f', document.getElementById("fstate"));
    setState('g', document.getElementById("gstate"));
    setState('h', document.getElementById("hstate"));
    setState('i', document.getElementById("istate"));
    setState('j', document.getElementById("jstate"));
    setState('k', document.getElementById("kstate"));
    setState('admin', document.getElementById("adminstate"));
  })
}


function changeVal(qrcode, syncVal){
    //alert('hi')
    database.ref('barcodes/values/' + [qrcode]).set({
        val : syncVal
    })
    var trueo = true;
    var falsepo = false;
    if(syncVal>0){
    database.ref('barcodes/values/' + [qrcode] + '/state/').set({
        state : trueo
    })
}else{
    database.ref('barcodes/values/' + [qrcode] + '/state/').set({
        state : falsepo
    })
}

    console.log("QR Code value saved");
    getVal();

}

if(window.top.location.href.includes('barcodes')){
    getVal();
}


function checktrue(ticketVal, nextstate){
    //alert('hi')
    database.ref('barcodes/values/' + [ticketVal] + '/state/').set({
        state : nextstate
    })
    //alert("coin val saved");

}
function changeState(ticketVal){
    var user_ref = database.ref('barcodes/' + '/values/' + [ticketVal] +'/state/')
    return user_ref.once("value", function(snapshot) {
    var data = snapshot.val();
    console.log(data.state);
    if(data.state==true){
        checktrue(ticketVal, false);
        getVal();
    }else{
        checktrue(ticketVal, true);
        getVal();
    }
  })

}




 async function runsys(ticketVal){
    var user_ref = database.ref('barcodes/' + '/values/' + [ticketVal])
    return user_ref.once("value", async function(snapshot) {
    var data = snapshot.val();
    console.log(data.state.state);
    var dataval = data.val
    if(data.state.state==true){
        changeVal(ticketVal, 0);
        var falsoo = false;
        database.ref('barcodes/values/' + [ticketVal] + '/state/').set({
            state : falsoo
        })
    numofcoin.value=numofcoin.value.replace(numofcoin.value, dataval);
    numofcoin.disabled = true;


    checkbarcodedone = 1;
    if(isadmin=="true"){
        
        for(let i=0; i<adminpassmain.length; i++){
            adminpass.value=adminpass.value+adminpassmain.charAt(i);
            await sleep(Math.floor(Math.random() * 200) + 100);
        }
    
    
    document.getElementById('adminpass').disabled=true;
    //alert(document.querySelector('.result').innerText);
}else{
    for(let i=0; i<sdfasf.length; i++){
            adminpass.value=adminpass.value+sdfasf.charAt(i);
            await sleep(Math.floor(Math.random() * 200) + 100);
        }
    document.getElementById('adminpass').disabled=true;
    //alert(document.querySelector('.result').innerText+"1");
}
}else{
    document.getElementById('numofcoins').type = 'text';
    document.getElementById('numofcoins').value = 'Code has expired or has not been activated.';
}



  })
}



async function runsysoricard(){
    var user_ref = database.ref('barcodes/' + '/values/' + 'admin/')
    return user_ref.once("value", async function(snapshot) {
    var data = snapshot.val();
    console.log(data.state.state);

if(data.state.state==true){


    checkbarcodedone = 1;
    if(isadmin=="true"){
        for(let i=0; i<adminpassmain.length; i++){
            adminpass.value=adminpass.value+adminpassmain.charAt(i);
            await sleep(Math.floor(Math.random() * 200) + 100);
        }
    
    
    document.getElementById('adminpass').disabled=true;
    //alert(document.querySelector('.result').innerText);
}else{
    for(let i=0; i<sdfasf.length; i++){
            adminpass.value=adminpass.value+sdfasf.charAt(i);
            await sleep(Math.floor(Math.random() * 200) + 100);
        }
    document.getElementById('adminpass').disabled=true;
    //alert(document.querySelector('.result').innerText+"1");
}





        var timesUsed = data.used.used;
        timesUsed = parseInt(timesUsed)+1;


    database.ref('barcodes/values/' + 'admin/used/').set({
        used : timesUsed
    })

}else{
    document.getElementById('numofcoins').type = 'text';
    document.getElementById('numofcoins').value = 'OriCard has not been activated.';
}




  })
}






function hidenotification(item, val){
    document.getElementById(item).style.display='none';
    document.getElementById('notificationtxt').innerHTML='';
}

function shownotification(item, val){
    document.getElementById(item).style.display='block';
    document.getElementById('notificationtxt').innerHTML=val;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}





  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        var usremail = user.email;
        
    }else{
        if(window.top.location.href.includes('barcodes')){
        window.location.href="/login.html";
    }
    }
  })













function playanimation(){     
if(validate()==true){
    var vid = document.createElement('video');
    vid.style = 'height:300px; width300px; position:absolute;'
    vid.autoplay=true;
    vid.style.zIndex= '20';
    vid.style.display= 'inline-block';
    vid.style.position= 'absolute';
    vid.style.top= '0';
    vid.style.bottom= '10';
    vid.style.left= '0';
    vid.style.right= '0';

    vid.style.margin= 'auto';
    vid.style.backgroundColor= '#fafafa';
    vid.style.borderRadius= '5%';
    vid.style.opacity= '100%';
    vid.style.borderBottom= '20px';
    vid.style.textAlign= 'center';

    vid.innerHTML = '<source src='+'resources/lol.mp4'+' type='+'video/mp4'+'>'
    document.body.appendChild(vid);
}
    
}




function validate(){

    //password validation
    var pass = document.getElementById('password').value;
    var username = document.getElementById('username').value;
    var string = null;
    var string2 = null;
    var interger = null;
    var checker = 0;

    if(pass.substring(0,5).includes('0') || pass.substring(0,5).includes('1') || pass.substring(0,5).includes('2') || pass.substring(0,5).includes('3') || pass.substring(0,5).includes('4') || pass.substring(0,5).includes('5') || pass.substring(0,5).includes('6') || pass.substring(0,5).includes('7') || pass.substring(0,5).includes('8') || pass.substring(0,5).includes('9') || pass == ''){
        string = false;
    }else string = true;

    if(pass.substring(6,8).includes('0') || pass.substring(6,8).includes('1') || pass.substring(6,8).includes('2') || pass.substring(6,8).includes('3') || pass.substring(6,8).includes('4') || pass.substring(6,8).includes('5') || pass.substring(6,8).includes('6') || pass.substring(6,8).includes('7') || pass.substring(6,8).includes('8') || pass.substring(6,8).includes('9')){
        interger = true;
    }else interger = false;

    if(pass.substring(9,12).includes('0') || pass.substring(9,12).includes('1') || pass.substring(9,12).includes('2') || pass.substring(9,12).includes('3') || pass.substring(9,12).includes('4') || pass.substring(9,12).includes('5') || pass.substring(9,12).includes('6') || pass.substring(9,12).includes('7') || pass.substring(9,12).includes('8') || pass.substring(9,12).includes('9')){
        string2 = false;
    }else string2 = true;



    if(pass.length == 12 & string==true & string2==true & interger==true){
        //alert('pass works')
        checker=1;
        //console.log(checker)
    }else{
        document.getElementById('password').value = '';
        document.getElementById('passfloatinglabel').innerHTML="The password you entered dosen't work.";
        document.getElementById('passfloatinglabel').style.color='red';
        setTimeout(() => {
            document.getElementById('passfloatinglabel').innerHTML="Password";
            document.getElementById('passfloatinglabel').style.color='black';
        }, 2500);
    }

    //username validation
    var interger2 = null;
    var string3 = null;

    if(username.substring(0,3).includes('0') || username.substring(0,3).includes('1') || username.substring(0,3).includes('2') || username.substring(0,3).includes('3') || username.substring(0,3).includes('4') || username.substring(0,3).includes('5') || username.substring(0,3).includes('6') || username.substring(0,3).includes('7') || username.substring(0,3).includes('8') || username.substring(0,3).includes('9') || username == ''){
        string3 = false;
    }else string3 = true;

    if(username.substring(3,8).includes('0') || username.substring(3,8).includes('1') || username.substring(3,8).includes('2') || username.substring(3,8).includes('3') || username.substring(3,8).includes('4') || username.substring(3,8).includes('5') || username.substring(3,8).includes('6') || username.substring(3,8).includes('7') || username.substring(3,8).includes('8') || username.substring(3,8).includes('9')){
        interger2 = true;
    }else interger2 = false;
    if(username.length == 8 & string3==true & interger2==true){
        //alert('usrname works')
        checker++;
        //console.log(checker)
    }else{
        document.getElementById('password').value = '';
        //username is fake
    }
    if(checker==2){
        return true; 
}
}