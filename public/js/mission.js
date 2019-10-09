const missionInsert = async () => {
    var missionTitle = document.getElementById("missionTitle");
    var missionCreator = document.getElementById("missionCreator");
    alert(missionTitle.value + ":" + missionCreator.value);
    axios.post('/mission/insert',
        {
            "title": missionTitle.value,
            "creator": missionCreator.value
        })

        .then(res => {
            console.log(res);
        });

}