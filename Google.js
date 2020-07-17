var Arrs = ["Tiếng Việt",
"Afrikaans",
"‪azərbaycan‬",
"‪català‬",
"‪Čeština‬",
"‪Dansk‬",
"‪Deutsch‬",
"‪eesti‬",
"‪English(United Kingdom)‬",
"‪Español (España)‬",
"‪Español (Latinoamérica)‬",
"‪euskara‬",
"‪Filipino‬",
"‪Français (Canada)‬",
"‪Français (France)‬",
"‪galego‬",
"‪Hrvatski‬",
"‪Indonesia‬",
"‪isiZulu‬",
"‪íslenska‬",
"‪Italiano‬",
"‪Kiswahili‬",
"‪latviešu‬",
"‪lietuvių‬",
"‪magyar‬",
"‪Melayu‬",
"‪Nederlands‬",
"‪norsk‬",
"‪polski‬",
"‪Português (Brasil)‬",
"‪Português (Portugal)‬",
"română‬",
"‪Slovenčina‬",
"‪slovenščina‬",
"‪srpski (latinica)‬",
"‪Suomi‬",
"‪Svenska‬",
"‪Türkçe‬",
"‪Ελληνικά‬",
"‪български‬",
"‪монгол‬",
"‪Русский‬",
"‪српски (ћирилица)‬",
"‪ქართული‬",
"‪հայերեն‬",
"‫עברית‬‎",
"‫اردو‬‎",
"‫العربية‬‎",
"‫فارسی‬‎",
"‪አማርኛ‬",
"‪नेपाली‬",
"‪मराठी‬",
"‪हिन्दी‬",
"‪বাংলা‬",
"‪தமிழ்‬",
"‪తెలుగు‬",
"‪ಕನ್ನಡ‬",
"‪മലയാളം‬",
"‪සිංහල‬",
"‪ไทย‬",
"‪ລາວ‬",
"‪မြန်မာ‬",
"‪ខ្មែរ‬",
"‪한국어‬",
"‪中文（香港）‬",
"‪日本語‬",
"‪简体中文‬",
"‪繁體中文‬" ];

var ls=document.getElementById("Lagruad");

for(i=0;i<Arrs.length;i++){
    var op=document.createElement('option');
    op.value=Arrs[i];
    op.innerHTML=Arrs[i];
    ls.appendChild(op);
}


function Func_ShowPwd(id){    
    for(i=0;i<id.length;i++){
        var ck=document.getElementById(id[i]);
        id[i].type==="password"?id[i].type="text":id[i].type="password";  
    }         
}

function Func_AutoAddEmail(){
    var idex=document.getElementById("Email").value;
    if(idex.search("@")>0 ){
        document.getElementById("Span_Email").style.display="none";
    }else{
        document.getElementById("Span_Email").style.display="inline";
    }
}

function Func_Mess(){
    alert("Phiên bản đang cải thiện!");
}

function Func_ChgEmail(){
    var chgeml=document.getElementById("Tx_Chgemail").textContent;
    var chgeml_info=document.getElementById("Tx_Chgemail_info").textContent;

    if(chgeml==="Sử dụng địa chỉ email hiện tại của tôi"){
       document.getElementById("Tx_Chgemail").innerHTML="Tạo địa chỉ Gmail mới";
       document.getElementById("Tx_Chgemail_info").innerHTML="Bạn cần phải xác nhận Email này là của bạn";
       document.getElementById("Span_Email").style.display="none";

    }else{
        document.getElementById("Tx_Chgemail").innerHTML="Sử dụng địa chỉ email hiện tại của tôi";
        document.getElementById("Tx_Chgemail_info").innerHTML="Bạn có thể sử dụng chữ cái, số và dấu chấm";
        document.getElementById("Span_Email").style.display="inline";
       
    }
}

function Func_ChgEye(){
    var eye_op="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7aas3fHifhS4mCpkBa7XCqM76WScnoDkxaQ&usqp=CAU";
    var eye_cl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRykemhEhxTvTnw4vs9mhzDPFdJn8c8zXlJlQ&usqp=CAU";
    if(document.getElementById("eye_icon").src===eye_op ){
        document.getElementById("eye_icon").src=eye_cl;
    }else{
        document.getElementById("eye_icon").src=eye_op;
    }
}

