const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
});
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

const getLove = () => {
    axios.get("http://localhost:4000/api/love/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

const getSong = () => {
    axios.get("http://localhost:4000/api/song/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

const getNumber = () => {
    axios.get("http://localhost:4000/api/number/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

fortuneBtn.addEventListener('click', getFortune)