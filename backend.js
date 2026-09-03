let savedData = [];

function loadStoredData() {
    const stored = localStorage.getItem("platformData");
    if (stored) {
        savedData = JSON.parse(stored);
    }
    renderData();
}

function saveData() {
    const input = document.getElementById("inputText");
    const text = input.value.trim();

    if (text === "") {
        alert("စာသားတစ်ခုခုရေးပါဦး!");
        return;
    }

    savedData.push({
        content: text,
        time: new Date().toLocaleString("my-MM")
    });

    localStorage.setItem("platformData", JSON.stringify(savedData));

    input.value = "";
    renderData();
}

function renderData() {
    const list = document.getElementById("dataList");

    if (savedData.length === 0) {
        list.innerHTML = '<p class="empty">အချက်အလက် မရှိသေးပါ</p>';
        return;
    }

    list.innerHTML = "";
    savedData.forEach((item, index) => {
        list.innerHTML += `
            <div class="data-item">
                ${index + 1}. ${item.content}
                <br><small style="color:#718096">${item.time}</small>
            </div>
        `;
    });
}

loadStoredData();
