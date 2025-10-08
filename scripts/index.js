const hearts = document.querySelectorAll(".hart_icon");
hearts.forEach((heart) => {
    heart.addEventListener("click", function() {
        const navCount = document.getElementById("nav_count").innerText;
        const count = parseInt(navCount) + 1;
        document.getElementById("nav_count").innerText = count;
        heart.classList.toggle("fa-solid");
        heart.classList.toggle("fa-regular");
        heart.classList.toggle("text-red-500");
    });
});


// call button --- 1
document.getElementById("call_button").addEventListener("click", function(){
    alert("Calling National Emergency Service 999-")

    const navBiyog = document.getElementById("nav_biyog").innerText
    const convertNumber = parseInt(navBiyog)

    // কয়েন ২০ এর কম হলে return করে দেবে
    if (convertNumber < 20) {
        alert("“আপনার পর্যাপ্ত কয়েন নেই, কমপক্ষে ২০টি কয়েন লাগবে”")
        return
    }

    const biyog = convertNumber - 20 
    document.getElementById("nav_biyog").innerText = biyog

    const now = new Date();
    const timeSet = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    const mainContainer = document.getElementById("Activity_log1");
    const nationEmergency = document.getElementById("nation_emergency").innerText;
    const p = document.createElement("p");
    p.classList.add("flex","justify-between","items-center","bg-gray-100","px-3","py-2","rounded-md","mb-1");

    const spanText = document.createElement("span");
    spanText.textContent = nationEmergency;
    spanText.classList.add("font-semibold","text-gray-900");

    const spanTime = document.createElement("span");
    spanTime.textContent = timeSet;
    spanTime.classList.add("text-gray-500","text-sm");
    
    p.appendChild(spanText);
    p.appendChild(spanTime);
    mainContainer.appendChild(p);
})


// call button --- 2
document.getElementById("call_button2").addEventListener("click", function(){
    alert("Calling Police Emergency Service 999-")

    const navBiyog = document.getElementById("nav_biyog").innerText
    const convertNumber = parseInt(navBiyog)

    if (convertNumber < 20) {
        alert("“আপনার পর্যাপ্ত কয়েন নেই, কমপক্ষে ২০টি কয়েন লাগবে”")
        return
    }

    const biyog = convertNumber - 20 
    document.getElementById("nav_biyog").innerText = biyog

    const now = new Date();
    const timeSet = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    const mainContainer = document.getElementById("Activity_log1");
    const PoliceEmergency = document.getElementById("Police_emergency").innerText;
    const p = document.createElement("p");
    p.classList.add("flex","justify-between","items-center","bg-gray-100","px-3","py-2","rounded-md","mb-1");

    const spanText = document.createElement("span");
    spanText.textContent = PoliceEmergency;
    spanText.classList.add("font-semibold","text-gray-900");

    const spanTime = document.createElement("span");
    spanTime.textContent = timeSet;
    spanTime.classList.add("text-gray-500","text-sm");
    
    p.appendChild(spanText);
    p.appendChild(spanTime);
    mainContainer.appendChild(p);
})


// call button --- 3
document.getElementById("call_button3").addEventListener("click", function(){
    alert("Calling Fire Emergency Service 999-")

    const navBiyog = document.getElementById("nav_biyog").innerText
    const convertNumber = parseInt(navBiyog)

    if (convertNumber < 20) {
        alert("“আপনার পর্যাপ্ত কয়েন নেই, কমপক্ষে ২০টি কয়েন লাগবে”")
        return
    }

    const biyog = convertNumber - 20 
    document.getElementById("nav_biyog").innerText = biyog

    const now = new Date();
    const timeSet = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    const mainContainer = document.getElementById("Activity_log1");
    const Fireservice = document.getElementById("Fire_service").innerText;
    const p = document.createElement("p");
    p.classList.add("flex","justify-between","items-center","bg-gray-100","px-3","py-2","rounded-md","mb-1");

    const spanText = document.createElement("span");
    spanText.textContent = Fireservice;
    spanText.classList.add("font-semibold","text-gray-900");

    const spanTime = document.createElement("span");
    spanTime.textContent = timeSet;
    spanTime.classList.add("text-gray-500","text-sm");
    
    p.appendChild(spanText);
    p.appendChild(spanTime);
    mainContainer.appendChild(p);
})


// call button - 4
document.getElementById("call_button4").addEventListener("click", function(){
    alert("Calling Ambulance Service 1994-999999-")

    const navBiyog = document.getElementById("nav_biyog").innerText
    const convertNumber = parseInt(navBiyog)

    if (convertNumber < 20) {
        alert("“আপনার পর্যাপ্ত কয়েন নেই, কমপক্ষে ২০টি কয়েন লাগবে”")
        return
    }

    const biyog = convertNumber - 20 
    document.getElementById("nav_biyog").innerText = biyog

    const now = new Date();
    const timeSet = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    const mainContainer = document.getElementById("Activity_log1");
    const Ambulanced = document.getElementById("Ambulance").innerText;
    const p = document.createElement("p");
    p.classList.add("flex","justify-between","items-center","bg-gray-100","px-3","py-2","rounded-md","mb-1");

    const spanText = document.createElement("span");
    spanText.textContent = Ambulanced;
    spanText.classList.add("font-semibold","text-gray-900");

    const spanTime = document.createElement("span");
    spanTime.textContent = timeSet;
    spanTime.classList.add("text-gray-500","text-sm");
    
    p.appendChild(spanText);
    p.appendChild(spanTime);
    mainContainer.appendChild(p);
})


// call button - 5
document.getElementById("call_button5").addEventListener("click", function(){
    alert("Calling Women Helpline 10921-")

    const navBiyog = document.getElementById("nav_biyog").innerText
    const convertNumber = parseInt(navBiyog)

    if (convertNumber < 20) {
        alert("“আপনার পর্যাপ্ত কয়েন নেই, কমপক্ষে ২০টি কয়েন লাগবে”")
        return
    }

    const biyog = convertNumber - 20 
    document.getElementById("nav_biyog").innerText = biyog

    const now = new Date();
    const timeSet = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    const mainContainer = document.getElementById("Activity_log1");
    const WomenHotline = document.getElementById("Women_hotline").innerText;
    const p = document.createElement("p");
    p.classList.add("flex","justify-between","items-center","bg-gray-100","px-3","py-2","rounded-md","mb-1");

    const spanText = document.createElement("span");
    spanText.textContent = WomenHotline;
    spanText.classList.add("font-semibold","text-gray-900");

    const spanTime = document.createElement("span");
    spanTime.textContent = timeSet;
    spanTime.classList.add("text-gray-500","text-sm");
    
    p.appendChild(spanText);
    p.appendChild(spanTime);
    mainContainer.appendChild(p);
})


// call button - 6
document.getElementById("call_button6").addEventListener("click", function(){
    alert("Calling Women & Child Helpline 109-")

    const navBiyog = document.getElementById("nav_biyog").innerText
    const convertNumber = parseInt(navBiyog)

    if (convertNumber < 20) {
        alert("“আপনার পর্যাপ্ত কয়েন নেই, কমপক্ষে ২০টি কয়েন লাগবে”")
        return
    }

    const biyog = convertNumber - 20 
    document.getElementById("nav_biyog").innerText = biyog

    const now = new Date();
    const timeSet = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    const mainContainer = document.getElementById("Activity_log1");
    const WomenChilds = document.getElementById("WomenChild").innerText;
    const p = document.createElement("p");
    p.classList.add("flex","justify-between","items-center","bg-gray-100","px-3","py-2","rounded-md","mb-1");

    const spanText = document.createElement("span");
    spanText.textContent = WomenChilds;
    spanText.classList.add("font-semibold","text-gray-900");

    const spanTime = document.createElement("span");
    spanTime.textContent = timeSet;
    spanTime.classList.add("text-gray-500","text-sm");
    
    p.appendChild(spanText);
    p.appendChild(spanTime);
    mainContainer.appendChild(p);
})


// call button - 7
document.getElementById("call_button7").addEventListener("click", function(){
    alert("Calling Electricity Helpline 16216-")

    const navBiyog = document.getElementById("nav_biyog").innerText
    const convertNumber = parseInt(navBiyog)

    if (convertNumber < 20) {
        alert("“আপনার পর্যাপ্ত কয়েন নেই, কমপক্ষে ২০টি কয়েন লাগবে”")
        return
    }

    const biyog = convertNumber - 20 
    document.getElementById("nav_biyog").innerText = biyog

    const now = new Date();
    const timeSet = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    const mainContainer = document.getElementById("Activity_log1");
    const Electricitys = document.getElementById("Electricity").innerText;
    const p = document.createElement("p");
    p.classList.add("flex","justify-between","items-center","bg-gray-100","px-3","py-2","rounded-md","mb-1");

    const spanText = document.createElement("span");
    spanText.textContent = Electricitys;
    spanText.classList.add("font-semibold","text-gray-900");

    const spanTime = document.createElement("span");
    spanTime.textContent = timeSet;
    spanTime.classList.add("text-gray-500","text-sm");
    
    p.appendChild(spanText);
    p.appendChild(spanTime);
    mainContainer.appendChild(p);
})


// call button - 8
document.getElementById("call_button8").addEventListener("click", function(){
    alert("Calling Brac Helpline 16445-")

    const navBiyog = document.getElementById("nav_biyog").innerText
    const convertNumber = parseInt(navBiyog)

    if (convertNumber < 20) {
        alert("“আপনার পর্যাপ্ত কয়েন নেই, কমপক্ষে ২০টি কয়েন লাগবে”")
        return
    }

    const biyog = convertNumber - 20 
    document.getElementById("nav_biyog").innerText = biyog

    const now = new Date();
    const timeSet = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    const mainContainer = document.getElementById("Activity_log1");
    const Bracs = document.getElementById("Brac").innerText;
    const p = document.createElement("p");
    p.classList.add("flex","justify-between","items-center","bg-gray-100","px-3","py-2","rounded-md","mb-1");

    const spanText = document.createElement("span");
    spanText.textContent = Bracs;
    spanText.classList.add("font-semibold","text-gray-900");

    const spanTime = document.createElement("span");
    spanTime.textContent = timeSet;
    spanTime.classList.add("text-gray-500","text-sm");
    
    p.appendChild(spanText);
    p.appendChild(spanTime);
    mainContainer.appendChild(p);
})


// call button - 9
document.getElementById("call_button9").addEventListener("click", function(){
    alert("Calling Bangladesh Railway Helpline 163-")

    const navBiyog = document.getElementById("nav_biyog").innerText
    const convertNumber = parseInt(navBiyog)

    if (convertNumber < 20) {
        alert("“আপনার পর্যাপ্ত কয়েন নেই, কমপক্ষে ২০টি কয়েন লাগবে”")
        return
    }

    const biyog = convertNumber - 20 
    document.getElementById("nav_biyog").innerText = biyog

    const now = new Date();
    const timeSet = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    const mainContainer = document.getElementById("Activity_log1");
    const Bangladeshs = document.getElementById("Bangladesh").innerText;
    const p = document.createElement("p");
    p.classList.add("flex","justify-between","items-center","bg-gray-100","px-3","py-2","rounded-md","mb-1");

    const spanText = document.createElement("span");
    spanText.textContent = Bangladeshs;
    spanText.classList.add("font-semibold","text-gray-900");

    const spanTime = document.createElement("span");
    spanTime.textContent = timeSet;
    spanTime.classList.add("text-gray-500","text-sm");
    
    p.appendChild(spanText);
    p.appendChild(spanTime);
    mainContainer.appendChild(p);
})


// Clear History Button
document.getElementById("Clear_History").addEventListener("click", function(){
    document.getElementById('Activity_log1').innerText = "";
    document.getElementById('Activity_log2').innerText = "";
    document.getElementById('Activity_log3').innerText = "";
    document.getElementById('Activity_log4').innerText = "";
    document.getElementById('Activity_log5').innerText = "";
    document.getElementById('Activity_log6').innerText = "";
    document.getElementById('Activity_log7').innerText = "";
    document.getElementById('Activity_log8').innerText = "";
    document.getElementById('Activity_log9').innerText = "";
})
