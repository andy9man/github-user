function pageLoad() {
    document.getElementById("btnGetGitHubName").addEventListener(
        'click', getGitHubUserDetails
    );
}

function getGitHubUserDetails () {
    console.log("in getGitHubUserDetails");
    const respGitHub = axios.get("https://api.github.com/users/" + document.getElementById("inputName").value);
    console.log(respGitHub);

    respGitHub.then(function(rtnData) {
        document.getElementById("imgGitHubImage").src = rtnData.data.avatar_url;
        document.getElementById("gitHubName").innerText = rtnData.data.name;
    });

    respGitHub.catch( (err) => {
        document.getElementById("gitHubName").innerText = "An error has occured: " + 
        err.response.status;
    })

}
window.onload = pageLoad;